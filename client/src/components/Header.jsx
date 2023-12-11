import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-7">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl">
            <span className="text-red-400"> Logo</span>
          </h1>
        </Link>

        <ul className="flex gap-12">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              HOME
            </li>
          </Link>
          <Link to="/about-us">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              ABOUT US
            </li>
          </Link>
          <Link to="/contact-us">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              CONTACT US
            </li>
          </Link>
          <Link to="/jobs">
            <li className="sm:inline text-slate-700 hover:underline">JOBS</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
