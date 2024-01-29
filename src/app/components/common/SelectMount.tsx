"use client"

import React, { useEffect, useState } from "react"
import { markers } from "../../position"
import { Select, Space } from "antd";

type SelectMountProps = {
  mount : string,
  setMount : React.Dispatch<React.SetStateAction<string>>
}

export default function SelectMount({ mount, setMount }:SelectMountProps) {
  const [renderd, setRenderd] = useState<Boolean>(false)

  useEffect(() => {
    setRenderd(true)
  }, [])

  const options = markers.map((data) => {
    return {
      value: data.name,
      label: data.name,
    }
  })

  const handleChange = (value: string) => {
    setMount(value);
  };

  return (
    <>
      {
        renderd && (
          <Space wrap>
            <Select
              defaultValue={mount}
              style={{ width: 120 }}
              onChange={handleChange}
              options={options}
            />
          </Space>
        )
      }
    </>
  )
}