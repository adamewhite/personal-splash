import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--footer)] px-8 py-16 text-white">
      <div className="flex flex-col gap-12 md:flex-row md:justify-between">
        {/* Name / brand */}
        <div>
          <p className="mb-4 text-base uppercase tracking-widest">Adam White</p>
          <p className="text-sm tracking-wide text-white/50">
            UX Design / Data Strategy
            <br />
            New York
          </p>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-widest text-white/50">
            Contact
          </p>
          <ul className="flex flex-col gap-2 text-base font-light">
            <li>
              <Link
                href="mailto:adam@adamewhite.com"
                className="transition-opacity duration-200 hover:opacity-50"
              >
                adam@adamewhite.com
              </Link>
            </li>
            {/* <li>
              <Link
                href="tel:+16467346779"
                className="transition-opacity duration-200 hover:opacity-50"
              >
                (646) 734-6779
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-widest text-white/50">
            Navigate
          </p>
          <ul className="flex flex-col gap-2 text-base font-light">
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
                href="/contact"
                className="transition-opacity duration-200 hover:opacity-50"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex items-end justify-between border-t border-white/10 pt-8">
        <p className="text-sm tracking-wide text-white/30">
          &copy; {new Date().getFullYear()} Adam White
        </p>
      </div>
    </footer>
  );
}
