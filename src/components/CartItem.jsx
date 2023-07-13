import { Button, ButtonGroup } from "react-bootstrap";
import useCartContext from "../hooks/useCartContext";

export default function CartItem({ item: { product, quantity } }) {
    const { increaseQuantity, decreaseQuantity, removeItem } = useCartContext();

    return (
        <div className="d-flex justify-content-between align-items-center shadow mt-3 p-2 items rounded">
            <div className="d-flex flex-row align-items-center">
                <img
                    className="rounded object-fit-cover me-2"
                    src={product.thumbnail}
                    width={40}
                    height={40}
                />
                <div className="ml-2">
                    <span className="font-weight-bold d-block">
                        {product.title}
                    </span>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center">
                <ButtonGroup aria-label="Basic example" className="me-4">
                    <Button
                        variant="secondary"
                        onClick={() =>
                            decreaseQuantity({ productId: product.id })
                        }
                    >
                        -
                    </Button>
                    <Button variant="secondary">{quantity}</Button>
                    <Button
                        variant="secondary"
                        onClick={() =>
                            increaseQuantity({ productId: product.id })
                        }
                    >
                        +
                    </Button>
                </ButtonGroup>

                <span
                    className="d-block ml-5 font-weight-bold"
                    style={{ width: 60 }}
                >
                    ${product.price}
                </span>
                <Button
                    variant="danger"
                    onClick={() => removeItem({ productId: product.id })}
                >
                    <i className="bi bi-trash"></i>
                </Button>
            </div>
        </div>
    );
}
