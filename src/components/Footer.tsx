import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-300/70 bg-[#11110f] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-9 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <Link
            href="/"
            className="inline-flex max-w-full items-center gap-3 text-lg font-black tracking-tight"
          >
            <span className="grid size-9 shrink-0 place-items-center border border-white/20 bg-white text-xs text-[#11110f] sm:size-10 sm:text-sm">
              WE
            </span>
            <span className="min-w-0 truncate">Wanderlust Explorer</span>
          </Link>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/60">
            Curated journeys, field notes, and premium travel inspiration for
            travelers who prefer depth over volume.
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#b69b5e]">
            Author: Settar Mengli
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-3 text-sm font-bold sm:flex sm:items-start sm:gap-5"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
