import Navbar from "./navbar";
// import { useSelector } from "react-redux";
// import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
    // const { data, error, isLoading } = useGetAllProductsQuery()
    return (
        <div>
            <Navbar />
            <h1>Home</h1>
        </div>
    );
}
 
export default Home;