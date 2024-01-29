"use client"

import { useEffect, useState } from "react"
import styles from "../../css/skyPlotTable.module.css"
import { Table } from "antd"
import { ColumnsType } from "antd/es/table"

type SkyplotTableProps = {
  tableItem : {
    name: string,
    item : string[]
  }[]
}

export default function SkyplotTable({ tableItem }:SkyplotTableProps) {
  const [renderd, setRenderd] = useState<Boolean>(false)

  window.addEventListener("load", () => {
    setRenderd(true)
  })



  const columns: ColumnsType<any> = [
    {
      title: "Class",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      width: "50%",
    },
    {
      title: "Total",
      dataIndex: "item",
      sorter: (a, b) => a.item - b.item,
      width: "50%",
    },
  ]

  const dataSource = tableItem.map((data) => {
    return (
      {
        key: data.name,
        name: data.name,
        item: data.item.length,
      }
    )
  })

  return (
    <>
      <div style={{ width: "40%", marginRight: "10px" }}>
        {
          renderd && <Table columns={columns} dataSource={dataSource} />
        }
      </div>
    </>
  )
}