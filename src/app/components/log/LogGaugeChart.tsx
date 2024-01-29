"use client"

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import SolidGauge from "highcharts/modules/solid-gauge";
import { useRef } from "react";

HighchartsMore(Highcharts);
SolidGauge(Highcharts);

export default function LogGaugeChart ({ title }:{title:string}) {
  const gaugeOptions = {
    chart: {
      type: "solidgauge",
    },
    accessibility: {
      enabled: false,
    },
    title: title,
    pane: {
      center: ["50%", "85%"],
      size: "100%",
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor: "#EEE",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "arc",
      },
    },
    exporting: {
      enabled: true,
    },
    tooltip: {
      enabled: true,
    },
    yAxis: {
      min: 0,
      max: 100,
      stops: [
        [0.1, "#DF5353"],
        [0.5, "#DDDF0D"],
        [0.9, "#55BF3B"],
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      title: {
        text: title,
        y: -80,
      },
      labels: {
        y: 16,
      },
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: title,
        data: [Number("74.5")],
        dataLabels: {
          format: `<div style="text-align:center">
                  <span style="font-size:25px">{y}</span><br/>
                  <span style="font-size:12px;opacity:0.4"></span>
                </div>`,
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };

  const chartRef = useRef<any>();

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={gaugeOptions}
      ref={chartRef}
      containerProps={{ style: { height: "220px", width: "25%" } }}
    />
  );
};
