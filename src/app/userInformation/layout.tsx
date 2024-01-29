export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className="mainContents">
      <div className="page-title-container">
        <h3 className="page-title">USER INFORMATION</h3>
      </div>
      {children}
    </div>
  )
}