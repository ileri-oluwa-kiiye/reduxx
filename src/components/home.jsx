import Navbar from "./navbar";
// import { useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
    // const { items, status} = useSelector(state => state.products)
    const { data, error, isLoading } = useGetAllProductsQuery()
    return (
        <div>
            <Navbar />
            <h1>Home</h1>
            {isLoading?( 
                <p>Loading...</p> 
            ): error?(
                <p>{error.message} An error ocured</p> 
            ): (<>
                <h2>New Arrivals</h2>
                <div className="products">
                    {data?.map(product=> <div key={product.id} className="product">
                        <h3>{product.name}</h3>
                        <img src={product.image} alt={product.name} />
                        <div className="details">
                            <span>{product.desc}</span>
                            <span className="price">{product.price}</span>
                        </div>
                        <button>Add to cart</button>
                    </div>)}
                </div>
            </>) 
            }
        </div>
    );
}
 
export default Home;