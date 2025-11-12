"use client";
import { useState } from "react";

import PlayerCard from "@/components/PlayerCard";
import NeonButton from "@/components/NeonButton";
import PhaseWrapper from "@/components/PhaseWrapper";
import RoomCodeBox from "@/components/RoomCodeBox";

export default function RoomPage({ params }) {
  const roomId = params?.id;
  const [players] = useState([
    { name: "Alice", score: 2 },
    { name: "Bob", score: 1 },
    { name: "Charlie", score: 0 }
  ]);

  if (!roomId || typeof roomId !== "string" || roomId.length < 4) {
    return (
      <PhaseWrapper>
        <div className="glass p-8 rounded-2xl text-center text-2xl text-red-400 font-bold">
          Room code not found or invalid. Please check your link.
        </div>
      </PhaseWrapper>
    );
  }

  return (
    <PhaseWrapper>
      <div className="w-screen sm:max-w-md mx-1 sm:mx-auto flex flex-col items-center gap-2 sm:gap-4">
        <RoomCodeBox code={roomId} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 w-full">
          {players.map((p, i) => (
            <PlayerCard key={i} name={p.name} score={p.score} />
          ))}
        </div>
        <NeonButton>
          <span className="text-gray-900 text-base sm:text-xl">Start Round</span>
        </NeonButton>
      </div>
    </PhaseWrapper>
  );
}
