import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
  <Nav
  links={[
    <Link key={1} className='navBtn' to="/" >About me</Link>,
    <Link key={2} className='navBtn' to="/portfolio" >Portfolio</Link>,
    <Link key={3} className='navBtn' to="/contact" >Contact</Link>,
    <Link key={4} className='navBtn' to="/resume" >Resume</Link>,
  ]}
  />
  )
}

const Nav = function ({ links }) {
  return (
    <nav >
      <ul className="navBar">
        {links.map((link)=>link)}
      </ul>
    </nav>
  );
};
