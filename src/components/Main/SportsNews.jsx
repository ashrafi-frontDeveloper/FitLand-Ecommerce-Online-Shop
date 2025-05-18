import { LuCircleArrowLeft } from "react-icons/lu";

const sportNews = [
    {id: 1, title: 'افزایش دریافتی فوتبالیست ها و معافیت از سربازی', subTitle: 'خبرها حاکی از آن است که رییس فدراسیون فوتبال اعلام کرد در فصل جاری قرار داد هر بازیکن فوتبال 50 درصد افزایش پیدا میکند همچنین وی گفت...', img: 'images/sport news/img2.png'},
    {id: 2, title: 'شکست استرالیا در گام نخست جام جهانی فوتبال زنان!', subTitle: 'تیم‌ها در روز اول مسابقات جام جهانی فوتبال زنان در شهر مادرید اسپانیا با یکدیگر به رقابت پرداختند.', img: 'images/sport news/img1.png'}
]

const SportNews = () => {

    return (
        <>
            <section className="flex flex-col items-center justify-center py-10">
                {/* title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-10">جدیدترین ها در اخبار ورزش</h3>

                {/* sport news cards */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                    {
                        sportNews.map(news => {
                            return (
                                <div key={news.id} className="flex flex-col border border-gray-200 rounded-2xl overflow-hidden w-[320px] md:w-[400px] xl:w-[500px]">
                                    <img src={news.img} alt="خبر اول" className="w-full h-[300px] object-cover" />
                                    <div className="p-4 flex flex-col gap-2">
                                        <h6 className="text-base md:text-lg font-bold">{news.title}</h6>
                                        <p className="text-sm text-gray-600 leading-6">{news.subTitle}</p>
                                        <button className="mt-4 cursor-pointer self-start flex items-center gap-1 text-sm text-white bg-primaryOrange bg-primary transition-all duration-500 px-4 py-2 rounded-xl hover:-rotate-y-180">
                                            <LuCircleArrowLeft />
                                            مشاهده خبر
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default SportNews;
