import "./App.css";
import profile from "./image/paint.jpg";
import share from "./image/shareicon2.jpg";
import slack from "./image/slack.jpg";
import github from "./image/github.jpg";
import inforgood from "./image/I4G.jpg"

function App() {
  return (
    <div className="App">
      
      <img src={share} alt="share" className="share-icon" />
      
      <div className="profile">
        <img src={profile} alt="Yoma Ata" width="100px" height="auto" />
      </div>
      <p className="profile-name">Ata Ogechukwu Marilyn</p>
      <a href="https://training.zuri.team/" id="" className="button-link">
        Twitter Link
      </a>
      <a href="https://training.zuri.team/" id="" className="button-link">
        Zuri Team
      </a>
      <a href="https://training.zuri.team/" id="" className="button-link">
        Zuri Books
      </a>
      <a href="https://training.zuri.team/" id="" className="button-link">
        Python Books
      </a>
      <a href="https://training.zuri.team/" id="" className="button-link">
        Background checks for Coders
      </a>
      <a href="https://training.zuri.team/" id="" className="button-link">
        Design Books
      </a>

     
      <img src={slack} alt="share" className="footer-icon" />
      <img src={github} alt="share" className="footer-icon git-icon" />
      

      <footer>
        <hr />
        <div className="footer-text">
          <p className="zuri-text">Zuri<span>.</span>Internship</p>
          <p className="hng-text">HNG Internship 9 Frontend Task</p>
          <img src={inforgood} alt="share" className="good-img" />
        </div>
      </footer>
    </div>
  );
}

export default App;
