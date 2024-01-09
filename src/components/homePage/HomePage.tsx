import { useEffect } from "react";
import Footer from "../footer/Footer";
import SearchContainer from "./Search/SearchContainer";
import MainHeader from "./mainHeader/mainHeader";

const HomePage = ( ) => {
    return (
        <>
        <MainHeader/>
        <SearchContainer/>
        <Footer/>
        </>
    )   
}

export default HomePage;