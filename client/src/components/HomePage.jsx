import { useEffect, useState } from "react";
import Aside from "./Aside";
import { getProducts } from "../api/index";
import {
  Container,
  Content,
  Description,
  List,
  Price,
  QuantityContainer,
  QuantityButton,
  QuantityInput
} from "./App.styled";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quantities, setQuantities] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const { result } = await getProducts();
        setProducts(result);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const increaseQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
    }));
  };

  const addToCart = (productId) => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      const newCartItem = { ...product, quantity: quantities[productId] || 0 };
      setCart((prevCart) => [...prevCart, newCartItem]);
    }
  };

  return (
    <Container>
      <Aside />
      {error !== null && <p>{error.message}</p>}
      {loading && <p>Loading products...</p>}
      <List>
        {Boolean(products) &&
          products.map(({ name, price, _id, image }) => (
            <li key={_id}>
              <Content onClick={() => console.log(`Click on item ${name}`)}>
                {image && <img src={image} alt={name} style={{ width: "200px" }} />}
                <Description>
                  <p>{name}</p>
                  <Price>{price} $</Price>
                  <div>
                    <QuantityContainer>
                      <QuantityButton onClick={() => decreaseQuantity(_id)}>-</QuantityButton>
                      <QuantityInput type="number" value={quantities[_id] || 0} readOnly />
                      <QuantityButton onClick={() => increaseQuantity(_id)}>+</QuantityButton>
                    </QuantityContainer>
                    <button onClick={() => addToCart(_id)}>Add to Cart</button>
                  </div>
                </Description>
              </Content>
            </li>
          ))}
      </List>
      <h2>Cart Contents</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map(({ name, price, _id, image, quantity }) => (
            <li key={_id}>
              <p>{name}</p>
              <p>Quantity: {quantity}</p>
              <p>Price: {price} $</p>
              <img src={image} alt={name} style={{ width: "50px" }} />
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default HomePage;
