"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
export default function Poll() {

    const router = useRouter();
    const [allPolls, setAllPolls] = useState([]);
    const [userId, setUserId] = useState();
    const [voteCount, setVoteCount] = useState({});


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
            },
        });

        if (!res.ok) {
            throw new Error("Failed to get votes")
        }

        const votes = await res.json();

        const allCounts = {};
        for (let i = 0; i < allPolls.length; i++) {
            const countingPollId = allPolls[i].pollId;
            const voter = allPolls[i].userId;
            
            allCounts[countingPollId] = {};

            for (let j = 0; j < votes.length; j++) {
                if (votes[j].pollId === countingPollId ) {
                    allCounts[countingPollId][votes[j].voteOptionId] = (allCounts[countingPollId][votes[j].voteOptionId] || 0) + 1;
                }
            }
        }
        setVoteCount(allCounts);
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
        alert("Vote Submitted!");
        await addUpVotes();

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
                    <div className="p-5">
                        {poll.question}
                    </div>
                    <div className="p-5">
                        {poll.voteOptions.map((option) => (
                            <div className="flex items-center justify-between" key={option.voteOptionId}>
                                {option.caption}

                                <Button onClick={() => handleVote(poll.pollId, option.voteOptionId)}>
                                    VOTE
                                </Button>

                                <p>{voteCount[poll.pollId]?.[option.voteOptionId] ?? ""}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    )

}