import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import AuthProvider from "./context/AuthContext";
import Cart from "./routes/Cart";
const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));
const Profile = lazy(() => import("./routes/Profile"));
const ProductList = lazy(() => import("./routes/ProductList"));
const ProductDetail = lazy(() => import("./routes/ProductDetail"));
const Dashboard = lazy(() => import("./routes/Dashboard"));
const Login = lazy(() => import("./routes/Login"));

import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "profile", element: <Profile /> },
            { path: "products", element: <ProductList /> },
            { path: "products/:id", element: <ProductDetail /> },
            { path: "cart", element: <Cart /> },
            { path: "login", element: <Login /> },
        ],
    },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "*", element: <div>404 | Page not found</div> },
]);

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;
