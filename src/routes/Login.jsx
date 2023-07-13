import { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";

export default function Login() {
    const { setUser } = useAuthContext();

    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formValues),
        });

        const data = await res.json();

        setUser(data);
    };

    return (
        <main className="main">
            <h1 className="heading">Login page</h1>

            <form action="" className="login-form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        id="username"
                        value={formValues.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-field">
                    <button className="form-button">Login</button>
                </div>
            </form>
        </main>
    );
}
