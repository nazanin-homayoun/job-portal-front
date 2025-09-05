"use client";

export default function Header() {
  return (
    <footer className="bg-[#C8D9E6] text-[#2F4156] hover:text-[#507C8D] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">اسم سایت</h2>
            <p className="text-sm text-[#507C8D]">
              اسم سایت پلی بین کارفرما و کارجو برای یافتن بهترین فرصت‌های شغلی
              در سراسر کشور.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#2F4156]">
              لینک‌های مفید
            </h3>
            <ul className="space-y-2 text-sm text-[#507C8D]">
              <li>
                <a href="#" className="hover:text-[#2F4156]">
                  آگهی‌های شغلی
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2F4156]">
                  ثبت‌نام کارجو
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2F4156]">
                  ثبت آگهی شغلی
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2F4156]">
                  درباره ما
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#2F4156]">
              ارتباط با ما
            </h3>
            <ul className="text-sm text-[#507C8D] space-y-2">
              <li>ایمیل: info@jobyar.ir</li>
              <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
              <li>آدرس: تهران، خیابان مثال، پلاک ۱۲۳</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#2F4156]">
              ما را دنبال کنید
            </h3>
            <div className="flex gap-4">
              <a href="#" className="text-[#507C8D] hover:text-[#2F4156]">
                <i className="fab fa-instagram"></i> اینستاگرام
              </a>
              <a href="#" className="text-[#507C8D] hover:text-[#2F4156]">
                <i className="fab fa-linkedin"></i> لینکدین
              </a>
              <a href="#" className="text-[#507C8D] hover:text-[#2F4156]">
                <i className="fab fa-telegram"></i> تلگرام
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#2F4156] pt-4 text-center text-sm text-[#507C8D]">
          © 2025 اسم سایت - تمام حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
