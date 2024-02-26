// import { NavLink } from "react-router-dom"
import { Link } from 'react-scroll'
type Props = {
  href: string,
  name: string,
  offset: number
}

const Navlink = ({href, name, offset}: Props) => {
  return (
    // <NavLink
    //   to={href}
    //   className="text-primary"
    // >
    //   {name}
    //   {/* <Link to={href}>
    //     {name}
    //   </Link> */}
    // </NavLink>
    <Link
      to={href}
      spy={true}
      smooth={true}
      offset={offset}
    >
    {name}
    </Link>
  )
}

export default Navlink