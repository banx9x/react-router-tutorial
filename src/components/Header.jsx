import { Link, NavLink } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import {
    Navbar,
    Container,
    Nav,
    Dropdown,
    Image,
    Button,
    Badge,
} from "react-bootstrap";
import useCartContext from "../hooks/useCartContext";

export default function Header() {
    const { user, setUser } = useAuthContext();
    const { totalQuantity } = useCartContext();

    const handleLogout = () => {
        if (confirm("You're logging out!")) {
            setUser(null);
        }
    };

    return (
        <header className="header">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={"/"}>
                        Logo
                    </Navbar.Brand>

                    <Navbar.Toggle
                        className="order-3"
                        aria-controls="basic-navbar-nav"
                    />
                    <Navbar.Collapse
                        className="order-3 order-lg-1"
                        id="basic-navbar-nav"
                    >
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to={"/"}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to={"about"}>
                                About
                            </Nav.Link>
                            <Nav.Link as={NavLink} to={"profile"}>
                                Profile
                            </Nav.Link>
                            <Nav.Link as={NavLink} to={"products"}>
                                Products
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Button
                        as={Link}
                        to={"cart"}
                        variant="primary"
                        className="order-2"
                    >
                        Cart <Badge bg="secondary">{totalQuantity}</Badge>
                        <span className="visually-hidden">cart items</span>
                    </Button>

                    {user ? (
                        <Dropdown className="ms-auto order-1 order-lg-2">
                            <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                            >
                                <Image
                                    src={user.image}
                                    width={40}
                                    height={40}
                                    rounded
                                />
                                {user.firstName} {user.lastName}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to={"profile"}>
                                    Profile
                                </Dropdown.Item>

                                <Dropdown.Item onClick={handleLogout}>
                                    Logout
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        <Nav.Link
                            className="order-1 order-lg-2 ms-auto"
                            as={NavLink}
                            to={"login"}
                        >
                            Login
                        </Nav.Link>
                    )}
                </Container>
            </Navbar>
        </header>
    );
}
