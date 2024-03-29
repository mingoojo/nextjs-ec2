// "use client"
import type { Metadata } from "next"
import ThemeClient from "./ThemeClient"
import Header from "./components/Header"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  // baroEmapScript();
  return (
    <html>
      <body>
        <ThemeClient>
          <Header/>
          <div className='main'>
            {children}
          </div>
          <Footer/>
        </ThemeClient>
      </body>
    </html>
  )
}
