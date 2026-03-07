import { useParams, Link } from "react-router";
import { Calendar, Tag, ArrowLeft, Share2 } from "lucide-react";

export function BlogPost() {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would be fetched based on slug
  const post = {
    title: "AI-Based Literacy Score Prediction Model Launch",
    date: "February 15, 2026",
    readTime: "8 min read",
    tags: ["Machine Learning", "Visualization Literacy", "Tool"],
    category: "News",
    content: `
# Introduction

I'm excited to announce the launch of our AI-based visualization literacy assessment tool! This project has been in development for the past year, combining insights from cognitive science, machine learning, and visualization research.

## What is Visualization Literacy?

Visualization literacy refers to the ability to confidently read and interpret data visualizations. Just as reading literacy is fundamental to understanding text, visualization literacy is becoming increasingly important in our data-driven world.

## The Challenge

Traditional methods of assessing visualization literacy are time-consuming and require expert evaluation. We wanted to create a tool that could:

- Provide instant feedback to users
- Scale to thousands of assessments
- Maintain accuracy comparable to human experts
- Offer personalized learning recommendations

## Our Solution

We developed a machine learning model trained on thousands of expert-evaluated responses. The model considers multiple factors:

1. **Response accuracy** - How correct is the interpretation?
2. **Confidence patterns** - How certain is the user in their answers?
3. **Time dynamics** - How long does it take to process different visualizations?
4. **Error patterns** - What types of mistakes are most common?

## Key Features

### Interactive Assessment
The tool presents a series of carefully designed visualization tasks that cover different chart types, data relationships, and complexity levels.

### Instant Results
Users receive immediate feedback on their literacy level, with detailed breakdowns by visualization type and task complexity.

### Personalized Recommendations
Based on the assessment results, the system provides tailored learning resources to improve specific areas.

## Technical Details

The model architecture combines:
- **CNN layers** for processing visualization images
- **LSTM networks** for temporal patterns in user interactions
- **Attention mechanisms** to identify which visual elements users focus on

We achieved 92% accuracy compared to expert human evaluators, with particularly strong performance on common chart types like bar charts, line graphs, and scatterplots.

## Try It Yourself!

The tool is now available at [vis-literacy-test.gatech.edu](#). We encourage researchers, educators, and anyone interested in data visualization to try it out and share their feedback.

## What's Next?

We're continuing to improve the model with more training data and expanding to cover emerging visualization types like network diagrams and geographic visualizations.

We also plan to integrate eye-tracking data to better understand the cognitive processes underlying visualization interpretation.

## Acknowledgments

This work was supported by the National Science Foundation and Georgia Tech's Visualization Lab. Special thanks to my advisor Dr. Cindy Xiong Bearfield and collaborators at Tableau Research.

## References

[Full paper will be available soon on arXiv]

---

*Have questions or feedback? Feel free to reach out via email or Twitter!*
    `
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link 
        to="/blog" 
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      {/* Article Header */}
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 md:p-12">
        <div className="mb-6">
          <span className="px-3 py-1 bg-[#1e3a8a] dark:bg-[#fbbf24] text-white dark:text-[#92400e] text-sm rounded-full">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl mb-6 dark:text-white">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <button className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mb-8">
          {post.tags.map((tag, index) => (
            <span
              key={tag}
              className={`inline-flex items-center gap-1 px-3 py-1 text-sm rounded ${
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

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('# ')) {
              return <h1 key={index} className="text-3xl mt-12 mb-4 dark:text-white">{paragraph.slice(2)}</h1>;
            } else if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-2xl mt-10 mb-4 dark:text-white">{paragraph.slice(3)}</h2>;
            } else if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-xl mt-8 mb-3 dark:text-white">{paragraph.slice(4)}</h3>;
            } else if (paragraph.startsWith('---')) {
              return <hr key={index} className="my-8 border-gray-200 dark:border-gray-700" />;
            } else if (paragraph.match(/^\d+\./)) {
              return <li key={index} className="ml-6 mb-2 dark:text-gray-300">{paragraph}</li>;
            } else if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
              return <p key={index} className="italic text-gray-600 dark:text-gray-400 my-4">{paragraph.slice(1, -1)}</p>;
            } else if (paragraph.trim()) {
              return <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{paragraph}</p>;
            }
            return null;
          })}
        </div>

        {/* Author Info */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            <div>
              <div className="font-semibold dark:text-white">Jangkyu Ju</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">PhD Student, Georgia Tech</div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <div className="mt-12">
        <h3 className="text-2xl mb-6 dark:text-white">Related Posts</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/blog/acm-iui-2026" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
            <span className="text-xs text-[#1e3a8a] dark:text-[#fbbf24] mb-2 block">Research</span>
            <h4 className="text-lg mb-2 dark:text-white">Paper Accepted to ACM IUI 2026</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Our paper on decision-making and critical thinking...</p>
          </Link>
          <Link to="/blog/getting-started-with-eyetracking" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
            <span className="text-xs text-[#fbbf24] mb-2 block">Tutorial</span>
            <h4 className="text-lg mb-2 dark:text-white">Getting Started with Eye-Tracking Research</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">A comprehensive guide for researchers interested in...</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
