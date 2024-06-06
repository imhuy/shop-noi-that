import DiscoverMoreSlider from "@/components/DiscoverMoreSlider";
import SectionGridFeatureItems from "@/components/SectionGridFeatureItems";
import SectionHero2 from "@/components/SectionHero/SectionHero2";
import SectionSliderCategories from "@/components/SectionSliderCategories/SectionSliderCategories";
import SectionSliderLargeProduct from "@/components/SectionSliderLargeProduct";
import SectionSliderProductCard from "@/components/SectionSliderProductCard";
import SectionSliderProductCard2 from "@/components/SectionSliderProductCard2";
import { PRODUCTS, SPORT_PRODUCTS } from "@/data/data";

function PageHome() {
  return (
    <div className='nc-PageHome relative overflow-hidden'>
      <SectionHero2 />

      <div className='mt-24 lg:mt-32'>
        <DiscoverMoreSlider />
      </div>

      <div className='container relative space-y-24 my-24 lg:space-y-32 lg:my-32'>
        <SectionSliderProductCard
          data={[PRODUCTS[4], SPORT_PRODUCTS[5], PRODUCTS[7], SPORT_PRODUCTS[1], PRODUCTS[6]]}
        />
        {/* <div className='py-24 lg:py-32 border-t border-b border-slate-200 dark:border-slate-700'>
          <SectionHowItWork />
        </div> */}
        {/* <SectionPromo1 /> */}

        {/* <div className='relative py-24 lg:py-32'>
          <BackgroundSection />
          <SectionGridMoreExplore />
        </div> */}
        <SectionSliderProductCard heading='Sản phẩm bán chạy' subHeading=' ' />
        <SectionSliderProductCard2 heading='Sản phẩm bán chạyxxx' subHeading=' ' />
        {/* <SectionPromo2 /> */}
        <SectionSliderLargeProduct cardStyle='style2' />
        <SectionSliderCategories />
        {/* <SectionPromo3 /> */}
        <SectionGridFeatureItems />
      </div>
    </div>
  );
}

export default PageHome;
