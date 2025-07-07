import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl mt-16 shadow-lg w-full max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden">
      {/* Left side - Login form */}
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {t("login")}
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              {t("username")}
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder={t("yourName")}
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              {t("password")}
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="********"
            />
          </div>

          <div className="text-right text-sm">
            <a
              href="#"
              className="text-blue-600 hover:underline transition duration-200"
            >
              {t("forgotPassword")}
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-md font-semibold hover:bg-orange-700 transition"
          >
            {t("login")}
          </button>
        </form>
      </div>

      {/* Right side - Tip / Info */}
      <div className="w-full md:w-1/2 bg-orange-50 p-8 flex items-center justify-center text-center">
        <p className="text-gray-700 text-lg font-medium leading-relaxed border border-orange-300 bg-orange-100 rounded-lg p-4 shadow-md">
          <span className="font-semibold text-orange-700">{t("note")}:</span>{" "}
          {t("loginNote")}
        </p>
      </div>
    </div>
  );
};

export default Login;
