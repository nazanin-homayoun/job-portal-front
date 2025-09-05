import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#F5EFEB] min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-[#2F4156]">
            ثبت نام در حساب کاربری
          </h2>
          <p className="mt-2 text-sm font-medium text-[#567C8D]">
            برای دسترسی به امکانات سامانه کاریابی ثبت‌نام کنید
          </p>
        </div>

        {/* <!-- نمایش ارورهای فرم --> */}
        {/* {% if form.errors %}
			<div className="text-red-600 text-sm mb-4">
				{% for field in form %}
					{% for error in field.errors %}
						<p>{{ field.label }}: {{ error }}</p>
					{% endfor %}
				{% endfor %}
				{% for error in form.non_field_errors %}
					<p>{{ error }}</p>
				{% endfor %}
			</div>
		{% endif %} */}

        <form
          method="post"
          encType="multipart/form-data"
          className="mt-8 space-y-8"
        >
          <div className="space-y-4">
            {/* <!-- نام کاربری --> */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-right text-[#2F4156]"
              >
                نام کاربری
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#567C8D] focus:border-[#567C8D]"
              />
            </div>

            {/* <!-- نام کامل --> */}
            <div>
              <label
                htmlFor="full_name"
                className="block text-sm font-medium text-right text-[#2F4156]"
              >
                نام و نام خانوادگی
              </label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#567C8D] focus:border-[#567C8D]"
              />
            </div>

            {/* <!-- ایمیل --> */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-right text-[#2F4156]"
              >
                ایمیل
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#567C8D] focus:border-[#567C8D]"
              />
            </div>

            {/* <!-- نوع حساب --> */}

            {/* <!-- رمز عبور --> */}
            <div>
              <label
                htmlFor="password1"
                className="block text-sm font-medium text-right text-[#2F4156]"
              >
                رمز عبور
              </label>
              <input
                id="password1"
                name="password1"
                type="password"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#567C8D] focus:border-[#567C8D]"
              />
            </div>

            {/* <!-- تایید رمز عبور --> */}
            <div>
              <label
                htmlFor="password2"
                className="block text-sm font-medium text-right text-[#2F4156]"
              >
                تأیید رمز عبور
              </label>
              <input
                id="password2"
                name="password2"
                type="password"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#567C8D] focus:border-[#567C8D]"
              />
            </div>
          </div>

          {/* <!-- شرایط --> */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-[#567C8D] focus:ring-[#567C8D] border-gray-300 rounded"
              />
              <label
                htmlFor="terms"
                className="mr-2 block text-sm text-[#2F4156]"
              >
                با
                <a
                  href="#"
                  className="font-medium text-[#567C8D] hover:text-[#2F4156]"
                >
                  شرایط و مقررات
                </a>
                موافقم
              </label>
            </div>
          </div>

          {/* <!-- دکمه --> */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#567C8D] hover:bg-[#2F4156] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#567C8D]"
            >
              ثبت نام
            </button>
          </div>
        </form>

        {/* <!-- ورود --> */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[#2F4156]">
            حساب کاربری دارید؟
            <Link
              href="/accounts/login"
              className="font-medium text-[#567C8D] hover:text-[#2F4156]"
            >
              وارد شوید
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
