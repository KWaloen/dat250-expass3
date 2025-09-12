"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Poll() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();


    const handleClick = async () => {
        const res = await fetch("http://localhost:8080/users/createUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            })
        });

        if (res.ok) {
            localStorage.setItem("username", username)
            router.push("/poll")
        }

        if (!res.ok) {
            throw new Error("Create user failed");
        }
    }

    return (

        <div>
            <div>Create User
                <div className="pt-1">
                    Username
                    <Input
                        value={username}
                        onChange={(username) => setUsername(username.target.value)}
                    />
                </div>

                <div className="pt-1">
                    Email
                    <Input
                        value={email}
                        onChange={(email) => setEmail(email.target.value)}
                    />
                </div>

                <div className="pt-1">
                    Password
                    <Input
                        value={password}
                        onChange={(password) => setPassword(password.target.value)}
                    />
                </div>

                <div className="pt-1">
                        <Button onClick={handleClick}>
                            Create User
                        </Button>
                </div>
            </div>
        </div>

    )
}