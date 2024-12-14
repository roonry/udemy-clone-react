import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Saleimg from "./components/Saleimg";
import Recomended from "./components/Recomended";
import Topics from "./components/Topics";
import Popup from "./components/Popup";
import Footer from "./components/Footer";

function App()
{
    return(
        <>
        <Navbar></Navbar>
        <Categories></Categories>
        <Saleimg></Saleimg>
        <Recomended></Recomended>
        <Topics></Topics>
        <Popup></Popup>
        <Footer></Footer>
        </>
    )
}

export default App