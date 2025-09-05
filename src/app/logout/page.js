export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-[#2F4156] mb-4">
          با موفقیت خارج شدید
        </h1>

        <p className="text-lg text-[#567C8D] mb-6">
          شما با موفقیت از حساب کاربری خود خارج شدید. اگر دوباره می‌خواهید وارد شوید یا به مرور سایت ادامه دهید از گزینه‌های زیر استفاده کنید.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="accounts/login"
            className="bg-[#2F4156] text-[#FFFFFF] px-6 py-3 rounded-md hover:bg-[#567C8D] transition"
          >
            ورود مجدد
          </a>
          <a
            href="/"
            className="bg-[#567C8D] text-[#FFFFFF] px-6 py-3 rounded-md hover:bg-[#2F4156] transition"
          >
            بازگشت به صفحه اصلی
          </a>

        </div>
      </div>
    </main>
 );
}
