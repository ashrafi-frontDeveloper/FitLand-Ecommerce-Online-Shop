import NewProducts from "./NewProducts"
import FitnessEquipment from "./FitnessEquipment"

const Main = () => {
    return (
        <>
            <main>
                <section className="container px-0 xl:px-4 p-0 2xl:px-10 pt-8 mx-auto mb-20 w-full">
                    <NewProducts />
                </section>
                <section className="mt-0 md:-mt-20">
                    <FitnessEquipment />
                </section>
            </main>
        </>
    )
}

export default Main