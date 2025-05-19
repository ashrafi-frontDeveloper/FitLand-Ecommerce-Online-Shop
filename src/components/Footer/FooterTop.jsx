import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const FooterTop = () => {
    return (
        <>
            <div className="flex flex-col items-end gap-y-6">
                {/* social media */}
                <div className="flex flex-col gap-y-4 w-[330px]">
                    {/* title */}
                    <h6 className="text-sm font-medium text-white">برای دریافت تخفیف های بیشتر ما را دنبال کنید!</h6>

                    {/* social media */}
                    <div className="flex items-center gap-x-8 text-white">
                        <FaWhatsapp className="h-10 w-10" />
                        <FaYoutube className="h-10 w-10" />
                        <RiTelegram2Fill className="h-10 w-10" />
                        <FaInstagram className="h-10 w-10" />
                    </div>
                </div>
                {/* newslatter */}
                <div className="flex flex-col gap-y-4 gap-x-2 mt-6 h-9 w-[330px]">
                    <h6 className="font-bold text-white">خبرنامه فیت لند</h6>
                    <form className="flex items-center justify-between px-5 py-1 w-[330px] rounded-md border border-NeutralSecondory" action="">
                        <div className="flex items-center gap-x-2 ">
                            <CgMail className="w-5 h-5 text-Neutral868686" />
                            <input type="email" className=" outline-none text-Neutral868686" placeholder="ایمیل خود وارد کنید ..." />
                        </div>

                        <button className="bg-primary text-sm rounded-sm p-1.5 text-white"><a href="#">ارسال</a></button>
                    </form>
                </div>
                {/* Symbol of trust */}
                <div className="flex flex-col items-start mt-24 gap-y-6">
                    {/* trust */}
                    <div className="flex gap-x-6">
                        <img src="images/footer/img1.png" alt="" className="border border-white rounded-md" />
                        <img src="images/footer/img2.png" alt="" className="border border-white rounded-md" />
                        <img src="images/footer/img3.png" alt="" className="border border-white rounded-md" />
                    </div>
                    {/* title bottom */}
                    <h6 className="text-white font-medium">یک هفته ضمانت بازگشت ✍</h6>
                </div>
            </div>
        </>
    )
}

export default FooterTop
