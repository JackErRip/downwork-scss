import React, { useState, useEffect } from 'react';

function Section7() {
  const [showSecondSection, setShowSecondSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Change to the second section when scrolled more than the window height
      if (scrollPosition > windowHeight / 2) {
        setShowSecondSection(true);
      } else {
        setShowSecondSection(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>
        Enterprise solutions to scale a winning talent strategy
      </h1>

      <div>
        {/* First Section */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            transition: 'opacity 1s ease-in-out',
            opacity: showSecondSection ? 0 : 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Section7 Background.png`}
            alt="Section 7"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '10px',
              boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '25%',
              left: '25%',
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
              color: 'white',
              maxWidth: '20rem',
            }}
          >
            <h2>Track talent end-to-end</h2>
            <p>
              Do it all in one place, from shortlisting top candidates to project management to collaboration tools.
            </p>
            <h2>Work with talent you trust</h2>
            <p>
              Bring in talent you already know and manage their experience through one platform.
            </p>
            <h2>Secure compliance and work protection</h2>
            <p>
              Use our global classification services to protect your business from legal risks.
            </p>
            <button
              style={{
                marginTop: '1rem',
                backgroundColor: '#22c55e',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
              }}
            >
              Contact us
            </button>
          </div>
        </div>

        {/* Second Section */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            transition: 'opacity 1s ease-in-out',
            opacity: showSecondSection ? 1 : 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Section7 Background Inverted.png`}
            alt="Section 7 Inverted"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '10px',
              boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '25%',
              right: '25%',
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
              color: 'white',
              maxWidth: '20rem',
            }}
          >
            <h2>Governance and controls</h2>
            <p>
              Create contracts and onboarding flows and use reporting tools that fit your needs and scale your business.
            </p>
            <h2>Payroll and staffing</h2>
            <p>
              Pay your distributed team with Upwork Payroll so you can focus on growing your business instead of time-consuming admin.
            </p>
            <h2>Safety and security</h2>
            <p>
              Engage, onboard, and manage your hybrid team worry-free with our compliant talent marketplace.
            </p>
            <button
              style={{
                marginTop: '1rem',
                backgroundColor: '#22c55e',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
              }}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
