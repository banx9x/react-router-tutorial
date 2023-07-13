import { useEffect, useState } from "react";
import {
    Button,
    ButtonGroup,
    Col,
    Container,
    Image,
    Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import useCartContext from "../hooks/useCartContext";

export default function ProductDetail() {
    const { id } = useParams();

    const [product, setProduct] = useState();
    const [status, setStatus] = useState("loading");
    const { addItem } = useCartContext();

    useEffect(() => {
        setStatus("loading");

        const getProductById = async (id) => {
            const res = await fetch(`https://dummyjson.com/products/${id}`);

            if (!res.ok) {
                setStatus("fail");
                return;
            }

            const data = await res.json();

            setProduct(data);
            setStatus("success");
        };

        getProductById(id);
    }, [id]);

    if (status === "loading") {
        return <div>Đang tải thông tin sản phẩm...</div>;
    }

    if (!product) {
        return <div>404 | Sản phẩm không tồn tại</div>;
    }

    return (
        <main>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Image
                            width={"100%"}
                            src={product.thumbnail}
                            alt={product.title}
                        />
                    </Col>

                    <Col>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <Button
                            onClick={() =>
                                addItem({ productId: product.id, quantity: 1 })
                            }
                        >
                            Add to Cart
                        </Button>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}
