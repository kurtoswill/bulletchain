"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface GameModeCardProps {
    id: string;
    label: string;
    icon: IconType;
}

export default function GameModeCard({ id, label, icon: Icon }: GameModeCardProps) {
    const router = useRouter();

    const isPlayOnline = id === "online";

    return (
        <button
            type="button"
            onClick={() => router.push(`/game/${id}`)}
            aria-label={label}
            className="w-full"
        >
            <Card
                className={`p-4 flex flex-row items-center gap-4 ${
                    isPlayOnline ? "bg-rose-500 text-white" : "bg-black text-white"
                }`}
            >
                <Icon className="size-6 flex-shrink-0" />

                <div className="flex flex-col text-left">
                    <div className="text-lg font-medium">{label}</div>
                    {isPlayOnline && (
                        <p className="text-sm opacity-80">
                            You need to play Computer 10 times to be eligible to play with other players
                        </p>
                    )}
                </div>
            </Card>
        </button>
    );
}
