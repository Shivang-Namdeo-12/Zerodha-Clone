import React, { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            const response = await fetch("http://localhost:3002/login", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            console.log(data);

           if (response.ok) {

    localStorage.setItem("token", data.token);

    window.location.href = "http://localhost:3001";

} else {

                alert(data.message);

            }

        } catch (error) {

            console.log("Login Error:", error);

            alert("Unable to connect with server");

        }
    };


    return (

        <div className="container p-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <h2 className="text-center mb-4">
                        Login
                    </h2>

                    <form onSubmit={handleLogin}>

                        <div className="mb-3">

                            <label className="form-label">
                                Email
                            </label>

                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                        </div>


                        <div className="mb-3">

                            <label className="form-label">
                                Password
                            </label>

                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                        </div>


                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                        >
                            Login
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );
}

export default Login;