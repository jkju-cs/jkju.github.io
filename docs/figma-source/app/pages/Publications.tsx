import { ExternalLink, Calendar } from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "Conference" | "Journal" | "Workshop";
  status: "Published" | "Accepted" | "Under Review";
  links?: {
    paper?: string;
    arxiv?: string;
    code?: string;
    demo?: string;
  };
  award?: string;
}

export function Publications() {
  const publications: Publication[] = [
    {
      title: "Understanding Visualization Literacy through Visual Attention Patterns: An Eye-Tracking Study",
      authors: "Jangkyu Ju, Cindy Xiong Bearfield",
      venue: "IEEE VIS 2025",
      year: 2025,
      type: "Conference",
      status: "Accepted",
      links: {
        paper: "#",
        arxiv: "#"
      }
    },
    {
      title: "Supporting Decision-Making and Critical Thinking with Interactive Visualizations",
      authors: "Jangkyu Ju, John Doe, Cindy Xiong Bearfield",
      venue: "ACM IUI 2026",
      year: 2026,
      type: "Conference",
      status: "Accepted",
      links: {
        paper: "#",
        demo: "#"
      }
    },
    {
      title: "AI-Powered Visualization Literacy Assessment: A Machine Learning Approach",
      authors: "Jangkyu Ju, Srishti Palani, Arjun Srinivasan, Cindy Xiong Bearfield",
      venue: "IEEE TVCG",
      year: 2026,
      type: "Journal",
      status: "Under Review",
      links: {
        arxiv: "#"
      }
    },
    {
      title: "Cognitive Load in Data Visualization: The Role of Chart Complexity and User Expertise",
      authors: "Jangkyu Ju, Jane Smith, Cindy Xiong Bearfield",
      venue: "CHI 2025",
      year: 2025,
      type: "Conference",
      status: "Published",
      links: {
        paper: "#",
        arxiv: "#",
        code: "#"
      },
      award: "Best Paper Honorable Mention"
    },
    {
      title: "Designing Effective Visual Analytics Tools for Non-Expert Users",
      authors: "Jangkyu Ju, Cindy Xiong Bearfield",
      venue: "VIS Workshop on Visualization for the Digital Humanities",
      year: 2024,
      type: "Workshop",
      status: "Published",
      links: {
        paper: "#"
      }
    }
  ];

  const groupedByYear = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, Publication[]>);

  const years = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl mb-4 dark:text-white">Publications</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Research papers and articles on data visualization, human-computer interaction, and cognitive science.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          Full list of publications can be found on my{" "}
          <a 
            href="https://scholar.google.com/citations?user=YOUR_USER_ID" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#1e3a8a] dark:text-[#fbbf24] hover:underline"
          >
            Google Scholar profile
            <ExternalLink className="w-4 h-4" />
          </a>
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
          <div className="text-3xl font-bold text-[#1e3a8a] dark:text-[#fbbf24] mb-1">{publications.length}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Papers</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
          <div className="text-3xl font-bold text-[#1e3a8a] dark:text-[#fbbf24] mb-1">
            {publications.filter(p => p.type === "Conference").length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Conference</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
          <div className="text-3xl font-bold text-[#1e3a8a] dark:text-[#fbbf24] mb-1">
            {publications.filter(p => p.type === "Journal").length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Journal</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
          <div className="text-3xl font-bold text-[#fbbf24] mb-1">
            {publications.filter(p => p.award).length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Awards</div>
        </div>
      </div>

      {/* Publications by Year */}
      <div className="space-y-12">
        {years.map((year) => (
          <div key={year}>
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-[#1e3a8a] dark:text-[#fbbf24]" />
              <h2 className="text-2xl dark:text-white">{year}</h2>
            </div>
            
            <div className="space-y-6">
              {groupedByYear[Number(year)].map((pub, index) => (
                <article
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap items-start gap-3 mb-3">
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      pub.type === "Conference" ? "bg-[#dbeafe] dark:bg-[#1e3a8a] text-[#1e3a8a] dark:text-white" :
                      pub.type === "Journal" ? "bg-[#2563eb] text-white" :
                      "bg-[#fef3c7] dark:bg-[#fbbf24] text-[#92400e]"
                    }`}>
                      {pub.type}
                    </span>
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      pub.status === "Published" ? "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300" :
                      pub.status === "Accepted" ? "bg-[#fef3c7] dark:bg-[#fbbf24] text-[#92400e]" :
                      "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200"
                    }`}>
                      {pub.status}
                    </span>
                    {pub.award && (
                      <span className="px-3 py-1 bg-[#fbbf24] text-[#92400e] text-xs rounded-full">
                        🏆 {pub.award}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl mb-2 dark:text-white">
                    {pub.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {pub.authors}
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    {pub.venue}
                  </p>

                  {pub.links && (
                    <div className="flex flex-wrap gap-3">
                      {pub.links.paper && (
                        <a
                          href={pub.links.paper}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-[#1e3a8a] dark:bg-[#fbbf24] text-white dark:text-[#92400e] text-sm rounded hover:bg-[#172554] dark:hover:bg-[#f59e0b] transition-colors"
                        >
                          PDF
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {pub.links.arxiv && (
                        <a
                          href={pub.links.arxiv}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                        >
                          arXiv
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {pub.links.code && (
                        <a
                          href={pub.links.code}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                        >
                          Code
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {pub.links.demo && (
                        <a
                          href={pub.links.demo}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-[#fbbf24] text-[#92400e] text-sm rounded hover:bg-[#f59e0b] transition-colors"
                        >
                          Demo
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Peer Review Service */}
      <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl mb-4 dark:text-white">Peer Review Service</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          I serve as a reviewer for the following conferences and journals:
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-[#dbeafe] dark:bg-[#1e3a8a] text-[#1e3a8a] dark:text-white rounded">IEEE VIS</span>
          <span className="px-4 py-2 bg-[#fef3c7] dark:bg-[#fbbf24] text-[#92400e] rounded">CHI</span>
          <span className="px-4 py-2 bg-[#dbeafe] dark:bg-[#1e3a8a] text-[#1e3a8a] dark:text-white rounded">ACM IUI</span>
          <span className="px-4 py-2 bg-[#fef3c7] dark:bg-[#fbbf24] text-[#92400e] rounded">IEEE TVCG</span>
        </div>
      </div>
    </div>
  );
}
