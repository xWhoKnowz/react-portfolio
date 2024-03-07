import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import formerlyTwitter from '../../assets/x.png'


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