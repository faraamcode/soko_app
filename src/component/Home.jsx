import {IoIosArrowForward, IoIosAdd} from "react-icons/io"
import {FiSearch} from "react-icons/fi"
import {FaRegSmile} from "react-icons/fa"
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
             <div className="single-product-wrapper firt-product">
                 <div className="search-wrapper">
                     <input type="text"/>
                     <button className="search-btn"><FiSearch/></button>
                 </div>
                 <div className="product-title-wrapper">

                 <span>Electronics <button>5</button></span>
                 </div>
             </div>
             <div className="single-product-wrapper other-product">
                 <div className="product-img-wrapper ">
                     <img src="images/furni1.jpg" className="product-img" alt=""/>
                     <div className="product-text">
                         <h4>Lorem ipsum dolor sit.</h4>
                         <p>UGX 768.00</p>
                     </div>
                 </div>
                 <div className="add-button-wrapper">
                     <button className="add-btn"><IoIosAdd/>add</button>
                 </div>
             </div>
             <div className="single-product-wrapper other-product">
                 <div className="product-img-wrapper ">
                     <img src="images/phone1.jpg" className="product-img" alt=""/>
                     <div className="product-text">
                         <h4>Lorem ipsum dolor sit.</h4>
                         <p>UGX 768.00</p>
                     </div>
                 </div>
                 <div className="add-button-wrapper">
                     <button className="add-btn"><IoIosAdd/>add</button>
                 </div>
             </div>
             <div className="single-product-wrapper other-product">
                 <div className="product-img-wrapper ">
                     <img src="images/furniture2.jpg" className="product-img" alt=""/>
                     <div className="product-text">
                         <h4>Lorem ipsum dolor sit.</h4>
                         <p>UGX 768.00</p>
                     </div>
                 </div>
                 <div className="add-button-wrapper">
                     <button className="add-btn"><IoIosAdd/>add</button>
                 </div>
             </div>
             <div className="single-product-wrapper other-product">
                 <div className="product-img-wrapper ">
                     <img src="images/furniture5.jpg" className="product-img" alt=""/>
                     <div className="product-text">
                         <h4>Lorem ipsum dolor sit.</h4>
                         <p>UGX 768.00</p>
                     </div>
                 </div>
                 <div className="add-button-wrapper">
                     <button className="add-btn"><IoIosAdd/>add</button>
                 </div>
             </div>

         </div>
         <div className="right-side">
             <div className="product-title-wrapper right-product-title-wrapper ">

               <span>Bag <button>0</button></span>
             </div>
             <FaRegSmile className="smiley-icon"/>
             <h4>It's empty her</h4>
             <p>start shopping to add items to your bag</p>
         </div>
     </section>
 </main>
    );
  }
  
  export default Home;