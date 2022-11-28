
import React, { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";
import App from "../App";

export default function LoadingScreen() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <main >
            {loading ?
                <div className="flex items-center justify-center h-screen">
                    <PropagateLoader
                        color={"#000000"}
                        loading={loading}
                        size={30}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    /></div>
                : <App />
            }
        </main>
    );
}
