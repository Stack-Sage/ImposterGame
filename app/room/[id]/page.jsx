"use client";
import { useState } from "react";
import RoomCodeBox from "../../components/RoomCodeBox";
import PlayerCard from "../../components/PlayerCard";
import NeonButton from "../../components/NeonButton";
import PhaseWrapper from "../../components/PhaseWrapper";

export default function RoomPage({ params }) {
  const roomId = params.id;
  // Placeholder state, replace with real-time logic
  const [players] = useState([
    { name: "Alice", score: 2 },
    { name: "Bob", score: 1 },
    { name: "Charlie", score: 0 }
  ]);

  if (!roomId) {
    return (
      <PhaseWrapper>
        <div className="glass p-8 rounded-2xl text-center text-2xl text-red-400 font-bold">
          Room code not found. Please check your link.
        </div>
      </PhaseWrapper>
    );
  }

  return (
    <PhaseWrapper>
      <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
        <RoomCodeBox code={roomId} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {players.map((p, i) => (
            <PlayerCard key={i} name={p.name} score={p.score} />
          ))}
        </div>
        <NeonButton>Start Round</NeonButton>
      </div>
    </PhaseWrapper>
  );
}
