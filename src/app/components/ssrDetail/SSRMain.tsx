import SSROverView from "./SSROverView"
import SatInfo from "./SatInfo"
import SatMap from "./SatMap"
import SatMessage from "./SatMessage"

export default function SSRMain() {
  return (
    <div>
      <div className="card">
        <SSROverView/>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", marginTop: "20px" }}>
        <div className="card" style={{ marginRight: "10px" }}>
          <SatMessage/>
        </div>
        <div className="card" style={{ marginLeft: "10px" }}>
          <SatMap/>
          <SatInfo/>
        </div>
      </div>
    </div>
  )
}