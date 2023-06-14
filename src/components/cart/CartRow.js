const CartRow = ({
  image,
  title,
  price,
  quantity,
  onIncrement,
  onQuantityChange,
  onDecrement,
  onRemove,
  id,
}) => {
  return (
    <tr>
      <td className="product-thumbnail">
        <img
          src={image}
          alt={title}
          className="img-fluid"
          style={{ height: "80px" }}
        />
      </td>
      <td className="product-name" style={{ maxWidth: "400px" }}>
        <h6 className="text-start ellipsis">{title}</h6>
      </td>
      <td>{`$${price}`}</td>
      <td>
        <div className="input-group mb-3" style={{ maxWidth: "120px" }}>
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-primary p-2"
              type="button"
              onClick={onDecrement}
            >
              &minus;
            </button>
          </div>
          <input
            type="text"
            className="form-control text-center"
            // defaultValue={quantity}
            value={quantity}
            onChange={(e) => onQuantityChange(id, Number(e.target.value))}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary p-2"
              type="button"
              onClick={onIncrement}
            >
              +
            </button>
          </div>
        </div>
      </td>
      <td>{`$${(quantity * price).toFixed(2)}`}</td>
      <td>
        <button className="btn btn-primary btn-sm" onClick={onRemove}>
          X
        </button>
      </td>
    </tr>
  );
};

export default CartRow;
