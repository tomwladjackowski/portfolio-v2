import { Link } from 'react-scroll'

type Props = {
  href: string,
  name: string,
  offset: number
}

const Navlink = ({href, name, offset}: Props) => {
  return (
    <Link
      to={href}
      spy={true}
      smooth={true}
      offset={offset}
      className='cursor-pointer'
    >
      {name}
    </Link>
  )
}

export default Navlink