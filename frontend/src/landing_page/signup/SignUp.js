import React, { useState } from "react";

function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");

    const [verificationCode, setVerificationCode] = useState("");
    const [showVerification, setShowVerification] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        console.log("SIGNUP BUTTON CLICKED");

        try {

            const response = await fetch("http://localhost:3002/signup", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: name,
                    email: email,
                    age: age,
                    password: password
                })
            });

            const data = await response.json();

            console.log(data);

            if (response.ok) {

                setShowVerification(true);

                console.log(
                    "Your Verification Code:",
                    data.verificationCode
                );

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log("Signup Error:", error);

            alert("Unable to connect with server");

        }
    };


    const handleVerify = () => {

        console.log("Entered Code:", verificationCode);

        alert("Verification API will be added next.");

    };


    return (

        <div className="container p-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <h2 className="text-center mb-4">
                        Create Your Account
                    </h2>


                    {/* Signup Form */}

                    <form onSubmit={handleSignup}>

                        {/* Name */}

                        <div className="mb-3">

                            <label className="form-label">
                                Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                required
                            />

                        </div>


                        {/* Email */}

                        <div className="mb-3">

                            <label className="form-label">
                                Email
                            </label>

                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                required
                            />

                        </div>


                        {/* Age */}

                        <div className="mb-3">

                            <label className="form-label">
                                Age
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter your age"
                                value={age}
                                onChange={(e) =>
                                    setAge(e.target.value)
                                }
                                required
                            />

                        </div>


                        {/* Password */}

                        <div className="mb-3">

                            <label className="form-label">
                                Password
                            </label>

                            <input
                                type="password"
                                className="form-control"
                                placeholder="Create password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                required
                            />

                        </div>


                        {/* Signup Button */}

                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                        >
                            Sign Up
                        </button>

                    </form>


                    {/* Verification Section */}

                    {showVerification && (

                        <div className="mt-4">

                            <h4>
                                Verify Your Email
                            </h4>

                            <p>
                                Enter the verification code sent to your email.
                            </p>


                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter verification code"
                                value={verificationCode}
                                onChange={(e) =>
                                    setVerificationCode(e.target.value)
                                }
                            />


                            <button
                                className="btn btn-success w-100"
                                onClick={handleVerify}
                            >
                                Verify
                            </button>

                        </div>

                    )}

                </div>

            </div>

        </div>

    );
}

export default SignUp;