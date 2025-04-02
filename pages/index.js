import { useState } from "react";

const workouts = {
  day1: {
    title: "Day 1 – Lower Body Focus",
    warmup: [
      "Bodyweight squats x10",
      "Glute bridges x15",
      "World’s Greatest Stretch – 1 min per side",
    ],
    main: ["Goblet Squat – 4x8 (controlled tempo, work on depth)"],
    accessory: [
      "Romanian Deadlift (DB or barbell) – 3x10",
      "Bulgarian Split Squat – 3x6 per leg",
      "Wall Sit – 3x30 sec hold",
      "Plank to Push-Up – 3x10",
    ],
    cooldown: [
      "Deep squat hold – 2x30s",
      "Hamstring stretch – 1 min per side",
    ],
  },
  day2: {
    title: "Day 2 – Upper Body + Core",
    warmup: [
      "Band pull-aparts x15",
      "Arm circles + scapula shrugs",
      "Bird-Dogs – 10 per side",
    ],
    main: ["Pull-Ups – 3xMax Reps (or Inverted Rows if needed)"],
    accessory: [
      "Push-Ups – 3x10-15",
      "Dumbbell Row – 3x10 per side",
      "Suitcase Carry – 3x20 yards per side",
      "Side Plank – 3x20 sec per side",
    ],
    cooldown: [
      "Chest opener stretch",
      "Breathing work – 3x deep breaths in child’s pose",
    ],
  },
};

export default function Home() {
  const [selectedDay, setSelectedDay] = useState("day1");
  const workout = workouts[selectedDay];

  return (
    <div className="min-h-screen bg-gray-100 p-4 space-y-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Noah's BJJ Strength Plan
      </h1>

      <div className="flex justify-center space-x-2">
        <button
          onClick={() => setSelectedDay("day1")}
          className={`px-4 py-2 rounded ${
            selectedDay === "day1" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Day 1
        </button>
        <button
          onClick={() => setSelectedDay("day2")}
          className={`px-4 py-2 rounded ${
            selectedDay === "day2" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Day 2
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">{workout.title}</h2>

        <Section title="Warm-Up" items={workout.warmup} />
        <Section title="Main Lift" items={workout.main} />
        <Section title="Accessory Work" items={workout.accessory} />
        <Section title="Cooldown" items={workout.cooldown} />
      </div>
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div>
      <h3 className="font-medium text-gray-700 mb-1">{title}</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-800">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
