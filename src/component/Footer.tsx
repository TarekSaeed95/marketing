import {FaTwitter,FaInstagram,FaLinkedin,FaYoutube,FaFacebookF} from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
    <div className="container">
      <div className="copy-right">
        copyright &copy;
      </div>
      <div className="links">
      <FaFacebookF/>
      <FaTwitter/>
      <FaInstagram/>
      <FaLinkedin/>
      <FaYoutube/>
      </div>
    </div>
  </div>

  )
}

export default Footer