const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 text-center py-2 border-t shadow-md">
      <div className="flex flex-col items-center justify-center space-y-2">
        {/* Footer Image */}
        <img
          src="/digital-india.png"
          alt="Seal of Maharashtra"
          className="w-16 h-16 object-contain"
        />

        {/* Footer Text */}
        <p className="text-sm">
          © {new Date().getFullYear()} Powered by Sahasrara Metatech Pvt. Ltd.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
