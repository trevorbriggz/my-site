import './index.css'
import { Link } from "react-router-dom";
import example from "/images/banners/example.gif";
import duckboy from "/images/buttons/duckboy.png";
import nametag from "/images/tags and other/gobbles nametag.png";

function updates() {
    return (
        <div>
            <h1><img src={example} className="banner"/></h1>
            <div className="center" style={{textAlign: "center"}}>
                <img src={duckboy} style={{width: "300px"}}/>
                <br/>
                <img src={nametag} style={{width: "300px"}}/>
                <br/>
                <p>this is an easter egg page</p>
                <Link to="/">go back home here</Link>
            </div>
        </div>
      );
    }

    export default updates;