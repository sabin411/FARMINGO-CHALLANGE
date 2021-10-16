import Link from "next/link";
import categoriesStyle from "../../styles/CategoriesSec.module.css";
const CategoriesSec = () => {
  return (
    <article className={categoriesStyle.category__container}>
      <div className={categoriesStyle.category__list}>
        <Link href="/">
          <a>
            <img
              className={categoriesStyle.item__bg}
              src="/items-bg/item-veg.png"
              alt=""
            />
            <div className={categoriesStyle.wrapper}>
              <img src="/organicV-icon.svg" alt="" />
              <h3>ผักออร์แกนิก</h3>
              <h4>- 3 Items -</h4>
            </div>
          </a>
        </Link>
      </div>
      <div className={categoriesStyle.category__list}>
        <Link href="/">
          <a>
            <img
              className={categoriesStyle.item__bg}
              src="/items-bg/item-fruit.png"
              alt=""
            />
            <div className={categoriesStyle.wrapper}>
              <img src="/organicF-icon.svg" alt="" />
              <h3>ผลไม้ออร์แกนิก</h3>
              <h4>- 3 Items -</h4>
            </div>
          </a>
        </Link>
      </div>
      <div className={categoriesStyle.category__list}>
        <Link href="/">
          <a>
            <img
              className={categoriesStyle.item__bg}
              src="/items-bg/item-juice.png"
              alt=""
            />
            <div className={categoriesStyle.wrapper}>
              <img src="/fruitJuice-icon.svg" alt="" />
              <h3>น้ำผลไม้</h3>
              <h4>- 3 Items -</h4>
            </div>
          </a>
        </Link>
      </div>
      <div className={categoriesStyle.category__list}>
        <Link href="/">
          <a>
            <img
              className={categoriesStyle.item__bg}
              src="/items-bg/item-cereal.png"
              alt=""
            />
            <div className={categoriesStyle.wrapper}>
              <img src="/cereal-icon.svg" alt="" />
              <h3>ธัญพืช</h3>
              <h4>- 3 Items -</h4>
            </div>
          </a>
        </Link>
      </div>
    </article>
  );
};

export default CategoriesSec;
