import {HiBars3} from "react-icons/hi2"

function Navbar() {
  return (
    <nav className="nav">
    <div className="container">

    <div className="logo">
      <img src="/main-logo.png" alt="" />
    </div>
    <div className="links">
      <HiBars3/>
    </div>
    </div>
  </nav>

  )
}

export default Navbar