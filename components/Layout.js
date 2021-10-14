import layoutStyle from "../styles/Layout.module.css";
import Banner from "./Banner";
import Nav from "./Nav";
const Layout = ({ children }) => {
  return (
    <main className={layoutStyle.mainContainer}>
      <Nav />
      <Banner />
      {children}
    </main>
  );
};

export default Layout;
