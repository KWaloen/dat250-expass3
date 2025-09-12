"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export default function Poll() {


    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");

    const handleClick = () => {
        setQuestion(question);
        setOption1(option1);
        setOption2(option2);
        setOption3(option3);

        getUserId();
        createPoll();
    }

    const getUserId = async () => {
        const res = await fetch("http://localhost:8080/users/allUsers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to get users")
        }

        const users = await res.json();

        for (let i=0; i < users.length; i++) {
            if (localStorage.getItem("username") === users[i].username) {
                const userId = users[i].userId;
                localStorage.setItem("userId", userId);
            }
        }
    }

    const createPoll = async () => {
        const res = await fetch("http://localhost:8080/polls/createPoll", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                question: question,
                voteOptions: [
                    {caption: option1, presentationOrder: 1},
                    {caption: option2, presentationOrder: 2},
                    {caption: option3, presentationOrder: 3},
                ], 
                publishedBy: localStorage.getItem("userId"),
            })
        });
        if (!res.ok) {
            throw new Error("Create poll failed!")
        }
    }



    return (

        <div>
            <div className="pb-5">
                <p>Hi {localStorage.getItem("username")}!</p>
            </div>
            <div>
                Enter Question:
                <Input
                    value={question}
                    onChange={(question) => setQuestion(question.target.value)}
                />
            </div>

            <div>
                <div className="pt-5">
                    Option 1:
                    <Input
                        value={option1}
                        onChange={(option1) => setOption1(option1.target.value)}
                    />
                </div>

                <div className="pt-5">
                    Option 2:
                    <Input
                        value={option2}
                        onChange={(option2) => setOption2(option2.target.value)}
                    />
                </div>

                <div className="pt-5">
                    Option 3:
                    <Input
                        value={option3}
                        onChange={(option3) => setOption3(option3.target.value)}
                    />
                </div>

                <div className="pt-5">
                    <Button onClick={handleClick}>
                        Submit Poll
                    </Button>
                    <Link href="/vote">
                        <Button>
                            Go vote
                        </Button>
                    </Link>
                </div>

            </div>
        </div>

    )
}