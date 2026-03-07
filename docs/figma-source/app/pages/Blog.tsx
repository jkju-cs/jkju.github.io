import { Link } from "react-router";
import { Calendar, Tag, ArrowRight } from "lucide-react";

interface BlogPostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  category: "Research" | "Tutorial" | "News" | "Reflection";
}

export function Blog() {
  const blogPosts: BlogPostData[] = [
    {
      slug: "ai-literacy-prediction",
      title: "AI-Based Literacy Score Prediction Model Launch",
      date: "February 15, 2026",
      excerpt: "Excited to announce the launch of our AI-based visualization literacy assessment tool. This interactive model helps researchers and practitioners understand their visualization expertise level through a series of carefully designed tests.",
      tags: ["Machine Learning", "Visualization Literacy", "Tool"],
      category: "News"
    },
    {
      slug: "acm-iui-2026",
      title: "Paper Accepted to ACM IUI 2026: Decision-Making and Critical Thinking",
      date: "January 20, 2026",
      excerpt: "Our paper on understanding how visualizations support decision-making and critical thinking has been accepted to ACM IUI 2026. We'll be presenting our findings in Paphos, Cyprus this spring.",
      tags: ["Publication", "Decision Making", "HCI"],
      category: "Research"
    },
    {
      slug: "ieee-vis-2025",
      title: "IEEE VIS 2025: Visualization Literacy and Visual Attention",
      date: "October 10, 2025",
      excerpt: "Thrilled to share that our research on the relationship between visualization literacy and visual attention patterns will be presented at IEEE VIS 2025 in Vienna, Austria.",
      tags: ["Publication", "Eye-tracking", "Visualization"],
      category: "Research"
    },
    {
      slug: "tableau-internship-reflection",
      title: "Summer at Tableau Research: Reflections and Learnings",
      date: "August 25, 2025",
      excerpt: "Reflecting on an incredible summer internship at Tableau Research @ Salesforce. I had the opportunity to work with amazing researchers and explore new directions in data visualization.",
      tags: ["Internship", "Industry Research", "Career"],
      category: "Reflection"
    },
    {
      slug: "getting-started-with-eyetracking",
      title: "Getting Started with Eye-Tracking Research in HCI",
      date: "July 5, 2025",
      excerpt: "A comprehensive guide for researchers interested in incorporating eye-tracking methodologies into their HCI and visualization studies. Covers equipment, software, and best practices.",
      tags: ["Tutorial", "Eye-tracking", "Methods"],
      category: "Tutorial"
    },
    {
      slug: "vis-research-trends-2025",
      title: "Emerging Trends in Visualization Research for 2025",
      date: "June 12, 2025",
      excerpt: "An analysis of emerging themes and directions in visualization research based on recent conferences and publications. What should we be paying attention to?",
      tags: ["Research", "Trends", "Community"],
      category: "Reflection"
    }
  ];

  const categories = ["All", "Research", "Tutorial", "News", "Reflection"];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl mb-4 dark:text-white">Blog</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Thoughts on visualization research, tutorials, and updates from my PhD journey.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
              category === "All" 
                ? "bg-[#1e3a8a] dark:bg-[#fbbf24] text-white dark:text-[#92400e]" 
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <span className={`px-3 py-1 text-xs rounded-full ${
                post.category === "News" ? "bg-[#1e3a8a] dark:bg-[#fbbf24] text-white dark:text-[#92400e]" :
                post.category === "Research" ? "bg-[#2563eb] dark:bg-[#1e3a8a] text-white" :
                post.category === "Tutorial" ? "bg-[#fbbf24] dark:bg-[#2563eb] text-[#92400e] dark:text-white" :
                "bg-[#dbeafe] dark:bg-[#374151] text-[#1e3a8a] dark:text-[#fbbf24]"
              }`}>
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
            </div>

            <Link to={`/blog/${post.slug}`} className="group">
              <h2 className="text-2xl mb-3 group-hover:text-[#1e3a8a] dark:group-hover:text-[#fbbf24] transition-colors dark:text-white">
                {post.title}
              </h2>
            </Link>

            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {post.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded ${
                      index % 2 === 0 
                        ? "bg-[#dbeafe] dark:bg-[#1e3a8a] text-[#1e3a8a] dark:text-white" 
                        : "bg-[#fef3c7] dark:bg-[#fbbf24] text-[#92400e]"
                    }`}
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to={`/blog/${post.slug}`}
                className="flex items-center gap-2 text-[#1e3a8a] dark:text-[#fbbf24] hover:gap-3 transition-all text-sm font-medium"
              >
                Read more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-12">
        <button className="px-4 py-2 bg-[#1e3a8a] dark:bg-[#fbbf24] text-white dark:text-[#92400e] rounded-lg">1</button>
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">2</button>
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">3</button>
      </div>
    </div>
  );
}
