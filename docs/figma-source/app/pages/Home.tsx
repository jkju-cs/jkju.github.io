import { Link } from "react-router";
import { Mail, Linkedin, Github, Calendar, ExternalLink, GraduationCap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface NewsItem {
  date: string;
  content: string;
  link?: string;
}

export function Home() {
  const researchInterests = [
    "Data Visualization",
    "Human-AI Interaction",
    "Eye-tracking",
    "Decision Support Systems",
    "Cognitive Science"
  ];

  const newsItems: NewsItem[] = [
    {
      date: "February 2026",
      content: "The AI-Based Literacy Score Prediction Model is now open! Visit the Literacy Test page to check whether you are expert or novice in visualization literacy.",
      link: "/blog/ai-literacy-prediction"
    },
    {
      date: "January 2026",
      content: "Our paper on decision-making and critical thinking was accepted to ACM IUI 2026! See you in Paphos!",
      link: "/blog/acm-iui-2026"
    },
    {
      date: "October 2025",
      content: "Our paper on visualization literacy and visual attention was accepted to IEEE VIS 2025! See you all in Vienna!",
      link: "/blog/ieee-vis-2025"
    }
  ];

  const blogPosts = [
    {
      slug: "ai-literacy-prediction",
      title: "AI-Based Literacy Score Prediction Model Launch",
      date: "February 15, 2026",
      category: "News" as const,
    },
    {
      slug: "tableau-internship-reflection",
      title: "Summer at Tableau Research: Reflections and Learnings",
      date: "August 25, 2025",
      category: "Reflection" as const,
    },
    {
      slug: "getting-started-with-eyetracking",
      title: "Getting Started with Eye-Tracking Research in HCI",
      date: "July 5, 2025",
      category: "Tutorial" as const,
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 mb-16">
        {/* Profile Image */}
        <div className="w-[300px] h-[360px] rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1681070909604-f555aa006564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbGUlMjBwaGQlMjBzdHVkZW50JTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyNjI1MDUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bio Section */}
        <div className="flex flex-col">
          <h1 className="text-4xl mb-2 dark:text-white">Jangkyu Ju</h1>
          <p className="text-xl text-[#1e3a8a] dark:text-[#fbbf24] mb-6">Visualization Lab | Georgia Tech</p>
          
          <div className="space-y-4 text-gray-800 dark:text-gray-200 mb-6">
            <p>
              My research field is Data Visualization and Human-Computer Interaction,
              understanding and supporting how humans perceive and interact with data. I try to
              combine cognitive science and computing to better support human-AI interaction.
            </p>
            <p>
              I'm currently a 2nd-year PhD student advised by{" "}
              <a href="#" className="text-[#1e3a8a] dark:text-[#fbbf24] hover:underline">Cindy Xiong Bearfield</a>. 
              I've also interned at{" "}
              <a href="#" className="text-[#1e3a8a] dark:text-[#fbbf24] hover:underline">Tableau Research @ Salesforce</a>{" "}
              <span className="inline-flex items-center gap-1">
                <ExternalLink className="w-3 h-3" />
              </span>{" "}
              in Summer 2025, where I worked with{" "}
              <a href="#" className="text-[#1e3a8a] dark:text-[#fbbf24] hover:underline">Srishti Palani</a> and{" "}
              <a href="#" className="text-[#1e3a8a] dark:text-[#fbbf24] hover:underline">Arjun Srinivasan</a>.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <a href="mailto:your.email@gatech.edu" className="p-2 bg-[#dbeafe] dark:bg-[#1e3a8a] rounded-lg hover:bg-[#bfdbfe] dark:hover:bg-[#172554] transition-colors">
              <Mail className="w-5 h-5 text-[#1e3a8a] dark:text-white" />
            </a>
            <a href="https://scholar.google.com/citations?user=YOUR_USER_ID" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#dbeafe] dark:bg-[#1e3a8a] rounded-lg hover:bg-[#bfdbfe] dark:hover:bg-[#172554] transition-colors">
              <GraduationCap className="w-5 h-5 text-[#1e3a8a] dark:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#dbeafe] dark:bg-[#1e3a8a] rounded-lg hover:bg-[#bfdbfe] dark:hover:bg-[#172554] transition-colors">
              <Linkedin className="w-5 h-5 text-[#1e3a8a] dark:text-white" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#dbeafe] dark:bg-[#1e3a8a] rounded-lg hover:bg-[#bfdbfe] dark:hover:bg-[#172554] transition-colors">
              <Github className="w-5 h-5 text-[#1e3a8a] dark:text-white" />
            </a>
          </div>

          {/* Research Interests */}
          <div>
            <h3 className="flex items-center gap-2 text-lg mb-3 dark:text-white">
              <span className="text-xl">✨</span>
              <span>Research Interests</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 rounded-full text-sm bg-[#dbeafe] dark:bg-[#fef3c7] text-[#1e3a8a] dark:text-[#92400e]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* News and Blog Section - Side by Side */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* News Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl dark:text-white">News</h2>
          </div>
          
          <div className="space-y-4">
            {newsItems.map((item, index) => (
              <div key={index} className="pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                <div className="flex items-start gap-2 text-gray-500 dark:text-gray-400 text-sm mb-2">
                  <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {item.date}
                </div>
                <p className="text-gray-800 dark:text-gray-200 text-sm">
                  {item.content}
                </p>
                {item.link && (
                  <Link to={item.link} className="text-[#1e3a8a] dark:text-[#fbbf24] hover:underline text-sm mt-1 inline-block">
                    Read more →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Blog Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl dark:text-white">Recent Posts</h2>
            <Link 
              to="/blog" 
              className="text-sm text-[#1e3a8a] dark:text-[#fbbf24] hover:underline flex items-center gap-1"
            >
              View all
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <div key={index} className="pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                <span className={`inline-block px-2 py-1 text-xs rounded mb-2 ${
                  post.category === "News" ? "bg-[#1e3a8a] dark:bg-[#fbbf24] text-white dark:text-[#92400e]" :
                  post.category === "Tutorial" ? "bg-[#fef3c7] dark:bg-[#1e3a8a] text-[#92400e] dark:text-white" :
                  "bg-[#dbeafe] dark:bg-[#2563eb] text-[#1e3a8a] dark:text-white"
                }`}>
                  {post.category}
                </span>
                <Link to={`/blog/${post.slug}`} className="block group">
                  <h3 className="text-sm font-medium mb-1 group-hover:text-[#1e3a8a] dark:group-hover:text-[#fbbf24] transition-colors dark:text-gray-200">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
