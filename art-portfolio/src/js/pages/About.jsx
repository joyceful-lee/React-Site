import "../../css/sections/about.css";

function About() {
  return( 
    <>
    <div className="about__title">
        <h1>About Me</h1>
    </div>
    <div class="content">
    <div class="image-section">
        <img src="images/night vision.png" alt="Mini Image" class="mini-image"/>
        <img src="images/image1.jpg" alt="Main Image" class="main-image"/>
    </div>

    <ul class="info-list">
        <li><span class="about__label">Name: </span>First Last</li>
        <li><span class="about__label">Location: </span>City, State</li>
        <li><span class="about__label">Bio: </span>Biobiobiobiobiobiobio.</li>
    </ul>
</div>
    </>

  );
}


export default About;