import {IoMdAppstore} from "react-icons/io"
import {FaHome, FaShoppingBag,FaUserAlt} from "react-icons/fa"
function Navbar() {
    return (
   <header>
           <div className="first-header">
               <div className="section section-firtst">
                   <span>store made with s<IoMdAppstore/>ko</span>
               </div>
           </div>
           <div className="second-header">
               <div className="section section-second">
                   <div className="first-sub-header">
                       <div className="home-icon-wrapper">
                           <FaHome className="home-icon"/>
                       </div>
                       <div className="text-wraper">
                           <h4>target</h4>
                           <p>cham Tower, Plot 12 Nkruma rd, Kampala, ug</p>
                       </div>
                   </div>
                   <div className="second-sub-header">
                       <div className="bag-wrapper"><FaShoppingBag/><span>bag</span></div>
                       <div className="account-wrapper"><FaUserAlt/><span>account</span></div>
                   </div>
               </div>
           </div>
   </header>
    );
  }
  
  export default Navbar;