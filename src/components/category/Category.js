import { Link } from "react-router-dom";

const Category = ({ img, title }) => {
  return (
    <>
      <Link className="block-2-item" to="/">
        <figure className="image">
          <img src={img} alt={title} className="img-fluid" />
        </figure>
        <div className="text">
          <span className="text-uppercase">Collections</span>
          <h3>{title}</h3>
        </div>
      </Link>
    </>
  );
};

export default Category;
