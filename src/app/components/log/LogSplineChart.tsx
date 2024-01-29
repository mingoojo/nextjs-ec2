"use client"
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";


export default function LogSplineChart({ title, usage }:{title:string, usage:number}) {
  const chartRef = useRef<any>();

  const initialOptions = {
    chart: {
      type: "spline",
      width: 1000, // 원하는 너비로 설정
    },
    credits: { enabled: false },
    title: {
      text: title,
      align: "center",
    },
    xAxis: {
      categories: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00"],
      tickWidth: 2,
      tickColor: "#cfcfcf",
      tickPosition: "outside",
      labels: {
        rotation: 90,
        style: {
          fontSize: 14,
        },
      },
    },
    yAxis: [
      {
        title: {
          text: "사용량(%)",
        },
      },
    ],
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        stacking: "normal",
        grouping: true,
        animation: true,
        stickyTracking: false,
        states: {
          hover: {
            enabled: true,
          },
        },
        borderRadius: "5%",
      },
      spline: {
        marker: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: "사용량",
        data: [1265, 6689, 1110, 7855, 5592, 665, 5682, 8810, 4565, 2342, 9110, 555, 6392, 2165, 8821, 4120, 25, 5812, 8895, 9711, 7155],
        yAxis: 0, // 첫 번째 yAxis에 매핑
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={initialOptions}
      ref={chartRef}
    />
  )
}
