import { createContext, useContext } from "react";

const initialContext: {
    debugMode: boolean;
} = {
    debugMode: false,
};

const DebugContext = createContext(initialContext);

export const DebugProvider = ({ children }: any) => {
    const debugMode = process.env.NODE_ENV === "development";
    return (
        <DebugContext.Provider value={{ debugMode }}>
            {children}
        </DebugContext.Provider>
    );
};

export const useDebug = () => {
    return useContext(DebugContext);
};
