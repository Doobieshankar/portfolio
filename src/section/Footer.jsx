const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-2">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <img
            src="/portfolio/assets/github.svg"
            alt="github"
            className="w-1/2 h-1/2"
          />
        </div>
        <div className="social-icon">
          <img
            src="/portfolio/assets/twitter.svg"
            alt="twitter"
            className="w-1/2 h-1/2"
          />
        </div>
        <div className="social-icon">
          <img
            src="/portfolio/assets/instagram.svg"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </div>
      </div>
      <p className="text-white-500">
        &copy; {new Date().getFullYear()} Shankar. All rights reserved.
      </p>
    </section>
  );
};
export default Footer;
