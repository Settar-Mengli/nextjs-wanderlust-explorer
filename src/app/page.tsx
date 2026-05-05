import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Premium Travel Experiences",
  description:
    "Discover featured adventure, culture, food, wellness, and nature escapes from Wanderlust Explorer.",
};

const featuredExperience = experiences[0];
const featuredExperiences = experiences.slice(0, 6);
const editorialStories = [experiences[1], experiences[4], experiences[7]];
const averageRating =
  experiences.reduce((total, experience) => total + experience.rating, 0) /
  experiences.length;
const categoryCount = new Set(
  experiences.map((experience) => experience.category),
).size;
const destinationCount = new Set(
  experiences.map((experience) => experience.destination),
).size;

const stats = [
  { label: "Curated trips", value: `${experiences.length}+` },
  { label: "Destinations", value: `${destinationCount}+` },
  { label: "Travel styles", value: `${categoryCount}` },
  { label: "Average rating", value: averageRating.toFixed(1) },
];

export default function Home() {
  return (
    <main className="bg-[#f7f3eb] text-[#151515]">
      <section className="relative isolate overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <Image
            src={featuredExperience.imageUrl}
            alt="A scenic travel landscape for Wanderlust Explorer"
            fill
            priority
            sizes="100vw"
            className="hero-drift object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f3eb] to-transparent" />
        </div>

        <div className="mx-auto flex min-h-[72vh] w-full max-w-7xl flex-col justify-end gap-7 pb-8 pt-20 sm:min-h-[76vh] sm:pb-12 lg:pt-28">
          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#d8c184]">
              Issue 01 / Premium travel inspiration
            </p>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] text-white sm:text-7xl lg:text-8xl">
              Wanderlust Explorer
            </h1>
            <div className="mt-7 h-px w-full max-w-2xl bg-white/35" />
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              Discover cinematic escapes, culture-rich cities, wild landscapes,
              and restorative retreats curated for travelers who want every trip
              to feel unforgettable.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/experiences"
                className="inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-black text-[#151515] shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#d8c184]"
              >
                Browse all experiences
              </Link>
              <Link
                href="/favorites"
                className="inline-flex items-center justify-center border border-white/40 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                View favorites
              </Link>
            </div>
          </div>

          <dl className="grid gap-px overflow-hidden border border-white/20 bg-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#f7f3eb]/95 px-5 py-4 backdrop-blur"
              >
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-3xl font-black text-[#151515]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        aria-labelledby="editorial-stories-title"
        className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="grid gap-6 border-y border-stone-300 py-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#777536]">
              Field notes
            </p>
            <h2
              id="editorial-stories-title"
              className="mt-3 text-4xl font-black tracking-tight text-[#151515] sm:text-5xl"
            >
              Stories for the restless.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-stone-600">
            Curated journeys for travelers drawn to texture, place, and a
            little edge: quiet rituals, elemental landscapes, and mornings that
            begin before the city has fully opened its eyes.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {editorialStories.map((experience) => (
            <Link
              key={experience.id}
              href={`/experiences/${experience.id}`}
              className="group block overflow-hidden bg-[#151515] text-white shadow-[0_18px_45px_rgba(21,21,21,0.10)]"
            >
              <article className="flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-300">
                  <Image
                    src={experience.imageUrl}
                    alt={`${experience.title} in ${experience.destination}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <p className="absolute left-5 top-5 bg-[#f7f3eb] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#151515]">
                    {experience.category}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d8c184]">
                    {experience.destination}
                  </p>
                  <h3 className="mt-3 text-xl font-black leading-tight sm:text-2xl">
                    {experience.title}
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/70">
                    {experience.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#777536]">
              Featured collection
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#151515] sm:text-5xl">
              Six standout escapes to start your search.
            </h2>
          </div>
          <Link
            href="/experiences"
            className="inline-flex w-fit items-center justify-center border border-[#151515] bg-[#151515] px-5 py-3 text-sm font-black text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-white hover:text-[#151515]"
          >
            See all 100
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>
    </main>
  );
}
