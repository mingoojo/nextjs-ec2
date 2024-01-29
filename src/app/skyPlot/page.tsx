import SkyPlotHeader from "../components/skyPlot/SkyPlotHeader";
import SkyPlotItem from "../components/skyPlot/SkyPlotItem";
import SkyplotTable from "../components/skyPlot/SkyplotTable";
import SkyplotList from "../components/skyPlot/SkyplotList";

const tableItem = [
  {
    name: "GPS",
    item: ["G10"],
  },
  {
    name: "GLO",
    item: ["R15", "R04", "R05", "R03", "R02", "R13", "R14"],
  },
  {
    name: "GAL",
    item: [],
  },
  {
    name: "BDS",
    item: [],
  },
]

export default function skyPlot() {
  return (
    <div className="mainContents">
      <div className="page-title-container">
        <h3 className="page-title">SKY PLOT</h3>
      </div>
      <div>
        <SkyPlotHeader/>
      </div>
      <div className="card">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SkyPlotItem mountPoint={"PPHQ"}/>
        </div>
      </div>
      <div className="card" style={{ marginTop: "20px" }}>
        <div style={{ display: "flex", width: "100%", height: "400px", justifyContent: "space-between" }}>
          <SkyplotTable tableItem={tableItem}/>
          <SkyplotList tableItem={tableItem}/>
        </div>
      </div>
    </div>
  )
}