import "../styles/globals.css"
import type { AppProps } from "next/app"
import SideBar from "src/components/common/SideBar"
import { MainContainer } from "src/styles/pages/app.styles"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainContainer>
      <SideBar />
      <Component {...pageProps} />
    </MainContainer>
  )
}
