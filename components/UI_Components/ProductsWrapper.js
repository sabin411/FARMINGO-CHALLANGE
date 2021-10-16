import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import productsWrapperStyle from "../../styles/ProductsWrapper.module.css";
const ProductWrapper = ({ product }) => {
  return (
    <div className={productsWrapperStyle.product_wrapper}>
      <Link href="/">
        <a>
          <img
            src={product.thumb_nail_bg}
            className={productsWrapperStyle.product_bg_thmubnail}
            alt=""
          />
          <div className={productsWrapperStyle.product_info}>
            <h3>{product.name}</h3>
            <h4>{product.price} THB</h4>
            <div className={productsWrapperStyle.product_interaction}>
              <Link href="/">
                <a>
                  <img
                    className={productsWrapperStyle.search_icon}
                    src="/search.svg"
                    alt="search button"
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <img
                    className={productsWrapperStyle.basket_icon}
                    src="/basket.svg"
                    alt="search button"
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <FontAwesomeIcon
                    className={productsWrapperStyle.heart_icon}
                    icon={faHeart}
                  />
                </a>
              </Link>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductWrapper;
