import { Mail, Linkedin, Github, MapPin, Building } from "lucide-react";

export function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl mb-4 dark:text-white">Contact</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          I'm always happy to discuss research collaborations, speaking opportunities, or just chat about visualization and HCI!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl mb-4 dark:text-white">Get in Touch</h2>
            
            <div className="space-y-4">
              <a 
                href="mailto:mchang@gatech.edu" 
                className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors group"
              >
                <Mail className="w-5 h-5 text-[#1e3a8a] dark:text-[#fbbf24] mt-0.5" />
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                  <div className="group-hover:text-[#1e3a8a] dark:group-hover:text-[#fbbf24] transition-colors dark:text-gray-200">mchang@gatech.edu</div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/your-profile" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-[#1e3a8a] dark:text-[#fbbf24] mt-0.5" />
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</div>
                  <div className="group-hover:text-[#1e3a8a] dark:group-hover:text-[#fbbf24] transition-colors dark:text-gray-200">linkedin.com/in/your-profile</div>
                </div>
              </a>

              <a 
                href="https://github.com/your-username" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors group"
              >
                <Github className="w-5 h-5 text-[#1e3a8a] dark:text-[#fbbf24] mt-0.5" />
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">GitHub</div>
                  <div className="group-hover:text-[#1e3a8a] dark:group-hover:text-[#fbbf24] transition-colors dark:text-gray-200">github.com/your-username</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl mb-4 dark:text-white">Office Location</h2>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Building className="w-5 h-5 text-[#1e3a8a] dark:text-[#fbbf24] mt-0.5" />
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Building</div>
                  <div className="dark:text-gray-200">Klaus Advanced Computing Building</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1e3a8a] dark:text-[#fbbf24] mt-0.5" />
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Address</div>
                  <div className="dark:text-gray-200">
                    266 Ferst Drive NW<br />
                    Atlanta, GA 30332
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl mb-4 dark:text-white">Send a Message</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] dark:focus:ring-[#fbbf24] focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] dark:focus:ring-[#fbbf24] focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] dark:focus:ring-[#fbbf24] focus:border-transparent"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] dark:focus:ring-[#fbbf24] focus:border-transparent resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#1e3a8a] dark:bg-[#fbbf24] text-white dark:text-[#92400e] rounded-lg hover:bg-[#172554] dark:hover:bg-[#f59e0b] transition-colors"
            >
              Send Message
            </button>
          </form>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            Note: This is a demo form. In production, you would integrate with a backend service to handle form submissions.
          </p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 bg-[#fef3c7] dark:bg-[#1e3a8a] border border-[#fbbf24] dark:border-[#fbbf24] rounded-lg p-6">
        <h3 className="text-lg mb-2 dark:text-white">Looking for Collaboration?</h3>
        <p className="text-gray-800 dark:text-gray-200">
          I'm particularly interested in collaborations related to:
        </p>
        <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 mt-2 space-y-1">
          <li>Visualization literacy and education</li>
          <li>Eye-tracking and visual attention research</li>
          <li>Human-AI collaboration in data analysis</li>
          <li>Cognitive aspects of data visualization</li>
        </ul>
      </div>
    </div>
  );
}
