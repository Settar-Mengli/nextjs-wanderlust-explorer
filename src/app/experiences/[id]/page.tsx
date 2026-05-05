import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ExperienceCard from "@/components/ExperienceCard";
import FavoriteActionButton from "@/components/FavoriteActionButton";
import { experiences } from "@/data/experiences";

type ExperiencePageProps = {
  params: Promise<{ id: string }>;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function generateStaticParams() {
  return experiences.map((experience) => ({
    id: experience.id,
  }));
}

export async function generateMetadata({
  params,
}: ExperiencePageProps): Promise<Metadata> {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);

  if (!experience) {
    return {
      title: "Experience Not Found",
    };
  }

  return {
    title: experience.title,
    description: experience.description,
  };
}

export default async function ExperienceDetailPage({
  params,
}: ExperiencePageProps) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);

  if (!experience) {
    notFound();
  }

  const relatedExperiences = experiences
    .filter(
      (item) =>
        item.category === experience.category && item.id !== experience.id,
    )
    .slice(0, 3);

  return (
    <main className="bg-[#f6f3ee] text-slate-950">
      <article>
        <section className="relative isolate overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10">
            <Image
              src={experience.imageUrl}
              alt={`${experience.title} in ${experience.destination}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/25" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f6f3ee] to-transparent" />
          </div>

          <div className="mx-auto grid min-h-[68vh] w-full max-w-7xl gap-10 lg:grid-cols-[1fr_380px] lg:items-end">
            <header className="max-w-4xl py-16">
              <Link
                href="/experiences"
                className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white hover:text-slate-950"
              >
                Back to experiences
              </Link>
              <p className="mt-8 text-sm font-semibold uppercase text-amber-200">
                {experience.category}
              </p>
              <h1 className="mt-4 text-5xl font-black leading-[0.98] text-white sm:text-7xl">
                {experience.title}
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-white/80">
                {experience.destination}
              </p>
            </header>

            <aside className="rounded-lg bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.24)] backdrop-blur">
              <dl className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-slate-50 p-4">
                  <dt className="text-xs font-semibold uppercase text-slate-400">
                    Starting from
                  </dt>
                  <dd className="mt-2 text-2xl font-black text-slate-950">
                    {currencyFormatter.format(experience.price)}
                  </dd>
                </div>
                <div className="rounded-lg bg-amber-50 p-4">
                  <dt className="text-xs font-semibold uppercase text-amber-700/70">
                    Rating
                  </dt>
                  <dd className="mt-2 text-2xl font-black text-amber-700">
                    {experience.rating.toFixed(1)}
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-base leading-7 text-slate-600">
                {experience.description}
              </p>
              <FavoriteActionButton
                experienceId={experience.id}
                experienceTitle={experience.title}
              />
            </aside>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-teal-700">
                Experience overview
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                Designed for memorable, high-signal travel.
              </h2>
            </div>
            <div className="rounded-lg bg-white p-6 text-base leading-8 text-slate-600 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8">
              <p>{experience.description}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase text-slate-400">
                    Category
                  </p>
                  <p className="mt-2 font-bold text-slate-950">
                    {experience.category}
                  </p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase text-slate-400">
                    Destination
                  </p>
                  <p className="mt-2 font-bold text-slate-950">
                    {experience.destination}
                  </p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase text-slate-400">
                    Reference
                  </p>
                  <p className="mt-2 font-bold text-slate-950">
                    {experience.id}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      {relatedExperiences.length > 0 ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-teal-700">
                More {experience.category.toLowerCase()}
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Similar experiences
              </h2>
            </div>
            <Link
              href="/experiences"
              className="inline-flex w-fit items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              View full catalog
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {relatedExperiences.map((relatedExperience) => (
              <ExperienceCard
                key={relatedExperience.id}
                experience={relatedExperience}
              />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
