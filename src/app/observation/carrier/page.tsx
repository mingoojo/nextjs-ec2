import ObservationTable from "@/app/components/observation/ObservationTable"

const tableInfo = [
  {
    name: "GPS",
    tableHeader: [
      "GPS", "Azimuth", "Elevation", "Health", "L1C (Cycles)", "L2W (Cycles)", "L5X (Cycles)", "L1W (Cycles)", "L2X (Cycles)", "L1X (Cycles)",
    ],

  },
  {
    name: "Galileo",
    tableHeader: [
      "Galileo", "Azimuth", "Elevation", "Health", "L1X (Cycles)", "L7X (Cycles)", "L5X (Cycles)", "L6X (Cycles)", "L8X (Cycles)",
    ],
  },
  {
    name: "BeiDou",
    tableHeader: [
      "BeiDou", "Azimuth", "Elevation", "Health", "L2I (Cycles)", "L7I (Cycles)", "L6I (Cycles)", "L5X (Cycles)", "L1X (Cycles)",
    ],
  },
]

export default function carrier() {
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
