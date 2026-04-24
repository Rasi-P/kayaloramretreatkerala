import { Header } from "@/components/site/Header";
import { HeroGallery } from "@/components/site/HeroGallery";
import { Overview } from "@/components/site/Overview";
import { Rooms } from "@/components/site/Rooms";
import { Host } from "@/components/site/Host";
import { Location } from "@/components/site/Location";
import { Rules } from "@/components/site/Rules";
import { FAQ } from "@/components/site/FAQ";
import { AttractionsMarquee } from "@/components/site/AttractionsMarquee";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <>
      {/* SEO */}
      <title>Kayaloram Retreat Kerala — 102 Cinemon Lake View Homestay | Alleppey</title>
      <meta
        name="description"
        content="Book 102 Cinemon at Kayaloram Retreat — a lakefront homestay on Kerala's backwaters in Alleppey. Queen bed, free cancellation, ₹4,085/night."
      />
      <link rel="canonical" href="/" />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 md:pt-28">
          <HeroGallery />
          <Overview />
          <Rooms />
          <Host />
          <Location />
          <Rules />
          <FAQ />
          <AttractionsMarquee />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
