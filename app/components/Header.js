import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-white px-6 py-4">
      <h1 className="text-xl font-normal uppercase tracking-widest">
        <Link href="/">Adam White</Link>
      </h1>
      <nav>
        <ul className="flex items-center gap-8 text-sm font-normal uppercase tracking-widest">
          {/* <li>
            <Link href="/work" className="hover:opacity-50 transition-opacity duration-200">
              Work
            </Link>
          </li> */}
          <li>
            <Link
              href="/about-me"
              className="transition-opacity duration-200 hover:opacity-50"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="mailto:adam@adamewhite.com"
              className="transition-opacity duration-200 hover:opacity-50"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
