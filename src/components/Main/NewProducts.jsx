import { toPersianDigits } from "../../utils/ConvertToPersian"
import { LuCircleArrowLeft } from "react-icons/lu";

const newProducts = [
    {id: 1, titleTop: ' جدید ترین تخفیفات فصل برند پوما' , titleButtom: 'تخفیف روی تمام محصولات ' , discount: 50 , img: 'images/new product/product1.jpg'},
    {id: 2, titleTop: ' جدید ترین تخفیفات فصل برند نایک' , titleButtom: 'تخفیف روی تمام محصولات ' , discount: 50 , img: 'images/new product/product2.jpg'},
]

const NewProducts = () => {



    return (
        <>
            <section className="container flex flex-row items-center justify-center md:justify-between gap-y-6 gap-x-4 xl:gap-x-6 mx-auto md:px-2 lg:px-14 xl:px-24">
                {/* product */}
                {newProducts.map((product , index) => {
                    return (
                    <div key={index} className="max-w-xs overflow-hidden w-44 md:w-[392px] h-64 md:h-[462px] bg-background rounded-2xl">
                        <img src={product.img} alt="product" className="w-full  rounded-t-xl" />

                        {/* cart secendory */}
                        <div className="relative -mt-8 lg:-mt-[44px] xl:-mt-24 z-10">
                            <div className="bg-secondery-700 text-white px-0 lg:px-10 pt-14 lg:pt-10 pb-5 xl:p-10 rounded-b-xl rounded-t-2xl rounded-r-3xl clip-badge-shape text-center">
                                <p className="w-full h-full text-[12px] xl:text-md text-start font-vazirB flex flex-col gap-1">
                                    <span className="text-center">{product.titleTop}</span>
                                    <span className="text-center"><span className="text-primary-400 pl-1">{toPersianDigits(product.discount)} %</span>{product.titleButtom}</span>
                                </p>
                            </div>
                        </div>
                    </div>)
                })}

                {/* details products */}
                <div className="hidden md:block 2xl:w-80">
                    <h3 className="text-lg lg:text-xl xl:text-2xl text-secondary font-vazirB font-bold 2xl:font-medium mb-2">جدید ترین محصولات</h3>
                    <p className="text-sm lg:text-base text-NeutralSecondory font-vazirB font-medium mb-4">جدید ترین محصولات با ارسال رایگان تهیه 
                        کنید و در سریع ترین زمان درب منزل تحویل بگیرید
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

export default NewProducts
