export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span className="text-xl font-bold text-indigo-600">SeniorCare</span>
    </div>
  );
} 