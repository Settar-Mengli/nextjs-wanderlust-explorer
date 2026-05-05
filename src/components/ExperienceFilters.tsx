"use client";

import { FormEvent, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type ExperienceFiltersProps = {
  categories: string[];
  destinations: string[];
  initialCategory: string;
  initialDestination: string;
  initialSearch: string;
  resultCount: number;
  totalCount: number;
};

export default function ExperienceFilters({
  categories,
  destinations,
  initialCategory,
  initialDestination,
  initialSearch,
  resultCount,
  totalCount,
}: ExperienceFiltersProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(initialSearch);
  const [isPending, startTransition] = useTransition();

  function updateQuery(nextValues: {
    category?: string;
    destination?: string;
    q?: string;
  }) {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(nextValues).forEach(([key, value]) => {
      const cleanValue = value?.trim();

      if (cleanValue) {
        params.set(key, cleanValue);
      } else {
        params.delete(key);
      }
    });

    const query = params.toString();

    startTransition(() => {
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateQuery({ q: search });
  }

  function clearFilters() {
    setSearch("");

    startTransition(() => {
      router.replace(pathname, { scroll: false });
    });
  }

  const categoryFromUrl = searchParams.get("category") ?? initialCategory;
  const destinationFromUrl =
    searchParams.get("destination") ?? initialDestination;
  const currentCategory = categories.includes(categoryFromUrl)
    ? categoryFromUrl
    : "";
  const currentDestination = destinations.includes(destinationFromUrl)
    ? destinationFromUrl
    : "";
  const hasActiveFilters =
    Boolean(searchParams.get("q")) ||
    Boolean(currentCategory) ||
    Boolean(currentDestination);

  return (
    <section
      aria-label="Experience filters"
      className="mt-8 border border-stone-300 bg-[#fffdf8] p-4 shadow-[0_16px_40px_rgba(21,21,21,0.06)] sm:p-5"
    >
      <form
        onSubmit={handleSubmit}
        className="grid gap-3 sm:gap-4 lg:grid-cols-[1fr_220px_220px_auto]"
      >
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-stone-400">
            Search title
          </span>
          <input
            type="search"
            name="q"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Try Kyoto, glacier, tapas..."
            className="h-11 w-full border border-stone-300 bg-[#f7f3eb] px-4 text-sm font-semibold text-[#151515] outline-none transition placeholder:text-stone-400 focus:border-[#777536] focus:bg-white focus:ring-4 focus:ring-[#777536]/15 sm:h-12"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-stone-400">
            Category
          </span>
          <select
            value={currentCategory}
            onChange={(event) =>
              updateQuery({ category: event.target.value, q: search })
            }
            className="h-11 w-full border border-stone-300 bg-[#f7f3eb] px-4 text-sm font-semibold text-[#151515] outline-none transition focus:border-[#777536] focus:bg-white focus:ring-4 focus:ring-[#777536]/15 sm:h-12"
          >
            <option value="">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-stone-400">
            Destination
          </span>
          <select
            value={currentDestination}
            onChange={(event) =>
              updateQuery({ destination: event.target.value, q: search })
            }
            className="h-11 w-full border border-stone-300 bg-[#f7f3eb] px-4 text-sm font-semibold text-[#151515] outline-none transition focus:border-[#777536] focus:bg-white focus:ring-4 focus:ring-[#777536]/15 sm:h-12"
          >
            <option value="">All destinations</option>
            {destinations.map((destination) => (
              <option key={destination} value={destination}>
                {destination}
              </option>
            ))}
          </select>
        </label>

        <div className="flex items-end gap-3">
          <button
            type="submit"
            className="h-11 flex-1 border border-[#151515] bg-[#151515] px-5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#151515] sm:h-12 lg:flex-none"
          >
            Search
          </button>
          <button
            type="button"
            onClick={clearFilters}
            disabled={!hasActiveFilters}
            className="h-11 border border-stone-300 px-5 text-sm font-black text-stone-600 transition hover:-translate-y-0.5 hover:bg-[#f7f3eb] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 sm:h-12"
          >
            Clear
          </button>
        </div>
      </form>

      <p className="mt-4 text-sm font-semibold text-stone-500">
        {isPending
          ? "Updating results..."
          : `Showing ${resultCount} of ${totalCount} experiences`}
      </p>
    </section>
  );
}
