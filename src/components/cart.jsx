import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../features/cartSlice";
import Navbar from "./navbar";

import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
    <Navbar />
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <WrapDiv className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </WrapDiv>
      ) : (
        <WrapDiv>
          {/* <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div> */}
          <Product className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <Img src={cartItem.image} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <Button onClick={() => handleRemoveFromCart(cartItem)}>
                        Remove
                      </Button>
                    </div>
                  </div>
                  <div className="cart-product-quantity">
                    <Button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </Button>
                    <Count className="count">Number of Items : {cartItem.cartQuantity}</Count>
                    <Button onClick={() => handleAddToCart(cartItem)}>+</Button>
                  </div>
                  <Title className="cart-product-total-price">
                    ${cartItem.price * cartItem.cartQuantity}
                  </Title>
                </div>
              ))}
          </Product>
          <div className="cart-summary">
            <Button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </Button>
            <div className="cart-checkout">
              <div className="subtotal">
                <h2>Subtotal</h2>
                <Price className="amount">${cart.cartTotalAmount}</Price>
              </div>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </WrapDiv>
      )}
    </div>
  );
};







const WrapDiv = styled.div`
  padding: 3%;
  margin: auto;
`
const Title = styled.h2`
  height: 24px;
  overflow: hidden;
`

const Img = styled.img`
    width: 180px;
    height: 200px;
    margin: auto;
    padding: 10px 3vw;
`

const Product = styled.div`
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0px;
  margin-left: 5px;
  width: 20vw;
  display: inline-block;
`
const Count = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 5px 0px;
`

const Price = styled.span`
  color: grey;
  font-size: 20px;
`

const Button = styled.button`
  display: block;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  outline: none;
  background-color:white;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #c83232;
  padding: 10px 0px;
  &:hover{
    background-color: #c2bfbf;
    transition: all 0.3s ease-out;
  }
  &:active{
    color: #c83232;
  }
`

export default Cart;
