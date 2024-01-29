"use client"
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";


export default function ServerPieChart({ title, usage }:{title:string, usage:number}) {
  const chartRef = useRef<any>();

  const initialOptions = {
    chart: {
      type: "pie",
    },
    credits: { enabled: false },
    title: {
      text: title,
      align: "center",
    },
    xAxis: {
      categories: new Array<string>(),
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
    yAxis: {
      title: {
        text: "test",
      },
      tickPositions: [0, 10, 20, 30, 40, 50, 60],
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        size: "80%",
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
    },
    series: [
      {
        name: "",
        data: [
          { name: "사용중(%)", y: usage },
          { name: "사용가능(%)", y: 100 - usage },
        ],
        dataLabels: {
          format: `
          <div style="text-align:center">
            <span style="font-size:15px">{y}</span><br/>
          </div>
          `,
          color: "#222",
        },
      },
    ],
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={initialOptions}
      ref={chartRef}
    />
  )
}
