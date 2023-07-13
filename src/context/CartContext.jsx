import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM": {
            // Kiểm tra xem sản phẩm có trong giỏ hàng hay chưa
            const product = state.items.find(
                (item) => item.productId === action.payload.productId
            );

            if (product) {
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.productId === action.payload.productId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, action.payload],
                };
            }
        }

        case "REMOVE_ITEM": {
            return {
                ...state,
                items: state.items.filter(
                    (item) => item.productId !== action.payload.productId
                ),
            };
        }

        case "INCREASE_QUANTITY": {
            return {
                ...state,
                items: state.items.map((item) =>
                    item.productId === action.payload.productId
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                          }
                        : item
                ),
            };
        }

        case "DECREASE_QUANTITY": {
            const product = state.items.find(
                (item) => item.productId === action.payload.productId
            );

            if (product.quantity > 1) {
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.productId === action.payload.productId
                            ? {
                                  ...item,
                                  quantity: item.quantity - 1,
                              }
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    items: state.items.filter(
                        (item) => item.productId !== action.payload.productId
                    ),
                };
            }
        }

        case "CLEAR_CART": {
            return {
                items: [],
            };
        }

        default: {
            throw new Error("Action not supported");
        }
    }
};

// eslint-disable-next-line react/prop-types
export default function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, {
        items: [],
    });

    const addItem = (payload) => {
        dispatch({ type: "ADD_ITEM", payload });
    };

    const removeItem = (payload) => {
        dispatch({ type: "REMOVE_ITEM", payload });
    };

    const increaseQuantity = (payload) => {
        dispatch({ type: "INCREASE_QUANTITY", payload });
    };

    const decreaseQuantity = (payload) => {
        dispatch({ type: "DECREASE_QUANTITY", payload });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    const totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                items: state.items,
                addItem,
                removeItem,
                increaseQuantity,
                decreaseQuantity,
                clearCart,
                totalQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
