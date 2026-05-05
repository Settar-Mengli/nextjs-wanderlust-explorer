import type { Metadata } from "next";
import Link from "next/link";
import ExperienceCard from "@/components/ExperienceCard";
import ExperienceFilters from "@/components/ExperienceFilters";
import { experiences } from "@/data/experiences";

type ExperiencesPageProps = {
  searchParams: Promise<{
    category?: string | string[];
    destination?: string | string[];
    q?: string | string[];
  }>;
};

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Search and filter 100 curated travel experiences across adventure, culture, food, wellness, and nature.",
};

const categories: string[] = Array.from(
  new Set(experiences.map((experience) => experience.category)),
).sort();
const destinations: string[] = Array.from(
  new Set(experiences.map((experience) => experience.destination)),
).sort();
const averageRating =
  experiences.reduce((total, experience) => total + experience.rating, 0) /
  experiences.length;

function getParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

const stats = [
  { label: "Experiences", value: experiences.length.toString() },
  { label: "Categories", value: categories.length.toString() },
  { label: "Average rating", value: averageRating.toFixed(1) },
];

export default async function ExperiencesPage({
  searchParams,
}: ExperiencesPageProps) {
  const params = await searchParams;
  const search = getParam(params.q).trim();
  const categoryParam = getParam(params.category);
  const destinationParam = getParam(params.destination);
  const selectedCategory = categories.includes(categoryParam)
    ? categoryParam
    : "";
  const selectedDestination = destinations.includes(destinationParam)
    ? destinationParam
    : "";
  const normalizedSearch = search.toLowerCase();

  const filteredExperiences = experiences.filter((experience) => {
    const matchesTitle = normalizedSearch
      ? experience.title.toLowerCase().includes(normalizedSearch)
      : true;
    const matchesCategory = selectedCategory
      ? experience.category === selectedCategory
      : true;
    const matchesDestination = selectedDestination
      ? experience.destination === selectedDestination
      : true;

    return matchesTitle && matchesCategory && matchesDestination;
  });

  return (
    <main className="bg-[#f6f3ee] px-4 py-10 text-slate-950 sm:px-6 sm:py-12 lg:px-8">
      <section className="mx-auto w-full max-w-7xl">
        <header className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-teal-700">
              Full travel catalog
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
              Explore every curated escape.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Search by title, narrow by travel style, or jump straight to a
              destination. The filters stay in the URL so the catalog is easy to
              share or revisit.
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-3 rounded-lg bg-white p-3 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:grid-cols-3 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg bg-slate-50 p-4">
                <dt className="text-xs font-semibold uppercase text-slate-400">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-2xl font-black text-slate-950">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <ExperienceFilters
          key={`${search}-${selectedCategory}-${selectedDestination}`}
          categories={categories}
          destinations={destinations}
          initialCategory={selectedCategory}
          initialDestination={selectedDestination}
          initialSearch={search}
          resultCount={filteredExperiences.length}
          totalCount={experiences.length}
        />

        {filteredExperiences.length > 0 ? (
          <section
            aria-label="Filtered travel experiences"
            className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </section>
        ) : (
          <section
            aria-live="polite"
            className="mt-10 rounded-lg bg-white p-8 text-center shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-12"
          >
            <p className="text-sm font-semibold uppercase text-teal-700">
              No matches
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              No experiences match those filters.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Try a broader title search, choose a different destination, or
              reset the filters to return to the full Wanderlust Explorer
              catalog.
            </p>
            <Link
              href="/experiences"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Reset filters
            </Link>
          </section>
        )}
      </section>
    </main>
  );
}
