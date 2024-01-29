import ObservationHeader from "../components/observation/ObservationHeader";

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className="mainContents">
      <div className="page-title-container">
        <h3 className="page-title">OBSERVATION DETAILS</h3>
      </div>
      <div>
        <ObservationHeader/>
      </div>
      {children}
    </div>
  )
}