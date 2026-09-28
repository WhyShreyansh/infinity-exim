import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, ArrowUpRight } from "lucide-react";
import { ARTICLES_DATA } from "@/data/insights";
import { EnquiryCTA } from "@/components/sections/EnquiryCTA";

interface InsightDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ARTICLES_DATA.map((art) => ({
    slug: art.slug
  }));
}

export async function generateMetadata({ params }: InsightDetailProps) {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | INFINITY EXIM Insights`,
    description: article.excerpt
  };
}

export default async function ArticleDetailPage({ params }: InsightDetailProps) {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="space-y-0 bg-[#F7F5EF] text-[#102A43]">
      
      {/* Breadcrumb Header */}
      <section className="bg-[#102A43] text-[#F7F5EF] pt-8 pb-4 border-b border-[#1E3A5F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[#D8C9B5]">
            <Link href="/insights" className="hover:text-white flex items-center space-x-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>INSIGHTS</span>
            </Link>
            <span>/</span>
            <span className="uppercase text-[#B87952]">{article.category}</span>
          </div>
        </div>
      </section>

      {/* Article Container */}
      <article className="py-12 sm:py-20 bg-[#F7F5EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-4 border-b border-[#D8C9B5]/60 pb-8">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold">
              {article.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102A43] leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center space-x-6 text-xs font-mono text-[#64748B]">
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 text-[#B87952]" />
                <span>{article.date}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-[#B87952]" />
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg font-medium text-[#102A43] leading-relaxed italic border-l-4 border-[#B87952] pl-4 py-1">
            {article.excerpt}
          </p>

          <div className="space-y-6 text-sm sm:text-base text-[#64748B] leading-relaxed">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-8 border-t border-[#D8C9B5]/60 flex items-center justify-between">
            <Link
              href="/insights"
              className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#102A43] hover:text-[#B87952]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>

            <Link
              href="/request-a-quote"
              className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#B87952] hover:text-[#9A603C]"
            >
              <span>Discuss Sourcing Requirement</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </article>

      <EnquiryCTA />
    </div>
  );
}
