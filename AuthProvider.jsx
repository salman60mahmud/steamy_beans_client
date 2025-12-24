import { useContext } from "react";
import { SteamyBeansContext } from "./src/contextAPI/SteamyBeansProvider";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const { newuser } = useContext(SteamyBeansContext);
    if (!newuser) {
        navigate('/login')
    }
    return children;

};

export default AuthProvider;