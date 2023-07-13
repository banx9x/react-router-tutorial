import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Suspense, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartProvider from "../context/CartContext";

export default function Root() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch(
                `${import.meta.env.VITE_BASE_API}/products`
            );

            const data = await res.json();

            setProducts(data.products);
        };

        getProducts();
    }, []);

    return (
        <CartProvider>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Header />
                    </Col>
                </Row>

                <Suspense fallback={<div>Loading...</div>}>
                    <Row>
                        <Col xs={12}>
                            <Outlet context={{ products }} />
                        </Col>
                    </Row>
                </Suspense>

                <Row>
                    <Col xs={12}>
                        <footer className="footer">App Footer</footer>
                    </Col>
                </Row>
            </Container>
        </CartProvider>
    );
}
