import React, { useEffect, useState } from 'react';
import './About.css';

function About() {
  const [theme, setTheme] = useState('light');
  
    useEffect(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      setTheme(currentTheme || 'light');
  
      // Listen for theme changes (optional)
      const observer = new MutationObserver(() => {
        const updatedTheme = document.documentElement.getAttribute('data-theme');
        setTheme(updatedTheme);
      });
      observer.observe(document.documentElement, { attributes: true });
  
      return () => observer.disconnect();
    }, []);

  return (
    <section className="about-section">
      <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
      <img src={`${process.env.PUBLIC_URL}/images/hand.png`} alt="Hand Emoji" style={{width: "250px", transform: "rotate(90deg)" }}/>
      
      <div>
        <h2><strong>This is it. ;)</strong></h2>
        <p>
          Tarun Kumar is an Indian UI/UX Designer & Front End Developer with a passion for designing beautiful and functional user experiences.
          Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff
          for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11. He holds a
          bachelor degree in Computer Applications. During his graduation, he has been actively involved in the web design community for the last 3
          years. He has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, India, where he’s working
          as an independent creative. His interests, however, extend beyond the web and he loves helping people with branding and print design. He
          even loves designing 3D floor plans. When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or
          messing around on something inspired by YouTube tutorials.
        </p>
        
  </div>
</div>
      <ul style={{listStyle: 'none'}}>
              <li>
                <img
                  src={`${process.env.PUBLIC_URL}/images/${theme === 'dark' ? 'Group-9.png' : 'Facebook.png'}`}
                  alt="Hero"
                  className="logo" />
                  
              </li>
              <li>
                <img
                  src={`${process.env.PUBLIC_URL}/images/${theme === 'dark' ? 'Group-7.png' : 'Instagram.png'}`}
                  alt="Hero" 
                  className="logo"/>
              </li>
              <li>
                <img
                  src={`${process.env.PUBLIC_URL}/images/${theme === 'dark' ? 'Group-8.png' : 'Twitter.png'}`}
                  alt="Hero" 
                  className="logo"/>
              </li>
              <li>
                <img
                  src={`${process.env.PUBLIC_URL}/images/${theme === 'dark' ? 'Group-10.png' : 'GitHub.png'}`}
                  alt="Hero" 
                  className="logo"/>
              </li>
              <li>
                <img
                  src={`${process.env.PUBLIC_URL}/images/${theme === 'dark' ? 'Group-11.png' : 'LinkedIn.png'}`}
                  alt="Hero" 
                  className="logo"/>
              </li>
              <li>
                <img
                  src={`${process.env.PUBLIC_URL}/images/${theme === 'dark' ? 'Group-12.png' : 'Telegram.png'}`}
                  alt="Hero" 
                  className="logo"/>
              </li>
              <li>
                <img
                  src={`${process.env.PUBLIC_URL}/images/${theme === 'dark' ? 'Ellipse-2.png' : 'Koo.png'}`}
                  alt="Hero"
                />
              </li>
            </ul>
          
            <hr className='line'/>

    </section>
  );
}

export default About;