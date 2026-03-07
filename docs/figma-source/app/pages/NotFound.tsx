import { Link } from "react-router";
import { Home as HomeIcon } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-3xl mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#7d5d47] text-white rounded-lg hover:bg-[#6a4d3a] transition-colors"
        >
          <HomeIcon className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
