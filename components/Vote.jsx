"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
export default function Poll() {

    const router = useRouter();
    const [allPolls, setAllPolls] = useState([]);
    const [userId, setUserId] = useState();
    const [pollId, setPollId] = useState();

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        setUserId(userId);
    }, []);

    const getAllPolls = async () => {
        const res = await fetch("http://localhost:8080/polls/allPolls", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("Failed get polls")
        }

        const allPolls = await res.json()

        setAllPolls(allPolls)
    }

    useEffect(() => {
        getAllPolls();
    }, [])

    const addUpVotes = async () => {
        
        const res = await fetch("http://localhost:8080/votes/allVotes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    const handleVote = async (pollId, voteOptionId) => {

        const res = await fetch("http://localhost:8080/votes/castVote", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: userId,
                pollId: pollId,
                voteOptionId: voteOptionId,
            })
        });

        if (!res.ok) {
            throw new Error("Cast vote failed")
        }
    }


    return (
        <div>
            <div className="p-1">
                It is time to vote!
            </div>

            {allPolls.map(poll => (
                <div key={poll.pollId} className="border-2 border-solid mb-2">
                    <div  className="p-5">
                        {poll.question}
                    </div>
                    <div className="p-5">
                        {poll.voteOptions.map((option) => (
                            <div className="flex items-center justify-between" key={option.voteOptionId}>
                                {option.caption}
                                
                                <Button onClick={()=>handleVote(poll.pollId, option.voteOptionId)}>
                                    VOTE
                                </Button>
                               
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    )

}