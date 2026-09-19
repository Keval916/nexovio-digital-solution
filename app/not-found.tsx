import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan">
          Error 404
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.15]">
          <span className="text-white">Page</span>{" "}
          <span className="bg-gradient-brand bg-clip-text text-transparent">Not Found</span>
        </h1>

        <p className="text-base text-muted leading-relaxed">
          The requested address could not be located on the Nexovio Digital Solutions platform. The page may have been moved, renamed, or temporarily archived.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <Button
            href="/"
            variant="primary"
            size="md"
            trackingName="404_home"
            trackingLocation="404_page"
            icon={<Home className="w-4 h-4" />}
          >
            Return to Homepage
          </Button>
          <Button
            href="/services"
            variant="secondary"
            size="md"
            trackingName="404_services"
            trackingLocation="404_page"
            icon={<Compass className="w-4 h-4" />}
          >
            Explore Services
          </Button>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-xs text-muted">
          <Link href="/portfolio" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5" />
            <span>View Portfolio</span>
          </Link>
          <Link href="/contact" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
