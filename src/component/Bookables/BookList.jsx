import {bookables} from "../../static.json"


function BookList(){
  const group = "Rooms";
  const bookableIndex = 1;
  const bookableGroup = bookables.filter((b)=>{b.group === group})
  function changeBookable(idx){
    bookableIndex = idx;
  }
  return(
    <ul className="items-list-nav">
      {bookableGroup.map((b,i)=>{
        return <li key={b.id}
                  className = {i===bookableIndex ? "selected" : ""}>
                    <button className="btn" onClick={()=>{changeBookable(i)}}>
                      {b.title}
                    </button>
        </li>
      })}

    </ul>
  )
}

export default BookList;