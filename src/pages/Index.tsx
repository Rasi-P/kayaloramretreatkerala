import { Header } from "@/components/site/Header";
import { HeroGallery } from "@/components/site/HeroGallery";
import { Overview } from "@/components/site/Overview";
import { Rooms } from "@/components/site/Rooms";
import { NatureSection } from "@/components/site/NatureSection";
import { Amenities } from "@/components/site/Amenities";
import { Location } from "@/components/site/Location";
import { GallerySection } from "@/components/site/GallerySection";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <>
      {/* SEO */}
      <title>Kayaloram Retreat Kerala</title>
      <meta
        name="description"
        content="Book Kayaloram Retreat — a lakefront homestay on Kerala's backwaters in Alleppey."
      />
      <link rel="canonical" href="/" />

      <div className="min-h-screen bg-[#F8FAFC]">
        {/* We use a lighter background as seen in the mockup for the main body */}
        <Header />
        <main className="w-full">
          <HeroGallery />
          <Overview />
          <Rooms />
          <NatureSection />
          <Amenities />
          <Location />
          <GallerySection />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

