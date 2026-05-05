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
    <main className="bg-[#f7f3eb] px-4 py-10 text-[#151515] sm:px-6 sm:py-14 lg:px-8">
      <section className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <aside className="bg-[#050815] p-6 text-white shadow-[0_20px_60px_rgba(21,21,21,0.14)] sm:p-8">
          <div className="grid size-20 place-items-center bg-white text-3xl font-black text-[#151515] sm:size-24">
            SM
          </div>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#d8c184]">
            Explorer profile
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight">
            Settar Mengli
          </h1>
          <p className="mt-4 text-base leading-7 text-white/70">
            A mock portfolio traveler profile designed to preview saved
            experiences, planning stats, and discovery preferences without a
            backend.
          </p>

          <Link
            href="/experiences"
            className="mt-8 inline-flex items-center justify-center border border-white bg-white px-6 py-3 text-sm font-black text-[#151515] transition hover:-translate-y-0.5 hover:bg-[#d8c184]"
          >
            Explore catalog
          </Link>
        </aside>

        <div className="space-y-6">
          <section className="border border-stone-300 bg-[#fffdf8] p-6 shadow-[0_16px_40px_rgba(21,21,21,0.06)] sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#777536]">
                  Travel dashboard
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                  Your planning snapshot
                </h2>
              </div>
              <span className="w-fit bg-[#ecf7e8] px-4 py-2 text-sm font-black text-[#316b44]">
                Mock account
              </span>
            </div>

            <dl className="mt-7 grid gap-px overflow-hidden border border-stone-300 bg-stone-300 sm:grid-cols-3">
              <div className="bg-[#f7f3eb] p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">
                  Available experiences
                </dt>
                <dd className="mt-3 text-3xl font-black text-[#151515]">
                  {experiences.length}
                </dd>
              </div>
              <div className="bg-[#f8e8e8] p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[#9a5160]">
                  Saved favorites
                </dt>
                <dd className="mt-3 text-3xl font-black text-[#a41445]">
                  <FavoriteCount />
                </dd>
              </div>
              <div className="bg-[#f7f3eb] p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">
                  Planned trips
                </dt>
                <dd className="mt-3 text-3xl font-black text-[#151515]">0</dd>
              </div>
            </dl>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            <article className="border border-stone-300 bg-[#fffdf8] p-6 shadow-[0_16px_40px_rgba(21,21,21,0.06)]">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">
                Favorite style
              </p>
              <h3 className="mt-3 text-2xl font-black">Cinematic discovery</h3>
              <p className="mt-4 leading-7 text-stone-600">
                Wide landscapes, meaningful local context, and premium
                experiences that feel thoughtfully selected.
              </p>
            </article>
            <article className="border border-stone-300 bg-[#fffdf8] p-6 shadow-[0_16px_40px_rgba(21,21,21,0.06)]">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">
                Next step
              </p>
              <h3 className="mt-3 text-2xl font-black">Build a shortlist</h3>
              <p className="mt-4 leading-7 text-stone-600">
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
