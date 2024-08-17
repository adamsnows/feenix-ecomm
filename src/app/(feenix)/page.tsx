import GridCards from "@/components/grid-cards";
import Hero from "@/components/hero";
import SwiperCards from "@/components/swiper";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <GridCards />
      <SwiperCards />
      <GridCards />
      <SwiperCards />
    </div>
  );
}
