import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Student (CSE - AI/ML)</h4>
                <h5>VIT Bhopal University</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Completed B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning. Graduated with a CGPA of 9.03/10. Secured podium finishes in national-level hackathons.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>Indian Oil Corporation Ltd.</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Designed a machine learning-based fuel demand forecasting system, improving prediction accuracy by 15%. Analyzed 10K+ records using advanced EDA and boosted model performance by 20% using regression and ensemble models.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern (Full Stack)</h4>
                <h5>Instahyre</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Resolved production issues in REST APIs and data pipelines, improving reliability by 30%. Developed full-stack features using Django, Python, and JavaScript, reducing API latency by 20% in high-concurrency environments (10K+ requests/day).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
