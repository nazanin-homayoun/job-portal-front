import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-[#2F4156] mb-4">
          404 - صفحه مورد نظر پیدا نشد
        </h1>

        <p className="text-lg text-[#567C8D] mb-6">
          متاسفانه، صفحه‌ای که به دنبال آن بودید وجود ندارد. ممکن است آدرس وارد
          شده اشتباه باشد یا صفحه حذف شده باشد.
        </p>

        <p className="text-lg text-[#567C8D] mb-6">
          لطفاً یکی از گزینه‌های زیر را انتخاب کنید تا به شما کمک کنیم:
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="bg-[#2F4156] text-[#FFFFFF] px-6 py-3 rounded-md hover:bg-[#567C8D] transition"
          >
            برگشت به صفحه اصلی
          </Link>
          <Link
            href="/jobs/jobs_list"
            className="bg-[#567C8D] text-[#FFFFFF] px-6 py-3 rounded-md hover:bg-[#2F4156] transition"
          >
            مشاهده مشاغل
          </Link>
        </div>
      </div>
    </main>
  );
}
