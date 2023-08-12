import Navbar from "./navbar";
import { useGetAllProductsQuery } from "../features/productsApi";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import React from 'react';
import { addToCart } from "../features/cartSlice";

const Home = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    const dispatch = useDispatch()
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    
    const handleAddToCart =(product)=>{
      dispatch(addToCart(product))
    }
    return (
      <div>
        <Navbar />
        <WrapDiv>
          {data.map((product) => (
            <Product key={product.id}>
              <Img src={product.image} alt="" />
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <Price>${product.price}</Price>
              {/* ... other product details */}
              <Button onClick={()=>handleAddToCart(product)}>AddToCart</Button>
            </Product>
          ))}
        </WrapDiv>
      </div>
    );
}
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
const Desc = styled.p`
  max-height:58px;
  overflow: hidden;
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
export default Home;