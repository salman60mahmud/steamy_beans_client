import { createContext } from "react";

export const SteamyBeansContext = createContext(null);

const SteamyBeansProvider = ({children}) => {
const data = {
    name: 'abc'
}

    return (
        <SteamyBeansContext.Provider value={data}>
            {children}
        </SteamyBeansContext.Provider>
    );
};

export default SteamyBeansProvider;