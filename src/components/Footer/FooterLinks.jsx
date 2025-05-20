const FooterLinks = () => {
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
    <div className="grid grid-cols-2 md:grid-cols-4  text-white text-[12px] xl:text-sm">
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
  );
};

export default FooterLinks;
