import { FaTruck } from "react-icons/fa";
import { ImPaypal } from "react-icons/im";
import { RiHome7Fill } from "react-icons/ri";

const Payments = [
    {id: 1, icon: FaTruck, title: 'ارسال سریع'},
    {id: 2, icon: ImPaypal, title: 'پرداخت قسطی'},
    {id: 3, icon: RiHome7Fill, title: 'تحویل درب منزل'},
]

const Payment = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-center gap-y-6 md:gap-x-6 py-10">
                {/* right => payment */}
                <div className="flex justify-center items-center gap-4 md:gap-6">
                    {Payments.map(payment => (
                        <div key={payment.id} className="flex flex-col items-center justify-center w-28 sm:w-30 md:w-32 lg:w-40 h-20 md:h-36 lg:h-44 border border-[#CFE8FF] bg-white rounded-2xl cursor-pointer hover:rotate-12 transition-all duration-300">
                            <payment.icon className="w-8 sm:w-10 h-8 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-secondary mb-4 md:mb-5" />
                            <span className="text-secondary font-bold text-[10px] sm:text-sm md:text-base text-center">{payment.title}</span>
                        </div>
                    ))}
                </div>
                
                {/* left => title */}
                <h6 className="flex flex-col font-bold text-secondary text-sm md:text-xl lg:text-2xl text-center md:text-right mb-4 md:mb-0">
                    <span>با بیش از ده سال سابقه فروش لوازم</span>
                    <span>ورزشی و لباس های ورزشی</span>
                </h6>
            </section>

        </>
    )
}

export default Payment