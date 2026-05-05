import FavoritesPageClient from "@/components/FavoritesPageClient";
import { experiences } from "@/data/experiences";

export const metadata = {
  title: "Favorites",
  description:
    "Review saved Wanderlust Explorer travel experiences and plan future trips.",
};

export default function FavoritesPage() {
  return (
    <main className="bg-[#f6f3ee] px-4 py-12 text-slate-950 sm:px-6 lg:px-8">
      <FavoritesPageClient experiences={experiences} />
    </main>
  );
}
