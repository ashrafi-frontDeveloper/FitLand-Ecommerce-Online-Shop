import { LuCircleArrowLeft } from "react-icons/lu";


const Camp = () => {
    return (
        <>
            <section className=" relative flex flex-col items-start px-6 sm:px-14 md:px-16 lg:px-40 justify-center bg-[url(images/camp/camp.png)] w-full h-48 md:h-[500px] xl:h-[600px] bg-cover bg-center">
                <h5 className=" absolute top-6 sm:top-5 md:top-14 lg:top-16 xl:top-20 right-8 sm:right-24 md:right-8 lg:right-20 xl:right-40 2xl:right-56 flex flex-col mb-8 text-sm sm:text-base md:text-xl xl:text-2xl text-white font-vazirB">
                    <span className="font-light text-[12px] sm:text-lg md:text-2xl lg:text-3xl pb-1">به زودی کامل ترین مجموعه از</span>
                    <span className=" text-[12px] sm:text-lg md:text-2xl lg:text-3xl">لوازم کمپ در فیت لند</span>
                    <span className="text-[12px] sm:text-base">از سفر لذت ببر</span>
                </h5>
            </section>
        </>
    )
}

export default Camp