import React, {createContext} from "react";

const GlobalContext = createContext({
    ui: {
        loading: false,
        setLoading: () => {},
    }
});

export default GlobalContext;