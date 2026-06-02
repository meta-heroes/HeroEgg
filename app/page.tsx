import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FirstViewSection } from "@/components/sections/FirstViewSection";
import { ContentSliderSection } from "@/components/sections/ContentSliderSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { EventSection } from "@/components/sections/EventSection";
import { TopicsSection } from "@/components/sections/TopicsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { TrackRecordSection } from "@/components/sections/TrackRecordSection";
import { SponsorSection } from "@/components/sections/SponsorSection";
import { SupporterSection } from "@/components/sections/SupporterSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { FAQPreviewSection } from "@/components/sections/FAQPreviewSection";
import { ContactCTASection } from "@/components/sections/ContactCTASection";
import { getBlogs, toBlogCardData } from "@/lib/microcms";

export default async function Home() {
  // トップのTopics/Newsに表示する最新ブログ記事（microCMS）
  const { contents } = await getBlogs({ limit: 6 });
  const latestPosts = contents.map(toBlogCardData);

  return (
    <>
      <Header />
      <main>
        <FirstViewSection />
        <ContentSliderSection />
        <VisionSection />
        <EventSection />
        <TopicsSection posts={latestPosts} />
        <FeaturesSection />
        <ServiceSection />
        <TrackRecordSection />
        <SponsorSection />
        <SupporterSection />
        <NewsSection posts={latestPosts.slice(0, 5)} />
        <FAQPreviewSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
