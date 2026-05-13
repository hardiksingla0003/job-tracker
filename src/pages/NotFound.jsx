import { CircleAlert } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center bg-[#EEEDF8] justify-center min-h-screen gap-4">
      <div className="w-16 h-16 bg-[#E0E7FF] flex items-center justify-center rounded-xl">
        <CircleAlert size={32} stroke="#6366F1" />
      </div>

      <h1 className="text-2xl font-semibold text-[#1E1B4B]">Page Not Found</h1>
      <p className="text-sm text-gray-500">
        The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="px-5 py-2 rounded-xl mt-2 bg-[linear-gradient(135deg,#6366F1,#4338CA)] text-sm font-medium text-white"
      >
        Back to Dashboard
      </a>
    </div>
  );
};

export default NotFound;
