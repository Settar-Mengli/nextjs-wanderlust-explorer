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
    <main className="bg-[#f6f3ee] text-slate-950">
      <section className="relative isolate overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <Image
            src={featuredExperience.imageUrl}
            alt="A scenic travel landscape for Wanderlust Explorer"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#f6f3ee] to-transparent" />
        </div>

        <div className="mx-auto flex min-h-[72vh] w-full max-w-7xl flex-col justify-end gap-10 py-10 sm:py-14">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase text-amber-200">
              Premium travel inspiration
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl">
              Wanderlust Explorer
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              Discover cinematic escapes, culture-rich cities, wild landscapes,
              and restorative retreats curated for travelers who want every trip
              to feel unforgettable.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/experiences"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-amber-100"
              >
                Browse all experiences
              </Link>
              <Link
                href="/favorites"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                View favorites
              </Link>
            </div>
          </div>

          <dl className="grid gap-3 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg bg-white/90 px-5 py-4 shadow-sm backdrop-blur"
              >
                <dt className="text-sm font-medium text-slate-500">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-2xl font-black text-slate-950">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-teal-700">
              Featured collection
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Six standout escapes to start your search.
            </h2>
          </div>
          <Link
            href="/experiences"
            className="inline-flex w-fit items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            See all 100
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featuredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>
    </main>
  );
}
