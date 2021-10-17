import styles from "../styles/Home.module.css";
import AboutFarmingo from "../components/homeSections/GoodAboutFarmingo";
import Head from "next/head";
import CategoriesSec from "../components/homeSections/CategoriesSec";
import RecommProducts from "../components/homeSections/RecommendedProducts";
import DailyOffer from "../components/homeSections/DailyOffer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className={styles.homeSections_container}>
        <AboutFarmingo />
        <CategoriesSec />
        <RecommProducts />
        <DailyOffer />
      </section>
    </>
  );
}
