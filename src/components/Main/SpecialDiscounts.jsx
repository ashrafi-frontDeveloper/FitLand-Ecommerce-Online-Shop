import { toPersianDigits } from "../../utils/ConvertToPersian"
import { FcVip } from "react-icons/fc";

const products = [
    {id: 1, img: '/public/images/discound-product/img2.jpg' , name: 'سویشرت نایک مدل AO-14' , price: 300_000 , size: 'از سایز L تا XXL' , discound: 0 , VIP: true},
    {id: 2, img: 'images/discound-product/img3.png' , name: 'ست نایک مدل S-2000', price: 200_000, size: 'از سایز L تا XXL' , discound: 24 , VIP: false},
    {id: 3, img: 'images/discound-product/img1.png', name: 'کفش نایک مدل S-2000', price: 200_000, size: 'از سایز L تا XXL' , discound: 24 , VIP: false},
]

const SpecialDiscounts = () => {


    return (
        <>
            <div className="container h-[600px] px-0 xl:px-4 p-0 2xl:px-10 pt-8 mx-auto mb-20 w-full">
                {/* title section */}
                <div className=" relative flex items-center justify-center ">
                    <span className=" absolute -top-14 rounded-3xl text-2xl 2xl:text-3xl font-vazirB font-bold bg-white px-10 py-2.5">تخفیفات ویژه</span>
                </div>
                {/* products */}
                <div className="flex items-center justify-between">
                    {/* product */}
                    {
                    products.map(product => (

                        <div className=" relative w-[366px] h-[467px] mt-20 bg-white rounded-4xl">
                            {/* icon VIP */}
                            {product.VIP && (
                            <div className="absolute left-2 top-2.5 z-10">
                                <FcVip className="w-10 h-10" />
                            </div>
                            )}
                            {/* icon discound */}
                            {product.discound > 0 && (
                            <div className="absolute right-2 top-2.5 z-10 ml-12">
                                <span className="bg-secondarySky w-10 h-10 p-1 rounded-full flex items-center justify-center text-white text-sm font-vazirB">
                                %{toPersianDigits(product.discound)}
                                </span>
                            </div>
                            )}
                            {/* img */}
                            <img src={product.img} alt="" className=" rounded-4xl" />
                            {/* details */}
                            <div className="mt-4 p-4">
                                <div className="flex flex-col gap-y-2">
                                    <h6 className="" >{product.name}</h6>
                                    <span>{toPersianDigits(product.price)} تومان</span>
                                    <span>{product.size}</span>
                                </div>
                                <div className="flex relative mt-2">
                                    <span className=" absolute right-6 inline-block w-5 h-5 rounded-full bg-black"></span>
                                    <span className=" absolute right-3 inline-block w-5 h-5 rounded-full bg-secondaryCBCBCB"></span>
                                    <span className=" absolute inline-block w-5 h-5 rounded-full bg-black"></span>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export default SpecialDiscounts