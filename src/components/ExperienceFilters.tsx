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
      className="mt-10 rounded-lg bg-white p-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-5"
    >
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 lg:grid-cols-[1fr_220px_220px_auto]"
      >
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase text-slate-400">
            Search title
          </span>
          <input
            type="search"
            name="q"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Try Kyoto, glacier, tapas..."
            className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase text-slate-400">
            Category
          </span>
          <select
            value={currentCategory}
            onChange={(event) =>
              updateQuery({ category: event.target.value, q: search })
            }
            className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-950 outline-none transition focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10"
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
          <span className="mb-2 block text-xs font-semibold uppercase text-slate-400">
            Destination
          </span>
          <select
            value={currentDestination}
            onChange={(event) =>
              updateQuery({ destination: event.target.value, q: search })
            }
            className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-950 outline-none transition focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10"
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
            className="h-12 flex-1 rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 lg:flex-none"
          >
            Search
          </button>
          <button
            type="button"
            onClick={clearFilters}
            disabled={!hasActiveFilters}
            className="h-12 rounded-full border border-slate-200 px-5 text-sm font-bold text-slate-600 transition hover:-translate-y-0.5 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
          >
            Clear
          </button>
        </div>
      </form>

      <p className="mt-4 text-sm font-medium text-slate-500">
        {isPending
          ? "Updating results..."
          : `Showing ${resultCount} of ${totalCount} experiences`}
      </p>
    </section>
  );
}
