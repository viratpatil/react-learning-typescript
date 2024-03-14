import React , {createContext, PropsWithChildren, useState, useContext} from "react";

interface Counter {
    countValue: Number;
}

const ThemeContext = createContext<Counter | null>(null);

const ThemeContextProvider = (props: PropsWithChildren) => {
    const [count]  = useState<number>(1);
    return <ThemeContext.Provider value={{countValue: count}}>{props.children}</ThemeContext.Provider>
}

const useThemeContext = () => {
    return useContext(ThemeContext);
}