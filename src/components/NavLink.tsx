import { NavLink } from "react-router-dom"
// import { Link } from "react-scroll"
type Props = {
  href: string,
  name: string
}

const Navlink = ({href, name}: Props) => {
  return (
    <NavLink
      to={href}
      className="text-primary"
    >
      {name}
      {/* <Link to={href}>
        {name}
      </Link> */}
    </NavLink>
  )
}

export default Navlink