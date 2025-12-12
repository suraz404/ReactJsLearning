import {MoodItem} from "./MoodItem";

function MoodList({moods}) {
  return (
    <div>
      { 
        moods.map((e)=>{
          return(
        <MoodItem key={e.id} text={e.text} />
          )
        })
      }
    </div>
  );
}

export default MoodList;


