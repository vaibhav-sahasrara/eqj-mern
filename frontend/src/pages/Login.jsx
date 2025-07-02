const Login = () => {
  return (
    <div className="bg-white rounded-xl mt-16 shadow-lg w-full max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden">
      {/* Left side - Login form */}
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          लॉगिन
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              वापरकर्ता नाव
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="तुमचे नाव"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              पासवर्ड
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
            />
          </div>

          <div className="text-right text-sm">
            <a
              href="#"
              className="text-blue-600 hover:underline transition duration-200"
            >
              पासवर्ड विसरलात?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-md font-semibold hover:bg-orange-700 transition"
          >
            लॉगिन करा
          </button>
        </form>
      </div>

      {/* Right side - Tip / Info */}
      <div className="w-full md:w-1/2 bg-orange-50 p-8 flex items-center justify-center text-center">
        <p className="text-gray-700 text-lg font-medium leading-relaxed">
          <span className="font-semibold text-orange-700">टीप :</span> हे लॉगिन
          फक्त्त <br className="md:hidden" />
          <span className="underline text-orange-700">
            महसूल कर्मचाऱ्यांसाठीच
          </span>{" "}
          आहे.
        </p>
      </div>
    </div>
  );
};

export default Login;
