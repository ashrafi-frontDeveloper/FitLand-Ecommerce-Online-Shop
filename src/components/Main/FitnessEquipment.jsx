import { LuCircleArrowLeft } from "react-icons/lu";


const FitnessEquipment = () => {
    return (
        <>
            <section className="flex flex-col items-start px-6 sm:px-14 md:px-16 lg:px-40 justify-center bg-[url(images/fitness/FitnessEquipment.png)] w-full h-48 md:h-[500px] xl:h-[600px] bg-cover bg-center">
                <h5 className="flex flex-col mb-8 text-sm sm:text-base md:text-xl xl:text-2xl font-vazirB">
                    <span className="font-light pb-1"> برای حال خوب </span>
                    <span className=" md:font-medium">لوازم ایروبیک و تناسب اندام بگیر</span>
                </h5>
                <button className="hidden md:flex items-center gap-x-2 bg-secondary px-4 xl:px-6 py-2 xl:py-3 rounded-sm hover:scale-110 transition-all duration-350 cursor-pointer"> 
                    <LuCircleArrowLeft className="w-6 h-6 text-white" />
                    <span className="text-[10px] md:text-base font-vazirB font-medium text-white">مشاهده محصولات</span>
                </button>
            </section>
        </>
    )
}

export default FitnessEquipment