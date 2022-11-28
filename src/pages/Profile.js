import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
    const [data, setData] = useState("");


    useEffect(() => {
        async function fetchData() {
            const response = await axios
                .get("https://api.github.com/users/fajaryumna", {
                    headers: { Authorization: "Bearer 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" },
                }).then((res) => setData(res.data))
                .catch((e) => ("Gagal!", e));
            return response;
        }
        fetchData();
    });

    return (
        <main>
            <h1 className="flex items-center justify-center text-center pb-10 text-2xl font-semibold lg:text-5xl text-black">
                Github Profile
            </h1>
            <section className="max-w-5xl mx-auto flex items-center justify-center">
                <div
                    className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center"
                >
                    <div>
                        <img src={data.avatar_url} alt="" className="rounded-full w-60 " />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-black mb-8 lg:text-3xl">
                            {data.name}
                        </h1>

                        <ul className="text-sm text-slate-600 leading-loose lg:text-base lg:leading-relaxed">
                            <li>
                                <span className="font-bold text-black">Username:</span>{" "}
                                {data.login}
                            </li>
                            <li>
                                <span className="font-bold text-black">Email:</span>{" "}
                                {data.email}
                            </li>
                            <li>
                                <span className="font-bold text-black">Company:</span>{" "}
                                {data.company}
                            </li>
                            <li>
                                <span className="font-bold text-black">Following:</span>{" "}
                                {data.following}
                            </li>
                            <li>
                                <span className="font-bold text-black">Followers:</span>{" "}
                                {data.followers}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
