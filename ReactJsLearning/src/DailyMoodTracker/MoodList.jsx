import {MoodItem} from "./MoodItem";

function MoodList({moods,onDelete}) {
  return (
    <div>
      {moods.map((e) => (
        <MoodItem key={e.id} id={e.id} text={e.text} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default MoodList;


