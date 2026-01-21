import From from "./From";
import "./gaminghed.css";

const Gaminghed = () => {
  const arr = [
    {
      id: 1,
      discount: "12%",
      rating: 4.67,
      img: "/images/hed-1.png",
      hoverImg: "/images/hed-11.png",
      category: "Headphones",
      name: "Wireless Gaming Headphones MS920",
      price: 75.66,
      originalPrice: 85.66,
    },
    {
      id: 2,
      discount: "8%",
      rating: 3.67,
      img: "/images/hed-2.png",
      hoverImg: "/images/hed-22.png",
      category: "Headphones",
      name: "Wireless Gaming Headphones DM420",
      price: 117.88,
      originalPrice: 147.88,
    },
    {
      id: 3,
      discount: "19%",
      rating: 3.67,
      img: "/images/hed-3.png",
      hoverImg: "/images/hed-33.png",
      category: "Headphones",
      name: "Lamborghini Edition Headphones",
      price: 247.55,
      originalPrice: 303.45,
    },
    {
      id: 4,
      discount: "15%",
      rating: 4.2,
      img: "/images/hed-4.png",
      hoverImg: "/images/hed-55.png",
      category: "Headphones",
      name: "Premium Studio Headphones Pro",
      price: 199.99,
      originalPrice: 235.99,
    },
  ];

  return (
    <div className="categories">
      {arr.map((obj) => (
        <From
  key={obj.id} discount={obj.discount} rating={obj.rating} img={obj.img}hoverImg={obj.hoverImg}
  category={obj.category}  name={obj.name}  price={obj.price}  originalPrice={obj.originalPrice}
/>

      ))}
    </div>
  );
};

export default Gaminghed;
