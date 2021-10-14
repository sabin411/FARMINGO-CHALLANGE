import bannerStyle from "../styles/Banner.module.css";
import Link from "next/link";
const Banner = () => {
  return (
    <header className={bannerStyle.banner_container}>
      <div className={bannerStyle.banner_bgWrapper}>
        <div className={bannerStyle.banner_header__container}>
          <h3>สินค้าออร์แกนิก</h3>
          <h1>เซตผักรวมเพื่อสุขภาพ</h1>
          <p>
            ชุดผักสลัดออร์แกนิคประกอบไปด้วย สลัดกรีนโอ๊ค / สลัดเรดโอ๊ค /
            สลัดคอสเขียว / สลัดเบบี้คอสเขียว / สลัดบัตเตอร์เฮด / สลัดแก้ว /
            แตงกวาญี่ปุ่น / เซอเลอรี่ / วอเตอร์เครส / มะเขือเทศเชอร์รี่
          </p>
          <Link href="/">
            <a>Subscription</a>
          </Link>
        </div>

        <div className={`${bannerStyle.bg_1} ${bannerStyle.bg}`}>
          <img src="/backgrounds/bg2.png" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Banner;
