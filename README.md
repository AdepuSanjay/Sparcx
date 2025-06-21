:root {
  --primary-black: #111827;
  --dark-grey: #374151;
  --medium-grey: #6b7280;
  --light-grey: #e5e7eb;
  --background-grey: #f9fafb;
  --accent-blue: #2563eb;
  --accent-hover: #1e40af;
  --font-main: 'Inter', sans-serif;
  --font-headings: 'DM Serif Display', serif;
}

/* Global Container */
.homepage-container {
  font-family: var(--font-main);
  color: var(--primary-black);
  background-color: var(--background-grey);
  padding: 4rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 3rem 1rem;
  margin-bottom: 4rem;
}

.hero h1 {
  font-family: var(--font-headings);
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--primary-black);
  margin-bottom: 1.5rem;
}

.hero p {
  max-width: 750px;
  margin: 0 auto;
  font-size: 1rem;
  color: var(--dark-grey);
  line-height: 1.7;
}

/* CTA Button */
.cta-button {
  margin-top: 2.5rem;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  background-color: var(--accent-blue);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  font-weight: 600;
  box-shadow: 0 6px 12px rgba(37, 99, 235, 0.15);
}

.cta-button:hover {
  background-color: var(--accent-hover);
  transform: translateY(-2px);
}

/* Section Styling */
section {
  margin-top: 5rem;
  text-align: center;
}
h2{
  text-align:center;
  margin-top:5px;
}
section h2 {
  font-family: var(--font-headings);
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--primary-black);
}

section p {
  max-width: 850px;
  margin: 0 auto 1.6rem;
  font-size: 1rem;
  color: var(--dark-grey);
}

/* Icons Grid */
.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 3rem;
  justify-items: center;
  margin-top: 2.5rem;
  padding: 2rem 0;
}

.icons-grid div {
  background-color: white;
  padding: 1.3rem 1rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  text-align: center;
  width: 100%;
  max-width: 150px;
}

.icons-grid div:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
}

.icons-grid svg {
  font-size: 2.5rem;
  margin-bottom: 0.6rem;
}

.icons-grid span {
  font-size: 1rem;
  font-weight: 500;
  color: var(--medium-grey);
}

/* Responsive Typography */
@media (min-width: 768px) {
  .hero h1 {
    font-size: 3.2rem;
  }

  section h2 {
    font-size: 2.2rem;
  }

  .cta-button {
    font-size: 1.1rem;
  }
}


/* Hero Layout Cleanup */
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  bottom:40px;
}

@media (min-width: 768px) {
  .hero-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    gap: 3rem;
  }

  .hero-text {
    flex: 1;
    padding-right: 2rem;
  }

  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

 .hero h1 {
    font-size: 1.4rem;
  position: relative;
  bottom:40px;
  }
.hero-image img {
  width: 100%;
  max-width: 600px;

  border-radius: 16px;
  
}


/* Approach Section Layout */
.approach-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin-top: 3rem;
}

@media (min-width: 768px) {
  .approach-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .approach-text, .approach-image {
    flex: 1;
  }

  .approach-text {
    text-align: left;
    padding-right: 2rem;
  }

  .approach-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.approach-image img {
  width: 100%;
  max-width: 600px;
  
  border-radius: 16px;
  
}# Sparcx
