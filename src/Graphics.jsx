import './index.css'
import { Link } from "react-router-dom";

function Graphics() {
    return (
        <div>
            <h1><img src="/imagesgit/banners/graphics.gif" className="banner"/></h1>
        <br/>
        <p>if you want to do music online, you need to be able to make art for yourself (or pay someone) and i don't have money to pay someone, so here we are</p>
        <br/>
        <p>blurbs will be included when appropriate</p>
        <br/>
        <p>the animated banner graphics were hand written by me, i liked the idea of making my site more personable by including my handwriting</p>
        <br/>
        <p>notes:</p>
        <p>- this will be most things unless they are lost</p>
        <p>- each section will be sorted by date (unless formatting or otherwise)</p>
        <p>- max image size will be 750px wide and 570px tall to keep with the web 1.0 theme and to prevent theft - this does make viewing kinda inconvenient but i enjoy the idea of out of date technical restraints</p>
        <p>- click on an image to see "full" sized version</p>
        <p>- once expanded click anywhere to close</p>
        <br/>
        <hr/>

        <div className="center">
          <h2>directory:</h2>
          <span>/ <a href="#cover">cover art</a></span>
          <span>/ <a href="#posters">posters/flyers</a></span>
          <span>/ <a href="#logos">logos</a></span>
          <span>/ <a href="#other">other</a></span>
        </div>
        <br/>
        <hr/>
		
        <div>
          <h2 id="cover">cover art</h2>
          <p>need to add more - for now just a cover art for my new track</p>
          <br/>
          <div className="media">
            <label for="img111-check">
              <img src="/images/website photos/graphics/cover/fat cackey 2026 cover.png"/>
            </label>
            <input type="checkbox" id="img111-check" className="toggle"/>
            <div className="lightbox">
              <label for="img111-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/cover/fat cackey 2026 cover.png" loading="lazy"/>
              </div>
            </div>
          </div>
          <br/>
          <hr/>
          <h2 id="posters">posters/flyers</h2>
          <p>big indian stuff - i will specify if i did ~not~ take the photos, otherwise all the photos used i captured and edited myself</p>
          <br/>
          <p>not everything here was my idea/what i wanted to do/make so.. yeah. some stuff may be.. weird or off lol; i made it though, so may as well show what i can do</p>
          <br/>
          <div className="media">
            {/* This is a comment in JSX */}
            <label for="img64-check">
              <img src="/images/website photos/graphics/posters/oct 24th.png"/>
            </label>
            <input type="checkbox" id="img64-check" className="toggle"/>
            <div className="lightbox">
              <label for="img64-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/oct 24th.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img63-check">
              <img src="/images/website photos/graphics/posters/oct 17th.png"/>
            </label>
            <input type="checkbox" id="img63-check" className="toggle"/>
            <div className="lightbox">
              <label for="img63-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/oct 17th.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img62-check">
              <img src="/images/website photos/graphics/posters/oct 10th.png"/>
            </label>
            <input type="checkbox" id="img62-check" className="toggle"/>
            <div className="lightbox">
              <label for="img62-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/oct 10th.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img61-check">
              <img src="/images/website photos/graphics/posters/beat bash 85x11.png"/>
            </label>
            <input type="checkbox" id="img61-check" className="toggle"/>
            <div className="lightbox">
              <label for="img61-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/beat bash 85x11.png" loading="lazy"/>
                <p className="center">i did not take these photos</p>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img60-check">
              <img src="/images/website photos/graphics/posters/oct 3rd.png"/>
            </label>
            <input type="checkbox" id="img60-check" className="toggle"/>
            <div className="lightbox">
              <label for="img60-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/oct 3rd.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img59-check">
              <img src="/images/website photos/graphics/posters/spet 26th.png"/>
            </label>
            <input type="checkbox" id="img59-check" className="toggle"/>
            <div className="lightbox">
              <label for="img59-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/spet 26th.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img58-check">
              <img src="/images/website photos/graphics/posters/spet 19th.png"/>
            </label>
            <input type="checkbox" id="img58-check" className="toggle"/>
            <div className="lightbox">
              <label for="img58-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/spet 19th.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img57-check">
              <img src="/images/website photos/graphics/posters/stunt gamers.png"/>
            </label>
            <input type="checkbox" id="img57-check" className="toggle"/>
            <div className="lightbox">
              <label for="img57-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/stunt gamers.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img56-check">
              <img src="/images/website photos/graphics/posters/spet 12th.png"/>
            </label>
            <input type="checkbox" id="img56-check" className="toggle"/>
            <div className="lightbox">
              <label for="img56-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/spet 12th.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img55-check">
              <img src="/images/website photos/graphics/posters/august 29.png"/>
            </label>
            <input type="checkbox" id="img55-check" className="toggle"/>
            <div className="lightbox">
              <label for="img55-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/august 29.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img54-check">
              <img src="/images/website photos/graphics/posters/august 29(1).png"/>
            </label>
            <input type="checkbox" id="img54-check" className="toggle"/>
            <div className="lightbox">
              <label for="img54-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/august 29(1).png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img53-check">
              <img src="/images/website photos/graphics/posters/august 22.png"/>
            </label>
            <input type="checkbox" id="img53-check" className="toggle"/>
            <div className="lightbox">
              <label for="img53-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/august 22.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img52-check">
              <img src="/images/website photos/graphics/posters/mad house.png"/>
            </label>
            <input type="checkbox" id="img52-check" className="toggle"/>
            <div className="lightbox">
              <label for="img52-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/mad house.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img51-check">
              <img src="/images/website photos/graphics/posters/august 15 nwdrifts.png"/>
            </label>
            <input type="checkbox" id="img51-check" className="toggle"/>
            <div className="lightbox">
              <label for="img51-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/august 15 nwdrifts.png" loading="lazy"/>
                <p className="center">i did not take the bottom right photo</p>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img50-check">
              <img src="/images/website photos/graphics/posters/august 1st.png"/>
            </label>
            <input type="checkbox" id="img50-check" className="toggle"/>
            <div className="lightbox">
              <label for="img50-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/august 1st.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img49-check">
              <img src="/images/website photos/graphics/posters/aug 3 kids day.png"/>
            </label>
            <input type="checkbox" id="img49-check" className="toggle"/>
            <div className="lightbox">
              <label for="img49-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/aug 3 kids day.png" loading="lazy"/>
                <p className="center">i did not take the photo of prince in the corvette</p>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img48-check">
              <img src="/images/website photos/graphics/posters/august 1st(1).png"/>
            </label>
            <input type="checkbox" id="img48-check" className="toggle"/>
            <div className="lightbox">
              <label for="img48-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/august 1st(1).png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img47-check">
              <img src="/images/website photos/graphics/posters/july 25 christmas.png"/>
            </label>
            <input type="checkbox" id="img47-check" className="toggle"/>
            <div className="lightbox">
              <label for="img47-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/july 25 christmas.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img46-check">
              <img src="/images/website photos/graphics/posters/july 20 gush.png"/>
            </label>
            <input type="checkbox" id="img46-check" className="toggle"/>
            <div className="lightbox">
              <label for="img46-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/july 20 gush.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img45-check">
              <img src="/images/website photos/graphics/posters/july 18.png"/>
            </label>
            <input type="checkbox" id="img45-check" className="toggle"/>
            <div className="lightbox">
              <label for="img45-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/july 18.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img43-check">
              <img src="/images/website photos/graphics/posters/july 11 2.png"/>
            </label>
            <input type="checkbox" id="img43-check" className="toggle"/>
            <div className="lightbox">
              <label for="img43-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/july 11 2.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img42-check">
              <img src="/images/website photos/graphics/posters/june burnout.png"/>
            </label>
            <input type="checkbox" id="img42-check" className="toggle"/>
            <div className="lightbox">
              <label for="img42-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/june burnout.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img41-check">
              <img src="/images/website photos/graphics/posters/june 27.png"/>
            </label>
            <input type="checkbox" id="img41-check" className="toggle"/>
            <div className="lightbox">
              <label for="img41-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/june 27.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img40-check">
              <img src="/images/website photos/graphics/posters/final_.png"/>
            </label>
            <input type="checkbox" id="img40-check" className="toggle"/>
            <div className="lightbox">
              <label for="img40-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/final_.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img39-check">
              <img src="/images/website photos/graphics/posters/june 20.png"/>
            </label>
            <input type="checkbox" id="img39-check" className="toggle"/>
            <div className="lightbox">
              <label for="img39-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/june 20.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img44-check">
              <img src="/images/website photos/graphics/posters/2024 flyer.png"/>
            </label>
            <input type="checkbox" id="img44-check" className="toggle"/>
            <div className="lightbox">
              <label for="img44-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/2024 flyer.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img38-check">
              <img src="/images/website photos/graphics/posters/june 13.png"/>
            </label>
            <input type="checkbox" id="img38-check" className="toggle"/>
            <div className="lightbox">
              <label for="img38-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/june 13.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img36-check">
              <img src="/images/website photos/graphics/posters/june 6.png"/>
            </label>
            <input type="checkbox" id="img36-check" className="toggle"/>
            <div className="lightbox">
              <label for="img36-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/june 6.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img35-check">
              <img src="/images/website photos/graphics/posters/may 30.png"/>
            </label>
            <input type="checkbox" id="img35-check" className="toggle"/>
            <div className="lightbox">
              <label for="img35-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/may 30.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img34-check">
              <img src="/images/website photos/graphics/posters/may 23 version 3.png"/>
            </label>
            <input type="checkbox" id="img34-check" className="toggle"/>
            <div className="lightbox">
              <label for="img34-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/may 23 version 3.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img32-check">
              <img src="/images/website photos/graphics/posters/10 21 FYLERRRRRR.png"/>
            </label>
            <input type="checkbox" id="img32-check" className="toggle"/>
            <div className="lightbox">
              <label for="img32-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/10 21 FYLERRRRRR.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img31-check">
              <img src="/images/website photos/graphics/posters/10 19 thursday drift details adjusted.png"/>
            </label>
            <input type="checkbox" id="img31-check" className="toggle"/>
            <div className="lightbox">
              <label for="img31-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/10 19 thursday drift details adjusted.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img30-check">
              <img src="/images/website photos/graphics/posters/10 12 thursday drift details adjusted.png"/>
            </label>
            <input type="checkbox" id="img30-check" className="toggle"/>
            <div className="lightbox">
              <label for="img30-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/10 12 thursday drift details adjusted.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img29-check">
              <img src="/images/website photos/graphics/posters/10 7 23 donutz4dollarz 2nd scirblleeelele orange.png"/>
            </label>
            <input type="checkbox" id="img29-check" className="toggle"/>
            <div className="lightbox">
              <label for="img29-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/10 7 23 donutz4dollarz 2nd scirblleeelele orange.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img28-check">
              <img src="/images/website photos/graphics/posters/10 5 thurs drift 2.png"/>
            </label>
            <input type="checkbox" id="img28-check" className="toggle"/>
            <div className="lightbox">
              <label for="img28-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/10 5 thurs drift 2.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img27-check">
              <img src="/images/website photos/graphics/posters/9 28 thursday drift il mulino.png"/>
            </label>
            <input type="checkbox" id="img27-check" className="toggle"/>
            <div className="lightbox">
              <label for="img27-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/9 28 thursday drift il mulino.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img26-check">
              <img src="/images/website photos/graphics/posters/9 23 23 stunt comp + cash prize.png"/>
            </label>
            <input type="checkbox" id="img26-check" className="toggle"/>
            <div className="lightbox">
              <label for="img26-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/9 23 23 stunt comp + cash prize.png" loading="lazy"/>
                <p className="center">i did not take the top right two photos</p>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img25-check">
              <img src="/images/website photos/graphics/posters/9 21 thurs drift 3.png"/>
            </label>
            <input type="checkbox" id="img25-check" className="toggle"/>
            <div className="lightbox">
              <label for="img25-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/9 21 thurs drift 3.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img24-check">
              <img src="/images/website photos/graphics/posters/9 14 thus drift 2.png"/>
            </label>
            <input type="checkbox" id="img24-check" className="toggle"/>
            <div className="lightbox">
              <label for="img24-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/9 14 thus drift 2.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img23-check">
              <img src="/images/website photos/graphics/posters/9 7 thus drift-2.png"/>
            </label>
            <input type="checkbox" id="img23-check" className="toggle"/>
            <div className="lightbox">
              <label for="img23-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/9 7 thus drift-2.png" loading="lazy"/>
                <p className="center">i did not take the main photo</p>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img22-check">
              <img src="/images/website photos/graphics/posters/8 31 thus drift.png"/>
            </label>
            <input type="checkbox" id="img22-check" className="toggle"/>
            <div className="lightbox">
              <label for="img22-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/8 31 thus drift.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img21-check">
              <img src="/images/website photos/graphics/posters/8 24 thus drift.png"/>
            </label>
            <input type="checkbox" id="img21-check" className="toggle"/>
            <div className="lightbox">
              <label for="img21-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/8 24 thus drift.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img20-check">
              <img src="/images/website photos/graphics/posters/8 17 thus drift.png"/>
            </label>
            <input type="checkbox" id="img20-check" className="toggle"/>
            <div className="lightbox">
              <label for="img20-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/8 17 thus drift.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img19-check">
              <img src="/images/website photos/graphics/posters/8 10 thus drift.png"/>
            </label>
            <input type="checkbox" id="img19-check" className="toggle"/>
            <div className="lightbox">
              <label for="img19-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/8 10 thus drift.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img18-check">
              <img src="/images/website photos/graphics/posters/8 5 roads arts.png"/>
            </label>
            <input type="checkbox" id="img18-check" className="toggle"/>
            <div className="lightbox">
              <label for="img18-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/8 5 roads arts.png" loading="lazy"/>
                <p className="center">i did not take the bottom right photos</p>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img17-check">
              <img src="/images/website photos/graphics/posters/8 3 thus drift.png"/>
            </label>
            <input type="checkbox" id="img17-check" className="toggle"/>
            <div className="lightbox">
              <label for="img17-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/8 3 thus drift.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img33-check">
              <img src="/images/website photos/graphics/posters/for zac flyer.png"/>
            </label>
            <input type="checkbox" id="img33-check" className="toggle"/>
            <div className="lightbox">
              <label for="img33-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/for zac flyer.png" loading="lazy"/>
                <p className="center">i did not take this photo</p>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img16-check">
              <img src="/images/website photos/graphics/posters/7 27 wed drift.png"/>
            </label>
            <input type="checkbox" id="img16-check" className="toggle"/>
            <div className="lightbox">
              <label for="img16-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/7 27 wed drift.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img15-check">
              <img src="/images/website photos/graphics/posters/7 20 drift.png"/>
            </label>
            <input type="checkbox" id="img15-check" className="toggle"/>
            <div className="lightbox">
              <label for="img15-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/7 20 drift.png" loading="lazy"/>
                <p className="center">i did not take the photo of prince in the corvette</p>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img14-check">
              <img src="/images/website photos/graphics/posters/7 15 eric trimmer.png"/>
            </label>
            <input type="checkbox" id="img14-check" className="toggle"/>
            <div className="lightbox">
              <label for="img14-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/7 15 eric trimmer.png" loading="lazy"/>
                <p className="center">i did not take the main photo</p>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img13-check">
              <img src="/images/website photos/graphics/posters/7 13 gushi drift.png"/>
            </label>
            <input type="checkbox" id="img13-check" className="toggle"/>
            <div className="lightbox">
              <label for="img13-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/7 13 gushi drift.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img12-check">
              <img src="/images/website photos/graphics/posters/7 6.png"/>
            </label>
            <input type="checkbox" id="img12-check" className="toggle"/>
            <div className="lightbox">
              <label for="img12-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/7 6.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img11-check">
              <img src="/images/website photos/graphics/posters/6 28 jason britton.png"/>
            </label>
            <input type="checkbox" id="img11-check" className="toggle"/>
            <div className="lightbox">
              <label for="img11-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/6 28 jason britton.png" loading="lazy"/>
                <p className="center">i did not take the main photo</p>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img10-check">
              <img src="/images/website photos/graphics/posters/6 21 23.png"/>
            </label>
            <input type="checkbox" id="img10-check" className="toggle"/>
            <div className="lightbox">
              <label for="img10-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/6 21 23.png" loading="lazy"/>
                <p className="center">i did not take these photos</p>
                <p className="center">an 8.5x11 version of this does not exist so its out of order date wise for formatting</p>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img37-check">
              <img src="/images/website photos/graphics/posters/flyer mockup.png"/>
            </label>
            <input type="checkbox" id="img37-check" className="toggle"/>
            <div className="lightbox">
              <label for="img37-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/flyer mockup.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img9-check">
              <img src="/images/website photos/graphics/posters/6 14.png"/>
            </label>
            <input type="checkbox" id="img9-check" className="toggle"/>
            <div className="lightbox">
              <label for="img9-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/6 14.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img8-check">
              <img src="/images/website photos/graphics/posters/5 31 drift.png"/>
            </label>
            <input type="checkbox" id="img8-check" className="toggle"/>
            <div className="lightbox">
              <label for="img8-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/5 31 drift.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img6-check">
              <img src="/images/website photos/graphics/posters/2023 Schedule 2.png"/>
            </label>
            <input type="checkbox" id="img6-check" className="toggle"/>
            <div className="lightbox">
              <label for="img6-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/2023 Schedule 2.png" loading="lazy"/>
                <p className="center">i did not take these photos</p>
                <p className="center">an 8.5x11 version of this does not exist so its out of order date wise for formatting</p>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img7-check">
              <img src="/images/website photos/graphics/posters/5 18 23 one year anniversary with price.png"/>
            </label>
            <input type="checkbox" id="img7-check" className="toggle"/>
            <div className="lightbox">
              <label for="img7-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/5 18 23 one year anniversary with price.png" loading="lazy"/>
                <p className="center">the inspiration for the designs 2023 season was the magazine <a href="https://en.wikipedia.org/wiki/Drift_Tengoku" target="_blank">drift tengoku</a></p>
              </div>
            </div>
            {/* This is a comment in JSX */}
          </div>
          <br/>
          <p>concerts/whatever else:</p>
          <br/>
          <div className="media">
            {/* This is a comment in JSX */}
            <label for="img5-check">
              <img src="/images/website photos/graphics/posters/rust cityyyy 8.5x11 2024.png"/>
            </label>
            <input type="checkbox" id="img5-check" className="toggle"/>
            <div className="lightbox">
              <label for="img5-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/rust cityyyy 8.5x11 2024.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img2-check">
              <img src="/images/website photos/graphics/posters/holly wood 2 better imo.png"/>
            </label>
            <input type="checkbox" id="img2-check" className="toggle"/>
            <div className="lightbox">
              <label for="img2-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/holly wood 2 better imo.png" loading="lazy"/>
                <p className="center">i don't have an 8.5x11 version of this so its out of order date wise for formatting</p>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img1-check">
              <img src="/images/website photos/graphics/posters/water wegiht two - Copy.png"/>
            </label>
            <input type="checkbox" id="img1-check" className="toggle"/>
            <div className="lightbox">
              <label for="img1-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/water wegiht two - Copy.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img3-check">
              <img src="/images/website photos/graphics/posters/vortex of bass border only.png"/>
            </label>
            <input type="checkbox" id="img3-check" className="toggle"/>
            <div className="lightbox">
              <label for="img3-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/vortex of bass border only.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img4-check">
              <img src="/images/website photos/graphics/posters/buffalo bass crew poster - ayahuasca added.png"/>
            </label>
            <input type="checkbox" id="img4-check" className="toggle"/>
            <div className="lightbox">
              <label for="img4-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/posters/buffalo bass crew poster - ayahuasca added.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            
          </div>
          <br/>
          <hr/>
          <h2 id="logos">logos</h2>
          <p>mainly tracings for my friend and colleague <a href="https://www.facebook.com/austinlazrhartz">austin</a> / <a href="https://soundcloud.com/lazrdubs">laz-r</a> - wip</p>
          <p>these need reworks and i don't have the patience for it rn</p>
          <br/>
          <div className="media">
            {/* This is a comment in JSX */}
            <label for="img411-check">
              <img src="/images/website photos/graphics/logos/70007548_2502667286443624_3646839108782784512_n.png"/>
            </label>
            <input type="checkbox" id="img411-check" className="toggle"/>
            <div className="lightbox">
              <label for="img411-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/logos/70007548_2502667286443624_3646839108782784512_n.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
          </div>
          <br/>
          <hr/>
          <h2 id="other">other</h2>
          <p>other stuffs - stickers, billboard, sign, memes</p>
          <p>this is a mess i'm sorry, i'll fix it eventually</p>
          <br/>
          <div className="media">
            {/* This is a comment in JSX */}
            <label for="img511-check">
              <img src="/images/website photos/graphics/other/bad girl style sticker 1.png"/>
            </label>
            <input type="checkbox" id="img511-check" className="toggle"/>
            <div className="lightbox">
              <label for="img511-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/other/bad girl style sticker 1.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img512-check">
              <img src="/images/website photos/graphics/other/bad girl style sticker 2222222222222.png"/>
            </label>
            <input type="checkbox" id="img512-check" className="toggle"/>
            <div className="lightbox">
              <label for="img512-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/other/bad girl style sticker 2222222222222.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img513-check">
              <img src="/images/website photos/graphics/other/fishing (1).png"/>
            </label>
            <input type="checkbox" id="img513-check" className="toggle"/>
            <div className="lightbox">
              <label for="img513-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/other/fishing (1).png" loading="lazy"/>
                <p className="center">girls hate fishing photos so i made this meme</p>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img514-check">
              <img src="/images/website photos/graphics/other/gas station left.png"/>
            </label>
            <input type="checkbox" id="img514-check" className="toggle"/>
            <div className="lightbox">
              <label for="img514-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/other/gas station left.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img515-check">
              <img src="/images/website photos/graphics/other/new billboard right.png"/>
            </label>
            <input type="checkbox" id="img515-check" className="toggle"/>
            <div className="lightbox">
              <label for="img515-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/graphics/other/new billboard right.png" loading="lazy"/>
                <p className="center">30 or 40 foot billboard, <a href="https://www.google.com/maps/@42.5731351,-79.0925935,3a,75y,7.3h,93.1t/data=!3m7!1e1!3m5!1sevTvOjEKJvFR7iJIm1pJOg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.101701754005802%26panoid%3DevTvOjEKJvFR7iJIm1pJOg%26yaw%3D7.3034731456751505!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">link to google streetview</a></p>
              </div>
            </div>
            {/* This is a comment in JSX */}
          </div>
        </div>
        </div>
      );
    }

    export default Graphics;