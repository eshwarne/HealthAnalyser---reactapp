import  React  from 'react'
import {Link,NavLink} from 'react-router-dom'
const Navbar=()=>{
    return(
        <nav>
            <div className="nav-wrapper">
            <Link className="brand-logo" to="http://www.youtube.com/eshwarnortheast">ESHWAR NE</Link>
            <ul id="nav" >
            <Link to="/" className="right">Home Page</Link>
            <Link to="/DoctorsPosts" className="right">Posts By Doctors</Link>
            <Link to="/healthTips" className="right"> Health Tips</Link>
            <Link to="/SomeDoctors"className="right">Our Doctors</Link>
            </ul>
            </div>
        </nav>
    )
}
export default Navbar