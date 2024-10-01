import { useState } from "react";
import { bookables } from "../../static.json";

function BookList() {
  const [group, setGroup]= useState("Rooms")
  const bookableGroup = bookables.filter((b) => b.group === group); // return 문 필요 없음
  const [bookableIndex, setBookableIndex] = useState(0)
  // function nextBookableIndex(){
  //   setBookableIndex(i=>i+1);
  // }

  const groups = Array.from(new Set(bookables.map(item => item.group)))

  return (
    <>
      <ul className="items-list-nav">
      <select onChange={(e) => setGroup(e.target.value)} value={group}>
        {groups.map(g => (
          <option value={g} key={g}>{g}</option>
        ))}
      </select>
        {bookableGroup.map((b, i) => (
            <li key={b.id} className={i === bookableIndex ? "selected" : ""}>
              <button className="btn" onClick={() => setBookableIndex(i)}>
                {b.title}
              </button>
            </li>
            )
          )}
      </ul>
      <button className="btn" onClick={()=>setBookableIndex(i=>(i+1)%bookableGroup.length)}>
        다음꺼
      </button>
    </>
  );
}

export default BookList;
