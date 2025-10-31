import Image from "next/image";
import { FaStar } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
    return (
    <div className="mt-8">
        <h3 className="text-2xl font-semibold">Reviews</h3>
        <div className="grid grid-cols-2 gap-4 p-2 mt-2">
        {reviews.map((review, index) => (
        <div key={index} className="border-b border-gray-200 pb-4 mb-4 col-span-1 w-[250.13604736328125px] h-[162.3634490966797px]">
            <div className="flex items-center">
            <Image src={review.avatar} alt={review.name} width={48} height={48} className="rounded-full mr-4" />
            <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-yellow-500 flex items-center space-x-2"><FaStar/><p>{review.rating}</p></p>
            </div>
            </div>
            <p className="text-[11px] font-medium py-2">{review.comment}</p>
        </div>
        ))}
        </div>
    </div>
    );
};

export default ReviewSection;