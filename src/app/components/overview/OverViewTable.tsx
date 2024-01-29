"use client"

import { markers } from "../../position";
import styles from "./overView.module.css"
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";

type DataType = {
  key: React.Key,
  name: string,
  lat: number,
  lng: number,
  height: number,
  sats: number,
  ref: number,
  proc: boolean,
}

const columns: ColumnsType<DataType> = [
  {
    title: "Mount",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Ref_ID",
    dataIndex: "ref",
    sorter: (a, b) => a.ref - b.ref,
  },
  {
    title: "Lat(°)",
    dataIndex: "lat",
    sorter: (a, b) => a.lat - b.lat,
  },
  {
    title: "Lng(°)",
    dataIndex: "lng",
    sorter: (a, b) => a.lng - b.lng,
  },
  {
    title: "Height(m)",
    dataIndex: "height",
    sorter: (a, b) => a.height - b.height,
  },
  {
    title: "Proc",
    dataIndex: "proc",
    render: (value) => (value ? "true" : "false"),
  },
];


export default function OverViewTable() {
  const [renderd, setRenderd] = useState<Boolean>(false)

  useEffect(() => {
    setRenderd(true)
  }, [])

  return (
    <div className="card">
      <div className="full-width">
        <div className="page-title-container">
          <h4 className="page-title">TABLE</h4>
        </div>
      </div>
      <div className={styles.tableBox}>
        {
          renderd && <Table columns={columns} dataSource={markers} />
        }
      </div>
    </div>
  )
}