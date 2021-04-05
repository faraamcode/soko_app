import {IoIosArrowForward, IoIosAdd} from "react-icons/io"
import {FiSearch} from "react-icons/fi"
import {FaRegSmile} from "react-icons/fa"
import {BiMinus, BiPlus} from "react-icons/bi"
function Product() {
    return (
 <main>
     <section className="section section-product">
       <div className="product-container">
           <div className="img-container">
               <div className="photo-container">
                   <img src="images/furniture2.jpg" alt="product-img"/>
                   {/* more picture can be added for sliding */}
               </div>
               <div className="button-wrapper">
                   <button className="slide-btn"></button>
                   <button className="slide-btn active-slide"></button>
                   <button className="slide-btn"></button>
               </div>
           </div>
           <div className="product-info-container">
               <h4>Lorem ipsum dolor sit amet consectetur.</h4>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet labore explicabo, blanditiis sapiente quod earum dolorum, eius voluptate magnam quo natus. Ea iusto magni deleniti quia cumque veritatis soluta aliquid.</p>
               <div className="price-wraper">
                   <div className="price-and-add-btn-container">
                       <h2>UG 563</h2>
                       
                       <h6><strike>UG 900</strike></h6>
                       <div className="add-minus-container">
                       <button className="btn-item"><BiMinus/></button>
                       <span>1</span>
                       <button className="btn-item"><BiPlus />
                       </button>

                       </div>
                   </div>
                   <div className="discount-label">-20%</div>
               </div>
               <div className="buttons-container">
                   <button className="btn-empty add-to-bag-btn">Add to Bag</button>
                   <button className="btn-empty">Buy Now</button>
               </div>
           </div>
       </div>
       <div className="other-related-container"></div>
     </section>
 </main>
    );
  }
  
  export default Product;