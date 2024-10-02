import { users } from "../../static.json";

function UserPicker() {
  return (
    <>
      <select>
        <option value="">사용자</option>
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default UserPicker;
