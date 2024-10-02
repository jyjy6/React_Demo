import { useReducer } from "react";
import { bookables, days, sessions } from "../../static.json";
import reducer from "../../reducer";

function BookList() {
  const initState = {
    group: "Rooms",
    bookableIndex: 0,
    hasDetails: false,
  };

  const [state, dispatch] = useReducer(reducer, initState);
  const { group, bookableIndex, hasDetails } = state;

  const bookableGroup = bookables.filter((b) => b.group === group);

  function nextBookableIndex() {
    dispatch({
      type: "NEXT_BOOKABLE",
      payload: bookableGroup.length,
    });
  }

  function changeGroup(e) {
    dispatch({
      type: "SET_GROUP",
      payload: e.target.value,
    });
  }

  function changeBookableIndex(selectIndex) {
    dispatch({
      type: "SET_BOOKABLE",
      payload: selectIndex,
    });
  }

  function toggleDetails() {
    dispatch({
      type: "TOGGLE_HAS_DETAILS",
    });
  }

  const groups = Array.from(new Set(bookables.map((item) => item.group)));
  const bookable = bookableGroup[bookableIndex];

  return (
    <>
      <div>
        <ul className="items-list-nav">
          <select onChange={changeGroup} value={group}>
            {groups.map((g) => (
              <option value={g} key={g}>
                {g}
              </option>
            ))}
          </select>
          {bookableGroup.map((b, i) => (
            <li key={b.id} className={i === bookableIndex ? "selected" : ""}>
              <button className="btn" onClick={() => changeBookableIndex(i)}>
                {b.title}
              </button>
            </li>
          ))}
        </ul>
        <button className="btn" onClick={nextBookableIndex}>
          다음꺼
        </button>
      </div>
      <div className="book-details">
        <div className="item">
          <div className="item-header">
            <h2>{bookable.title}</h2>
            <span className="controls">
              <label>
                <input
                  type="checkbox"
                  checked={hasDetails}
                  onChange={toggleDetails}
                />
                상세 보기
              </label>
            </span>
          </div>
          <p>{bookable.notes}</p>
          {hasDetails && (
            <div className="item-details">
              <h3>사용 가능한 요일과 세션</h3>
              <div className="bookable-availability">
                <ul>
                  {bookable.days.sort().map((d) => (
                    <li key={d}>{days[d]}</li>
                  ))}
                </ul>
                <ul>
                  {bookable.sessions.sort().map((s) => (
                    <li key={s}>{sessions[s]}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BookList;
