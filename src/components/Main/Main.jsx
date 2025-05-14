import NewProducts from "./NewProducts"
import FitnessEquipment from "./FitnessEquipment"
import SpecialDiscounts from "./SpecialDiscounts"

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
                <section className="mt-0 md:mt-14 xl:mt-16 2xl:mt-20 mb-24 bg-[#FFF7F4]">
                    <SpecialDiscounts />
                </section>
            </main>
        </>
    )
}

export default Main