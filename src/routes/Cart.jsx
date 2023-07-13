import { Col, Container, Row } from "react-bootstrap";
import useCartContext from "../hooks/useCartContext";
import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem";
import PaymentInfo from "../components/PaymentInfo";
import "./Cart.css";

export default function Cart() {
    const { products } = useOutletContext();
    const { items, totalQuantity } = useCartContext();

    const cartItems = items.map((item) => ({
        product: products.find((product) => product.id === item.productId),
        quantity: item.quantity,
    }));

    if (totalQuantity === 0) {
        return (
            <main>
                <Container>
                    <Row>
                        <Col>
                            <h1>Your cart is empty</h1>
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }

    const subTotal = cartItems.reduce(
        (total, item) => total + item.quantity * item.product.price,
        0
    );

    const shippingFee = 20;

    const total = subTotal + shippingFee;

    return (
        <main>
            <Container>
                <Row>
                    <Col>
                        <p className="font-bold">Shopping Cart</p>
                        <p>You have {totalQuantity} in your cart</p>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={8}>
                        {cartItems.map((item) => (
                            <CartItem key={item.product.id} item={item} />
                        ))}
                    </Col>

                    <Col xs={12} md={4}>
                        <PaymentInfo
                            subTotal={subTotal}
                            shippingFee={shippingFee}
                            total={total}
                        />
                    </Col>
                </Row>
            </Container>
        </main>
    );
}
