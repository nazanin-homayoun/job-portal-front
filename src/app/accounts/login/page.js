import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#F5EFEB] min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-[#2F4156]">
            ورود به حساب کاربری
          </h2>
          <p className="mt-2 text-sm font-medium text-[#567C8D]">
            به سامانه کاریابی خوش آمدید
          </p>
        </div>

        {/* نمایش پیام خطا */}
        {/* {% if error_message %} */}
        {/* <div className="mt-4 text-center text-sm font-medium text-red-600">
            <p>{{ error_message }}</p>
        </div> */}
        {/* {% endif %} */}

        <form className="mt-8 space-y-8" action="" method="POST">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="id_email"
                className="block text-sm font-medium text-right text-[#2F4156]"
              >
                ایمیل
                {/* {{ form.email.label }} */}
              </label>
              <input
                id="id_email"
                name="email"
                type="email"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#567C8D] focus:border-[#567C8D]"
              />
              {/* {% if form.email.errors %} */}
              {/* <p className="text-red-500 text-xs text-right mt-1">{{ form.email.errors }}</p> */}
              {/* {% endif %} */}
            </div>

            <div>
              <label
                htmlFor="id_password"
                className="block text-sm font-medium text-right text-[#2F4156]"
              >
                رمز عبور
                {/* {{ form.password.label }} */}
              </label>
              <input
                id="id_password"
                name="password"
                type="password"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#567C8D] focus:border-[#567C8D]"
              />
              {/* {% if form.password.errors %} */}
              {/* <p className="text-red-500 text-xs text-right mt-1">{{ form.password.errors }}</p> */}
              {/* {% endif %} */}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#567C8D] hover:bg-[#2F4156] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#567C8D]"
            >
              ورود به حساب کاربری
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#2F4156]">
            حساب کاربری ندارید؟
            <Link
              href="register"
              className="font-medium text-[#567C8D] hover:text-[#2F4156]"
            >
              ثبت نام کنید
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#2F4156]">
            <a
              href="forget_pass"
              className="font-medium text-[#567C8D] hover:text-[#2F4156]"
            >
              فراموشی رمز عبور
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
