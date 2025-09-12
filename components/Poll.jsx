"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

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
        
       
    }
 
    

    

    return (

        <div>
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
                </div>

            </div>
        </div>

    )
}