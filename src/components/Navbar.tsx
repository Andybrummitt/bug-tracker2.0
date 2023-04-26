import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-2 w-full max-w-7xl mx-auto bg-slate-50 dark:bg-slate-900">
      <Link href="/">Bug Tracker</Link>
      <ul>
        <ThemeToggle />
      </ul>
    </nav>
  );
};

export default Navbar;
