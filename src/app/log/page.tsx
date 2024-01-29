import LogGaugeChart from "../components/log/LogGaugeChart";
import LogSplineChart from "../components/log/LogSplineChart";

export default function log() {
  return (
    <div className="mainContents">
      <div className="page-title-container">
        <h3 className="page-title">LOG</h3>
      </div>
      <div className="card" style={{ marginTop: "20px" }}>
        <div style={{ width: "100%" }}>
          <div className="page-title-container">
            <h4 className="page-title">RTK 사용량</h4>
          </div>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "50%", minHeight: "500px" }}>
              <LogSplineChart title="" usage ={74.5}/>
            </div>
          </div>
        </div>
      </div>
      <div className="card" style={{ marginTop: "20px" }}>
        <div style={{ width: "100%" }}>
          <div className="page-title-container">
            <h4 className="page-title">서버 부하율</h4>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <LogGaugeChart title={"실시간 서버 부하율"}/>
            <div style={{ marginLeft: "30px" }}>
              <div style={{ paddingBlock: "10px" }}>
                <h4>금일 사용량</h4>
                <p style={{ paddingBlock: "10px" }}>153,301</p>
              </div>
              <div style={{ paddingBlock: "10px" }}>
                <h4>일일 평균 사용량</h4>
                <p style={{ paddingBlock: "10px" }}>430,301</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}