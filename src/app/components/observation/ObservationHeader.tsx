"use client"
import Link from "next/link"
import styles from "../../css/observationHeader.module.css"
import { usePathname } from "next/navigation";
import SelectMount from "../common/SelectMount";
import { useState } from "react";

const observationNav = [
  {
    href: "/pseudo",
    name: "Pseudo Range",
  },
  {
    href: "/carrier",
    name: "Carrier Phase",
  },
  {
    href: "/doppler",
    name: "Doppler",
  },
  {
    href: "/snr",
    name: "SNR",
  },
]

export default function ObservationHeader() {
  const [mount, setMount] = useState<string>("PPHQ")
  const pathname = usePathname()
  const result = pathname.match(/\/([^\/]+)\/([^\/]+)/) || pathname.match(/\/([^\/]+)/);
  if (result !== null) {
    return (
      <nav className={styles.navBar}>
        <div>
          {
            observationNav.map((data) => {
              const focus = `/${result[2]}` === data.href
              return (
                <Link key={data.name} className={`${focus ? "focus" : ""} ${styles.observationNav}`} href={`./${data.href}`}>{data.name}</Link>
              )
            })
          }
        </div>
        <div>
          <SelectMount mount={mount} setMount={setMount}/>
        </div>
      </nav>
    )
  }
}