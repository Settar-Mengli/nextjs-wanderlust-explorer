"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-300/70 bg-[#f7f3eb]/95 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-3 py-2.5 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-4 lg:px-8"
      >
        <Link
          href="/"
          aria-label="Wanderlust Explorer home"
          className="group inline-flex max-w-full min-w-0 items-center gap-2 sm:gap-3"
        >
          <span className="grid size-9 shrink-0 place-items-center border border-[#151515] bg-[#151515] text-xs font-black text-white transition group-hover:bg-[#b69b5e] group-hover:text-[#151515] sm:size-10 sm:text-sm md:size-11">
            WE
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-black tracking-tight text-[#151515] sm:text-base md:text-lg">
              Wanderlust Explorer
            </span>
            <span className="block truncate text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-stone-500 sm:text-[0.66rem] sm:tracking-[0.18em]">
              Field journal
            </span>
          </span>
        </Link>

        <div className="grid w-full min-w-0 grid-cols-4 gap-1.5 md:w-auto md:flex md:flex-nowrap md:gap-1">
          {navItems.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex min-h-10 min-w-0 items-center justify-center border px-1.5 py-2 text-[0.625rem] font-bold uppercase tracking-[0.02em] whitespace-nowrap transition sm:px-3 sm:text-xs sm:tracking-[0.08em] md:shrink-0 md:px-4 md:text-[0.8rem] md:tracking-[0.12em] ${
                  isActive
                    ? "border-[#151515] bg-[#151515] text-white shadow-sm shadow-slate-950/10"
                    : "border-transparent text-stone-600 hover:border-stone-300 hover:bg-white hover:text-[#151515]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
