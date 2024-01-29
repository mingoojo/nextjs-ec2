"use client"
import Highcharts from "highcharts";
import HighchartsReact, { HighchartsReactRefObject } from "highcharts-react-official";
import { useEffect, useRef, useState } from "react";
import { markers } from "../../position";
import useMediaQuary from "@/app/hooks/useMediaQuary";
import styles from "./overView.module.css"

type Option = {
  chart: {
    type: string,
  },
  title: {
    text: string,
  },
  xAxis: {
    title: {
      text: string,
    },
    categories: string[],
  },
  yAxis: {
    title: {
      text: string,
    },
  },
  plotOptions: {
    column: {
      dataLabels: {
        enabled: boolean,
      },
      enableMouseTracking: boolean,
    },
  },
  series: [
    {
      name: string,
      data: number[],
    },
  ],
}

const options = (type:string, title:string):Option => {
  return ({
    chart: {
      type: type,
    },
    title: {
      text: title,
    },
    xAxis: {
      title: { // 변경: x축의 제목 추가
        text: "Categories",
      },
      categories: [],
    },
    yAxis: {
      title: {
        text: "packet",
      },
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: false,
      },
    },
    series: [
      {
        name: "packet",
        data: [0],
      },
    ],
  })
}

export default function Graph () {
  const [data, setData] = useState<Option>(options("bar", ""))
  const chartRef = useRef<HighchartsReactRefObject>(null);
  const { webSize } = useMediaQuary()


  useEffect(() => {
    setData(prevData => ({
      ...prevData,
      xAxis: {
        title: { // 변경: x축의 제목 추가
          text: "Satellites",
        },
        categories: markers.map((marker) => (marker.name)),
      },
      series: [{
        name: "sats",
        data: markers.map((marker) => (marker.sats)),
      }],
    }));
  }, [])

  return (
    <div className={`card ${styles.cardDefault} ${webSize === "XL" || webSize === "XXL" ? styles.cardGrid : "" } ${ webSize === "XL" || webSize === "XXL" ? styles.cardLeft : ""}`}>
      <div className="full-width">
        <div className="page-title-container">
          <h4 className="page-title">GRAPH</h4>
        </div>
      </div>
      <HighchartsReact highcharts={Highcharts} options={data} ref={chartRef} />
    </div>
  )
}