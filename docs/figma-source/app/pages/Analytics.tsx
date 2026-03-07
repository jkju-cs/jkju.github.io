import { BarChart3, Globe, Users, TrendingUp, ExternalLink, Clock, MapPin } from "lucide-react";
import { useState } from "react";

export function Analytics() {
  const [isConnected, setIsConnected] = useState(false);
  
  // Mock data for visualization (실제 데이터가 연결되면 대체됩니다)
  const mockStats = {
    totalVisitors: "1,234",
    avgDuration: "2m 34s",
    topCountries: [
      { country: "United States", visits: 456 },
      { country: "South Korea", visits: 234 },
      { country: "United Kingdom", visits: 123 },
      { country: "Germany", visits: 89 },
      { country: "Canada", visits: 67 },
    ],
    topPages: [
      { page: "/publications", views: 567 },
      { page: "/", views: 432 },
      { page: "/blog", views: 234 },
      { page: "/contact", views: 98 },
    ],
    recentSources: [
      { source: "Google Search", visits: 456 },
      { source: "Direct", visits: 321 },
      { source: "LinkedIn", visits: 234 },
      { source: "Twitter", visits: 123 },
      { source: "GitHub", visits: 89 },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl mb-4 dark:text-white">Look who's here 👋</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Website traffic analytics and visitor insights powered by Google Analytics
        </p>
      </div>

      {/* Google Analytics Setup Instructions */}
      {!isConnected && (
        <div className="mb-8 p-6 bg-[#dbeafe] dark:bg-[#1e3a8a] rounded-lg border-l-4 border-[#1e3a8a] dark:border-[#fbbf24]">
          <h3 className="flex items-center gap-2 text-lg mb-3 text-[#1e3a8a] dark:text-white">
            <BarChart3 className="w-5 h-5" />
            <span>How to connect Google Analytics</span>
          </h3>
          <div className="text-sm text-gray-700 dark:text-gray-200 space-y-2">
            <p className="mb-3">Follow these steps to embed your Google Analytics dashboard:</p>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>
                Go to{" "}
                <a
                  href="https://analytics.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#1e3a8a] dark:text-[#fbbf24] hover:underline"
                >
                  Google Analytics
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>Create a new Google Analytics 4 property for your website</li>
              <li>Install the tracking code in your website's HTML (add to index.html)</li>
              <li>
                Use{" "}
                <a
                  href="https://lookerstudio.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#1e3a8a] dark:text-[#fbbf24] hover:underline"
                >
                  Looker Studio
                  <ExternalLink className="w-3 h-3" />
                </a>
                {" "}to create an embeddable dashboard
              </li>
              <li>Get the embed iframe code and paste it in the designated section below</li>
            </ol>
            <p className="mt-4 text-xs text-gray-600 dark:text-gray-400">
              * The data shown below is mock data for demonstration purposes
            </p>
          </div>
        </div>
      )}

      {/* Embed Section for Google Analytics / Looker Studio */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4 dark:text-white flex items-center gap-2">
          <Globe className="w-6 h-6 text-[#1e3a8a] dark:text-[#fbbf24]" />
          Analytics Dashboard
        </h2>
        
        {/* iframe Embed Area */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="aspect-video bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
            {/* 여기에 Google Looker Studio iframe을 임베드하세요 */}
            {/* Example: */}
            {/* <iframe
              width="100%"
              height="100%"
              src="YOUR_LOOKER_STUDIO_EMBED_URL"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe> */}
            
            <div className="text-center p-8">
              <BarChart3 className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                Embed your Google Analytics dashboard here
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Replace this section with your Looker Studio iframe code
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Cards (Mock Data) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600 dark:text-gray-400 text-sm">Total Visitors</h3>
            <Users className="w-5 h-5 text-[#1e3a8a] dark:text-[#fbbf24]" />
          </div>
          <p className="text-3xl text-gray-900 dark:text-white">{mockStats.totalVisitors}</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">+12.5% from last month</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600 dark:text-gray-400 text-sm">Avg. Duration</h3>
            <Clock className="w-5 h-5 text-[#1e3a8a] dark:text-[#fbbf24]" />
          </div>
          <p className="text-3xl text-gray-900 dark:text-white">{mockStats.avgDuration}</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">+8.3% from last month</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600 dark:text-gray-400 text-sm">Top Source</h3>
            <TrendingUp className="w-5 h-5 text-[#1e3a8a] dark:text-[#fbbf24]" />
          </div>
          <p className="text-3xl text-gray-900 dark:text-white">Google</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">37% of total traffic</p>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Top Countries */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="flex items-center gap-2 text-lg mb-4 dark:text-white">
            <MapPin className="w-5 h-5 text-[#1e3a8a] dark:text-[#fbbf24]" />
            Top Countries
          </h3>
          <div className="space-y-3">
            {mockStats.topCountries.map((item, index) => (
              <div key={item.country} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400 w-6">{index + 1}</span>
                  <span className="text-gray-900 dark:text-white">{item.country}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-[#1e3a8a] dark:bg-[#fbbf24] h-2 rounded-full"
                      style={{ width: `${(item.visits / mockStats.topCountries[0].visits) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 w-12 text-right">{item.visits}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="flex items-center gap-2 text-lg mb-4 dark:text-white">
            <BarChart3 className="w-5 h-5 text-[#1e3a8a] dark:text-[#fbbf24]" />
            Most Viewed Pages
          </h3>
          <div className="space-y-3">
            {mockStats.topPages.map((item, index) => (
              <div key={item.page} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400 w-6">{index + 1}</span>
                  <span className="text-gray-900 dark:text-white font-mono text-sm">{item.page}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-[#1e3a8a] dark:bg-[#fbbf24] h-2 rounded-full"
                      style={{ width: `${(item.views / mockStats.topPages[0].views) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 w-12 text-right">{item.views}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:col-span-2">
          <h3 className="flex items-center gap-2 text-lg mb-4 dark:text-white">
            <TrendingUp className="w-5 h-5 text-[#1e3a8a] dark:text-[#fbbf24]" />
            Traffic Sources
          </h3>
          <div className="space-y-3">
            {mockStats.recentSources.map((item, index) => (
              <div key={item.source} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400 w-6">{index + 1}</span>
                  <span className="text-gray-900 dark:text-white">{item.source}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-48 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-[#1e3a8a] dark:bg-[#fbbf24] h-2 rounded-full"
                      style={{ width: `${(item.visits / mockStats.recentSources[0].visits) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 w-12 text-right">{item.visits}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Embed Section for Custom Reports */}
      <div className="mt-8">
        <h2 className="text-2xl mb-4 dark:text-white">Custom Analytics Reports</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            You can embed additional custom reports or dashboards from Google Analytics here:
          </p>
          
          {/* 추가 iframe 공간 */}
          <div className="space-y-4">
            <div className="aspect-video bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
              {/* Custom Report 1 Embed Area */}
              <div className="text-center p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Custom Report #1 - Embed Area
                </p>
              </div>
            </div>
            
            <div className="aspect-video bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
              {/* Custom Report 2 Embed Area */}
              <div className="text-center p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Custom Report #2 - Embed Area
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Notes */}
      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-sm mb-2 text-gray-700 dark:text-gray-300">📝 Technical Notes:</h3>
        <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
          <li>Replace the placeholder sections with iframe embed codes from Looker Studio</li>
          <li>Ensure your Google Analytics property has proper data collection enabled</li>
          <li>Make sure to set appropriate sharing permissions for embedded dashboards</li>
          <li>Consider using Google Analytics Data API for more custom visualizations</li>
          <li>Mock data shown above will be replaced with real analytics once connected</li>
        </ul>
      </div>
    </div>
  );
}
