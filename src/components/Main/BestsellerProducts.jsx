import { toPersianDigits } from "../../utils/ConvertToPersian"
import { LuCircleArrowLeft } from "react-icons/lu";
import { LuSquareStack } from "react-icons/lu";

const newProducts = [
    {id: 1, titleTop: ' جدید ترین تخفیفات فصل برند پوما' , titleButtom: 'تخفیف روی تمام محصولات ' , discount: 50 , img: 'images/bestseller/img1.png'},
    {id: 2, titleTop: ' جدید ترین تخفیفات فصل برند نایک' , titleButtom: 'تخفیف روی تمام محصولات ' , discount: 50 , img: 'images/bestseller/img2.png'},
]

const BestsellerProducts = () => {



    return (
        <>
            <section className="container flex flex-row items-center justify-center md:justify-between 2xl:justify-around gap-y-6 gap-x-4 xl:gap-x-6 mx-auto md:px-2 lg:px-14 xl:px-24">
                {/* product */}
                {newProducts.map((product , index) => {
                    return (
                    <div key={index} className="relative cursor-pointer max-w-xs overflow-hidden w-44 md:w-[392px] h-64 md:h-[462px] bg-background rounded-2xl">
                        {/* Image wrapper with group */}
                        <div className="group w-full h-full">
                            {/* Product Image */}
                            <img src={product.img} alt="product" className=" w-full h-full object-cover rounded-t-xl transition-all duration-300 group-hover:brightness-50"/>
                            {/* Hover Overlay Content */}
                            {/* <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <p className="text-white text-center text-sm xl:text-lg font-vazirB mb-6">
                                    فقط با یک کلیک وارد دنیای محصولات جدید شوید
                                </p>
                                <a href="#" className="flex items-center sm:py-0 md:py-0 px-1.5 sm:px-3 md:px-.5 gap-x-1 lg:gap-x-2 border border-white text-white rounded-md transition-all md:hover:scale-125 duration-300">
                                    <LuSquareStack />
                                    <span className="text-sm md:text-base">
                                      جدید ترین محصولات
                                    </span>
                                </a>
                            </div> */}
                        </div>

                        {/* cart secondary - OUTSIDE group */}
                        <div className="absolute bottom-0 left-0 right-0 z-10">
                            <div className="bg-secondery-700 text-white px-0 lg:px-10 pt-6 md:pt-10 lg:pt-14 pb-5 xl:p-10 rounded-t-2xl rounded-b-xl rounded-r-3xl clip-badge-shape text-center">
                                <p className="w-full h-full text-[12px] xl:text-md text-start font-vazirB flex flex-col gap-1">
                                    <span className="text-center">{product.titleTop}</span>
                                    <span className="text-center">
                                        <span className="text-primary-400 pl-1">{toPersianDigits(product.discount)}%</span>
                                        {product.titleButtom}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>


                    )
                })}

                {/* details products */}
                <div className="hidden sm:block w-60 md:w-auto 2xl:w-80">
                    <h3 className="text-lg lg:text-xl xl:text-2xl text-secondary font-vazirB font-bold 2xl:font-medium mb-2"> پر فروش ترین محصولات</h3>
                    <p className="text-sm lg:text-base text-NeutralSecondory font-vazirB font-medium mb-4">
                        پرفروش ترین محصولات با ارسال رایگان تهیه 
                        کنید و در سریع ترین زمان درب منزل تحویل بگیرید.
                    </p>
                    {/* button all products */}
                    <button className="flex items-center justify-center gap-x-2 bg-primary w-full px-10 lg:px-16 xl:px-6 py-2 xl:py-3 rounded-sm hover:scale-110 transition-all duration-350 cursor-pointer"> 
                        <LuCircleArrowLeft className="w-6 h-6 text-white" />
                        <span className="text-[10px] md:text-base font-vazirB font-medium text-white">مشاهده محصولات</span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default BestsellerProducts
