import './index.css'
import { Link } from "react-router-dom";

function Photo() {
    return (
        <div>
            <h1><img src="/images/banners/photo.gif" className="banner"/></h1>
        <br/>
        <p>starting in highschool, my interest in photo was created because of a graphic design class i attended. now i spend way too much time and money on equipment and learning. for a while my main interest was
          abandoned buildings (still really enjoy these spaces but it's hard to justify risking getting in trouble the older i get, sadly i'm not a kid anymore) now lately it's been motorsports (drifting)
          concerts (friends dj'ing) and portraits
        </p>
        <br/>
        <p>notes:</p>
        <p>- this is mainly cherry picked to show my capabilities - i don't need to post everything under the sun unless they're good</p>
        <p>- each section will not be sorted by date, gonna try to do some themetic stuff or just make it look nice</p>
        <p>- max image size will be 750px wide and 570px tall to keep with the web 1.0 theme and to prevent theft - this does make viewing kinda inconvenient but i enjoy the idea of out of date technical restraints</p>
        <p>- click on an image to see "full" sized version</p>
        <p>- once expanded click anywhere to close</p>
        <p>- this is incomplete, need more time to add more works - sorry</p>

        <br/>
        <hr/>
        <div className="center">
          <h2>directory:</h2>
          <span>/ <a href="#concert/dj">concert/dj</a></span>
          <span>/ <a href="#portraits">portraits</a></span>
          <span>/ <a href="#motorsports">motorsports</a></span>
          <span>/ <a href="#bandos">bandos</a></span>
        </div>
        <br/>
        <hr/>
		
        <div>
          <h2 id="concert/dj">concert/dj</h2>
          <div className="media">
            {/* This is a comment in JSX */}
            <label for="img17-check">
              <img src="/images/website photos/photo/dj/4G5A9043.png"/>
            </label>
            <input type="checkbox" id="img17-check" className="toggle"/>
            <div className="lightbox">
              <label for="img17-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/dj/4G5A9043.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img16-check">
              <img src="/images/website photos/photo/dj/4G5A9069.png"/>
            </label>
            <input type="checkbox" id="img16-check" className="toggle"/>
            <div className="lightbox">
              <label for="img16-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/dj/4G5A9069.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img15-check">
              <img src="/images/website photos/photo/dj/4G5A9121.png"/>
            </label>
            <input type="checkbox" id="img15-check" className="toggle"/>
            <div className="lightbox">
              <label for="img15-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/dj/4G5A9121.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img14-check">
              <img src="/images/website photos/photo/dj/4G5A9192.png"/>
            </label>
            <input type="checkbox" id="img14-check" className="toggle"/>
            <div className="lightbox">
              <label for="img14-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/dj/4G5A9192.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img13-check">
              <img src="/images/website photos/photo/dj/4G5A9207.png"/>
            </label>
            <input type="checkbox" id="img13-check" className="toggle"/>
            <div className="lightbox">
              <label for="img13-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/dj/4G5A9207.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img12-check">
              <img src="/images/website photos/photo/dj/4G5A9326.png"/>
            </label>
            <input type="checkbox" id="img12-check" className="toggle"/>
            <div className="lightbox">
              <label for="img12-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/dj/4G5A9326.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img11-check">
              <img src="/images/website photos/photo/dj/5U7A0489.png"/>
            </label>
            <input type="checkbox" id="img11-check" className="toggle"/>
            <div className="lightbox">
              <label for="img11-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/dj/5U7A0489.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
          </div>
          <br/>
          <hr/>
          <h2 id="portraits">portraits</h2>
          <div className="media">
            {/* This is a comment in JSX */}
            <label for="img28-check">
              <img src="/images/website photos/photo/portraits/5U7A0440.png"/>
            </label>
            <input type="checkbox" id="img28-check" className="toggle"/>
            <div className="lightbox">
              <label for="img28-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/portraits/5U7A0440.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img29-check">
              <img src="/images/website photos/photo/portraits/5U7A0063.png"/>
            </label>
            <input type="checkbox" id="img29-check" className="toggle"/>
            <div className="lightbox">
              <label for="img29-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/portraits/5U7A0063.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img26-check">
              <img src="/images/website photos/photo/portraits/5U7A0798.png"/>
            </label>
            <input type="checkbox" id="img26-check" className="toggle"/>
            <div className="lightbox">
              <label for="img26-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/portraits/5U7A0798.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img27-check">
              <img src="/images/website photos/photo/portraits/5U7A0492.png"/>
            </label>
            <input type="checkbox" id="img27-check" className="toggle"/>
            <div className="lightbox">
              <label for="img27-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/portraits/5U7A0492.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img24-check">
              <img src="/images/website photos/photo/portraits/5U7A8443.png"/>
            </label>
            <input type="checkbox" id="img24-check" className="toggle"/>
            <div className="lightbox">
              <label for="img24-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/portraits/5U7A8443.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img23-check">
              <img src="/images/website photos/photo/portraits/5U7A9592.png"/>
            </label>
            <input type="checkbox" id="img23-check" className="toggle"/>
            <div className="lightbox">
              <label for="img23-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/portraits/5U7A9592.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img25-check">
              <img src="/images/website photos/photo/portraits/5U7A7346-2.png"/>
            </label>
            <input type="checkbox" id="img25-check" className="toggle"/>
            <div className="lightbox">
              <label for="img25-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/portraits/5U7A7346-2.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img22-check">
              <img src="/images/website photos/photo/portraits/5U7A9638.png"/>
            </label>
            <input type="checkbox" id="img22-check" className="toggle"/>
            <div className="lightbox">
              <label for="img22-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/portraits/5U7A9638.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img21-check">
              <img src="/images/website photos/photo/portraits/5U7A9856-2.png"/>
            </label>
            <input type="checkbox" id="img21-check" className="toggle"/>
            <div className="lightbox">
              <label for="img21-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/portraits/5U7A9856-2.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
          </div>
          <br/>
          <hr/>
          <h2 id="motorsports">motorsports</h2>
          <div className="media">
            <label for="img119-check">
              <img src="/images/website photos/photo/motorsports/5U7A1786.png"/>
            </label>
            <input type="checkbox" id="img119-check" className="toggle"/>
            <div className="lightbox">
              <label for="img119-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/motorsports/5U7A1786.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img118-check">
              <img src="/images/website photos/photo/motorsports/5U7A1767.png"/>
            </label>
            <input type="checkbox" id="img118-check" className="toggle"/>
            <div className="lightbox">
              <label for="img118-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/motorsports/5U7A1767.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img117-check">
              <img src="/images/website photos/photo/motorsports/5U7A1766.png"/>
            </label>
            <input type="checkbox" id="img117-check" className="toggle"/>
            <div className="lightbox">
              <label for="img117-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/motorsports/5U7A1766.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img116-check">
              <img src="/images/website photos/photo/motorsports/5U7A0914.png"/>
            </label>
            <input type="checkbox" id="img116-check" className="toggle"/>
            <div className="lightbox">
              <label for="img116-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/motorsports/5U7A0914.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img115-check">
              <img src="/images/website photos/photo/motorsports/5U7A7717.png"/>
            </label>
            <input type="checkbox" id="img115-check" className="toggle"/>
            <div className="lightbox">
              <label for="img115-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/motorsports/5U7A7717.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img114-check">
              <img src="/images/website photos/photo/motorsports/car photo new sign no colour.png"/>
            </label>
            <input type="checkbox" id="img114-check" className="toggle"/>
            <div className="lightbox">
              <label for="img114-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/motorsports/car photo new sign no colour.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img113-check">
              <img src="/images/website photos/photo/motorsports/5U7A1772.png"/>
            </label>
            <input type="checkbox" id="img113-check" className="toggle"/>
            <div className="lightbox">
              <label for="img113-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/motorsports/5U7A1772.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img112-check">
              <img src="/images/website photos/photo/motorsports/9 7 thus drift.png"/>
            </label>
            <input type="checkbox" id="img112-check" className="toggle"/>
            <div className="lightbox">
              <label for="img112-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/motorsports/9 7 thus drift.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img111-check">
              <img src="/images/website photos/photo/motorsports/Untitled-1.png"/>
            </label>
            <input type="checkbox" id="img111-check" className="toggle"/>
            <div className="lightbox">
              <label for="img111-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/motorsports/Untitled-1.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
          </div>
          <br/>
          <hr/>
          <h2 id="bandos">bandos</h2>
          <p>a look into a frowned upon hobby. i just love the experience of exploring somewhere once vibrant and bustling, now dead, falling apart, nature retaking what is hers. one of my favorite things to do in these spaces is to sit down and imagine, daydream, dissassociate and visualize what a space was once like. what would happen there. people living their mundane little lives, shopping, working, going to school, going to see a play, going to play, to relax, etc. these are some of my adventures. quality will very greatly as i want this to be more of a fleshed out list of spaces i have visited. they don't last forever, so this will be a place you can sort of take a step inside of them yourself</p>
          <h2>century iii</h2>
          <p>a once busy and HUGE (over one million square feet) mall in pittsburg pa. now rubble. rest in pieces. this one was on my list for a VERY long time because abandoned malls are so difficult to come by now. for a very long time i wanted to see rolling acres in akron ohio but i missed my chance, so this was the closest second. there are other abandoned malls around still, but this one will probably be the peak in america, second to rolling acres. this set is from my first explore on september 3rd 2023 - i remember when we first entered, using a tire to climb over tall glass doors that were boarded up through a broken window above them, then down metal detectors to get back to the floor, immediately feeling the cool air and the smell of mold and mildew. i miss this feeling, this was by far my best explore to date and i don't know if anything will ever top it. it was incredible</p>
          <br/>
          <p>this set will be showcased in order, first taken on top, last on bottom</p>
          <br/>
          <div className="media">
            {/* This is a comment in JSX */}
            <label for="img231-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9910.png"/>
            </label>
            <input type="checkbox" id="img231-check" className="toggle"/>
            <div className="lightbox">
              <label for="img231-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9910.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img230-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9911.png"/>
            </label>
            <input type="checkbox" id="img230-check" className="toggle"/>
            <div className="lightbox">
              <label for="img230-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9911.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img229-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9917.png"/>
            </label>
            <input type="checkbox" id="img229-check" className="toggle"/>
            <div className="lightbox">
              <label for="img229-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9917.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img228-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9920.png"/>
            </label>
            <input type="checkbox" id="img228-check" className="toggle"/>
            <div className="lightbox">
              <label for="img228-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9920.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img227-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9923.png"/>
            </label>
            <input type="checkbox" id="img227-check" className="toggle"/>
            <div className="lightbox">
              <label for="img227-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9923.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img226-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9927.png"/>
            </label>
            <input type="checkbox" id="img226-check" className="toggle"/>
            <div className="lightbox">
              <label for="img226-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9927.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img225-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9930.png"/>
            </label>
            <input type="checkbox" id="img225-check" className="toggle"/>
            <div className="lightbox">
              <label for="img225-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9930.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img224-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9937.png"/>
            </label>
            <input type="checkbox" id="img224-check" className="toggle"/>
            <div className="lightbox">
              <label for="img224-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9937.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img223-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9941.png"/>
            </label>
            <input type="checkbox" id="img223-check" className="toggle"/>
            <div className="lightbox">
              <label for="img223-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9941.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img222-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9946.png"/>
            </label>
            <input type="checkbox" id="img222-check" className="toggle"/>
            <div className="lightbox">
              <label for="img222-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9946.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img221-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9949.png"/>
            </label>
            <input type="checkbox" id="img221-check" className="toggle"/>
            <div className="lightbox">
              <label for="img221-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9949.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img220-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9953.png"/>
            </label>
            <input type="checkbox" id="img220-check" className="toggle"/>
            <div className="lightbox">
              <label for="img220-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9953.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img219-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9958.png"/>
            </label>
            <input type="checkbox" id="img219-check" className="toggle"/>
            <div className="lightbox">
              <label for="img219-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9958.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img218-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9964.png"/>
            </label>
            <input type="checkbox" id="img218-check" className="toggle"/>
            <div className="lightbox">
              <label for="img218-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9964.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img217-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9969.png"/>
            </label>
            <input type="checkbox" id="img217-check" className="toggle"/>
            <div className="lightbox">
              <label for="img217-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9969.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img216-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9976.png"/>
            </label>
            <input type="checkbox" id="img216-check" className="toggle"/>
            <div className="lightbox">
              <label for="img216-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9976.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img215-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9981.png"/>
            </label>
            <input type="checkbox" id="img215-check" className="toggle"/>
            <div className="lightbox">
              <label for="img215-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9981.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img214-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9984.png"/>
            </label>
            <input type="checkbox" id="img214-check" className="toggle"/>
            <div className="lightbox">
              <label for="img214-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9984.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img213-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9987.png"/>
            </label>
            <input type="checkbox" id="img213-check" className="toggle"/>
            <div className="lightbox">
              <label for="img213-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9987.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img212-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9990.png"/>
            </label>
            <input type="checkbox" id="img212-check" className="toggle"/>
            <div className="lightbox">
              <label for="img212-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9990.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img211-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9994.png"/>
            </label>
            <input type="checkbox" id="img211-check" className="toggle"/>
            <div className="lightbox">
              <label for="img211-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9994.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img232-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A9996.png"/>
            </label>
            <input type="checkbox" id="img232-check" className="toggle"/>
            <div className="lightbox">
              <label for="img232-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A9996.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img233-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A0001.png"/>
            </label>
            <input type="checkbox" id="img233-check" className="toggle"/>
            <div className="lightbox">
              <label for="img233-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A0001.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img234-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A0006.png"/>
            </label>
            <input type="checkbox" id="img234-check" className="toggle"/>
            <div className="lightbox">
              <label for="img234-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A0006.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img235-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A0008.png"/>
            </label>
            <input type="checkbox" id="img235-check" className="toggle"/>
            <div className="lightbox">
              <label for="img235-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A0008.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img236-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A0013.png"/>
            </label>
            <input type="checkbox" id="img236-check" className="toggle"/>
            <div className="lightbox">
              <label for="img236-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A0013.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img237-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A0016.png"/>
            </label>
            <input type="checkbox" id="img237-check" className="toggle"/>
            <div className="lightbox">
              <label for="img237-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A0016.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img238-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A0018.png"/>
            </label>
            <input type="checkbox" id="img238-check" className="toggle"/>
            <div className="lightbox">
              <label for="img238-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A0018.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img239-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A0019.png"/>
            </label>
            <input type="checkbox" id="img239-check" className="toggle"/>
            <div className="lightbox">
              <label for="img239-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A0019.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img240-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A0020.png"/>
            </label>
            <input type="checkbox" id="img240-check" className="toggle"/>
            <div className="lightbox">
              <label for="img240-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A0020.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img241-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A0021.png"/>
            </label>
            <input type="checkbox" id="img241-check" className="toggle"/>
            <div className="lightbox">
              <label for="img241-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A0021.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img242-check">
              <img src="/images/website photos/photo/bandos/century iii/5U7A0022.png"/>
            </label>
            <input type="checkbox" id="img242-check" className="toggle"/>
            <div className="lightbox">
              <label for="img242-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/century iii/5U7A0022.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
          </div>
          <br/>
          <h2>saying goodbye to a friend</h2>
          <p>in november of 2025 i took a drive back down to pitts for a friend djing a show there. since we were there i pretty much forced him to go back to say goodbye. it always destroys me when i hear of a space being torn down. these places are my happy space, they allow me to be fully me without any judgement, they allow me to clear my mind and enjoy a moment in time, no matter how fleeting it may be. i wish they could stay forever but i understand how unrealistic that is, it's just a shame</p>
          <br/>
          <p>these are placeholders for now</p>
          <br/>
          <div className="media">
            {/* This is a comment in JSX */}
            <label for="img316-check">
              <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0292.png"/>
            </label>
            <input type="checkbox" id="img316-check" className="toggle"/>
            <div className="lightbox">
              <label for="img316-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0292.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img315-check">
              <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0293.png"/>
            </label>
            <input type="checkbox" id="img315-check" className="toggle"/>
            <div className="lightbox">
              <label for="img315-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0293.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img314-check">
              <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0294.png"/>
            </label>
            <input type="checkbox" id="img314-check" className="toggle"/>
            <div className="lightbox">
              <label for="img314-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0294.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img317-check">
              <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0291.png"/>
            </label>
            <input type="checkbox" id="img317-check" className="toggle"/>
            <div className="lightbox">
              <label for="img317-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0291.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img313-check">
              <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0295.png"/>
            </label>
            <input type="checkbox" id="img313-check" className="toggle"/>
            <div className="lightbox">
              <label for="img313-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0295.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img312-check">
              <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0296.png"/>
            </label>
            <input type="checkbox" id="img312-check" className="toggle"/>
            <div className="lightbox">
              <label for="img312-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0296.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
          </div>
          <h2>cincinnati mills</h2>
          <p>another mall, this one in cincinnati ohio, now also demolished. a lot less notoriety than century iii but beautiful with its colors. not trashed either which was nice. i never got a proper explore here as security was somewhat tight, but i did find a way in on one of my three visits here, it didn't last long as we quickly interacted with the janitor in the food court, but i still get to say i was in it after closing. i wanted to see it at night though, i will include my shoddy rooftop photos of it at night, it mustve been incredible for the few that did get to see it then</p>
          <br/>
          <p>this first set is from a trip i went on with big indian in october of 2023</p>
          <br/>
          <div className="media">
            {/* This is a comment in JSX */}
            <label for="img316-check">
              <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0292.png"/>
            </label>
            <input type="checkbox" id="img316-check" className="toggle"/>
            <div className="lightbox">
              <label for="img316-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0292.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img315-check">
              <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0293.png"/>
            </label>
            <input type="checkbox" id="img315-check" className="toggle"/>
            <div className="lightbox">
              <label for="img315-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0293.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img314-check">
              <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0294.png"/>
            </label>
            <input type="checkbox" id="img314-check" className="toggle"/>
            <div className="lightbox">
              <label for="img314-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0294.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img317-check">
              <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0291.png"/>
            </label>
            <input type="checkbox" id="img317-check" className="toggle"/>
            <div className="lightbox">
              <label for="img317-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0291.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img313-check">
              <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0295.png"/>
            </label>
            <input type="checkbox" id="img313-check" className="toggle"/>
            <div className="lightbox">
              <label for="img313-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0295.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
            <label for="img312-check">
              <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0296.png"/>
            </label>
            <input type="checkbox" id="img312-check" className="toggle"/>
            <div className="lightbox">
              <label for="img312-check" className="close-area"></label>
              <div className="content">
                <img src="/images/website photos/photo/bandos/cincinnati mills/5U7A0296.png" loading="lazy"/>
              </div>
            </div>
            {/* This is a comment in JSX */}
          </div>
        </div>
        </div>
      );
    }

    export default Photo;