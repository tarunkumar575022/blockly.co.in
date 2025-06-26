import React, { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
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
    <section className="hero-section">
      <div className='cont'>
        <div className="text">
          <h1 className="greeting">Hello! </h1>
          <h1 className='head'>I’m <span className="highlight">Tarun 👋</span></h1>
          <p className='para'>UI/UX Designer, Front-End Developer & Thinker. Based in India.</p>
          <div className='d-flex '>
            <div className='lists' >
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
            </div>
          <div className="buttons">
            <button className="btn-primary download">Download CV</button>
            <button className="btn-secondary getintouch">Get in Touch</button>
          </div>
          </div>
          
        </div>
        <div className="hero-image">
          <img
                src={`${process.env.PUBLIC_URL}/images/Hero-image.png`}
                alt="Hero"
                className="hee"
                style={{ width: "230px", height: "230px", borderRadius: "12px" }}
              />
        </div>
      </div>
    </section>
  );
}

export default Hero;