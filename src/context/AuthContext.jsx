import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER": {
            return action.payload;
        }

        default: {
            throw new Error("Action not supported");
        }
    }
};

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, null);

    const setUser = (user) => {
        dispatch({ type: "SET_USER", payload: user });
    };

    return (
        <AuthContext.Provider
            value={{
                user: state,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
