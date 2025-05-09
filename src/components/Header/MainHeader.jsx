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
                <div className="mt-8 w-[435px]">
                    <h3 className=" text-base font-vazirB font-medium text-NeutralSecondory mb-4">راحت و مطمئن خرید کنید!</h3>
                    <h1 className="text-3xl text-secondary font-vazirB font-medium mb-4">همراه تو در مسیر سلامتی</h1>
                    <h2 className="text-3xl text-primary font-vazirB font-medium mb-4">سهم بزرگ خودتان را امروز بگیرید!</h2>
                    <p className="text-base font-vazirB font-medium text-NeutralSecondory mb-4">بزرگترین حراج فصل فیت لند همین حالا شرع کن و محصولات با یه تخفیف شگفت انگیز بخر!</p>
                    <button className="flex items-center gap-x-2 bg-secondary px-6 py-3 rounded-sm hover:scale-110 transition-all duration-350 cursor-pointer"> 
                        <LuCircleArrowLeft className="w-6 h-6 text-white" />
                        <span className="text-base font-vazirB font-medium text-white">مشاهده محصولات</span>
                    </button>
                </div>
                {/* section center => image */}
                <div className="mt-5">
                    <img src="images/running man.png" alt="" className=" relative" />
                    <img src="images/bottom runninig.png" alt="" className=" absolute" />
                </div>
                {/* section left => information */}
                <div className="flex flex-col gap-y-6 mt-20 mr-20">
                    <div className="flex items-center gap-x-4">
                        <div className="bg-[#EBF5FF] w-20 h-20 rounded-2xl flex items-center justify-center">
                            <IoStorefrontOutline className=" text-secondary w-10 h-10" />
                        </div>
                        <div className="flex flex-col font-vazirB font-medium">
                            <span className="text-secondary font-medium text-2xl">{toPersianDigits(300)} +</span>
                            <span className="text-NeutralSecondory font-medium text-base">محصولات متنوع</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div className="bg-[#EBF5FF] w-20 h-20 rounded-2xl flex items-center justify-center">
                            <AiOutlineLike className=" text-secondary w-10 h-10" />
                        </div>
                        <div className="flex flex-col font-vazirB font-medium">
                            <span className="text-secondary font-medium text-2xl">{toPersianDigits(95)} %</span>
                            <span className="text-NeutralSecondory font-medium text-base">رضایت مشتری</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div className="bg-[#EBF5FF] w-20 h-20 rounded-2xl flex items-center justify-center">
                            <IoCalendarNumberOutline className=" text-secondary w-10 h-10" />
                        </div>
                        <div className="flex flex-col font-vazirB font-medium">
                            <span className="text-secondary font-medium text-2xl">{toPersianDigits(4)} روز</span>
                            <span className="text-NeutralSecondory font-medium text-base">از خرید تا دریافت</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MainHeader