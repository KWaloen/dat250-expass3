"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Poll() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleClick = () => {
        
    }

    return (

        <div>
            <div>Create User
                <div className="pt-1">
                    Username
                    <Input
                        value={username}
                        onChange={(username) => setOption1(username.target.value)}
                    />
                </div>

                <div className="pt-1">
                    Email
                    <Input
                        value={email}
                        onChange={(email) => setOption2(email.target.value)}
                    />
                </div>

                <div className="pt-1">
                    Password
                    <Input
                        value={password}
                        onChange={(password) => setOption2(password.target.value)}
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