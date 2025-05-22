// src/layouts/MainLayout.jsx
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Main />
      <Footer />
    </>
  );
}
