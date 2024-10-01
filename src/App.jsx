import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UserPicker from "./component/Users/UserPicker";
import './App.css';
import BookingsPage from "./component/Bookings/BookingsPage";
import BookablePage from "./component/Bookables/BookablePage";
import UsersPage from "./component/Users/UsersPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/bookings" className="btn btn-header">
                  <FaCalendarAlt />
                  <span>예약</span>
                </Link>
              </li>
              <li>
                <Link to="/bookables" className="btn btn-header">
                  <FaDoorOpen />
                  <span>예약자원</span>
                </Link>
              </li>
              <li>
                <Link to="/users" className="btn btn-header">
                  <FaUsers />
                  <span>사용자</span>
                </Link>
              </li>
            </ul>
          </nav>

          <UserPicker />
        </header>
        <Routes>
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/bookables" element={<BookablePage />} />
          <Route path="/users" element={<UsersPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
    // 사용자가 선택한 메뉴항목에 따라 화면에 보이는 UI를 결정
    
  );
}

export default App;
