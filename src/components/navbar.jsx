import cart_image from "../img/cart.png"
import styled from "styled-components";

const Navbar = () => {
    return (
        <NavigationDiv>
            <Nav>
                <H2>Online Store</H2>
                <div>
                    <Img src={cart_image} alt="Cart" />
                    <span>4</span>
                </div>
            </Nav>
        </NavigationDiv>
    );
}

const NavigationDiv = styled.div`
    background-color: #c2bfbf;
    padding: 15px 4vw;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const H2 = styled.h2`
    font-size: 35px;
`

const Img = styled.img`
    width: 35px;
    height: auto;
`
 
export default Navbar;