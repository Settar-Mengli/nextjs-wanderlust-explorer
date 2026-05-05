import FavoritesPageClient from "@/components/FavoritesPageClient";
import { experiences } from "@/data/experiences";

export const metadata = {
  title: "Favorites",
  description:
    "Review saved Wanderlust Explorer travel experiences and plan future trips.",
};

export default function FavoritesPage() {
  return (
    <main className="bg-[#f7f3eb] px-4 py-10 text-[#151515] sm:px-6 sm:py-14 lg:px-8">
      <FavoritesPageClient experiences={experiences} />
    </main>
  );
}
