import { IoIosArrowForward, IoIosAdd } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FaRegSmile } from "react-icons/fa";
function Form() {
  return (
    <main>
      <section className="section section-form">
        <div className="left-side"></div>
        <div className="middle-side"></div>
        <div className="right-side">
          <div className="product-title-wrapper right-product-title-wrapper ">
            <span>
              Bag <button>0</button>
            </span>
          </div>
          <FaRegSmile className="smiley-icon" />
          <h4>It's empty her</h4>
          <p>start shopping to add items to your bag</p>
        </div>
      </section>
    </main>
  );
}

export default Form;
