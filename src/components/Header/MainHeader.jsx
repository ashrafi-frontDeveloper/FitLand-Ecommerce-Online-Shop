import { LuCircleArrowLeft } from "react-icons/lu";
import { IoStorefrontOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { toPersianDigits } from "../../utils/ConvertToPersian";

const MainHeader = () => {
    return (
        <>
            <section className="flex">
                {/* section right => title website */}
                <div className="mt-8 w-96 xl:w-[435px]">
                    <h3 className="text-sm xl:text-base font-vazirB font-medium text-NeutralSecondory mb-4">راحت و مطمئن خرید کنید!</h3>
                    <h1 className="text-2xl xl:text-3xl text-secondary font-vazirB font-medium mb-4">همراه تو در مسیر سلامتی</h1>
                    <h2 className="text-2xl xl:text-3xl text-primary font-vazirB font-medium mb-4">سهم بزرگ خودتان را امروز بگیرید!</h2>
                    <p className="text-sm font-vazirB font-medium text-NeutralSecondory mb-4">بزرگترین حراج فصل فیت لند همین حالا شرع کن و محصولات با یه تخفیف شگفت انگیز بخر!</p>
                    <button className="flex items-center gap-x-2 bg-secondary px-4 xl:px-6 py-2 xl:py-3 rounded-sm hover:scale-110 transition-all duration-350 cursor-pointer"> 
                        <LuCircleArrowLeft className="w-6 h-6 text-white" />
                        <span className="text-base font-vazirB font-medium text-white">مشاهده محصولات</span>
                    </button>
                </div>
                {/* section center => image */}
                <div className="mt-5 relative z-40">
                    <img src="/public/images/run.png" alt="" className="w-96 xl:w[422px] h-96 xl:h-[475px]" />
                </div>
                {/* section left => information */}
                <div className="flex flex-col gap-y-3.5 xl:gap-y-6 mt-16 xl:mt-20 mr-20">
                    <div className="flex items-center gap-x-4">
                        <div className="bg-[#EBF5FF] w-16 xl:w-20 h-16 xl:h-20 rounded-2xl flex items-center justify-center hover:shadow-[0_4px_14px_rgba(0,0,0,0.1),0_-4px_16px_rgba(0,0,0,0.1),4px_0_16px_rgba(0,0,0,0.01),-4px_0_16px_rgba(0,0,0,0.1)] transition-all duration-350">
                            <IoStorefrontOutline className=" text-secondary w-7 xl:w-10 h-7 xl:h-10" />
                        </div>
                        <div className="flex flex-col font-vazirB font-medium">
                            <span className="text-secondary font-medium text-xl xl:text-2xl">{toPersianDigits(300)} +</span>
                            <span className="text-NeutralSecondory font-medium text-sm xl:text-base">محصولات متنوع</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div className="bg-[#EBF5FF] w-16 xl:w-20 h-16 xl:h-20 rounded-2xl flex items-center justify-center hover:shadow-[0_4px_14px_rgba(0,0,0,0.1),0_-4px_16px_rgba(0,0,0,0.1),4px_0_16px_rgba(0,0,0,0.01),-4px_0_16px_rgba(0,0,0,0.1)] transition-all duration-350">
                            <AiOutlineLike className=" text-secondary w-7 xl:w-10 h-7 xl:h-10" />
                        </div>
                        <div className="flex flex-col font-vazirB font-medium">
                            <span className="text-secondary font-medium text-xl xl:text-2xl">{toPersianDigits(95)} %</span>
                            <span className="text-NeutralSecondory font-medium text-sm xl:text-base">رضایت مشتری</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div className="bg-[#EBF5FF] w-16 xl:w-20 h-16 xl:h-20 rounded-2xl flex items-center justify-center hover:shadow-[0_4px_14px_rgba(0,0,0,0.1),0_-4px_16px_rgba(0,0,0,0.1),4px_0_16px_rgba(0,0,0,0.01),-4px_0_16px_rgba(0,0,0,0.1)] transition-all duration-350">
                            <IoCalendarNumberOutline className=" text-secondary w-7 xl:w-10 h-7 xl:h-10" />
                        </div>
                        <div className="flex flex-col font-vazirB font-medium">
                            <span className="text-secondary font-medium text-xl xl:text-2xl">{toPersianDigits(4)} روز</span>
                            <span className="text-NeutralSecondory font-medium text-sm xl:text-base">از خرید تا دریافت</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MainHeader