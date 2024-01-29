"use client"
import React from "react"
import Link from "next/link"
import { Button, Table } from "antd"
import { ColumnsType } from "antd/es/table"

const userInfo = [
  {
    name: "user1",
    usage: 100,
    rover: 10,
  },
  {
    name: "user2",
    usage: 1020,
    rover: 3,
  },
  {
    name: "user3",
    usage: 45,
    rover: 1,
  },
  {
    name: "user4",
    usage: 75,
    rover: 2,
  },
  {
    name: "user5",
    usage: 1000,
    rover: 9,
  },
  {
    name: "user6",
    usage: 880,
    rover: 5,
  },
  {
    name: "user7",
    usage: 213,
    rover: 2,
  },
  {
    name: "user8",
    usage: 10,
    rover: 1,
  },
  {
    name: "user9",
    usage: 22,
    rover: 1,
  },
]

export default function UserListTable() {

  const columns: ColumnsType<any> = [
    {
      title: "유저명",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      width: "25%",
    },
    {
      title: "유저 사용량",
      dataIndex: "usage",
      sorter: (a, b) => a.usage - b.usage,
      width: "25%",
    },
    {
      title: "사용 장비(ROVER)",
      dataIndex: "rover",
      sorter: (a, b) => a.rover - b.rover,
      width: "25%",
    },
    {
      title: "",
      dataIndex: "",
      render: (_, record) => (
        <Link href={`userInformation/${record.name}`}>
          <Button type="primary" size="small">
            선택
          </Button>
        </Link>
      ),
      width: "25%",
    },
  ];

  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      <Table columns={columns} dataSource={userInfo} />
    </div>
  )
}