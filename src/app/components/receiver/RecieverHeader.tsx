"use client"
import { useState } from "react"
import styles from "../../css/receiverHeader.module.css"
import SelectMount from "../common/SelectMount"
export default function RecieverHeader() {
  const [mount, setMount] = useState<string>("PPHQ")
  return (
    <nav className={styles.navBar}>
      <div>
        <SelectMount mount={mount} setMount={setMount}/>
      </div>
    </nav>
  )
}