import {IoIosArrowForward} from "react-icons/io"
function Home() {
    return (
 <main>
     <section className="section section-main">
         <div className="left-side">
             <ul className="product-lists">
                 <li className="product-item "><a href="#">Electronics(32)</a></li>
                 <li className="product-item"><a className="active-item" href="#">Electronics(32)</a></li>
                 <li className="product-item"><a href="#">Electronics(32)</a></li>
                 <li className="product-item"><a href="#">Electronics(32)</a></li>
                 <li className="product-item"><a href="#">Electronics(32)</a></li>
                 <li className="product-item"><a href="#">Electronics(32)</a></li>
                 <li className="product-item"><a href="#">Electronics(32)</a></li>
             </ul>
             <span className="view-item"><a href=""> View all categories<IoIosArrowForward className="arrow"/></a></span>
         </div>
         <div className="middle-side">
             <div className="single-product-wrapper">
                 
             </div>
         </div>
         <div className="right-side"></div>
     </section>
 </main>
    );
  }
  
  export default Home;