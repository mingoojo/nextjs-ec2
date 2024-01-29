import UserChart from "./UserChart";

export default function UserOverView() {
  return (
    <div style={{ width: "100%" }}>
      <div className="page-title-container">
        <h4 className="page-title">사용자 오버뷰</h4>
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        {/* <UserChart title={"사용자 수"}/>
        <UserChart title={"이번달 총 사용량"}/>
        <UserChart title={"example1"}/>
        <UserChart title={"example2"}/> */}
      </div>
    </div>
  )
}