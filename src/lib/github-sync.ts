/**
 * Helper to commit updated files to GitHub repository if GITHUB_TOKEN is configured.
 * This enables serverless environments (like Vercel) to permanently persist CMS changes
 * directly into the Git repository and trigger automatic deployments.
 */
export async function syncFileToGitHub(
  filePathInRepo: string, // e.g. "src/data/blog-posts.json"
  content: string, // UTF-8 text or Base64 string
  commitMessage: string,
  isBase64Content: boolean = false
): Promise<{ success: boolean; message?: string }> {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (!token) {
    return { success: false, message: "GITHUB_TOKEN not configured" };
  }

  const repo = process.env.GITHUB_REPO || "Keval916/nexovio-digital-solution";
  const branch = process.env.GITHUB_BRANCH || "main";
  const apiUrl = `https://api.github.com/repos/${repo}/contents/${filePathInRepo}`;

  try {
    // 1. Check if the file exists on GitHub to get its SHA
    let sha: string | undefined;
    const getRes = await fetch(`${apiUrl}?ref=${branch}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Nexovio-CMS",
      },
      cache: "no-store",
    });

    if (getRes.ok) {
      const data = await getRes.json();
      sha = data.sha;
    }

    const base64Data = isBase64Content
      ? content
      : Buffer.from(content, "utf-8").toString("base64");

    // 2. Put the new content (commit)
    const putRes = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
        "User-Agent": "Nexovio-CMS",
      },
      body: JSON.stringify({
        message: commitMessage,
        content: base64Data,
        branch,
        ...(sha ? { sha } : {}),
      }),
    });

    if (putRes.ok) {
      console.log(`[GitHub Sync] Successfully committed ${filePathInRepo} to ${repo}:${branch}`);
      return { success: true };
    } else {
      const errText = await putRes.text();
      console.error("[GitHub Sync Error]", errText);
      return { success: false, message: errText };
    }
  } catch (error: any) {
    console.error("[GitHub Sync Exception]", error);
    return { success: false, message: error?.message || "Network error" };
  }
}
