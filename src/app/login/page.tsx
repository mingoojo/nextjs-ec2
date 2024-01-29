import LoginForm from "../components/login/LoginForm";

export default function login() {
  return (
    <div className="mainContents">
      <div className="card" style={{ height: "70vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <LoginForm/>
      </div>
    </div>
  )
}