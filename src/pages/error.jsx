import error from '../../Assets/error.jpg'

export default function Error() {
    
    return (
        <main>
            <img className='errorPage' src={error}/>
            <h2 className='errorMessage'>Error 404: This is not the page you are looking for.</h2>
        </main>
    )
}