import styles from "./ssrOverView.module.css"

export default function SSROverView() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.tableHeader}>가용 위성 총량</th>
          <th className={styles.tableHeader}>GPS</th>
          <th className={styles.tableHeader}>BeiDou</th>
          <th className={styles.tableHeader}>Galileo</th>
          <th className={styles.tableHeader}>GLONASS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.tableItem}> 40 </td>
          <td className={styles.tableItem}> 10 </td>
          <td className={styles.tableItem}> 10 </td>
          <td className={styles.tableItem}> 10 </td>
          <td className={styles.tableItem}> 10 </td>
        </tr>
      </tbody>
    </table>
  )
}