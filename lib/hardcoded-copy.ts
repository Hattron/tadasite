// Hardcoded Copy Content - Extracted from Database
// This replaces the dynamic copy content system with static values

export interface CopyContent {
  [key: string]: string;
}

export const hardcodedCopy: CopyContent = {
  // Home Page - About Us Section
  "home-about-us-paragraph-1": "At TaDa! Interiors, we've been bringing inspired design to homes and businesses across Ottawa for over 20 years. Our passion lies in creating spaces that are not only beautiful but also deeply personal and functional for the people who live and work in them.",

  "home-about-us-paragraph-2": "We're celebrated for our ability to transform and reimagine spaces in a way that reflects every client's unique style, needs, and budget. Whether it's a complete home renovation, a single room refresh, or a commercial project, we approach each design challenge with creativity, expertise, and genuine care.",

  "home-about-us-paragraph-3": "We work closely with a trusted team of skilled trades professionals, allowing TaDa! Interiors to deliver comprehensive design solutions from concept to completion. Our collaborative approach ensures every detail is thoughtfully considered and expertly executed.",

  // About Page - Team Section
  "about-team-heading": "About TaDa! Interiors",

  "about-team-paragraph-1": "At TaDa! Interiors, we've been bringing inspired design to homes and businesses across Ottawa for over 20 years. Our passion lies in creating spaces that are not only beautiful but also deeply personal and functional for the people who live and work in them.",

  // About Page - Meet Team Header
  "about-meet-team-heading": "Meet the Women Behind TaDa!",

  "about-meet-team-description": "Get to know Maureen and Joanna—the heart, soul, and creative force behind every project.",

  // About Page - Our Approach Section
  "about-our-approach-heading": "Our Approach",

  "about-our-approach-philosophy-title": "Our Philosophy",

  "about-our-approach-philosophy-content": "Renovating doesn't have to be stressful. With our experience, guidance, and collaborative approach, we make the design process enjoyable and rewarding. We're here to listen, understand your vision, and bring it to life in ways that exceed your expectations.",

  "about-our-approach-unique-title": "Every Client Is Unique",

  "about-our-approach-unique-content": "No two clients are alike, and neither are our designs. We believe that every space should tell a story—your story. Through careful listening and thoughtful design, we create environments that reflect who you are and how you live.",

  "about-our-approach-why-title": "Why Choose Us",

  "about-our-approach-why-content": "Working with TaDa! Interiors means saving time, avoiding costly mistakes, and gaining expert guidance every step of the way. We handle the details so you can focus on enjoying the transformation of your space.",

  // About Page - Maureen Bio
  "about-maureen-bio-paragraph-1": "After graduating with honours from the Residential Décor program at Algonquin college Maureen embarked on a career that has spanned over two decades. Her journey in interior design has been marked by continuous learning, creative growth, and an unwavering commitment to excellence.",

  "about-maureen-bio-paragraph-2": "Maureen brings a true passion for creativity to every project she takes on. Constantly inspired by the latest trends, she has a keen eye for timeless design that won't go out of style. Her approach balances current aesthetics with enduring appeal, ensuring her clients' spaces remain beautiful for years to come.",

  "about-maureen-bio-paragraph-3": "Over the years Maureen has leant her skills and expertise to a number of companies and organizations, always bringing her signature blend of professionalism and creative vision. This diverse experience has enriched her understanding of different design challenges and client needs.",

  "about-maureen-bio-paragraph-4": "Maureen values the great relationships that develop while working with her clients. Many of her clients have become long-term friends, a testament to her genuine care and dedication to creating spaces that truly reflect their personalities and lifestyles.",

  "about-maureen-bio-paragraph-5": "In addition to being a wife and proud mom of two boys Maureen finds joy in gardening, unwinding through yoga and meditation, and exploring new destinations through travel. These personal passions often inspire elements in her design work, bringing organic beauty and mindful tranquility to her projects.",

  // About Page - Joanna Bio
  "about-joanna-bio-paragraph-1": "Design has always been a part of Joanna's life. Growing up with an artist father, she was constantly surrounded by creativity, color, and the belief that beautiful spaces have the power to transform how we feel and live.",

  "about-joanna-bio-paragraph-2": "While she studied sociology in university, Joanna found that understanding how people live, interact, and connect became the foundation for her design philosophy. This background gives her a unique perspective on creating spaces that truly serve the people who use them.",

  "about-joanna-bio-paragraph-3": "A people person at heart - social, intuitive, and deeply committed to creating spaces that feel personal and welcoming. Joanna believes that the best designs emerge from truly understanding her clients' stories, dreams, and daily routines.",

  "about-joanna-bio-paragraph-4": "Joanna's years working in the hospitality industry sharpened her eye for functional beauty, especially in spaces where comfort and style must coexist seamlessly. This experience taught her how design details can significantly impact how people feel in a space.",

  "about-joanna-bio-paragraph-5": "She later followed her passion and graduated with honours from the Interior Decorating program at Algonquin College, where she honed her technical skills while staying true to her people-centered design approach.",

  "about-joanna-bio-paragraph-6": "Joanna loves to travel and finds endless inspiration in the colours, textures, and cultures she has experienced around the world. These global influences often find their way into her designs, creating spaces with depth, character, and story.",

  "about-joanna-bio-paragraph-7": "As a mother of two, she understands how important it is for spaces to be both stylish and livable. Her designs always consider the reality of daily life, ensuring that beautiful spaces remain functional for families and individuals alike.",

  "about-joanna-bio-paragraph-8": "Joanna is proud to have built lasting relationships with many repeat clients, tailoring each space to evolve with their changing needs and life stages. She sees each project as the beginning of an ongoing design journey with her clients.",

  // Contact Page - Business Hours
  "contact-business-hours-title": "Business Hours",

  "contact-business-hours-schedule": "Office hours are Monday to Friday 9:00 - 5:00pm.",

  "contact-business-hours-closure": "We are closed on weekends and holidays.",

  // Contact Page - Services
  "contact-services-title": "Our Services",

  "contact-services-residential-title": "Residential Services",

  "contact-services-residential-description": "At TaDa! Interiors, we take pride in sourcing the finest products and materials the market has to offer. From custom window treatments and unique lighting solutions to beautiful furniture and distinctive accessories, we work with trusted suppliers to bring you quality pieces that enhance your space.",

  "contact-services-residential-pricing": "Time and expertise for residential services are billed at an hourly rate of $150.00/hour plus HST.",

  "contact-services-commercial-title": "Commercial Services",

  "contact-services-commercial-description": "In addition to residential work, TaDa! Interiors has completed a wide range of commercial projects. From office spaces and retail environments to hospitality venues, we bring the same attention to detail and design excellence to every commercial undertaking.",

  "contact-services-commercial-pricing": "Time and expertise for commercial services are billed at an hourly rate of $165.00/hour plus hst."
};

// Helper function to get copy content by key
export function getCopyContent(key: string): string {
  return hardcodedCopy[key] || '';
}

// Helper function to get multiple copy contents by keys
export function getCopyContents(keys: string[]): Record<string, string> {
  const result: Record<string, string> = {};
  keys.forEach(key => {
    result[key] = getCopyContent(key);
  });
  return result;
}

// Get copy content by page (for backward compatibility)
export function getCopyContentByPage(page: string): Record<string, string> {
  const result: Record<string, string> = {};
  Object.keys(hardcodedCopy).forEach(key => {
    if (key.startsWith(`${page}-`)) {
      result[key] = hardcodedCopy[key];
    }
  });
  return result;
}

// Get copy content by section (for backward compatibility)
export function getCopyContentBySection(page: string, section: string): Record<string, string> {
  const result: Record<string, string> = {};
  const prefix = `${page}-${section}`;
  Object.keys(hardcodedCopy).forEach(key => {
    if (key.startsWith(prefix)) {
      result[key] = hardcodedCopy[key];
    }
  });
  return result;
}
