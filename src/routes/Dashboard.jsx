import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

export default function Dashboard() {
    const { user } = useAuthContext();

    if (!user) {
        return <Navigate to={"/login"} />;
    }

    return (
        <>
            <header>Dashboard header</header>

            <Outlet />

            <footer>Dashboard footer</footer>
        </>
    );
}
