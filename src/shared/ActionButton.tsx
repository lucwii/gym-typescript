import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
    children: React.ReactNode
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
    className="rounded-md bg-yellow-500 px-10 py-2 hover:bg-red-500 hover:text-white"
    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    href="#contactus"
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton