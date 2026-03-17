import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full shadow-md backdrop-blur-md border-b border-gray-200 flex justify-between items-center px-10 py-4 z-50 navbar-bg">
      <h1 className="text-2xl font-bold cursor-pointer">
        Software Engineer
      </h1>

      <div className="flex items-center space-x-8">
        <a
          href="#about"
          className="text-gray-700 hover:text-indigo-500 transition"
        >
          About
        </a>
        <a
          href="#skills"
          className="text-gray-700 hover:text-indigo-500 transition"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="text-gray-700 hover:text-indigo-500 transition"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-gray-700 hover:text-indigo-500 transition"
        >
          Contact
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}