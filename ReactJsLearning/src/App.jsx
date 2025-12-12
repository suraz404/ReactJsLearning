// // import { Todo } from "./TodoList/Todo"  

import { MoodInput } from "./DailyMoodTracker/MoodInput"
// import { MoodItem } from "./DailyMoodTracker/MoodItem"
  import  MoodList  from "./DailyMoodTracker/MoodList"
import { useState } from "react";

function App() {

const [moods, setMoods] = useState(() => {
  const now = Date.now();
  return [
    { id: now,text: "Happy this morning", createdAt: now },
    { id: now + 1,text: "Feeling tired", createdAt: now },
  ];
});
  const addMood = (text) => {
    const trimmed = String(text).trim();
    if (!trimmed) return; // avoid empty moods

    const newMood = {
      id: Date.now(),      // unique id
      text: trimmed,
      createdAt: Date.now(),
    };

    // add to the front immutably
    setMoods((prev) => [newMood, ...prev]);
  };
  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Daily Mood Tracker</h1>
      <MoodInput onAddMood={addMood} />
      <MoodList moods={moods} />
      <p>Total moods: 0</p> {/* Placeholder for later */}
    </div>
  );
}

export default App;
