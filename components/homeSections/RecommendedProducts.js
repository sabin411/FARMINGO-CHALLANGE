import { useState, useEffect } from "react";
import recomStyle from "../../styles/RecommendedProducts.module.css";
import ProductWrapper from "../UI_Components/ProductsWrapper";
const RecommProducts = () => {
  const products = [
    {
      id: 1,
      name: "หัวไชเท้า", // green kale
      category: ["ผักออร์แกนิก", "ผลไม้ออร์แกนิก"], //organic vegies
      english_category: ["organic_vegetables"],
      english_name: "Radish",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nulla repellat voluptatibus commodi ullam reprehenderit porro explicabo eligendi possimus molestias!",
      price: 2500,
      quantity: 25,
      reviewers: 2,
      rating: 4,
      SKU: 123,
      tags: ["healty", "organic", "vegetable"],
      thumb_nail_bg: "/products/radish.png",
      large_bg: "/products/radish_lrg.png",
      products_imgs: ["/products/radish_lrg.png", "/products/img1.png"],
    },
    {
      id: 2,
      name: "บัตเตอร์เฮด", // green kale
      category: ["ผักออร์แกนิก", "ธัญพืช"], //organic vegies
      english_category: ["organic_vegetables"],
      english_name: "butterhead",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nulla repellat voluptatibus commodi ullam reprehenderit porro explicabo eligendi possimus molestias!",
      price: 80,
      quantity: 15,
      reviewers: 4,
      rating: 4,
      SKU: 163,
      tags: ["healty", "organic", "vegetable"],
      thumb_nail_bg: "/products/butter_head.png",
      large_bg: "/products/butter_head_lrg.png",
      products_imgs: [
        "/products/butter_head_lrg.png",
        "/products/img1.png",
        "/products/img1.png",
      ],
    },
    {
      id: 3,
      name: "คอส",
      category: ["ผักออร์แกนิก"],
      english_category: ["organic_vegetables"],
      english_name: "cosplay",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nulla repellat voluptatibus commodi ullam reprehenderit porro explicabo eligendi possimus molestias!",
      price: 60,
      quantity: 15,
      reviewers: 4,
      rating: 4,
      SKU: 163,
      tags: ["healty", "organic", "vegetable"],
      thumb_nail_bg: "/products/cosplay.png",
      large_bg: "/products/cosplay_lrg.png",
      products_imgs: [
        "/products/cosplay_lrg.png",
        "/products/img1.png",
        "/products/img1.png",
      ],
    },
    {
      id: 4,
      name: "เคลเขียว",
      category: ["ผักออร์แกนิก"],
      english_category: ["organic_vegetables"],
      english_name: "green kale",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nulla repellat voluptatibus commodi ullam reprehenderit porro explicabo eligendi possimus molestias!",
      price: 75,
      quantity: 20,
      reviewers: 4,
      rating: 4,
      SKU: 163,
      tags: ["healty", "organic", "vegetable"],
      thumb_nail_bg: "/products/green_kale.png",
      large_bg: "/products/green_kale_lrg.png",
      products_imgs: [
        "/products/green_kale_lrg.png",
        "/products/img1.png",
        "/products/img1.png",
      ],
    },
    {
      id: 5,
      name: "มะเขือเทศเหลือง",
      category: ["ผักออร์แกนิก"],
      english_category: ["organic_vegetables", "fruit_juices"],
      english_name: "yellow tomato",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nulla repellat voluptatibus commodi ullam reprehenderit porro explicabo eligendi possimus molestias!",
      price: 40,
      quantity: 20,
      reviewers: 4,
      rating: 4,
      SKU: 163,
      tags: ["healty", "organic", "vegetable"],
      thumb_nail_bg: "/products/yellow_tomato.png",
      large_bg: "/products/yellow_tomato_lrg.png",
      products_imgs: [
        "/products/yellow_tomato_lrg.png",
        "/products/img1.png",
        "/products/img1.png",
      ],
    },
    {
      id: 6,
      name: "มะเขือม่วง",
      category: ["ผักออร์แกนิก"],
      english_category: ["organic_vegetables", "organic_fruits"],
      english_name: "egg plant",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nulla repellat voluptatibus commodi ullam reprehenderit porro explicabo eligendi possimus molestias!",
      price: 50,
      quantity: 20,
      reviewers: 14,
      rating: 4,
      SKU: 163,
      tags: ["healty", "organic", "vegetable"],
      thumb_nail_bg: "/products/egg_plant.png",
      large_bg: "/products/egg_plant_lrg.png",
      products_imgs: [
        "/products/egg_plant_lrg.png",
        "/products/img1.png",
        "/products/img1.png",
      ],
    },
    {
      id: 7,
      name: "มะระเจไดท์",
      category: ["ผักออร์แกนิก"],
      english_category: ["organic_vegetables", "fruit_juices"],
      english_name: "bitter gourd",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nulla repellat voluptatibus commodi ullam reprehenderit porro explicabo eligendi possimus molestias!",
      price: 50,
      quantity: 10,
      reviewers: 2,
      rating: 4,
      SKU: 163,
      tags: ["healty", "organic", "vegetable"],
      thumb_nail_bg: "/products/bitter_gourd.png",
      large_bg: "/products/bitter_gourd_lrg.png",
      products_imgs: [
        "/products/bitter_gourd_lrg.png",
        "/products/img1.png",
        "/products/img1.png",
      ],
    },
    {
      id: 8,
      name: "มะเขือเทศ",
      category: ["ผักออร์แกนิก"],
      english_category: ["organic_vegetables", "fruit_juices"],
      english_name: "tomato",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nulla repellat voluptatibus commodi ullam reprehenderit porro explicabo eligendi possimus molestias!",
      price: 45,
      quantity: 70,
      reviewers: 4,
      rating: 4,
      SKU: 163,
      tags: ["healty", "organic", "vegetable"],
      thumb_nail_bg: "/products/tomato.png",
      large_bg: "/products/tomato_lrg.png",
      products_imgs: [
        "/products/tomato_lrg.png",
        "/products/img1.png",
        "/products/img1.png",
      ],
    },
  ];
  const [displayProduct, setDisplayProduct] = new useState([]);
  const [activeCategory, setActiveCategory] = new useState("all_products");
  useEffect(() => {
    setDisplayProduct(products);
  }, []);
  const filterProductsHandler = (e) => {
    let passedCategory = e.target.getAttribute("data-category");
    setActiveCategory(passedCategory);
    console.log(passedCategory);
    if (passedCategory === "all_products") {
      setDisplayProduct(products);
    } else {
      let filteredProducts = products.filter((product) => {
        return product.english_category.includes(passedCategory);
      });
      setDisplayProduct(filteredProducts);
    }
  };
  return (
    <article className={recomStyle.recommPro__container}>
      <div className={recomStyle.top_header}>
        <h2>
          สินค้าแนะนำ
          <img src="/shape-leaf.svg" alt="" />
        </h2>
      </div>
      <div className={recomStyle.products_container}>
        <div className={recomStyle.products_categories__container}>
          <button
            onClick={(e) => filterProductsHandler(e)}
            className={`${recomStyle.products_category_btn} ${
              activeCategory === "all_products" ? recomStyle.active : ""
            }`}
            data-category="all_products"
          >
            ผลิตภัณฑ์ทั้งหมด
          </button>
          <button
            onClick={(e) => filterProductsHandler(e)}
            data-category="organic_vegetables"
            className={`${recomStyle.products_category_btn} ${
              activeCategory === "organic_vegetables" ? recomStyle.active : ""
            }`}
          >
            ผักออร์แกนิก
          </button>
          <button
            onClick={(e) => filterProductsHandler(e)}
            data-category="organic_fruits"
            className={`${recomStyle.products_category_btn} ${
              activeCategory === "organic_fruits" ? recomStyle.active : ""
            }`}
          >
            ผลไม้ออร์แกนิก
          </button>
          <button
            onClick={(e) => filterProductsHandler(e)}
            data-category="fruit_juices"
            className={`${recomStyle.products_category_btn} ${
              activeCategory === "fruit_juices" ? recomStyle.active : ""
            }`}
          >
            น้ำผลไม้
          </button>
          <button
            onClick={(e) => filterProductsHandler(e)}
            data-category="cereals"
            className={`${recomStyle.products_category_btn} ${
              activeCategory === "cereals" ? recomStyle.active : ""
            }`}
          >
            ธัญพืช
          </button>
          <button
            onClick={(e) => filterProductsHandler(e)}
            data-category="others"
            className={`${recomStyle.products_category_btn} ${
              activeCategory === "others" ? recomStyle.active : ""
            }`}
          >
            อื่นๆ
          </button>
        </div>
      </div>
      <div
        style={
          displayProduct.length >= 1
            ? { display: "grid" }
            : { display: "block" }
        }
        className={recomStyle.products_showcase}
      >
        {displayProduct.length >= 1 ? (
          displayProduct.map((product) => {
            return <ProductWrapper key={product.id} product={product} />;
          })
        ) : (
          <p
            style={{
              fontSize: "20px",
              color: "#343a40",
            }}
          >
            Products will be added soon.....
          </p>
        )}
      </div>
    </article>
  );
};

export default RecommProducts;
