import data from "../data/index.json";

export default function Skills() {
  return (
    <section className="skills--section" id="Skills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">Skills</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img className="skills--logo" src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description"></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}