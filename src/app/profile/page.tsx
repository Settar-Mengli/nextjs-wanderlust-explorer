import Link from "next/link";
import FavoriteCount from "@/components/FavoriteCount";
import { experiences } from "@/data/experiences";

export const metadata = {
  title: "Profile",
  description:
    "View a polished mock traveler profile for the Wanderlust Explorer portfolio app.",
};

export default function ProfilePage() {
  return (
    <main className="bg-[#f6f3ee] px-4 py-12 text-slate-950 sm:px-6 lg:px-8">
      <section className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-lg bg-slate-950 p-8 text-white shadow-[0_22px_70px_rgba(15,23,42,0.16)]">
          <div className="grid size-24 place-items-center rounded-lg bg-white text-3xl font-black text-slate-950">
            SM
          </div>
          <p className="mt-8 text-sm font-semibold uppercase text-amber-200">
            Explorer profile
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight">
            Settar Mengli
          </h1>
          <p className="mt-4 text-base leading-7 text-white/70">
            A mock portfolio traveler profile designed to preview saved
            experiences, planning stats, and discovery preferences without a
            backend.
          </p>

          <Link
            href="/experiences"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-100"
          >
            Explore catalog
          </Link>
        </aside>

        <div className="space-y-8">
          <section className="rounded-lg bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase text-teal-700">
                  Travel dashboard
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight">
                  Your planning snapshot
                </h2>
              </div>
              <span className="w-fit rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                Mock account
              </span>
            </div>

            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-slate-50 p-5">
                <dt className="text-xs font-semibold uppercase text-slate-400">
                  Available experiences
                </dt>
                <dd className="mt-3 text-3xl font-black text-slate-950">
                  {experiences.length}
                </dd>
              </div>
              <div className="rounded-lg bg-rose-50 p-5">
                <dt className="text-xs font-semibold uppercase text-rose-400">
                  Saved favorites
                </dt>
                <dd className="mt-3 text-3xl font-black text-rose-600">
                  <FavoriteCount />
                </dd>
              </div>
              <div className="rounded-lg bg-slate-50 p-5">
                <dt className="text-xs font-semibold uppercase text-slate-400">
                  Planned trips
                </dt>
                <dd className="mt-3 text-3xl font-black text-slate-950">0</dd>
              </div>
            </dl>
          </section>

          <section className="grid gap-4 md:grid-cols-2">
            <article className="rounded-lg bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <p className="text-sm font-semibold uppercase text-slate-400">
                Favorite style
              </p>
              <h3 className="mt-3 text-2xl font-black">Cinematic discovery</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Wide landscapes, meaningful local context, and premium
                experiences that feel thoughtfully selected.
              </p>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <p className="text-sm font-semibold uppercase text-slate-400">
                Next step
              </p>
              <h3 className="mt-3 text-2xl font-black">Build a shortlist</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Use the experiences catalog to explore destinations while the
                favorites page waits for a future saved-state feature.
              </p>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}
