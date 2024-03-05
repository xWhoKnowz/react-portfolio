import headerBackground from '../../assets/headerBackground.jpg';
import Nav from './nav';

export default function Header() {
  return (
    <header>
      <img
        className="headerImage"
        src={headerBackground}
        alt="horizontal wooden boards with a tree painted on it"
        />
      <section className="nav">
        <h1>Oh Me Oh Miah</h1>
        <Nav/>
      </section>
    </header>
  );
}
