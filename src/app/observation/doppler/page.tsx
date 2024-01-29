
import ObservationTable from "@/app/components/observation/ObservationTable"

const tableInfo = [
  {
    name: "GPS",
    tableHeader: [
      "GPS", "Azimuth", "Elevation", "Health", "D1C (m/s)", "D2W (m/s)", "D5X (m/s)", "D1W (m/s)", "D2X (m/s)", "D1X (m/s)",
    ],

  },
  {
    name: "Galileo",
    tableHeader: [
      "Galileo", "Azimuth", "Elevation", "Health", "D1X (m/s)", "D7X (m/s)", "D5X (m/s)", "D6X (m/s)", "D8X (m/s)",
    ],
  },
  {
    name: "BeiDou",
    tableHeader: [
      "BeiDou", "Azimuth", "Elevation", "Health", "D2I (m/s)", "D7I (m/s)", "D6I (m/s)", "D5X (m/s)", "D1X (m/s)",
    ],
  },
]

export default function doppler() {
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