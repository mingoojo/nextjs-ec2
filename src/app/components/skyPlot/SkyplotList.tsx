"use client"
import Table, { ColumnsType } from "antd/es/table";
import styles from "../../css/skyPlotList.module.css"
import { useEffect, useState } from "react";

type SkyplotListProps = {
  tableItem : {
    name: string,
    item : string[]
  }[]
}


export default function SkyplotList({ tableItem }:SkyplotListProps) {
  const [renderd, setRenderd] = useState<Boolean>(false)

  useEffect(() => {
    setRenderd(true)
  }, [])

  let items:any[] = [];

  tableItem.forEach((item) => {
    items.push(...item.item)
  })


  const columns: ColumnsType<any> = [
    {
      title: "Class",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      width: "33.3%",
    },
    {
      title: "ID",
      dataIndex: "ID",
      sorter: (a, b) => a.ID.localeCompare(b.ID),
      width: "33.3%",
    },
    {
      title: "connected",
      dataIndex: "connected",
      sorter: (a, b) => a.connected.localeCompare(b.connected),
      width: "33.3%",
    },
  ]

  const ID = (item : string) => {
    if (item === "G") {
      return "GPS"
    } else if (item === "C") {
      return "BDS"
    } else if (item === "R") {
      return "GAL"
    } else {
      return "GLO"
    }
  }

  const dataSource = items.map((item) => {
    const itemId = ID(String(item[0]))
    return {
      key: item,
      name: item,
      ID: itemId,
      connected: "true",
    }
  })

  return (
    <div style={{ width: "60%", overflowY: "scroll", marginLeft: "10px" }}>
      {
        renderd && <Table dataSource={dataSource} columns={columns} />
      }
    </div>
  )
}