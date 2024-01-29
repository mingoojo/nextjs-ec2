
import ObservationTable from "@/app/components/observation/ObservationTable"

const tableInfo = [
  {
    name: "GPS",
    tableHeader: [
      "GPS", "Azimuth", "Elevation", "Health", "S1C (dB Hz)", "S2W (dB Hz)", "S5X (dB Hz)", "S1W (dB Hz)", "S2X (dB Hz)", "S1X (dB Hz)",
    ],

  },
  {
    name: "Galileo",
    tableHeader: [
      "Galileo", "Azimuth", "Elevation", "Health", "S1X (dB Hz)", "S7X (dB Hz)", "S5X (dB Hz)", "S6X (dB Hz)", "S8X (dB Hz)",
    ],
  },
  {
    name: "BeiDou",
    tableHeader: [
      "BeiDou", "Azimuth", "Elevation", "Health", "S2I (dB Hz)", "S7I (dB Hz)", "S6I (dB Hz)", "S5X (dB Hz)", "S1X (dB Hz)",
    ],
  },
]


export default function snr() {
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