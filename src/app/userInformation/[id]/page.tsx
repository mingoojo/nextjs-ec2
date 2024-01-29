"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "./page.module.css"

type PageProps = {
  params : {
    id : string
  }
}

type User = {
  name: string,
  permissions: string,
  account: string,
  signup: string,
  loginRecent: string,
  usage:number,
  logs : {
    model: string,
    name : string,
    usage : number
  }[]
}

const userInfoDetails:User[] = [
  {
    name: "user1",
    permissions: "user",
    account: "user1@gmail.com",
    signup: "2023-12-12",
    loginRecent: "2023-12-15",
    usage: 100,
    logs: [
      {
        model: "model1",
        name: "model1-log1",
        usage: 13,
      },
      {
        model: "model1",
        name: "model1-log2",
        usage: 16,
      },
      {
        model: "model1",
        name: "model1-log3",
        usage: 21,
      },
      {
        model: "model1",
        name: "model1-log4",
        usage: 20,
      },
      {
        model: "model1",
        name: "model1-log5",
        usage: 3,
      },
      {
        model: "model1",
        name: "model1-log6",
        usage: 15,
      },
      {
        model: "model1",
        name: "model1-log7",
        usage: 12,
      },
    ],
  },
]

const permissions = [
  {
    name: "user",
  },
  {
    name: "admin",
  },
]

export default function Page({ params }: PageProps) {
  const [permission, setPermission] = useState<string>("user")
  const [user, setUser] = useState<User>()

  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setPermission(e.target.value)
  }

  useEffect(() => {
    const selectedUser = userInfoDetails.filter((item) => {
      return item.name === params.id
    })

    if (selectedUser !== undefined) {
      setUser(selectedUser[0])
    }
  }, [params])


  return (
    <>
      <div className="card">
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "40%", textAlign: "center", paddingRight: "10px" }}>
            <Image width='300' height="300" priority={true} src={"/logo.png"} alt="image"/>
            <h4 style={{ marginTop: "20px" }}>{params.id}</h4>
          </div>
          <div style={{ width: "60%", textAlign: "center", paddingLeft: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ width: "100%", textAlign: "start" }}>
              <select onChange={handleChange} value={permission}>
                {
                  permissions.map((item) => {
                    return (
                      <option key={item.name} value={item.name}>{item.name}</option>
                    )
                  })
                }
              </select>
            </div>
            <div style={{ width: "100%", textAlign: "start", marginTop: "20px" }}>
              <h4 style={{ marginBottom: "20px" }}>유저정보</h4>
              <div style={{ paddingBlock: "10px" }}>
                <h4 style={{ marginBlock: "10px" }}>계정</h4>
                <p>{user?.account}</p>
              </div>
              <div style={{ paddingBlock: "10px" }}>
                <h4 style={{ marginBlock: "10px" }}>가입일</h4>
                <p>{user?.signup}</p>
              </div>
              <div style={{ paddingBlock: "10px" }}>
                <h4 style={{ marginBlock: "10px" }}>최근 로그인</h4>
                <p>{user?.loginRecent}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button>완료</button>
          <button>뒤로가기</button>
        </div>
      </div>
      <div className="card" style={{ marginTop: "20px" }}>
        <div style={{ width: "100%", paddingBlock: "10px" }}>
          <h4>총사용량 : {user?.usage}</h4>
        </div>
        <div style={{ width: "100%" }}>
          <table style={{ width: "100%", marginTop: "20px" }}>
            <thead>
              <tr>
                <th className={styles.tableHeader}>로그명</th>
                <th className={styles.tableHeader}>사용장비</th>
                <th className={styles.tableHeader}>사용량</th>
              </tr>
            </thead>
            <tbody>
              {
                user?.logs.map((item) => {
                  return (
                    <tr key={item.model}>
                      <td className={styles.tableItem}>{item.name}</td>
                      <td className={styles.tableItem}>{item.model}</td>
                      <td className={styles.tableItem}>{item.usage}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}