import { useContext } from "react";
import { SteamyBeansContext } from "../contextAPI/SteamyBeansProvider";

const Products = () => {
    const { name } = useContext(SteamyBeansContext);
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Products;