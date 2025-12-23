import { createContext } from "react";

export const AppContext=createContext();

const AppProvider=({children})=>{

const values = {
                 a : "Value A",
                 b : "Value B",
                 c : "Value C",
                 d : "Value D",
                 e : "Value E",
                 f : "Value F"
}

return (

    <div>

<AppContext.Provider  value = {values}>
    {children}
    </AppContext.Provider>

    </div>
)

}
export default AppProvider
