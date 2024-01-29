"use client"

import { useEffect, useState } from "react"
import moment from "moment";
import "moment/locale/ko";

import SelectMount from "../common/SelectMount"
import styles from "../../css/skyPlotHeader.module.css"

export default function SkyPlotHeader() {
  const [mount, setMount] = useState<string>("PPHQ")
  const [updatedTime, setUpdatedTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdatedTime(moment(new Date()).format("YYYY/MM/DD HH:mm:ss"));
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <nav className={styles.navBar}>
      <div>
        <span style={{ fontSize: "15px", marginRight: "15px" }}>updated : {updatedTime}</span>
      </div>
      <div>
        <SelectMount mount={mount} setMount={setMount}/>
      </div>
    </nav>
  )
}