import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleLogin(event) {
        event.preventDefault();
        setMessage("Login belum terhubung ke backend.");
    }

    return (
        <section className="mx-auto mt-20 max-w-md">
            <h1 className="mb-8 text-2xl font-semibold">
                Admin Login
            </h1>

            <form onSubmit={handleLogin}>
                <div className="mb-5">
                    <label htmlFor="username" className="mb-2 block">
                        Username
                    </label>

                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full rounded border border-neutral-700 bg-black p-3 text-white"
                        required
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="mb-2 block">
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded border border-neutral-700 bg-black p-3 text-white"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded bg-white p-3 font-semibold text-black"
                >
                    Login
                </button>

                <p className="mt-4 text-sm text-gray-400">
                    {message}
                </p>
            </form>
        </section>
    );
}

export default Login;