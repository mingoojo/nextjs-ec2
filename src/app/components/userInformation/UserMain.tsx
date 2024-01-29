import UserList from "./UserList";
import UserOverView from "./UserOverView";

export default function UserMain() {
  return (
    <div>
      <div className="card">
        <UserOverView/>
      </div>
      <div className="card" style={{ marginTop: "20px" }}>
        <UserList/>
      </div>
    </div>
  )
}