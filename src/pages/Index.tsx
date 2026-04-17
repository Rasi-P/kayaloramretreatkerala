import { Header } from "@/components/site/Header";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { HeroGallery } from "@/components/site/HeroGallery";
import { BookingBar } from "@/components/site/BookingBar";
import { Overview } from "@/components/site/Overview";
import { Rooms } from "@/components/site/Rooms";
import { Host } from "@/components/site/Host";
import { Location } from "@/components/site/Location";
import { Rules } from "@/components/site/Rules";
import { SimilarProperties } from "@/components/site/SimilarProperties";
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
        <main>
          <Breadcrumbs />
          <HeroGallery />
          <BookingBar />
          <Overview />
          <Rooms />
          <Host />
          <Location />
          <Rules />
          <SimilarProperties />
          <FAQ />
          <AttractionsMarquee />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
