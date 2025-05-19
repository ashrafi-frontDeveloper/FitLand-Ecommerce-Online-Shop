import { IoLogoGithub } from "react-icons/io";

const FooterBottom = () => {
  return (
    <div className=" border-t border-gray-700 mt-10 pt-4 text-center text-xs text-white flex flex-col md:flex-row justify-between items-center gap-4">
      <p className=" pb-5 px-[108px]">© تمامی حقوق مادی و معنوی این وبسایت برای مجموعه فیت‌لند محفوظ می‌باشد.</p>
      <p className="flex items-center gap-1 pb-5 px-[108px]">
        طراحی شده توسط
        <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">M A$hrafi</a><IoLogoGithub className="w-5 h-5" />
      </p>
    </div>
  );
};

export default FooterBottom;
