"use client"

import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";

type DataType = {
  time_stamp: string;
  sat_type: string;
  sat_id: string;
  azimuth: number;
  elevation: number;
  resp: number;
}

type Props = {
  mountPoint: string;
}

type SkyPlotData = {
  sat: string;
  satType: string;
  posX: number;
  posY: number;
  azimuth: number;
  elevation: number;
  color: string;
  tooltip: any;
}

export default function SkyPlotItem({ mountPoint }:Props) {
  const [selectedMountPoint, setSelectedMountPoint] = useState<string>(mountPoint);
  const [skyPlotDataArray, setSkyPlotDataArray] = useState(new Array<SkyPlotData>());
  const [gpsArr, setGpsArr] = useState(new Array<SkyPlotData>());
  const [glonassArr, setGlonassArr] = useState(new Array<SkyPlotData>());
  const [galileoArr, setGalileoArr] = useState(new Array<SkyPlotData>());
  const [beidouArr, setBeidouArr] = useState(new Array<SkyPlotData>());

  const [data, setData] = useState<DataType[]>([]);

  const [autoReload, setAutoReload] = useState<Boolean>(true);
  const [updatedTime, setUpdatedTime] = useState<String>("");

  const onSelectMountPoint = (selected:string) => {
    setSelectedMountPoint(selected);
  }

  const xl: number[] = [0, 100];
  const yl: number[] = [0, 100];
  const radius = (xl[1] - xl[0] < yl[1] - yl[0] ? xl[1] - xl[0] : yl[1] - yl[0]) * 0.44;

  const getColorFromSatType = (satType:string) => {
    if (satType === "GPS") {
      return "green";
    } else if (satType === "Galileo") {
      return "blue";
    } else if (satType === "GLONASS") {
      return "red";
    } else if (satType === "Beidou") {
      return "orange";
    }
    return "black";
  }

  const makeSkyPlotData = () => {
    let skyPlotDataArr = new Array<SkyPlotData>();
    let satliteInfoMap = new Map<string, Array<SkyPlotData>>();

    data.forEach(satPosData => {

      if ((satPosData.azimuth === 0 && satPosData.elevation === 0) || satPosData.elevation < 0) {
        return;
      }

      const azi = satPosData.azimuth / 180 * Math.PI;
      const ele = satPosData.elevation / 180 * Math.PI;
      const posX = radius * Math.sin(azi) * (1.0 - 2.0 * ele / Math.PI) + 50;
      const posY = 50 - radius * Math.cos(azi) * (1.0 - 2.0 * ele / Math.PI);

      let skyPlotData:SkyPlotData = {
        sat: satPosData.sat_id,
        satType: satPosData.sat_type,
        posX: posX,
        posY: posY,
        azimuth: satPosData.azimuth,
        elevation: satPosData.elevation,
        color: getColorFromSatType(satPosData.sat_type),
        tooltip: "azi = " + satPosData.azimuth + ", ele = " + satPosData.elevation,
      }
      skyPlotDataArr.push(skyPlotData);
      console.log("skyPlotDataArr pushed = ", skyPlotData);

      if (!satliteInfoMap.has(satPosData.sat_type)) {
        let sateliteTypeArr = new Array<SkyPlotData>();
        satliteInfoMap.set(satPosData.sat_type, sateliteTypeArr);
      }
      let sateliteTypeArr = satliteInfoMap.get(satPosData.sat_type);
      if (sateliteTypeArr) {
        sateliteTypeArr.push(skyPlotData);
        console.log("sateliteTypeArr pushed = ", skyPlotData);
      }

    });

    setSkyPlotDataArray(skyPlotDataArr);

    if (satliteInfoMap.has("GPS")) {
      const gpsTypeArr = satliteInfoMap.get("GPS");
      if (gpsTypeArr) {
        setGpsArr(gpsTypeArr);
      }
    }

    if (satliteInfoMap.has("GLONASS")) {
      const glonassTypeArr = satliteInfoMap.get("GLONASS");
      if (glonassTypeArr) {
        setGlonassArr(glonassTypeArr);
      }
    }

    if (satliteInfoMap.has("Galileo")) {
      const galileoTypeArr = satliteInfoMap.get("Galileo");
      if (galileoTypeArr) {
        setGalileoArr(galileoTypeArr);
      }
    }

    if (satliteInfoMap.has("Beidou")) {
      const beidouTypeArr = satliteInfoMap.get("Beidou");
      if (beidouTypeArr) {
        setBeidouArr(beidouTypeArr);
      }
    }
  };

  useEffect(() => {
    if (data && data.length > 0) {
      makeSkyPlotData();
    }
  }, [data]);

  useEffect(() => {
    setUpdatedTime(moment(new Date()).format("YYYY/MM/DD HH:mm:ss"));
    setData([
      {
        time_stamp: moment(new Date()).format("YYYY/MM/DD HH:mm:ss"),
        sat_type: "GLONASS",
        sat_id: "R04",
        azimuth: 336.5,
        elevation: 62.1,
        resp: 0,
      },
      {
        time_stamp: moment(new Date()).format("YYYY/MM/DD HH:mm:ss"),
        sat_type: "GLONASS",
        sat_id: "R05",
        azimuth: 116.5,
        elevation: 20,
        resp: 0,
      },
    ])
  }, [selectedMountPoint])

  return (
    <div>
      <div className="skyplot-wrapper">
        <div className="skyplot">
          <div className="skyplot-drawing">
            {skyPlotDataArray.map((skyPlotData, index) => {
              return (
                <div key={index} className="satelite-marker" style={{ left: `${skyPlotData.posX}%`, top: `${skyPlotData.posY}%`, color: skyPlotData.color }}>
                  <span style={{ marginLeft: "26px", top: "2px", fontSize: "15px" }} data-tooltip={skyPlotData.tooltip}> {skyPlotData.sat}</span>
                  <Image style={{ marginLeft: "-7px", marginTop: "-3px" }} src="/satellite_icon.png" alt={skyPlotData.sat} width='32' height='32' />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}