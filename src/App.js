import './App.css';

function App() {
  const downloadPDF = () => {
    // Hide the download button using CSS rather than DOM manipulation
    const printStyle = document.createElement('style');
    printStyle.innerHTML = `
      @media print {
        .download-container {
          display: none !important;
        }
        body, html {
          width: 210mm;
          height: 297mm;
          margin: 0;
          padding: 20mm 15mm;
        }
      }
    `;
    document.head.appendChild(printStyle);
    
    // Print the document
    window.print();
    
    // Remove the style after printing
    setTimeout(() => {
      document.head.removeChild(printStyle);
    }, 100);
  };
  
  return (
    <div className="App">
      
      <div className="download-container">
        <button className="download-btn" onClick={downloadPDF}>Download PDF</button>
    </div>
     <div class="header">
        <div class="name">Md. Mushtaq Hussain</div>
        <div class="contact-info">
            <span>+91-81259-42478</span>
            <span>mohdmushtaq251@gmail.com</span>
            <span>github.com/IOutis</span>
            <span>linkedin.com/in/md-mushtaq-hussain/</span>
            <span>Portfolio available</span>
        </div>
    </div>
    
    <div class="section">
        <div class="section-title">EDUCATION</div>
        
        <div class="item">
            <div class="item-header">
                <div class="item-title">Vasavi College of Engineering</div>
                <div class="item-date">2022 - 2026</div>
            </div>
            <div class="item-subtitle">Bachelor of Engineering in Information Technology</div>
            <div class="item-details">Current CGPA: 8.66/10</div>
        </div>
        
        <div class="item">
            <div class="item-header">
                <div class="item-title">Iqbalia Junior College</div>
                <div class="item-date">2020 - 2022</div>
            </div>
            <div class="item-subtitle">Intermediate - MPC</div>
            <div class="item-details">Percentage: 96.7%</div>
        </div>
    </div>
    
    <div class="section">
        <div class="section-title">SKILLS</div>
        <ul class="skills-list">
            <li><strong>Languages:</strong> Python, C, C++, Java, JavaScript, HTML, CSS</li>
            <li><strong>Web Technologies:</strong> HTML, CSS, JavaScript, Tailwind CSS, Bootstrap</li>
            <li><strong>Libraries and Frameworks:</strong> React, NextJS, NodeJS, Django</li>
            <li><strong>Database:</strong> SQL, MySQL, MongoDB</li>
            <li><strong>Additional Skills:</strong> Data Structures and Algorithms (DSA), Object-Oriented Programming (OOPs)</li>
            <li><strong>Soft Skills:</strong> Adaptive Thinker, Strategic Foresight, Iterative Experimenter, Pattern Recognition, Narrative Builder</li>
        </ul>
    </div>
    
    <div class="section">
        <div class="section-title">PROJECTS</div>
        
        <div class="item">
            <div class="item-header">
                <div class="item-title">Student Synergy</div>
                <div class="item-date">Jan. 2024 – Present</div>
            </div>
            <div class="item-subtitle">React.js, Next.js, TypeScript, Tailwind CSS, MongoDB</div>
            <div class="item-details">
                <ul>
                    <li>Developed a comprehensive productivity tool for students, featuring gamified task scheduling, digital notes with CKEditor, and future plans for exercise, meditation resources, and AI tools.</li>
                    <li>Handled full-stack development independently, overcoming challenges like deployment dependencies, ESLint issues, and deprecated libraries.</li>
                    <li>Optimized performance on Vercel despite budget constraints, anticipating a 30-40% increase in student productivity by consolidating essential tools into a single platform.</li>
                </ul>
            </div>
        </div>
        
        <div class="item">
            <div class="item-header">
                <div class="item-title">Student Synergy</div>
                <div class="item-date">Apr. 2024 – May 2024</div>
            </div>
            <div class="item-subtitle">Django, Python, HTML, CSS, JS, MySQL, Django-celery, Celery-beats</div>
            <div class="item-details">
                <ul>
                    <li>Created a user-friendly website to help students manage their schedules effectively.</li>
                    <li>Introduced features such as a Pomodoro timer, gamified task progress tracking, user authentication, dashboard, and digital notes, which aims to increase the users productivity by a 35-40%.</li>
                </ul>
            </div>
        </div>
        
        <div class="item">
            <div class="item-header">
                <div class="item-title">Crime Case Management System</div>
                <div class="item-date">Apr. 2024 – Jun. 2024</div>
            </div>
            <div class="item-subtitle">Java, MySQL</div>
            <div class="item-details">
                <ul>
                    <li>Established rigorous data organization protocols within the criminal case management system, resulting in a 60% reduction in case file retrieval errors and improving overall accuracy of information for case assessments.</li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="section">
        <div class="section-title">ACHIEVEMENTS</div>
        
        <div class="item">
            <div class="item-title">NPTEL Courses | Elite Silver Medals</div>
            <div class="item-details">
                <ul>
                    <li>Earned Elite Silver Medals in 'Developing Soft Skills And Personality' and 'The Joy Of Computing Using Python', enhancing technical skills and project outcomes.</li>
                </ul>
            </div>
        </div>
        
        <div class="item">
            <div class="item-title">Hackathons and Competitions</div>
            <div class="item-details">
                <ul>
                    <li>Participated in notable hackathons including VNR Hackathon, Hacksavvy-24, and Codezee Contest.</li>
                </ul>
            </div>
        </div>
        
        <div class="item">
            <div class="item-title">IEEE Student Branch Chapter | Web Master</div>
            <div class="item-details">
                <ul>
                    <li>Leading humanitarian projects aimed at improving community welfare through technology.</li>
                    <li>Developing impactful solutions to address various social issues in the role of Web Master.</li>
                </ul>
            </div>
        </div>
    </div>
    
    </div>
  );
}

export default App;
