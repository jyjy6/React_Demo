import { bookables } from "../../static.json";

function BookList() {
  const group = "Rooms";
  let bookableIndex = 1; // let으로 변경

  const bookableGroup = bookables.filter((b) => b.group === group); // return 문 필요 없음

  function changeBookable(idx) {
    bookableIndex = idx; // bookableIndex를 let으로 변경해야 업데이트 가능
  }

  return (
    <ul className="items-list-nav">
      {bookableGroup.map((b, i) => {
        // 중괄호로 블록을 시작하므로 return 문이 필요함
        return (
          <li key={b.id} className={i === bookableIndex ? "selected" : ""}>
            <button className="btn" onClick={() => changeBookable(i)}>
              {b.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default BookList;
