import { LuCircleArrowLeft } from "react-icons/lu";

const MainHeader = () => {
    return (
        <>
            <section>

                {/* section right => title website */}
                <div className="mt-8 w-[435px]">
                    <h3 className=" text-base font-vazirB font-medium text-NeutralSecondory mb-4">راحت و مطمئن خرید کنید!</h3>
                    <h1 className="text-3xl text-secondary font-vazirB font-medium mb-4">همراه تو در مسیر سلامتی</h1>
                    <h2 className="text-3xl text-primary font-vazirB font-medium mb-4">سهم بزرگ خودتان را امروز بگیرید!</h2>
                    <p className="text-base font-vazirB font-medium text-NeutralSecondory mb-4">بزرگترین حراج فصل فیت لند همین حالا شرع کن و محصولات با یه تخفیف شگفت انگیز بخر!</p>
                </div>
                <button className="flex items-center gap-x-2 bg-secondary px-6 py-3 rounded-sm hover:scale-110 transition-all duration-350 cursor-pointer"> 
                    <LuCircleArrowLeft className="w-6 h-6 text-white" />
                    <span className="text-base font-vazirB font-medium text-white">مشاهده محصولات</span>
                </button>
            </section>
        </>
    )
}
export default MainHeader