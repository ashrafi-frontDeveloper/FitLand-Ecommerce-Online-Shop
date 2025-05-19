import FooterAbout from "./FooterAbout"
import FooterLinks from "./FooterLinks"
import FooterTop from "./FooterTop"
import FooterBottom from "./FooterBottom"

const Footer = () => {
    return (
        <>
        <footer className="bg-secondary h-[500px] pt-[72px] px-[108px]"> 
            <FooterTop />
            <FooterAbout />
            <FooterLinks />
            <FooterBottom />
        </footer>
        </>
    )
}

export default Footer
