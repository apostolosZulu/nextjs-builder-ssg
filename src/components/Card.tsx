import { RegisteredComponent } from "@builder.io/sdk-react-nextjs";
import { PropsWithChildren } from "react";

interface Props {
    title: string;
    description: string;
}

function Card({ title, description, children }: PropsWithChildren<Props>) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export const CardInfo: RegisteredComponent = {
    name: 'Card',
    component: Card,
    isRSC: true,
    inputs: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "description",
            type: "string",
        }
    ],
    defaultChildren: [
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Text', options: { text: 'I am child text block!' } }
        }
    ]
};
