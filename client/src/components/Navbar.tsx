import NavbarLink from "./NavbarLink"

type Props = {}

export default function Navbar({}: Props) {

  return (
    <div className="flex justify-between items-center px-5 md:px-20 py-10 text-black dark:text-white">
        <NavbarLink to="/" label="blatz.io"/>
        <div className="space-x-8">
          <NavbarLink to="/work" label="work"/>
          <NavbarLink to="/projects" label="projects"/>
          <NavbarLink to="/resume" label="resume"/>
        </div>
    </div>
  )
}