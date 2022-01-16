import Image from "next/image"
import Logo from "src/public/icons/main-logo.svg"
import { Header, Aside } from "./sideBar.styles"

export default function SideBar() {
  return (
    <Aside>
      <Header>
        <Image width={50} height={70} src={Logo} />
        <p>
          mr<span>L</span>uis<span>F</span>er
        </p>
      </Header>
    </Aside>
  )
}
