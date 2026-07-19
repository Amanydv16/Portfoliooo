import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Software Engineer with internship experience in Full-Stack Development, Machine Learning, and Data Analytics.
        </p>
        <p className="about-details">
          Proficient in Python, JavaScript, React.js, Node.js, Django, REST APIs, SQL, and AWS. Experienced in building scalable applications, optimizing API performance, and developing AI-driven solutions, with a proven ability to improve system reliability by 30% and reduce latency by 20%.
        </p>
        <div className="about-certs">
          <h4>Certifications</h4>
          <ul>
            <li>• AWS Cloud Practitioner Essentials</li>
            <li>• Agentic AI Foundations Associate</li>
            <li>• Data Analytics (Google)</li>
            <li>• Foundations of AI & ML (Microsoft)</li>
            <li>• Generative AI (IBM)</li>
            <li>• SQL Foundation (Microsoft)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
