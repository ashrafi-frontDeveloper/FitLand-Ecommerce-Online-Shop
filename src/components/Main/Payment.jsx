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
            <section className="flex items-center justify-center gap-x-6 h-56">
                {/* right => payment */}
                {Payments.map(payment => {
                    return (
                        <div key={payment.id} className="flex flex-col items-center justify-center w-40 h-44 border border-[#CFE8FF] bg-white rounded-2xl cursor-pointer hover:rotate-12 transition-all duration-300">
                            <payment.icon className="w-16 h-16 text-secondary mb-5" />
                            <span className="text-secondary font-bold">{payment.title}</span>
                        </div>  
                    )
                })}
                {/* left => title */}
                <h6 className="flex flex-col font-bold text-secondary text-2xl">
                    <span>با بیش از ده سال سابقه فروش لوازم</span>
                    <span>ورزشی و لباس های ورزشی</span>
                </h6>

            </section>
        </>
    )
}

export default Payment