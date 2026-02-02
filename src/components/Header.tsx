import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-xl border-b ">
      <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/devzennn.png" alt="DevZen Software Solutions" className="h-14 w-auto object-contain" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
           <a href="/" className="text-sm text-white hover:text-blue-500 transition-colors">Home</a>
            <a href="/#about" className="text-sm text-white hover:text-blue-500 transition-colors">About Us</a>
            <a href="/Services" className="text-sm text-white hover:text-blue-500 transition-colors">Services</a>
            <a href="/#careers" className="text-sm text-white hover:text-blue-500 transition-colors">Careers</a>
        </div>
         <a href="/#contact" className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-primary hover:opacity-90 transition-opacity">
          Contact
        </a>
      </div>
    </nav>
  );
};