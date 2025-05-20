import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const FooterTop = () => {
    return (
        <>
            <div className="flex flex-col items-center md:items-start gap-3 lg:gap-y-6">
                {/* social media */}
                <div className="flex flex-col items-center md:items-start gap-y-4 w-full md:w-3xs lg:w-72 xl:w-[330px]">
                    {/* title */}
                    <h6 className="text-base md:text-[12px] xl:text-sm font-medium text-white">برای دریافت تخفیف های بیشتر ما را دنبال کنید!</h6>

                    {/* social media */}
                    <div className="flex items-center gap-x-10 md:gap-x-2.5 lg:gap-x-4 xl:gap-x-8 text-white">
                        <a href="#">
                            <FaWhatsapp className="h-8 md:h-5 lg:h-7 xl:h-10 w-8 md:w-5 lg:w-7 xl:w-10 hover:scale-110 transition-all duration-300" />      
                        </a>
                        <a href="#">
                            <FaYoutube className="h-8 md:h-5 lg:h-7 xl:h-10 w-8 md:w-5 lg:w-7 xl:w-10 hover:scale-110 transition-all duration-300" />   
                        </a>
                        <a href="#">
                            <RiTelegram2Fill className="h-8 md:h-5 lg:h-7 xl:h-10 w-8 md:w-5 lg:w-7 xl:w-10 hover:scale-110 transition-all duration-300" />  
                        </a>
                        <a href="#">
                            <FaInstagram className="h-8 md:h-5 lg:h-7 xl:h-10 w-8 md:w-5 lg:w-7 xl:w-10 hover:scale-110 transition-all duration-300" /> 
                        </a>
                    </div>
                </div>
                {/* newslatter */}
                <div className="flex flex-col items-center md:items-start gap-y-4 gap-x-2 mt-4 xl:mt-6 h-9 w-full md:w-3xs lg:w-72 xl:w-[330px]">
                    <h6 className="text-base md:text-[12px] lg:text-sm xl:text-base font-medium text-white">خبرنامه فیت لند</h6>
                    <form className="flex items-center justify-between px-0 lg:px-1.5 py-1 w-80 md:w-3xs lg:w-72 xl:w-[330px] rounded-md border border-NeutralSecondory" action="">
                        <div className="flex items-center gap-x-1 lg:gap-x-2 ">
                            <CgMail className="w-5 h-5 text-Neutral868686" />
                            <input type="email" className="text-sm outline-none text-Neutral868686" placeholder="ایمیل خود وارد کنید ..." />
                        </div>

                        <button className="bg-primary text-[12px] ml-0.5 lg:ml-0 lg:text-sm rounded-sm p-1 lg:p-1.5 text-white"><a href="#">ارسال</a></button>
                    </form>
                </div>
                {/* Symbol of trust */}
                <div className="flex flex-col items-center lg:items-start mt-12 lg:mt-16 xl:mt-24 gap-y-6">
                    {/* trust */}
                    <div className="flex gap-x-3 lg:gap-x-6">
                        <img src="images/footer/img1.png" alt="" className="w-auto md:w-14 lg:w-auto h-auto md:h-16 lg:h-auto border border-white rounded-md" />
                        <img src="images/footer/img2.png" alt="" className="w-auto md:w-14 lg:w-auto h-auto md:h-16 lg:h-auto border border-white rounded-md" />
                        <img src="images/footer/img3.png" alt="" className="w-auto md:w-14 lg:w-auto h-auto md:h-16 lg:h-auto border border-white rounded-md" />
                    </div>
                    {/* title bottom */}
                    <h6 className="text-sm xl:text-base text-white font-medium mb-5">یک هفته ضمانت بازگشت ✍</h6>
                </div>
            </div>
        </>
    )
}

export default FooterTop
