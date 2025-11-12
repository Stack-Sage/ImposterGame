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

  return (
    <PhaseWrapper>
      <div className="flex flex-col items-center gap-6">
        <RoomCodeBox code={roomId} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {players.map((p, i) => (
            <PlayerCard key={i} name={p.name} score={p.score} />
          ))}
        </div>
        <NeonButton>Start Round</NeonButton>
      </div>
    </PhaseWrapper>
  );
}
