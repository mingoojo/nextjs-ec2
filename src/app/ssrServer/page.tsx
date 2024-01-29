import ServerPieChart from "../components/ssrServer/ServerPieChart"
import styles from "./page.module.css"

type ErrorProps = {
  name : string,
  code : string,
  message : string
  gen_at : string
}[]

const errors:ErrorProps = [
  {
    name: "error_name",
    code: "error_code_1",
    message: "error_message_서버에서 에러가 발생했습니다.",
    gen_at: "2024-01-12 11:20:24",
  },
  {
    name: "error_name",
    code: "error_code_2",
    message: "error_message_서버에서 에러가 발생했습니다.",
    gen_at: "2024-01-12 12:23:14",
  },
  {
    name: "error_name",
    code: "error_code_3",
    message: "error_message_서버에서 에러가 발생했습니다.",
    gen_at: "2024-01-12 12:24:05",
  },
  {
    name: "error_name",
    code: "error_code_4",
    message: "error_message_서버에서 에러가 발생했습니다.",
    gen_at: "2024-01-12 12:24:24",
  },
  {
    name: "error_name",
    code: "error_code_5",
    message: "error_message_서버에서 에러가 발생했습니다.",
    gen_at: "2024-01-12 12:30:33",
  },
  {
    name: "error_name",
    code: "error_code_6",
    message: "error_message_서버에서 에러가 발생했습니다.",
    gen_at: "2024-01-12 13:01:24",
  },
  {
    name: "error_name",
    code: "error_code_7",
    message: "error_message_서버에서 에러가 발생했습니다.",
    gen_at: "2024-01-12 13:20:11",
  },
  {
    name: "error_name",
    code: "error_code_8",
    message: "error_message_서버에서 에러가 발생했습니다.",
    gen_at: "2024-01-12 13:23:41",
  },
  {
    name: "error_name",
    code: "error_code_9",
    message: "error_message_서버에서 에러가 발생했습니다.",
    gen_at: "2024-01-12 13:26:24",
  },
  {
    name: "error_name",
    code: "error_code_10",
    message: "error_message_서버에서 에러가 발생했습니다.",
    gen_at: "2024-01-12 13:30:51",
  },
]

export default function ssrDetails() {
  return (
    <div className="mainContents">
      <div className="page-title-container">
        <h3 className="page-title">SSR SERVER</h3>
      </div>
      <div className="card">
        <div style={{ width: "100%" }}>
          <div className="page-title-container">
            <h4 className="page-title">에러 메세지</h4>
          </div>
          <div>
            {
              errors.map((item) => {
                return (
                  <div key={item.code}>
                    <table style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td className={styles.tableItem}>
                            {item.gen_at} : {item.message}
                          </td>
                          <td className={styles.tableItem} style={{ textAlign: "end" }}>
                            {item.code}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="card" style={{ marginTop: "20px" }}>
        <div style={{ width: "100%" }}>
          <div className="page-title-container">
            <h4 className="page-title">저장장치</h4>
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "50%", minHeight: "500px", overflow: "hidden" }}>
              <ServerPieChart title="main DB" usage ={74.5}/>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "column", flexDirection: "column", width: "50%", minHeight: "500px", overflow: "hidden" }}>
              <ServerPieChart title="sub DB" usage ={14.5}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}