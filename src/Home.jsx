import './index.css'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
        <img src="/images/buttons/melogo.png" className="logo" alt="a death metal logo of my name"></img>
        <img src="/images/buttons/mepolaroid1.png" className="polaroid1" alt="a photoshopped polaroid of me"></img>
        <p className="outline" style={{textAlign: "center"}}>hey! this is my personal site for all my things, hobbies, work, etc. below is a description of the directory so you know where to go</p>
        <br></br>

        <div className="center">
          <span>/ <span className="currentlocation">home</span><span className="outline">: you are here</span></span>
          
          <div>
            <input id="4" type="checkbox" className="box"></input>
            <label htmlFor="4">+ </label>
            <Link to="/about">about</Link>
            <span className="outline">: a bio thing / about me / why / etc</span>
              <ul className="cool">
                <li className="sub-item">
                  <span>/ <Link to="/updates">updates</Link></span>
                  <span>site updates tracked here</span>
                </li>
              </ul>
          </div>
          <div>
          <input id="2" type="checkbox" className="box"></input>
          <label htmlFor="2">+ </label>
          <Link to="/hobbies">hobbies</Link>
          <span className="outline">: self explanatory + work experience</span>
            <ul className="cool">
              <li className="sub-item">
                <span>/ <Link to="/hobbies/photo">photo</Link></span>
                <span>my photo works</span>
              </li>
              <li className="sub-item">
                <span>/ <Link to="/hobbies/video">video</Link></span>
                <span>^ video ^</span>
              </li>
              <li className="sub-item">
                <span>/ <Link to="/hobbies/cars">cars/mechanics</Link></span>
                <span>^ strange addiction</span>
              </li>
              <li className="sub-item">
                <span>/ <Link to="/hobbies/music">music</Link></span>
                <span>^ music</span>
              </li>
              <li className="sub-item">
                <span>/ <Link to="/hobbies/graphics">graphics</Link></span>
                <span>^ graphics/ design works</span>
              </li>
            </ul>
            </div>
  		    <span>/ <Link to="/contact">contact</Link><span className="outline">: contact info & links to places i'm active</span></span>
          
        </div>
      
        
      <br></br>
      <p>i would like to eventually have this be my main ecosystem, but that will take time. i will do my best to keep this well updated with what i am up to, photos, music, whatever etc</p>
      <br></br>
      <hr></hr>
      <br></br>
      <p>notes:</p>
      <p>this site functions totally without javascript, its only there for fun animation things. this is not intended to be mobile friendly nor do i plan for it to be - best viewing experience would be in 800x600</p>
      <br></br>
      <p>- unclicked links will be <b>bold</b> and <u>underlined</u>, <Link to="/example">example</Link></p>
      <p>- once navigated to, they will then be <b>bold</b> and gray <u className="example">example</u></p>
      <p>- where you are currently will be <s>bold</s> and <span className="currentlocation">green</span></p>
      <p>- you can click the + next to sections to see subsections</p>
      <p>- on all other pages the directory will live below the footer, eventually</p>
      <p style={{textIndent: "1em"}}>i would like to put it to the left of the body, but thats a wip</p>
      <p>- anything labeled wip is a work in progress, i wanted to get this live</p>
      </div>
      );
    }

    export default Home;