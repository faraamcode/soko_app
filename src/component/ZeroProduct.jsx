import { IoIosArrowForward, IoIosAdd } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FaRegSmile } from "react-icons/fa";
function EmptyProduct() {
  return (
    <main>
      <section className="section section-empty">
        <div className="right-side">
          <FaRegSmile className="smiley-icon" />
          <h4>It's empty here</h4>
          <p>start shopping to add items to your bag</p>
          <button className="btn btn-empty">Back to homepage</button>
        </div>
      </section>
    </main>
  );
}

export default EmptyProduct;
