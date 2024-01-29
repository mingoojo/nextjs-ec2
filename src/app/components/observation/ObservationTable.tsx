"use client"

import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";

type ObservationTableProps = {
  header:{
    name: string,
    tableHeader: string[],
  }
}

export default function ObservationTable({ header }:ObservationTableProps) {
  const [renderd, setRenderd] = useState<Boolean>(false)

  const columns: ColumnsType<any> = header.tableHeader.map((data) => {
    return {
      title: data,
      dataIndex: data,
      sorter: (a, b) => a.localeCompare(b),
    }
  })

  useEffect(() => {
    setRenderd(true)
  }, [])

  return (
    <div>
      {
        renderd && <Table columns={columns} />
      }
    </div>
  )
}