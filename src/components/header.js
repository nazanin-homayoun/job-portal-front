"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);

  function toggleUserMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <header
      className="flex items-center justify-between px-6 py-2 m-2 bg-white shadow-sm border border-gray-200"
      dir="rtl"
    >
      <div className="flex items-center gap-7">
        <div className="font-semibold text-[#2F4156] text-lg">logo</div>
        <nav className="flex gap-6 text-sm font-medium text-[#507C8D]">
          <Link href="/jobs/jobs_list">فرصت‌های شغلی</Link>
        </nav>
      </div>

      <div className="flex items-center gap-6 relative">
        {user ? (
          <>
            <Link
              href="/jobs/post_job"
              className="text-sm text-[#507C8D] hover:text-[#2F4156]"
            >
              ثبت آگهی
            </Link>
            <div className="relative">
              <button
                id="userMenuButton"
                className={`flex items-center bg-[#C8D9E6] text-sm text-[#2F4156] px-3 py-2 rounded-md hover:bg-[#507C8D] ${
                  showMenu ? "" : "hidden"
                }`}
                onClick={toggleUserMenu}
              >
                <i className="fa-solid fa-user fa-1x me-2"></i>
                {/* {{ user.email }} */}
                mhmdamin.jafari@gmail.com
                <i className="fa-solid fa-chevron-down ms-2 text-xs"></i>
              </button>

              <div
                id="userMenu"
                className="absolute left-0 top-full mt-2 w-40 bg-white shadow-md rounded-md py-2 px-3 z-50 hidden text-right"
              >
                <Link
                  href="logout"
                  className="block text-sm text-[#2F4156] hover:text-red-600"
                >
                  خروج از حساب
                </Link>
              </div>
            </div>
          </>
        ) : (
          <Link
            href="/accounts/login"
            className="flex items-center bg-[#C8D9E6] text-sm text-[#2F4156] px-3 py-2 rounded-md hover:bg-[#507C8D]"
          >
            <i className="fa-solid fa-right-to-bracket fa-1x me-2"></i>
            ورود | ثبت نام
          </Link>
        )}
      </div>
    </header>
  );
}
