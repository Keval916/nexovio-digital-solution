import { notFound } from "next/navigation";
import { getCaseStudyBySlug, CASE_STUDIES } from "@/src/data/case-studies";
import { generatePageMetadata } from "@/src/lib/seo";
import CaseStudyDetail from "@/src/views/case-studies/CaseStudyDetail";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export function generateMetadata({ params }: CaseStudyPageProps) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return generatePageMetadata({
    title: study.seoTitle,
    description: study.seoDescription,
    keywords: [
      study.industry,
      ...study.services,
      ...study.techStack,
      "Case Study",
      "Technical Architecture",
      "Nexovio Digital Solutions",
    ],
    path: `/case-studies/${study.slug}`,
  });
}

export default function Page({ params }: CaseStudyPageProps) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) {
    notFound();
  }

  return <CaseStudyDetail params={params} />;
}
