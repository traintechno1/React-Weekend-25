
import Product1 from '../assets/images/products/product1.jpg';
import Product2 from '../assets/images/products/product2.jpg';
import Product3 from '../assets/images/products/product3.jpg';
import "../css/AboutProduct.css";
const AboutProducts = () =>{
    return(
        <>
            <h2>About Product Details</h2>
            <div className='product-container'>
                <div className='product-card'>
                    <img src={Product1}  className='product-img' />
                </div>
                <div className='product-card'>
                    <img src={Product2}  className='product-img' />
                </div>
                <div className='product-card'>
                    <img src={Product3}  className='product-img' />
                </div>
            </div>
        </>
    )
}

export default AboutProducts;