import Graph from "../components/overview/Graph"
import OverViewTable from "../components/overview/OverViewTable"
import OverViewMap from "../components/overview/OverViewMap"

const items = [
  {
    name: "MAP",
    components: <OverViewMap/>,
  },
  {
    name: "GRAPH",
    components: <Graph/>,
  },
  {
    name: "TABLE",
    components: <OverViewTable/>,
  },
]

export default function overview() {

  return (
    <div className="mainContents">
      <div className="page-title-container">
        <h3 className="page-title">OVERVIEW</h3>
      </div>
      <div>
        {
          items.map((item) => {
            return (
              <>
                {item.components}
              </>
            )
          })
        }
      </div>
    </div>
  )
}