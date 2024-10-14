"use client"
import { RegisteredComponent } from "@builder.io/sdk-react-nextjs";

interface Props {
    text: string;
}

function Button({ text }: Props) {
    return <button onClick={() => console.log("Button Clicked!")}>{text}</button>;
}

export const ButtonInfo: RegisteredComponent = {
    name: 'Button',
    component: Button,
    isRSC: false,
    inputs: [
        {
            name: "text",
            type: "string",
        },
    ]
};
