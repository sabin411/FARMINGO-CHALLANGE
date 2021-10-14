import styles from "../styles/Home.module.css";
import AboutFarmingo from "../components/homeSections/GoodAboutFarmingo";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className={styles.container}>
        <AboutFarmingo />
        ADDED ABOUT SECTION
      </section>
    </>
  );
}
