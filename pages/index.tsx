import CategoryIcon from "@/components/layout/CategoryIcon";
import { CATEGORIES } from "@/constants";

export default function Home() {
  return (
    <div className="max-w-[1728px]">
      <div className="flex gap-2 justify-center py-2 px-2 max-w-[1728px] min-w-[430px] overflow-hidden">
            {
                CATEGORIES.map((item, index) => (
                    <CategoryIcon src={item.src} alt={item.alt} key={index}/>
            ))
            }
        </div>
        <div className="mx-auto px-4 py-0 container">
        <div style={{ backgroundImage: "url('/assets/images/Image 1.jpg')"}}
          className="max-w-[1608px] max-h-[481px] min-w-[389px] min-h-[296px] rounded-3xl bg-cover bg-center flex flex-col items-center justify-center text-white gap-4">
            <h1 className="font-sans font-semibold max-w-[867px] lg:text-[94px] md:text-[68.63px] sm:text-[28.28px] text-center drop-shadow-2xl p-4">
            Find your favorite place here!
            </h1>
            <p className="lg:text-[24px] md:text-[18px] sm:text-[7.42px] text-center p-2">
            The best prices for over 2 million properties worldwide
            </p>
        </div>
        </div>
    </div>
  );
}
