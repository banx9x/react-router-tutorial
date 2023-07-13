import { useEffect, useState } from "react";
import { Link, generatePath, useOutletContext } from "react-router-dom";
import { Card, Button, Row, Col, Ratio } from "react-bootstrap";
import useCartContext from "../hooks/useCartContext";

export default function ProductList() {
    const { products } = useOutletContext();
    const { addItem } = useCartContext();

    return (
        <main>
            <h2>Danh sách sản phẩm</h2>

            <Row className="gy-4">
                {products.map((product) => (
                    <Col key={product.id} xs={6} md={4} lg={3}>
                        <Card
                            as={Link}
                            to={generatePath(":id", { id: product.id })}
                            className="text-decoration-none"
                        >
                            <Ratio aspectRatio={"4x3"}>
                                <Card.Img
                                    variant="top"
                                    src={product.thumbnail}
                                    className="object-fit-cover"
                                />
                            </Ratio>
                            <Card.Body>
                                <Card.Title className="text-decoration-none">
                                    {product.title}
                                </Card.Title>
                                <Card.Text
                                    className="text-decoration-none"
                                    style={{
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                        lineHeight: "24px",
                                        fontSize: "16px",
                                        height: 48,
                                    }}
                                >
                                    {product.description}
                                </Card.Text>
                                <Button variant="primary">View Detail</Button>
                                <Button
                                    variant="danger"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();

                                        addItem({
                                            productId: product.id,
                                            quantity: 1,
                                        });
                                    }}
                                >
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </main>
    );
}
