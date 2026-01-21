export default function From({ discount,  rating, img, hoverImg,category, name,price, originalPrice,
}) {
  return (
    <div className="card">
      <div className="card-top">
        <span className="discount">{discount}</span>
        <span className="rating">★ {rating}</span>
      </div>

      <div className="image-box">
        <img src={img} alt={name} className="img-main" />
        <img src={hoverImg} alt={name} className="img-hover" />
      </div>

      <p className="category">{category}</p>
      <h3>{name}</h3>

      <div className="amout">
        <strong>${price}</strong>
        <span>${originalPrice}</span>
      </div>
    </div>
  );
}
