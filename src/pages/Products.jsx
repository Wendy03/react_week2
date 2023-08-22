import PropTypes from 'prop-types';

const Products = ({ drinks, addToCart }) => {
  return (
    <div className="list-group">
      {drinks.map((drink) => {
        return (
          <a
            href="#"
            className="list-group-item list-group-item-action"
            key={drink.id}
            onClick={() => addToCart(drink)}
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{drink.name}</h5>
              <small>${drink.price}</small>
            </div>
            <p className="mb-1">{drink.description}</p>
          </a>
        );
      })}
    </div>
  );
};

Products.propTypes = {
  drinks: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Products;
