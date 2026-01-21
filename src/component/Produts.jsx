import Card from "./Card";
import "./produts.css";

const Products = () => {
    const arr = [
        {
            title: "Earphones",
            qute: "8",
            img: "./public/images/category-earphones-1.png"
        },
        {
            title: "Headphones",
            qute: "10",
            img: "./public/images/category-headphones-2.png"
        },
        {
            title: "Microphones",
            qute: "8",
            img: "./public/images/category-microphone-3.png"
        },
        {
            title: "Smartwatches",
            qute: "7",
            img: "./public/images/category-speakers-4.png"
        },
    ]
    return (
        <div className="categories">
            {arr.map((obj) => {
                return <Card titale={obj.title} qute={obj.qute} img={obj.img} />
            })}
        </div>
    );
};

export default Products;
