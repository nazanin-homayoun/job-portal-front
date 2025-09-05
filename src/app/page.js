import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F5EFE7]">
      <section className=" flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2F4156] mb-6">
          کاریاب، همراه شغلی شما
        </h1>
        <p className="text-lg text-[#507C8D] max-w-xl mb-10">
          با کاریاب، سریع‌تر و هوشمندتر شغل مناسب خود را پیدا کنید یا به عنوان کارفرما نیرو جذب کنید.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="accounts/login" className="px-8 py-3 bg-[#2F4156] text-white rounded-md text-lg hover:bg-[#507C8D] transition">
            ورود
          </a>
          <a href="accounts/register" className="px-8 py-3 bg-white text-[#2F4156] border border-[#C8D9E6] rounded-md text-lg hover:bg-[#F5EFE7] transition">
            ثبت نام
          </a>
        </div>
      </section>
    </main>
  );
}
