import React ,{Component} from 'react';
import logo from '../images/logo.png';
import './home.css';
import david from '../images/david.png';
import fasteners from '../images/fasteners.png';
import handtools from '../images/handtools.png';
import horizontal from '../images/horizontal.png';
import map from '../images/map.png';
import construction from '../images/construction.png';
import miscellaneous from '../images/miscellaneous.png';
import power from '../images/power.png';
import ppe from '../images/ppe.png';
import tower from '../images/tower.png';
import traffic from '../images/traffic.png';
import vertical from '../images/vertical.png';
import fb from '../images/fb.png';
import twitter from '../images/twitter.png';
import insta from '../images/insta.png';
import wtsap from '../images/wtsap.png';
import materials from '../images/materials.png';
import brouchure from '../images/brouchure.png';
import pic1 from '../images/preview.png';

class home extends React.Component{
  constructor(props) {
    super(props);
    this.state = 
    {
      flag : false,
      user : "",
      menu : []
    };  
  }
  
  render() {
    return(
      <div>
      <p className="menu"></p>
      <p className="menu1"></p>
      <div className="App-header">
        <p className="head1">jjjmhhsdkljd</p>
        <div className="right">
          <h7 className="name">We care about your safety</h7>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="header-section">
        <h1 className="para">Personal Protective</h1><br/>
        <h1 className="para1">Equipment</h1>
        <div className="paragraph">
        <p className="text">
        Lorem ipsum dolor sit, consectetuer adipiscing 
        Lorem ipsumsit amet, dkslk
        Lorem ipsum dolor, dolorum fuga
        dolorum provi cupiditate non provident, dolor sit amest
        sit amet .
        </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn" type="submit" >view more </button>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
      <p className="menu1"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MENU</p>
      <div className="right1">
      <h1 className="name1">o&nbsp;o&nbsp;o&nbsp;o</h1>
      </div>
      </div>
      <div className="testimonial">
        <div className="slider">
          <img src={pic1} alt="pic" width="110%"/>  
          <div className="aboutus"><h7 className="name21">A B O U T&nbsp; U S</h7>
          <h3 className="wedocare">We do care!</h3><br/>
          <div className="caremargin"></div>
          <div className="text1">
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
           praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
           excepturi sint occaecati  reader non  dolorum fuga
           dolorum provi cupiditate non provident, similique sunt in culpa qui 
           officia deserunt mollitia  est, omnis dolor repellendus. Temporibus 
           autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
           ut et voluptates 
          </p>
          <p>It is a long established fact that a reader non  dolorum fuga
           dolorum providen-less normal distribution of letters, 
           as opposed to using 'Content here, content here', making it look like
           five countries. but also
        </p>
        <div className="brouchure">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className="brouch" src={brouchure}width="25" height="35"/>&nbsp;&nbsp;BROUCHURE</p>
          <button className="downloadbtn">Download</button> 
          <p className="partext1">en hjuy eisx ad menturs ea coronda mnsjdm nksda.</p>
        </div>
        <div className="brouchure1">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className="brouch" src={brouchure}width="25" height="35"/>&nbsp;&nbsp;BROUCHURE</p>
          <button className="downloadbtn">Download</button>
          <p className="partext1">en hjuy eisx ad menturs ea coronda mnsjdm nksda.</p>
        </div>      
      </div>   
  </div>
  <h7 className="name2">T E S T E M O N I A L S</h7>
  <h3 className="testimonie">TESTIMONIALS</h3><br/>
  <h3 className="wedocare1">"We are all constructed out of our self dialogue."<br/><p className="new"> --   &nbsp;BRYANT MICHEAL</p></h3>  
  <div>
    <img src={david} className="david" alt="david" />
  </div>
  <div className="text11">
    <p>Lorem ipsum dolor sit amet, un aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
  </div>
    <p className="dots">o&nbsp;&nbsp;&nbsp;<p className="bright"> o&nbsp;&nbsp;&nbsp;&nbsp;o&nbsp;&nbsp;</p></p>
  </div>
  </div> 
  <p className="footer">
    <h4 className="address">CONTACT US<br/>
      <p className="locationdet1">Al Mirqab Aljadeed Street<br/>P.O Box: 32045L Doha, Qatar</p>
      <p className="locationdet2">T : +961 111 111<br/>F : +961 111 111</p>
      <p className="locationdet1">Email : support@anyway.com<br/>Get directions o the map --></p>
      <img src={fb} width="15" className="fb" alt="fb" />&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={twitter} width="20" className="twitter" alt="twtr" />&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={insta} width="15" className="insta" alt="insta" />&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={wtsap} width="20" className="wtsap" alt="wtsap" />
    </h4>
    <img src={map} className="map" alt="map" />
    <div className="links">
      QUICK LINKS <br/><br/>
      <div className="textslocation">
       - PPE Personal Protective Equipments<br/><br/>
       - Power Tools Professional and Personal<br/><br/>
       - Building Materials and Mission,<br/><br/>
       - Machines and Generators
       </div>
       <div className="form">
          <p>GET A F FREE QUOTE</p><br/>
          <div>
            <input type="text1" className="form1" placeholder="Name"></input><br/><br/>
            <input type="text1"  className="form2"placeholder="Subject"></input><br/><br/>
            <textarea  className="form3" placeholder="Describe in detail"></textarea><br/><br/>
            <button className="btnsend" type="submit">Send</button>
          </div>
        </div>      
      </div>
      </p>
      <br/>
      <p className="copyright">&copy; 2020 Designed & Developed by Nassir ghraizi</p>
      </div>
    )
  }
}

export default home;


