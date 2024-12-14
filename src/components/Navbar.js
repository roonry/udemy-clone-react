export default Navbar

// Navbar

function Navbar()
{
    return(
        <div class="navbar">

        <div class="navbar__s1">
            <h1 className="navbar__s1__title">Udemy</h1>
        </div>
       
        <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass" style={{color: "black"}}f></i>
            <input placeholder="Serach for anything here. Tech, Business, Art ..."></input>
        </div>

        <div class="navbar__s3">
            <p>Courses</p>
             <div class="mylearning">
                <p>My Learning</p>
                <div class="mylearning__popup">
                    <p>You did no puchase anything yet</p>
                </div>
             </div>
            <i class="fa-solid fa-cart-shopping" style={{color: "black"}}></i>
            <i class="fa-solid fa-bell" style={{color: "black"}}></i>
            <i class="fa-solid fa-user" style={{color: "black"}}></i>
        </div>
         <div class="navbar__s4">
            <i class="fa-solid fa-bars"></i>
         </div>

    </div>
    )
}