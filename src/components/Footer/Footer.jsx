import FooterAbout from "./FooterAbout"
import FooterLinks from "./FooterLinks"
import FooterTop from "./FooterTop"
import FooterBottom from "./FooterBottom"

const Footer = () => {
    return (
        <>
        <footer className="bg-secondary">
  {/* موبایل */}
  <section className="flex flex-col gap-y-10 md:hidden px-3 pt-10">
    <FooterTop />
    <FooterLinks />
    <FooterAbout />
  </section>

  {/* دسکتاپ */}
  <section className="hidden md:flex gap-x-10 pt-10 lg:pt-[72px] px-3 lg:px-16 xl:px-[108px]">
    <FooterLinks />
    <FooterTop />
  </section>
  <section className="hidden md:block pt-[72px] px-3 lg:px-16 xl:px-[108px] -mt-60">
    <FooterAbout />
  </section>

  {/* مشترک */}
  <section className="px-0 mt-8">
    <FooterBottom />
  </section>
</footer>

        {/* <footer className=" bg-secondary "> 
            <section className="flex gap-x-10 pt-10 lg:pt-[72px] px-3 lg:px-16 xl:px-[108px]">
                <FooterLinks />
                <FooterTop />
            </section>
            <section className="pt-[72px] px-3 lg:px-16 xl:px-[108px] -mt-60">
                <FooterAbout />
            </section>
            <section className="px-0">
                <FooterBottom />
            </section>
        </footer> */}
        </>
    )
}

export default Footer
