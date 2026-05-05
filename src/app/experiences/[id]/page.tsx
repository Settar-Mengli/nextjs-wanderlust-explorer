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
    <main className="bg-[#f7f3eb] text-[#151515]">
      <article>
        <section className="relative isolate overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10">
            <Image
              src={experience.imageUrl}
              alt={`${experience.title} in ${experience.destination}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/25" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#f7f3eb] to-transparent" />
          </div>

          <div className="mx-auto grid min-h-[68vh] w-full max-w-7xl gap-8 pb-10 pt-16 sm:min-h-[72vh] lg:grid-cols-[1fr_380px] lg:items-end lg:pt-24">
            <header className="max-w-4xl">
              <Link
                href="/experiences"
                className="inline-flex border border-white/35 bg-white/10 px-4 py-2 text-sm font-black text-white backdrop-blur transition hover:bg-white hover:text-[#151515]"
              >
                Back to experiences
              </Link>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#d8c184] sm:tracking-[0.24em]">
                {experience.category} / {experience.destination}
              </p>
              <h1 className="mt-4 max-w-5xl text-4xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
                {experience.title}
              </h1>
              <div className="mt-6 h-px w-full max-w-xl bg-white/35" />
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-xl sm:leading-8">
                {experience.description}
              </p>
            </header>

            <aside className="border border-white/40 bg-[#fffdf8]/95 p-5 shadow-[0_22px_60px_rgba(0,0,0,0.22)] backdrop-blur sm:p-6">
              <dl className="grid grid-cols-2 gap-px overflow-hidden border border-stone-300 bg-stone-300">
                <div className="bg-[#fffdf8] p-4">
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">
                    Starting from
                  </dt>
                  <dd className="mt-2 text-2xl font-black text-[#151515]">
                    {currencyFormatter.format(experience.price)}
                  </dd>
                </div>
                <div className="bg-[#f1ecd8] p-4">
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[#777536]">
                    Rating
                  </dt>
                  <dd className="mt-2 text-2xl font-black text-[#777536]">
                    {experience.rating.toFixed(1)}
                  </dd>
                </div>
              </dl>
              <div className="mt-6 grid gap-4 border-t border-stone-300 pt-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">
                    Destination
                  </p>
                  <p className="mt-2 text-base font-black text-[#151515]">
                    {experience.destination}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">
                    Travel style
                  </p>
                  <p className="mt-2 text-base font-black text-[#151515]">
                    {experience.category}
                  </p>
                </div>
              </div>
              <FavoriteActionButton
                experienceId={experience.id}
                experienceTitle={experience.title}
              />
            </aside>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 border-y border-stone-300 py-9 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#777536]">
                Field story
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                A considered route into the texture of place.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-stone-600">
                Built around clear context, generous pacing, and a strong sense
                of arrival, this experience keeps the focus on what makes the
                destination memorable.
              </p>
            </div>
            <div className="bg-[#fffdf8] p-5 text-base leading-8 text-stone-600 shadow-[0_16px_40px_rgba(21,21,21,0.06)] sm:p-8">
              <p className="text-lg leading-8 text-[#151515] sm:text-xl sm:leading-9">
                {experience.description}
              </p>
              <div className="mt-8 grid gap-px overflow-hidden border border-stone-300 bg-stone-300 sm:grid-cols-3">
                <div className="bg-[#f7f3eb] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">
                    Category
                  </p>
                  <p className="mt-2 font-black text-[#151515]">
                    {experience.category}
                  </p>
                </div>
                <div className="bg-[#f7f3eb] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">
                    Destination
                  </p>
                  <p className="mt-2 font-black text-[#151515]">
                    {experience.destination}
                  </p>
                </div>
                <div className="bg-[#f7f3eb] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">
                    Reference
                  </p>
                  <p className="mt-2 font-black text-[#151515]">
                    {experience.id}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      {relatedExperiences.length > 0 ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#777536]">
                More {experience.category.toLowerCase()}
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Similar experiences
              </h2>
            </div>
            <Link
              href="/experiences"
              className="inline-flex w-fit items-center justify-center border border-[#151515] bg-white px-5 py-3 text-sm font-black text-[#151515] transition hover:-translate-y-0.5 hover:bg-[#151515] hover:text-white"
            >
              View full catalog
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
