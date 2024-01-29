import ObservationTable from "@/app/components/observation/ObservationTable"

const tableInfo = [
  {
    name: "GPS",
    tableHeader: [
      "GPS", "Azimuth", "Elevation", "Health", "C1C (m)", "C2W (m)", "C5X (m)", "C1W (m)", "C2X (m)", "C1X (m)",
    ],
  },
  {
    name: "Galileo",
    tableHeader: [
      "Galileo", "Azimuth", "Elevation", "Health", "C1X (m)", "C7X (m)", "C5X (m)", "C6X (m)", "C8X (m)",
    ],
  },
  {
    name: "BeiDou",
    tableHeader: [
      "BeiDou", "Azimuth", "Elevation", "Health", "C2I (m)", "C7I (m)", "C6I (m)", "C5X (m)", "C1X (m)",
    ],
  },
]


export default function pseudo() {
  return (
    <div>
      {
        tableInfo.map((data) => {
          return (
            <div key={data.name} className="card" style={{ minHeight: "250px", marginBottom: "20px" }}>
              <div style={{ width: "100%" }}>
                <div className="page-title-container">
                  <h4 className="page-title">{data.name}</h4>
                </div>
                <div style={{ marginBlock: "10px" }}>
                  <ObservationTable header={data}/>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}