import NewProducts from "./NewProducts"
import FitnessEquipment from "./FitnessEquipment"
import SpecialDiscounts from "./SpecialDiscounts"
import NewestSportsShoes from "./NewestSportsShoes"
import BicyclesSection from "./BicyclesSection"
import SpecialDiscounts2 from "./SpecialDiscounts2"
import BestsellerProducts from "./BestsellerProducts"

const Main = () => {
    return (
        <>
            <main>
                <section className="container px-0 xl:px-4 p-0 2xl:px-10 pt-8 mx-auto mb-20 w-full">
                    <NewProducts />
                </section>
                <section className="mt-0 md:mt-14 xl:mt-16 2xl:mt-20">
                    <FitnessEquipment />
                </section>
                <section className="mt-0 md:mt-14 xl:mt-16 2xl:mt-20 mb-24 pb-10 bg-[#FFF7F4]">
                    <SpecialDiscounts />
                </section>
                <section>
                    <NewestSportsShoes />
                </section>
                <section className="mt-0 md:mt-14 xl:mt-16 2xl:mt-20">
                    <BicyclesSection />
                </section>
                <section className="mt-0 md:mt-14 xl:mt-16 2xl:mt-20 mb-24 pb-10 bg-[#F4FAFF]">
                    <SpecialDiscounts2 />
                </section>
                <section className="container px-0 xl:px-4 p-0 2xl:px-10 pt-8 mx-auto mb-20 w-full">
                    <BestsellerProducts />
                </section>
            </main>
        </>
    )
}

export default Main