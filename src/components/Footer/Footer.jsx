import FooterAbout from "./FooterAbout"
import FooterLinks from "./FooterLinks"
import FooterTop from "./FooterTop"
import FooterBottom from "./FooterBottom"

const Footer = () => {
    return (
        <>
        <footer className=" bg-secondary pt-[72px] px-[108px]"> 
            <section className="flex gap-x-10">
                <FooterLinks />
                <FooterTop />
            </section>

            <FooterAbout />
            <FooterBottom />
        </footer>
        </>
    )
}

export default Footer
