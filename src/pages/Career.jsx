import React from 'react';

const Career = () => {
  return (
    <>
      {/*  Career Banner  */}
      <section className="career-banner">
        <div className="container">
          <h1>Work at <span>Asionix Technologies</span> Services</h1>
          <p>
            We design and develop solutions that empower businesses to thrive.
            Partnering with visionaries like you, we collaborate to craft
            exceptional, world-class products
          </p>
          <a href="#apply" className="btn-jobs">View Jobs Position</a>
        </div>
      </section>

      {/*  Gallery Section  */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-wrapper">
            <div className="gallery-row">
              <div className="gallery-item">
                <div
                  className="gallery-bg"
                  style={{ background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)' }}
                >
                  <i className="fas fa-birthday-cake"></i>
                </div>
                <div className="overlay">
                  <h3>Birthday Celebration</h3>
                  <p>
                    Follow us on Facebook to explore what life at Asionix is all
                    about!
                  </p>
                </div>
              </div>
              <div className="gallery-item">
                <div
                  className="gallery-bg"
                  style={{ background: 'linear-gradient(135deg, #48dbfb 0%, #0abde3 100%)' }}
                >
                  <i className="fas fa-users"></i>
                </div>
                <div className="overlay">
                  <h3>We Celebrate</h3>
                  <p>
                    Connect with us on LinkedIn to discover the latest job
                    opportunities!
                  </p>
                </div>
              </div>
            </div>
            <div className="gallery-row">
              <div className="gallery-item">
                <div
                  className="gallery-bg"
                  style={{ background: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)' }}
                >
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <div className="overlay">
                  <h3>Presentation</h3>
                  <p>
                    Attract, recruit, and onboard top talent to build a
                    high-performing team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Job Application Form  */}
      <section className="job-form-section" id="apply">
        <div className="container">
          <h2>Discover Amazing Opportunities Today</h2>
          <form className="job-form" id="careerForm">
            <div className="form-row">
              <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Mobile No:</label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile No"
                  required
                />
              </div>
              <div className="form-group">
                <label>Job Title:</label>
                <input
                  type="text"
                  name="job_title"
                  placeholder="Job Title"
                  required
                />
              </div>
            </div>

            <div className="skills-section">
              <h4>Please select all the skills you have:</h4>
              <div className="skills-grid">
                <label className="skill-checkbox">
                  <input type="checkbox" /> PHP Developer (CodeIgniter/Laravel)
                </label>
                <label className="skill-checkbox">
                  <input type="checkbox" /> Java Developer
                </label>
                <label className="skill-checkbox">
                  <input type="checkbox" /> Node JS Developer
                </label>
                <label className="skill-checkbox">
                  <input type="checkbox" /> C# Developer
                </label>
                <label className="skill-checkbox">
                  <input type="checkbox" /> Python Developer
                </label>
                <label className="skill-checkbox">
                  <input type="checkbox" /> .NET Developer
                </label>
                <label className="skill-checkbox">
                  <input type="checkbox" /> React Developer
                </label>
                <label className="skill-checkbox">
                  <input type="checkbox" /> Android Developer
                </label>
                <label className="skill-checkbox">
                  <input type="checkbox" /> Angular Developer
                </label>
                <label className="skill-checkbox">
                  <input type="checkbox" /> iOS Developer
                </label>
                <label className="skill-checkbox">
                  <input type="checkbox" /> HTML/CSS Developer
                </label>
                <label className="skill-checkbox">
                  <input type="checkbox" /> Data Scientist
                </label>
                <label className="skill-checkbox">
                  <input type="checkbox" /> VFX Artist
                </label>
                <label className="skill-checkbox">
                  <input type="checkbox" /> Motion Graphics Designer
                </label>
                <label className="skill-checkbox">
                  <input type="checkbox" /> 3D Animator
                </label>
                <label className="skill-checkbox">
                  <input type="checkbox" /> Video Editor
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Job Experience:</label>
                <input
                  type="text"
                  name="experience"
                  placeholder="e.g. 2 years"
                  required
                />
              </div>
              <div className="form-group">
                <label>Current CTC:</label>
                <input type="text" name="current_ctc" placeholder="e.g. 5 LPA" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expected CTC:</label>
                <input
                  type="text"
                  name="expected_ctc"
                  placeholder="e.g. 8 LPA"
                  required
                />
              </div>
              <div className="form-group file-upload">
                <label>Upload Your CV:</label>
                <input type="file" name="resume" accept=".pdf,.doc,.docx" required />
              </div>
            </div>

            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
      </section>

      {/*  Why Join Us Section  */}
      <section className="why-join-section">
        <div className="container">
          <h2>Why Join Asionix?</h2>
          <div className="why-join-grid">
            <div className="why-card">
              <i className="fas fa-rocket"></i>
              <h4>Career Growth</h4>
              <p>
                Unlock your potential with continuous learning and advancement
                opportunities.
              </p>
            </div>
            <div className="why-card">
              <i className="fas fa-users"></i>
              <h4>Great Team</h4>
              <p>
                Work with talented professionals in a collaborative environment.
              </p>
            </div>
            <div className="why-card">
              <i className="fas fa-laptop-house"></i>
              <h4>Work-Life Balance</h4>
              <p>Flexible working hours and remote work options available.</p>
            </div>
            <div className="why-card">
              <i className="fas fa-gift"></i>
              <h4>Benefits</h4>
              <p>
                Competitive salary, health insurance, and performance bonuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  Footer  */}
    </>
  );
};

export default Career;
