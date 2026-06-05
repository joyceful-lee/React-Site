import "../../css/sections/about.css";

function About() {
  return( 
    <>
    <div className="about__title">
        <h1>About Me</h1>
    </div>
    <div className="about__content">
        <ul>
            <li><span class="about__label">Name: </span>First Last</li>
            <li><span class="about__label">Location: </span>City, State</li>
            <li><span class="about__label">Bio: </span>Biobiobiobiobiobiobio.</li>
        </ul>
    </div>
    </>


  );
}


export default About;