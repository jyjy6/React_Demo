import { useState } from "react";
import { users } from "../../static.json";


function UsersPage(){
  
  const userGroup = users
  const [userIndex, setUserIndex] = useState(0)
  function nextUserIndex(){
    setUserIndex(i=>(i+1)%userGroup.length);
  }


  return (
    <>
    <h2>유저 타이틀 현황임</h2>
      <ul className="items-list-nav">
        {userGroup.map((b, i) => (
            <li key={b.id} className={i === userIndex ? "selected" : ""}>
              <button className="btn" onClick={() => setUserIndex(i)}>
                {b.title}
              </button>
            </li>
            )
          )}
      </ul>
      <button className="btn" onClick={nextUserIndex}>
        다음꺼
      </button>
    </>
  );
}


export default UsersPage;
