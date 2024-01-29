import Carousels from "../components/receiver/Carousels";
import ReceiverChart from "../components/receiver/ReceiverChart";
import ReceiverInfo from "../components/receiver/ReceiverInfo";
import RecieverHeader from "../components/receiver/RecieverHeader";

const slideData = [
  {
    id: "1",
    text: "Main",
    image: "pphq/PPHQ.jpg",
  },
  {
    id: "2",
    text: "North",
    image: "pphq/PPHQ_N.jpg",
  },
  {
    id: "3",
    text: "East",
    image: "pphq/PPHQ_E.jpg",
  },
  {
    id: "4",
    text: "South",
    image: "pphq/PPHQ_S.jpg",
  },
  {
    id: "5",
    text: "West",
    image: "pphq/PPHQ_W.jpg",
  },
]

const information = {
  address: "606, Seobusaet-gil, Geumcheon-gu, Seoul (서울특별시 금천구 서부샛길 606)",
  ECEF: { BaseAPR_X: -3041232.493, BaseAPR_Y: 4053906.693, BaseAPR_Z: 3859927.421 },
  SiteID: "PPHQ",
  ReceiverID: "PPHQ",
  ReceiverIGSName: "JAVAD TRE_3L",
  ReceiverSerialNumber: "E38B86363B58761734E25E73FE",
  ReceiverFirmwareVersion: "4.2.00",
  AntennaName: "JAV_GRANT-G3T NONE",
  AntennaNumber: "02994",
}

export default function receiver() {
  return (
    <div className="mainContents">
      <div className="page-title-container">
        <h3 className="page-title">RECEIVER</h3>
      </div>
      <div>
        <RecieverHeader/>
      </div>
      <div className="card" style={{ minHeight: "250px", marginBottom: "20px" }}>
        <div style={{ width: "100%" }}>
          <div className="page-title-container">
            <h4 className="page-title">INFO</h4>
          </div>
          <div style={{ display: "flex" }}>
            <Carousels slideData={slideData}/>
            <ReceiverInfo information={information}/>
          </div>
        </div>
      </div>
      <div className="card" style={{ display: "flex", flexDirection: "row" }}>
        <ReceiverChart title={"GPS"}/>
        <ReceiverChart title={"GLONASS"}/>
        <ReceiverChart title={"Galileo"}/>
        <ReceiverChart title={"Beidou"}/>
      </div>
    </div>
  )
}