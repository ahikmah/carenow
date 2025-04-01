const Footer = () => {
  return (
    <footer className="container mx-auto px-4 fixed bottom-0 left-0 right-0 bg-background py-2">
      <div className="flex justify-center">
        <p className="text-xs text-gray-500">
          Build with 😃 by{" "}
          <a href="https://ahikmah.com" target="_blank" rel="noopener">
            <span className="font-bold text-cyan-600">ahikmah</span>
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/ahikmah/carenow"
            target="_blank"
            rel="noopener"
          >
            <span className="font-bold text-cyan-600">View Source Code</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
