import React, {useState} from "react";
import GlobalContext from "./GlobalContext";

const GlobalState = (props) => {
    const [loading, setLoading] = useState(false);
    return(
        <GlobalContext.Provider
        value={{
            ui: {
                loading: loading,
                setLoading: setLoading      // le paso un state como prop al componente 
            }
            }}>
        {props.children}

        </GlobalContext.Provider>

    );
}





export default GlobalState;