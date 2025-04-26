// front page 
import "./front.css"
import SearchBar from "../components/searcbar"
import Design from "../assets/design"
import SelectActionCard from "../components/card"

import Categories from "../components/categories"
import Box from "../components/box"
import Images from "../components/images"
import Reviews from "../components/reviews"
import Footer from "../components/footer"


export default function Frontpage()
{
    const explore="explore";
    const expierence="expierence";
    return(
     <div className="frontpage">
        <div className="textandimage">
        <div className="text">
        <h2>Travelling opens the door to creating memories</h2>
        <p>
  Discover <strong>new places</strong>, connect with <strong>diverse people</strong>, and immerse yourself in <strong>different cultures</strong>. Every trip turns into a unique story, rich with <strong>adventure</strong>, filled with <strong>laughter</strong>, and packed with unforgettable <strong>moments</strong>.
</p>
 </div>
        <div className="image">
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="travel pic" />
        




            <img src="https://images.unsplash.com/photo-1632962237468-0705d7e7b534?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D" alt="tavel pic"/>

            <img src="https://plus.unsplash.com/premium_photo-1669750817438-3f7f3112de8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8fDA%3D" alt="tavel pic"/>
       
        </div>
       
        </div>
        <br></br>
        <br></br>
      { /* <div className="search">
        <SearchBar></SearchBar>
        </div>*/}
          
            <div className="serve">
            <div className="text">    
          <h2 style={{ fontFamily: "'Great Vibes', cursive", color: "#d97c7c" }}>What we serve?</h2>
       
          </div>
          <div className="cards"> 
            <SelectActionCard></SelectActionCard>
            </div>
            </div>

       
            <div className="tour" >
              <div className="text">
        
          <h2>Our Featured tours</h2>
          </div>
        
         <div className="destination" >
            <Categories></Categories>
         
         </div>
         </div>
         
         <div className="expierence">
            <div className="expierence-text">
        
        <h2 style={{fontSize:"30px"}}>With All Our Expierence <br></br>We Will Serve You</h2>
        <Box value={"12k+"}/> &nbsp; &nbsp; &nbsp;&nbsp;
        <Box value={"2k+"}/> &nbsp; &nbsp; &nbsp; &nbsp;
        <Box value={"15+"}/> &nbsp; &nbsp; &nbsp; &nbsp;

       </div>
       
         
        <div className="expierence-image">
        <img src="https://img.freepik.com/free-vector/happy-family-ready-travel-white-background_1308-85303.jpg?semt=ais_hybrid"></img>

          </div>
          </div>
         
          <div className="gallery">
           
            <h2>Visit Our Customers Tour Gallery</h2>
            <Images></Images>

          </div>
          <div className="review">
            
            <h2>  What Our Guests Are Saying About Us</h2>
            <Reviews></Reviews>
          </div>
          <div className="footer">
            <Footer></Footer>
            
         
          </div>
          <br></br>
          © {new Date().getFullYear()} TravelEase. All rights reserved.
          </div>

       
        
    )
}