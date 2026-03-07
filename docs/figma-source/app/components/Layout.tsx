import { Outlet, Link, useLocation } from "react-router";
import { Mail, Linkedin, Github, FileText, Download, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Layout() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Publications", path: "/publications" },
    { name: "Blog", path: "/blog" },
    { name: "Look who's here", path: "/analytics" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`inline-flex items-center px-1 pt-1 text-sm transition-colors ${
                    isActive(item.path)
                      ? "text-gray-900 dark:text-white border-b-2 border-[#1e3a8a] dark:border-[#fbbf24]"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-[#fbbf24]" />
                ) : (
                  <Moon className="w-5 h-5 text-[#1e3a8a]" />
                )}
              </button>
              
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3a8a] dark:bg-[#fbbf24] text-white dark:text-[#92400e] rounded-md hover:bg-[#172554] dark:hover:bg-[#f59e0b] transition-colors text-sm"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center space-x-6">
            <a href="mailto:your.email@gatech.edu" className="text-gray-600 dark:text-gray-400 hover:text-[#1e3a8a] dark:hover:text-[#fbbf24]">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[#1e3a8a] dark:hover:text-[#fbbf24]">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[#1e3a8a] dark:hover:text-[#fbbf24]">
              <Github className="w-5 h-5" />
            </a>
          </div>
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-4">
            © 2026 Jangkyu Ju. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
