import './index.css'
import { Link } from "react-router-dom";
import cars from "/images/banners/cars.gif";

function Cars() {
    return (
        <div>
            <h1 className='center'><img src={cars} class="banner"/></h1>
            <br/>
            <p>in 2017 youtube recommended me <Link to="https://www.youtube.com/watch?v=O3yR0CYB75o">delivering pizza in a drift car</Link>, a video of two goofballs driving around
                in some awesome looking car (nissan 240sx s13) being goofy dudes and having a good time. i fell in love, i loved their dynamic and how you felt like one of the
                boys there with them, not just another viewer. it's been all down hill since then
            </p>
            <br/>
            <p>sure as a kid i played racing games and had hotwheels cars, but they never really meant anything to me other than fun. this video single handedly turned
                my brain into pure mush
            </p>
            <br/>
            <p>this will be sorta a log of some things i have done, my drift car, some yapping when appropriate etc</p>

            <br/>
            <hr/>
            <br/>
            
            <p>wip sorry im lazy and want this live</p>
        </div>
      );
    }

    export default Cars;