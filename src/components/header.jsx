import headerBackground from '../../assets/headerBackground.jpg'

export default function Header(){
    return (
        <header>
            <img className='headerImage' src={headerBackground} alt="horizontal wooden boards with a tree painted on it" />
            <h1>Oh Me Oh Miah</h1>
        </header>     
    );
}