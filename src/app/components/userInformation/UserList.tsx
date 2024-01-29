import UserListTable from "./UserListTable";

export default function UserList() {
  return (
    <div style={{ width: "100%" }}>
      <div className="page-title-container">
        <h4 className="page-title">사용자 리스트 테이블</h4>
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <UserListTable/>
      </div>
    </div>
  )
}