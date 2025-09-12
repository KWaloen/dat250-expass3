import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Poll() {
    return (
        <div>
            <div>
                Enter question:
            </div>

            <Input />

            <div>
                <div className="pt-5">
                    Option 1: <Input />
                </div>

                <div className="pt-5">
                    Option 2: <Input />
                </div>

                <div className="pt-5">
                    Option 3: <Input />
                </div>

                <div className="pt-5">
                    <Button>Submit Poll</Button>
                </div>
            </div>
        </div>

    )
}