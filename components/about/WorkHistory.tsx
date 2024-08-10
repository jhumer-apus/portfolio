import { Typography } from "@mui/material";
import StepperLine from "../StepperLine";

export default function WorkHistory() {
    return (
        <div className="max-w-96 m-auto mt-10">
            <Typography variant="h4">Work History</Typography>
            <StepperLine
                direction="horizontal"
                size={15} 
                content={[]} 
            />
        </div>
    )
}