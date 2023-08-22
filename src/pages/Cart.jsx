import PropTypes from 'prop-types';

const Cart = ({
  cart,
  total,
  description,
  setDescription,
  updateCart,
  delCartItem,
  createOrder,
}) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" width="50">
              操作
            </th>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col" width="90">
              數量
            </th>
            <th scope="col">單價</th>
            <th scope="col">小計</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => delCartItem(item)}
                  >
                    x
                  </button>
                </td>
                <td>{item.name}</td>
                <td>
                  <small>{item.description}</small>
                </td>
                <td>
                  <select
                    className="form-select"
                    value={item.qty}
                    onChange={(e) => {
                      const value = e.target.value;
                      updateCart(item, value);
                    }}
                  >
                    {[...Array(10).keys()].map((item) => {
                      return (
                        <option value={item + 1} key={item}>
                          {item + 1}
                        </option>
                      );
                    })}
                  </select>
                </td>
                <td>{item.price}</td>
                <td>{item.subtotal}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="text-end mb-3">
        <h5>
          總計: <span>${total}</span>
        </h5>
      </div>
      <textarea
        className="form-control mb-3"
        rows="3"
        placeholder="備註"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div className="text-end">
        <button className="btn btn-primary" onClick={() => createOrder()}>
          送出
        </button>
      </div>
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  total: PropTypes.number,
  description: PropTypes.string,
  setDescription: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired,
  delCartItem: PropTypes.func.isRequired,
  createOrder: PropTypes.func.isRequired,
};

export default Cart;
