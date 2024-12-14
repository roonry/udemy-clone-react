import Sale from "../assets/images/sale-img.jpg"

export default Saleimg

// Sale img 
 function Saleimg()
 {
    return(
        <div class="sale-image">
        <img src={Sale} alt="sale-image"></img>
        <div class="popup-box">
            <h1>Udemy Flash Sale! 24 hours to save.</h1>
            <p>Get the top courses for just  RS.449.Just one day to save but a liftime to save but a lifetime to learn</p>
        </div>
      </div>
    )
 }