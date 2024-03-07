import github from '../../Assets/github.png'
import linkedin from '../../Assets/linkedin.png'
import formerlyTwitter from '../../Assets/x.png'


export default function Footer() {
    
    return (
        <footer className='d-flex justify-content-center'>
            <a href='https://github.com/xWhoKnowz'>
            <img className='linkLogo' src={github}/>
            </a>
            <a href='https://www.linkedin.com/'>
            <img className='linkedin linkLogo' src={linkedin}/>
            </a>
            <a href='https://twitter.com/'>
            <img className='linkLogo' src={formerlyTwitter}/>
            </a>
        </footer>
    )
}