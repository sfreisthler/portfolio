export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img className="headshot" src="img/SadieFreisthlerHeadshot.jpg" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">Hi, my name is</p>
            <h1 className="skills-section--heading">Sadie Freisthler</h1>
            <p className="hero--section-description">
              I'm a computer engineering student with a passion for innovation and problem-solving. 
              As a developer, I focus on using industry data and customer feedback to make informed engineering decisions and produce
              the best product for the client.
            </p>
            <p className="hero--section-description">
              I write clean, well structured code and am always excited about tackling new challenges. 
            </p>
          </div>
        </div>
      </section>
    );
  }