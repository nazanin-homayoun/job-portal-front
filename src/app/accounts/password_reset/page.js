export default function PasswordReset() {
  return (
    <main className="bg-[#F5EFEB] min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-[#2F4156]">
            بازیابی رمز عبور
          </h2>
          <p className="mt-2 text-sm font-medium text-[#567C8D]">
            آدرس ایمیلی که با آن ثبت‌نام کرده‌اید را وارد کنید.
          </p>
        </div>

        <form
          method="POST"
          action="/accounts/pass_reset"
          className="mt-8 space-y-8"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-right text-[#2F4156]"
            >
              آدرس ایمیل
            </label>
            <input
              id="email"
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
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#567C8D] hover:bg-[#2F4156] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#567C8D]"
            >
              ارسال کد تایید
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <a
            href="{% url 'accounts:login' %}"
            className="font-medium text-[#567C8D] hover:text-[#2F4156]"
          >
            بازگشت به صفحه ورود
          </a>
        </div>
      </div>
    </main>
  );
}
