import { Link } from 'react-router-dom';
import '../../styles/Error.css'

const Error = () => {
  return (
    <div className="err-con">
        <h1 className='title'>404</h1>
        <h2 className='what-happend'>OPPS! PAGE NOT FOUND</h2>
        <p className='message'>
            Sorry, the page you're looking for doesn't exist. Try Again Later :)❤️
        </p>
        <Link to={'/'} className='back-btn'>
            Back Home
        </Link>
    </div>
  )
}
export default Error;