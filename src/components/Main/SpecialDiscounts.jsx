import { toPersianDigits } from "../../utils/ConvertToPersian"

const SpecialDiscounts = () => {
    return (
        <>
            <div className="container h-[600px] px-0 xl:px-4 p-0 2xl:px-10 pt-8 mx-auto mb-20 w-full">
                {/* title section */}
                <div className=" relative flex items-center justify-center ">
                    <span className=" absolute -top-14 rounded-3xl text-2xl 2xl:text-3xl font-vazirB font-bold bg-white px-10 py-2.5">تخفیفات ویژه</span>
                </div>
                {/* products */}
                <div className="">
                    {/* product */}
                    <div className="w-[366px] h-[467px] mt-20">
                        {/* img */}
                        <img src="images/discound-product/img2.jpg" alt="" className="" />
                        {/* details */}
                        <div className="mt-4">
                            <div className="flex flex-col gap-y-2">
                                <h6 className="" >سویشرت نایک مدل AO-14</h6>
                                <span>{toPersianDigits(300000)} تومان</span>
                                <span>از سایز L تا XXL</span>
                            </div>
                            <div className="flex relative mt-2">
                                <span className=" absolute right-6 inline-block w-5 h-5 rounded-full bg-black"></span>
                                <span className=" absolute right-3 inline-block w-5 h-5 rounded-full bg-NeutralSecondory"></span>
                                <span className=" absolute inline-block w-5 h-5 rounded-full bg-black"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpecialDiscounts