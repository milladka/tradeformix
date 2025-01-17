import { BannerArea } from "./components/home/bannerArea";
import { BestDealSectionOne } from "./components/home/best-deal-section-01";
import  {CategorySection} from "./components/home/category";
import { CtaTwo } from "./components/home/ctaTwo";
import { FeaturedProducts } from "./components/home/featuredProducts";
import { FeaturesSectionOne } from "./components/home/features-section-01";
import { Newsletter } from "./components/home/newslatter";
import { NewsSection } from "./components/home/newsSection";
import { ProductSectionThree } from "./components/home/productSectionTthree";
import { SectionBanner } from "./components/home/sectionBanner";

export default function Home() {

  return (
    <div>
      <BannerArea />
      <FeaturesSectionOne />
      <BestDealSectionOne />
      <CategorySection />
      {/* <FeaturedProducts /> */}
      <SectionBanner />
      <ProductSectionThree />
      <CtaTwo />
      <NewsSection />
      <Newsletter />

    </div>
  );
}
