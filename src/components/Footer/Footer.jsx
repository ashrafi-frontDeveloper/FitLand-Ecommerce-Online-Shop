import FooterAbout from "./FooterAbout"
import FooterLinks from "./FooterLinks"
import FooterTop from "./FooterTop"
import FooterBottom from "./FooterBottom"

const Footer = () => {
    return (
        <>
        <footer className=" bg-secondary "> 
            <section className="flex gap-x-10 pt-[72px] px-[108px]">
                <FooterLinks />
                <FooterTop />
            </section>
            <section className="pt-[72px] px-[108px] -mt-60">
                <FooterAbout />
            </section>
            <section>
                <FooterBottom />
            </section>
        </footer>
        </>
    )
}

export default Footer
