import Card from "@/components/common/Card";
import CategoryIcon from "@/components/layout/CategoryIcon";
import { CATEGORIES } from "@/constants";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

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
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
          {
            PROPERTYLISTINGSAMPLE.map((item, index) => (
              <div key={index} className="px-4 py-6">
              <Card image={item.image} name={item.name} address={item.address} rating={item.rating} offers={item.offers} price={item.price} category={item.category} discount={item.discount} description={item.description} images={item.images}/>
              </div>
            ))
          }
        </div>
        <div className="flex justify-center py-20 text-[20px] text-medium">
          <div className="flex flex-col items-center">
          <button type="button" className="bg-black px-6 py-3 h-[25] w-[106] rounded-full text-white text-nowrap text-center">
            Show more
          </button>
          <p className="text-black text-nowrap py-4">Click to see more listings</p>
          </div>
        </div>
    </div>
  );
}
