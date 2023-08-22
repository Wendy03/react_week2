import PropTypes from 'prop-types';

const Order = ({ order }) => {
  return (
    <div className="col-8">
      {!order.id ? (
        <div className="alert alert-secondary text-center" role="alert">
          尚未建立訂單
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h5>訂單</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">品項</th>
                    <th scope="col">數量</th>
                    <th scope="col">小計</th>
                  </tr>
                </thead>
                <tbody>
                  {order.cart.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.subtotal}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="text-end">
                備註: <span>{order.description}</span>
              </div>
              <div className="text-end">
                <h5>
                  總計: <span>${order.total}</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Order.propTypes = {
  order: PropTypes.array.isRequired,
};

export default Order;
