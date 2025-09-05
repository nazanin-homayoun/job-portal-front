import Link from "next/link";

export default function Logout() {
  return (
    <main className="bg-[#f5efeb] min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-4">
          <svg
            className="w-12 h-12 text-[#2f4156] mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 20h9M12 4h9M5 12l7 7-7 7"
            ></path>
          </svg>
        </div>

        <h2 className="mt-6 text-3xl font-extrabold text-[#2f4156]">
          با موفقیت خارج شدید
        </h2>
        <p className="mt-2 text-sm font-medium text-[#567c8d]">
          شما از حساب خود خارج شده‌اید.
        </p>

        <div className="mt-6">
          <Link
            href="/accounts/login"
            className="w-full inline-block py-2 px-4 text-sm font-medium rounded-md text-white bg-[#567c8d] hover:bg-[#2f4156] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#567c8d]"
          >
            ورود به حساب کاربری
          </Link>
        </div>
      </div>
    </main>
  );
}
