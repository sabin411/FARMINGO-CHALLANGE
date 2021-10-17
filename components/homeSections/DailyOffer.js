import dailyOfferStyle from "../../styles/DailyOffer.module.css";
import Link from "next/link";
const DailyOffer = () => {
  return (
    <article className={dailyOfferStyle.dailyOffer_container}>
      <div
        className={`${dailyOfferStyle.offer_product} ${dailyOfferStyle.offer_product_1}`}
      >
        <div className={dailyOfferStyle.offer_product__wrapper}>
          <img src="/todays_deal/deal_product_1.png" alt="" />
        </div>
        <div className={dailyOfferStyle.deal_info_container}>
          <h4>
            ราคาพิเศษสำหรับคุณ <img src="/shape-leaf.svg" alt="" />
          </h4>
          <h2>DEAL OF THE DAY</h2>
          <h4 className={dailyOfferStyle.secondH4}>เซตผักออร์แกนิกไซส์ M</h4>
          <h3>
            2,500 THB<span> ซื้อตอนนี้ 2,000 THB</span>
          </h3>
          <p>
            บิ๊กอิเลียดมอบตัวรัม เอฟเฟ็กต์สตรอเบอรีเบบี้ เจลอุปทานเซ็กซี่
            เพียวเบิร์ด เกรดสงบสุขจูน มั้งน็อคยอมรับเบอร์รี เคลียร์ วานิลา
            รวมมิตรเคลียร์ สเปกทัวร์นาเมนท์ขั้นตอนไกด์เอ๋อ เวิร์ลด์บร็อคโคลีกรีน
            ตะหงิดจึ๊กนินจา
          </p>
          <div className={dailyOfferStyle.count_down__container}>
            <div className={dailyOfferStyle.days_wrapper}>
              <h3>10</h3>
              <h5>วัน</h5>
            </div>
            <div className={dailyOfferStyle.hours_wrapper}>
              <h3>24</h3>
              <h5>ชั่วโมง</h5>
            </div>
            <div className={dailyOfferStyle.mins_wrapper}>
              <h3>24</h3>
              <h5>นาที</h5>
            </div>
            <div className={dailyOfferStyle.sec_wrapper}>
              <h3>42</h3>
              <h5>วินาที</h5>
            </div>
          </div>
          <Link href="/">
            <a>Subscribe</a>
          </Link>
        </div>
      </div>
      {/* upcomming */}
      <div
        className={`${dailyOfferStyle.offer_product} ${dailyOfferStyle.upcoming_offer__product}`}
      >
        <div className={dailyOfferStyle.offer_product__wrapper}>
          <img src="/todays_deal/deal_product_2.png" alt="" />
        </div>
        <div className={dailyOfferStyle.deal_info_container}>
          <h4>
            ราคาพิเศษสำหรับคุณ <img src="/shape-leaf.svg" alt="" />
          </h4>
          <h2>COMING NEXT SEASON</h2>
          <h4 className={dailyOfferStyle.secondH4}>เซตผักออร์แกนิกไซส์ M</h4>
          <h3>
            2,500 THB<span> ซื้อตอนนี้ 2,000 THB</span>
          </h3>
          <p>
            บิ๊กอิเลียดมอบตัวรัม เอฟเฟ็กต์สตรอเบอรีเบบี้ เจลอุปทานเซ็กซี่
            เพียวเบิร์ด เกรดสงบสุขจูน มั้งน็อคยอมรับเบอร์รี เคลียร์ วานิลา
            รวมมิตรเคลียร์ สเปกทัวร์นาเมนท์ขั้นตอนไกด์เอ๋อ เวิร์ลด์บร็อคโคลีกรีน
            ตะหงิดจึ๊กนินจา
          </p>
          <div className={dailyOfferStyle.count_down__container}>
            <div className={dailyOfferStyle.days_wrapper}>
              <h3>10</h3>
              <h5>วัน</h5>
            </div>
            <div className={dailyOfferStyle.hours_wrapper}>
              <h3>24</h3>
              <h5>ชั่วโมง</h5>
            </div>
            <div className={dailyOfferStyle.mins_wrapper}>
              <h3>24</h3>
              <h5>นาที</h5>
            </div>
            <div className={dailyOfferStyle.sec_wrapper}>
              <h3>42</h3>
              <h5>วินาที</h5>
            </div>
          </div>
          <Link href="/">
            <a>Subscribe</a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default DailyOffer;
