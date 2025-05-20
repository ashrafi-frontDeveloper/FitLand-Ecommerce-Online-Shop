// const FooterLinks = () => {
//   const columns = [
//     {
//       title: "محبوب‌ترین‌ها",
//       links: ["لباس مردانه", "کفش ورزشی", "لباس فوتبال", "اکسسوری ورزشی", "لباس زنانه"],
//     },
//     {
//       title: "خدمات مشتریان",
//       links: ["راهنمای محصولات", "حریم خصوصی", "قوانین استفاده", "گزارش ایراد در محصول"],
//     },
//     {
//       title: "راهنمای خرید",
//       links: ["نحوه ثبت سفارش", "شیوه پرداخت", "نحوه ارسال سفارش", "نحوه بازگرداندن محصول"],
//     },
//     {
//       title: "اطلاعات تماس",
//       links: [
//         "آدرس: تهران - تجریش - خیابان سعادتی",
//         "تماس: 021-12345678",
//         "ایمیل: info@fitland.com",
//         "ساعت کاری: شنبه تا چهارشنبه 9 الی 17",
//       ],
//     },
//   ];

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4  text-white text-[12px] xl:text-sm">
//       {columns.map((col, index) => (
//         <div key={index}>
//           <h4 className="font-bold text-[12px] lg:text-sm xl:text-base mb-2 lg:mb-4">{col.title}</h4>
//           <ul className="space-y-1.5 lg:space-y-2">
//             {col.links.map((link, idx) => (
//               <li key={idx} className="hover:text-primary text-[10px] lg:text-sm transition-colors duration-300 cursor-pointer">
//                 {link}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FooterLinks;
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FooterLinks = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const columns = [
    {
      title: "محبوب‌ترین‌ها",
      links: ["لباس مردانه", "کفش ورزشی", "لباس فوتبال", "اکسسوری ورزشی", "لباس زنانه"],
    },
    {
      title: "خدمات مشتریان",
      links: ["راهنمای محصولات", "حریم خصوصی", "قوانین استفاده", "گزارش ایراد در محصول"],
    },
    {
      title: "راهنمای خرید",
      links: ["نحوه ثبت سفارش", "شیوه پرداخت", "نحوه ارسال سفارش", "نحوه بازگرداندن محصول"],
    },
    {
      title: "اطلاعات تماس",
      links: [
        "آدرس: تهران - تجریش - خیابان سعادتی",
        "تماس: 021-12345678",
        "ایمیل: info@fitland.com",
        "ساعت کاری: شنبه تا چهارشنبه 9 الی 17",
      ],
    },
  ];

  return (
    <>
      {/* دسکتاپ */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-4 text-white text-[12px] xl:text-sm w-full">
        {columns.map((col, index) => (
          <div key={index}>
            <h4 className="font-bold text-[12px] lg:text-sm xl:text-base mb-2 lg:mb-4">{col.title}</h4>
            <ul className="space-y-1.5 lg:space-y-2">
              {col.links.map((link, idx) => (
                <li key={idx} className="hover:text-primary text-[10px] lg:text-sm transition-colors duration-300 cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* موبایل */}
      <div className="md:hidden w-full text-white text-[12px]">
        {columns.map((col, index) => (
          <div key={index} className="border-b border-gray-600">
            <button
              className="w-full flex justify-between items-center py-3 px-1"
              onClick={() => toggleIndex(index)}
            >
              <span className="font-bold text-sm">{col.title}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
              />
            </button>
            {openIndex === index && (
              <ul className="space-y-2 px-4 pb-4">
                {col.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="text-[11px] text-gray-300 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FooterLinks;
