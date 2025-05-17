import { toPersianDigits } from "../../utils/ConvertToPersian"
import { LuCircleArrowLeft } from "react-icons/lu";
import { FcVip } from "react-icons/fc";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { useRef } from 'react';


const products = [
    {id: 1, img: 'images/discound-product/img2.jpg' , name: 'سویشرت نایک مدل AO-14' , price: 300_000 , size: 'از سایز L تا XXL' , discound: 0 , VIP: true},
    {id: 2, img: 'images/discound-product/img3.png' , name: 'ست نایک مدل S-2000', price: 200_000, size: 'از سایز L تا XXL' , discound: 24 , VIP: false},
    {id: 3, img: 'images/discound-product/img1.png', name: 'کفش نایک مدل S-2000', price: 200_000, size: 'از سایز L تا XXL' , discound: 24 , VIP: false},
    {id: 6, img: 'images/discound-product/img2.jpg' , name: 'سویشرت نایک مدل AO-14' , price: 300_000 , size: 'از سایز L تا XXL' , discound: 0 , VIP: true},
    {id: 4, img: 'images/discound-product/img3.png' , name: 'ست نایک مدل S-2000', price: 200_000, size: 'از سایز L تا XXL' , discound: 24 , VIP: false},
    {id: 5, img: 'images/discound-product/img1.png', name: 'کفش نایک مدل S-2000', price: 200_000, size: 'از سایز L تا XXL' , discound: 24 , VIP: false},
]

const SpecialDiscounts = () => {
    const productContainerRef = useRef(null);

    const scrollLeft = () => {
        productContainerRef.current.scrollLeft -= 300;
    };

    const scrollRight = () => {
        productContainerRef.current.scrollLeft += 300;
    };

    return (
        <div className="container h-[350px] md:h-[400px] lg:h-[450px] xl:h-[600px] px-0 xl:px-4 p-0 2xl:px-10 pt-8 mx-auto mb-20 mt-20 w-full">
            {/* title */}
            <div className="relative flex items-center justify-center">
                <span className="absolute -top-14 rounded-3xl text-2xl 2xl:text-3xl font-vazirB font-bold bg-white px-10 py-2.5">تخفیفات ویژه</span>
            </div>

            {/* مشاهده همه */}
            <div className="relative">
                <a href="#" className="flex items-center justify-end gap-x-2 absolute left-10 lg:left-0 top-10">
                    <LuCircleArrowLeft />
                    <span>مشاهده همه</span>
                </a>
            </div>

            {/* products with arrows */}
            <div className="flex items-center justify-center sm:justify-between gap-x-2 lg:gap-x-0 mt-8">
                {/* arrow right */}
                <div className="hidden sm:block">
                    <RiArrowRightSLine onClick={scrollRight} className="w-8 h-8 cursor-pointer" />
                </div>

                {/* products container */}
                <div ref={productContainerRef} className="flex overflow-x-auto no-scrollbar gap-4 scroll-smooth">
                    {products.map(product => (
                        <div key={product.id} className="relative w-[163px] sm:w-64 lg:w-72 xl:w-[366px] h-72 md:h-80 lg:h-96 xl:h-[467px] mt-20 bg-white rounded-4xl shrink-0">
                            {/* VIP */}
                            {product.VIP && (
                                <div className="absolute left-2 top-2.5 z-10 animate-wiggle">
                                    <FcVip className="w-7 lg:w-10 h-7 lg:h-10" />
                                </div>
                            )}
                            {/* discount */}
                            {product.discound > 0 && (
                                <div className="absolute right-2 top-2.5 z-10 ml-12 animate-wiggle">
                                    <span className="bg-secondarySky w-7 lg:w-10 h-7 lg:h-10 p-1 rounded-full flex items-center justify-center text-white text-[12px] lg:text-sm font-vazirB">
                                        %{toPersianDigits(product.discound)}
                                    </span>
                                </div>
                            )}
                            {/* image */}
                            <img src={product.img} alt="" className="rounded-4xl" />
                            {/* details */}
                            <div className="mt-4 p-4 flex flex-col">
                                <h6 className="text-[12px] md:text-sm xl:text-base font-bold">{product.name}</h6>
                                <span>{toPersianDigits(product.price)} تومان</span>
                                <span className="text-sm sm:text-base">{product.size}</span>
                                <div className="flex relative mt-2">
                                    <span className="absolute right-5 lg:right-6 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-black"></span>
                                    <span className="absolute right-3 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-secondaryCBCBCB"></span>
                                    <span className="absolute right-1 lg:right-0 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-black"></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* arrow left */}
                <div className="hidden sm:block">
                    <RiArrowLeftSLine onClick={scrollLeft} className="w-8 h-8 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};




export default SpecialDiscounts