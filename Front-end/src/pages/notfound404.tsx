import '../components/layout/NotFound404/NotFound404.css'
import '../global.css'
import Logo from '../../public/images/audiophile 2.svg'
import { Link } from 'react-router'

function NotFound404() {
    return (
        <>
            <div className="not-found-404-container">
                <svg className='not-found-waves-top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,288L34.3,266.7C68.6,245,137,203,206,202.7C274.3,203,343,245,411,234.7C480,224,549,160,617,133.3C685.7,107,754,117,823,128C891.4,139,960,149,1029,160C1097.1,171,1166,181,1234,208C1302.9,235,1371,277,1406,298.7L1440,320L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
                    <div className="not-found-content">
                        <img src={Logo} alt="" />
                            <div className="not-found-content-text">
                                <h1>404</h1>
                                <p>Please return home...</p>
                            </div>
                        <Link className='primary-btn' to={'/'}>Go To Home</Link>
                    </div>
                <svg className='not-found-waves-bottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,192L34.3,165.3C68.6,139,137,85,206,101.3C274.3,117,343,203,411,213.3C480,224,549,160,617,144C685.7,128,754,160,823,176C891.4,192,960,192,1029,170.7C1097.1,149,1166,107,1234,112C1302.9,117,1371,171,1406,197.3L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            </div>

        </>
    )
}

export default NotFound404;