import styles from "./satMessage.module.css"

const sats = [
  "G04",
  "G08",
  "G09",
  "G16",
  "G18",
  "G26",
  "G28",
  "G31",
  "C01",
  "C02",
  "C03",
  "C04",
  "C06",
  "C07",
  "C09",
  "C10",
  "C16",
  "C21",
  "C22",
  "C29",
  "C30",
  "R07",
  "R08",
  "R09",
  "R16",
  "R18",
  "R19",
  "R20",
  "E07",
  "E15",
  "E19",
  "E21",
  "E27",
  "E30",
  "E34",
]

export default function SatMessage() {
  return (
    <div style={{ width: "100%" }}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>Correction</th>
            <th className={styles.tableHeader}>Orbit</th>
            <th className={styles.tableHeader}>Bias</th>
            <th className={styles.tableHeader}>Ionosphere</th>
            <th className={styles.tableHeader}>Clock</th>
          </tr>
          <tr>
            <th className={styles.tableHeader}>
              <p style={{ fontSize: "14px", textAlign: "end" }}>Latency</p>
              <p style={{ fontSize: "14px", textAlign: "start" }}>PRN</p>
            </th>
            <th className={styles.tableItem}></th>
            <th className={styles.tableItem}>10sec</th>
            <th className={styles.tableItem}></th>
            <th className={styles.tableHeader}>-1sec</th>
          </tr>
        </thead>
        <tbody>
          {
            sats.map((item) => {
              return (
                <tr key={item}>
                  <th className={styles.tableItem}>{item}</th>
                  <th className={styles.tableItem}>true</th>
                  <th className={styles.tableItem}>true</th>
                  <th className={styles.tableItem}>true</th>
                  <th className={styles.tableItem}>true</th>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}