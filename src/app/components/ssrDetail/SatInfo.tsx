import styles from "./satInfo.module.css"

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

export default function SatInfo() {
  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th className={styles.tableHeader} style={{ width: "25%" }}>GRID (Lat, Lon)</th>
            <th className={styles.tableItem} style={{ width: "25%" }}>(36°, 128°)</th>
            <th className={styles.tableHeader} style={{ width: "25%" }}>Latency</th>
            <th className={styles.tableItem} style={{ width: "25%" }}>28 sec</th>
          </tr>
          <tr>
            <th className={styles.tableHeader} colSpan={2}>Troposphere</th>
            <th className={styles.tableHeader} colSpan={2}>Ionosphere</th>
          </tr>
          <tr>
            <th className={styles.tableHeader} >ZTD</th>
            <th className={styles.tableHeader} >ZWD</th>
            <th className={styles.tableHeader} >PRN</th>
            <th className={styles.tableHeader} >STEC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.tableItem} >2.45m</td>
            <td className={styles.tableItem}>0.13m</td>
            <td className={styles.tableItem}>{sats[0]}</td>
            <td className={styles.tableItem}>21.64m</td>
          </tr>
          {
            sats.map((item) => {
              return (
                <tr key={item}>
                  <td></td>
                  <td></td>
                  <td className={styles.tableItem}>{item}</td>
                  <td className={styles.tableItem}>21.64m</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}