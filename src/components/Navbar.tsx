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
    <header className="sticky top-0 z-50 border-b border-white/70 bg-[#f6f3ee]/92 shadow-sm shadow-slate-950/5 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"
      >
        <Link
          href="/"
          aria-label="Wanderlust Explorer home"
          className="group inline-flex w-fit items-center gap-3"
        >
          <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-lg bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/15 transition group-hover:-translate-y-0.5">
            <span className="absolute inset-x-2 top-2 h-px bg-white/35" />
            <span className="tracking-tight">WE</span>
            <span className="absolute bottom-2 h-1 w-6 rounded-full bg-amber-300" />
          </span>
          <span className="min-w-0">
            <span className="block whitespace-nowrap text-base font-black tracking-tight text-slate-950 sm:text-lg">
              Wanderlust Explorer
            </span>
            <span className="block text-xs font-semibold uppercase text-slate-500">
              Premium travel guide
            </span>
          </span>
        </Link>

        <div className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1 md:mx-0 md:flex-nowrap md:overflow-visible md:pb-0">
          {navItems.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex min-h-11 shrink-0 items-center rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition ${
                  isActive
                    ? "bg-slate-950 text-white shadow-sm shadow-slate-950/15"
                    : "text-slate-600 hover:bg-white hover:text-slate-950 hover:shadow-sm"
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
