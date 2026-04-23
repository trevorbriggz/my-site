import './index.css'
import { Link } from "react-router-dom";

function updates() {
    return (
        <div>
            <h1 className='center'><img src="/images/banners/hobbies.gif" className="banner"/></h1>
            <p style={{textAlign: "center"}}>my work/experience/fun</p>
            <br/>
            <p>titles are clickable, will lead to more indepth pages, each has a little blurb as an overview - i guess this will act as a sort of blog as i will actively update this</p>
            <br/>
            <p style={{textAlign: "center"}}>if you like what you see and want to work with me, please feel free to <Link to="/contact.html">contact me</Link></p>
            <br/>
            <hr/>
            <h2>directory:</h2>
            
            <h2><div className="gifshead"><Link to="/hobbies/photo"><img src="/images/banners/photostill.png" className="lilstill"/><img src="/images/banners/photo.gif" className="lilbanner"/></Link></div></h2>
            <p>accidental hobbie from graphic design class in highschool + great cover for when trespassing now turned into really expensive hobby with many awesome moments captured. this will be sorted with no real rhyme or reason but it at least has it's own directory</p>
            <h2><div className="gifshead"><Link to="/hobbies/video"><img src="/images/banners/videostill.png" className="lilstill"/><img src="/images/banners/video.gif" className="lilbanner"/></Link></div></h2>
            <p>video kinda came hand in hand with photo, but i did grow up wanting to be a youtuber (it never happened) i do occasionally tinker with stuff and am extremely familiar with adobe premiere and after effects as well as davinci resolve because of this and past work experience. This is touched on as well as links to related works are here</p>
            <h2><div className="gifshead"><Link to="/hobbies/cars"><img src="/images/banners/carsstill.png" className="lilstill"/><img src="/images/banners/cars.gif" className="lilbanner"/></Link></div></h2>
            <p style={{textAlign: "center"}}>my strange addiction - welding/fab/diagnostics talk also here</p>
            <h2><div className="gifshead"><Link to="/hobbies/music"><img src="/images/banners/musicstill.png" className="lilstill"/><img src="/images/banners/music.gif" className="lilbanner"/></Link></div></h2>
            <p>my music, backstory as to why, tools i use, i eventually would like to make tools, surface level reqs, shrine of every album i like</p>
            <h2><div className="gifshead"><Link to="/hobbies/graphics"><img src="/images/banners/graphicsstill.png" className="lilstill"/><img src="/images/banners/graphics.gif" className="lilbanner"/></Link></div></h2>
            <p>adobe photoshop & illustrator work. flyers, album covers, logos, tracings, edits, memes etc sorted by date (new on top, old on bottom) so you can see my progression - techincally this site is a part of this</p>
            
            <br/>
            <hr/>
            <h2>- less noteable -</h2>
            <div className="center">come back later for these - wip</div>
            <br/>
            <hr/>
            <h2>skateboarding</h2>
            <p style={{textAlign: "center"}}>tony hawks existential crisis</p>
            <h2>exploring/urbex</h2>
            <p style={{textAlign: "center"}}>illegal activities</p>
            <h2>modifying things</h2>
            <p style={{textAlign: "center"}}>other than cars - mostly electronics</p>
            <h2>games</h2>
            <p style={{textAlign: "center"}}>some recs and hopefully eventually thing/s i've made!</p>
        </div>
      );
    }

    export default updates;