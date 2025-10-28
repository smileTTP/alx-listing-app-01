import CategoryIcon from "@/components/layout/CategoryIcon";
import { CATEGORIES } from "@/constants";

export default function Home() {
  return (
    <div>
      <div className="flex items-center gap-9 justify-center">
            {
                CATEGORIES.map((item, index) => (
                    <CategoryIcon key={index} src={item.src} alt={item.alt} />
            ))
            }
        </div>
    </div>
  );
}
