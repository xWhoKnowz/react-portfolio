export default function Navigation() {
    
    return (        
        <Nav/>        
    )
}

const Nav = function ({links}) {
    return(
        <nav>
            <ul className="nav">
                <li>
                    About me
                </li>
                <li>
                    Portfolio
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Resume
                </li>
            </ul>
        </nav>
    )
}