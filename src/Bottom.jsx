import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from './sidenav.jsx';
import Footer from './footer.jsx';

function Bottom() {
    return (
        <>
            <br/>
            <hr/>
            <br/>
            <Footer />
            <br/>
            <hr/>
            <br/>
            <SideNav />
            <br/>
            <hr/>
        </>
    );
}

export default Bottom;
