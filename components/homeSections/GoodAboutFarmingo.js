import aboutFarmingoStyle from "../../styles/GoodAboutFarmingo.module.css";
const AboutFarmingo = () => {
  return (
    <article className={aboutFarmingoStyle.aboutFarmingo_container}>
      <div className={aboutFarmingoStyle.aboutFarmingo_header}>
        <h3>
          ฟาร์มผักออร์แกนิค
          <img src="/shape-leaf.svg" alt="" />
        </h3>
        <h2>FARMINGO มีอะไรดี ?</h2>
      </div>
      <div className={aboutFarmingoStyle.items_container}>
        <div className={aboutFarmingoStyle.item_wrapper}>
          {/* shapes */}
          <div
            className={`${aboutFarmingoStyle.shape} ${aboutFarmingoStyle.shape1}`}
          >
            <section className={aboutFarmingoStyle.shapes_section}>
              <div className={aboutFarmingoStyle.shape1_light}>
                <img
                  src="https://res.cloudinary.com/dpvgd7vj0/image/upload/v1632130999/farmingo/icon1_1_dbececc879.png"
                  alt=""
                />
              </div>
              <div
                className={`${aboutFarmingoStyle.shape1_dark} ${aboutFarmingoStyle.shape_dark}`}
              >
                <img
                  src="https://res.cloudinary.com/dpvgd7vj0/image/upload/v1632130479/farmingo/icon1_8d2f176c1b.png"
                  alt=""
                />
              </div>
            </section>
            <h4>ออร์แกนิก 100%</h4>
            <p>
              บิ๊กอิเลียดมอบตัวรัม เอฟเฟ็กต์สตรอเบอรีเบบี้ เจลอุปทานเซ็กซี่
              เพียวเบิร์ด เกรดสงบสุขจูน
            </p>
          </div>
          {/* shapes */}
          <div
            className={`${aboutFarmingoStyle.shape} ${aboutFarmingoStyle.shape2}`}
          >
            <section className={aboutFarmingoStyle.shapes_section}>
              <div className={aboutFarmingoStyle.shape2_light}>
                <img
                  src="https://res.cloudinary.com/dpvgd7vj0/image/upload/v1632130999/farmingo/icon2_2_55a5b2393c.png"
                  alt=""
                />
              </div>
              <div
                className={`${aboutFarmingoStyle.shape2_dark} ${aboutFarmingoStyle.shape_dark}`}
              >
                <img
                  src="https://res.cloudinary.com/dpvgd7vj0/image/upload/v1632130479/farmingo/icon2_921441e873.png"
                  alt=""
                />
              </div>
            </section>
            <h4>ดูแลเหมือนครอบครัว</h4>
            <p>บิ๊กอิเลียดมอบตัวรัม เอฟเฟ็กต์สตรอเบอรีเบบี้ เจลอุปทานเซ็กซี่</p>
          </div>
          {/* shapes */}
          <div
            className={`${aboutFarmingoStyle.shape} ${aboutFarmingoStyle.shape3}`}
          >
            <section className={aboutFarmingoStyle.shapes_section}>
              <div className={aboutFarmingoStyle.shape3_light}>
                <img
                  src="https://res.cloudinary.com/dpvgd7vj0/image/upload/v1632130999/farmingo/icon3_3_3c55ac46d9.png"
                  alt=""
                />
              </div>
              <div
                className={`${aboutFarmingoStyle.shape3_dark} ${aboutFarmingoStyle.shape_dark}`}
              >
                <img
                  src="https://res.cloudinary.com/dpvgd7vj0/image/upload/v1632130479/farmingo/icon3_c08b887630.png"
                  alt=""
                />
              </div>
            </section>
            <h4>ผักสดทุกชนิด</h4>
            <p>บิ๊กอิเลียดมอบตัวรัม เอฟเฟ็กต์สตรอเบอรีเบบี้ เจลอุปทานเซ็กซี่</p>
          </div>
          <div
            className={`${aboutFarmingoStyle.shape} ${aboutFarmingoStyle.shape4}`}
          >
            <section className={aboutFarmingoStyle.shapes_section}>
              <div className={aboutFarmingoStyle.shape4_light}>
                <img
                  src="https://res.cloudinary.com/dpvgd7vj0/image/upload/v1632130999/farmingo/icon4_4_a6e2c707e9.png"
                  alt=""
                />
              </div>
              <div
                className={`${aboutFarmingoStyle.shape4_dark} ${aboutFarmingoStyle.shape_dark}`}
              >
                <img
                  src="https://res.cloudinary.com/dpvgd7vj0/image/upload/v1632130479/farmingo/icon4_a822c0a2a1.png"
                  alt=""
                />
              </div>
            </section>
            <h4>ปลอดภัยต่อร่างกาย</h4>
            <p>บิ๊กอิเลียดมอบตัวรัม เอฟเฟ็กต์สตรอเบอรีเบบี้ เจลอุปทานเซ็กซี่</p>
          </div>
        </div>
        <div className={aboutFarmingoStyle.highlighted_image}>
          <img src="/backgrounds/papaya.png" alt="highlighting image papaya" />
        </div>
      </div>
    </article>
  );
};

export default AboutFarmingo;
