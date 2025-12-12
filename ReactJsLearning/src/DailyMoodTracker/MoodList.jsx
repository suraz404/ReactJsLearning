import {MoodItem} from "./MoodItem";

function MoodList({moods}) {
  return (
    <div>
      {moods.map((e) => (
        <MoodItem key={e.id} text={e.text} />
      ))}
    </div>
  );
}

export default MoodList;


