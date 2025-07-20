import { createCopyContent } from "@/lib/copy-actions";

const seedCopyContent = async () => {
  console.log("Seeding copy content...");

  const copyData = [
    // Home page - About Us section
    {
      sectionKey: "home-about-us-paragraph-1",
      title: "About Us - Introduction",
      content:
        "At TaDa! Interiors, we&apos;ve been bringing inspired design to homes and businesses across Ottawa for over 20 years. From personalized paint consultations to full scale renovations, we offer a wide range of residential and commercial design services tailored to meet each client&apos;s needs.",
      page: "home",
      section: "about-us",
      contentType: "paragraph",
      description: "First paragraph of the About Us section on home page",
      sortOrder: 1,
    },
    {
      sectionKey: "home-about-us-paragraph-2",
      title: "About Us - Approach",
      content:
        "We&apos;re celebrated for our ability to transform and reimagine spaces in a way that reflects every client&apos;s personality, style and lifestyle. Our warm, collaborative approach ensures that every project feels thoughtful, functional, and visually harmonious.",
      page: "home",
      section: "about-us",
      contentType: "paragraph",
      description: "Second paragraph of the About Us section on home page",
      sortOrder: 2,
    },
    {
      sectionKey: "home-about-us-paragraph-3",
      title: "About Us - Team",
      content:
        "We work closely with a trusted team of skilled trades professionals, allowing TaDa! Interiors to deliver exceptional craftsmanship and seamless results every step of the way.",
      page: "home",
      section: "about-us",
      contentType: "paragraph",
      description: "Third paragraph of the About Us section on home page",
      sortOrder: 3,
    },

    // About page - Team section
    {
      sectionKey: "about-team-heading",
      title: "Team Section Title",
      content: "About TaDa! Interiors",
      page: "about",
      section: "team",
      contentType: "heading",
      description: "Main heading for the team section on about page",
      sortOrder: 1,
    },
    {
      sectionKey: "about-team-paragraph-1",
      title: "Team Introduction",
      content:
        "At TaDa! Interiors, we&apos;ve been bringing inspired design to homes and businesses across Ottawa for over 20 years. From personalized paint consultations to full scale renovations, we offer a wide range of residential and commercial design services tailored to meet each client&apos;s needs.",
      page: "about",
      section: "team",
      contentType: "paragraph",
      description: "First paragraph in team section on about page",
      sortOrder: 2,
    },

    // About page - Our Approach section
    {
      sectionKey: "about-our-approach-heading",
      title: "Our Approach Title",
      content: "Our Approach",
      page: "about",
      section: "our-approach",
      contentType: "heading",
      description: "Main heading for the Our Approach section",
      sortOrder: 1,
    },
    {
      sectionKey: "about-our-approach-philosophy-title",
      title: "Philosophy Section Title",
      content: "Our Philosophy",
      page: "about",
      section: "our-approach",
      contentType: "heading",
      description: "Philosophy subsection title",
      sortOrder: 2,
    },
    {
      sectionKey: "about-our-approach-philosophy-content",
      title: "Philosophy Content",
      content:
        "Renovating doesn&apos;t have to be stressful. With our experience, guidance, and collaborative approach, we make the journey as enjoyable as the destination - bringing your dream space to life, one thoughtful decision at a time.",
      page: "about",
      section: "our-approach",
      contentType: "paragraph",
      description: "Philosophy section description",
      sortOrder: 3,
    },
    {
      sectionKey: "about-our-approach-unique-title",
      title: "Unique Clients Title",
      content: "Every Client Is Unique",
      page: "about",
      section: "our-approach",
      contentType: "heading",
      description: "Unique clients subsection title",
      sortOrder: 4,
    },
    {
      sectionKey: "about-our-approach-unique-content",
      title: "Unique Clients Content",
      content:
        "No two clients are alike - and neither are our designs. We create spaces that are as individual as the people who live or work in them.",
      page: "about",
      section: "our-approach",
      contentType: "paragraph",
      description: "Unique clients section description",
      sortOrder: 5,
    },
    {
      sectionKey: "about-our-approach-why-title",
      title: "Why Choose Us Title",
      content: "Why Choose Us",
      page: "about",
      section: "our-approach",
      contentType: "heading",
      description: "Why choose us subsection title",
      sortOrder: 6,
    },
    {
      sectionKey: "about-our-approach-why-content",
      title: "Why Choose Us Content",
      content:
        "Working with TaDa! Interiors means saving time, avoiding costly mistakes, and gaining expert guidance every step of the way. From selecting finishes and furnishings to choosing the perfect lighting, we streamline the process and help you make confident, well-informed decisions.",
      page: "about",
      section: "our-approach",
      contentType: "paragraph",
      description: "Why choose us section description",
      sortOrder: 7,
    },

    // About page - Meet the Team header
    {
      sectionKey: "about-meet-team-heading",
      title: "Meet the Team Header",
      content: "Meet the Women Behind TaDa!",
      page: "about",
      section: "meet-team-header",
      contentType: "heading",
      description: "Main heading for the meet the team section",
      sortOrder: 1,
    },
    {
      sectionKey: "about-meet-team-description",
      title: "Meet the Team Description",
      content:
        "Get to know Maureen and Joanna—the heart, soul, and creative force behind every project.",
      page: "about",
      section: "meet-team-header",
      contentType: "paragraph",
      description: "Description text for the meet the team section",
      sortOrder: 2,
    },

    // Contact page - Business Hours
    {
      sectionKey: "contact-business-hours-title",
      title: "Business Hours Title",
      content: "Business Hours",
      page: "contact",
      section: "business-hours",
      contentType: "heading",
      description: "Business hours section title",
      sortOrder: 1,
    },
    {
      sectionKey: "contact-business-hours-schedule",
      title: "Business Hours Schedule",
      content: "Office hours are Monday to Friday 9:00 - 5:00pm.",
      page: "contact",
      section: "business-hours",
      contentType: "paragraph",
      description: "Business hours schedule information",
      sortOrder: 2,
    },
    {
      sectionKey: "contact-business-hours-closure",
      title: "Business Hours Closure",
      content: "We are closed on weekends and holidays.",
      page: "contact",
      section: "business-hours",
      contentType: "paragraph",
      description: "Weekend and holiday closure information",
      sortOrder: 3,
    },

    // Contact page - Services
    {
      sectionKey: "contact-services-title",
      title: "Our Services Title",
      content: "Our Services",
      page: "contact",
      section: "services",
      contentType: "heading",
      description: "Services section main title",
      sortOrder: 1,
    },
    {
      sectionKey: "contact-services-residential-title",
      title: "Residential Services Title",
      content: "Residential Services",
      page: "contact",
      section: "services-residential",
      contentType: "heading",
      description: "Residential services subsection title",
      sortOrder: 1,
    },
    {
      sectionKey: "contact-services-residential-description",
      title: "Residential Services Description",
      content:
        "At TaDa! Interiors, we take pride in sourcing the finest products and materials the market has to offer. Backed by a trusted network of skilled tradespeople and a keen eye for finding the perfect finishing touches, we make the design process both seamless and enjoyable. Whether you are refreshing a room or transforming an entire space, we ensure the journey is as rewarding as the final result.",
      page: "contact",
      section: "services-residential",
      contentType: "paragraph",
      description: "Residential services main description",
      sortOrder: 2,
    },
    {
      sectionKey: "contact-services-residential-pricing",
      title: "Residential Services Pricing",
      content:
        "Time and expertise for residential services are billed at an hourly rate of $150.00/hour plus HST",
      page: "contact",
      section: "services-residential",
      contentType: "paragraph",
      description: "Residential services pricing information",
      sortOrder: 3,
    },
    {
      sectionKey: "contact-services-commercial-title",
      title: "Commercial Services Title",
      content: "Commercial Services",
      page: "contact",
      section: "services-commercial",
      contentType: "heading",
      description: "Commercial services subsection title",
      sortOrder: 1,
    },
    {
      sectionKey: "contact-services-commercial-description",
      title: "Commercial Services Description",
      content:
        "In addition to residential work, TaDa! Interiors has completed a wide range of commercial projects. Our portfolio includes - though is not limited to - restaurants, retail environments, office spaces, condominiums and even a church.",
      page: "contact",
      section: "services-commercial",
      contentType: "paragraph",
      description: "Commercial services main description",
      sortOrder: 2,
    },
    {
      sectionKey: "contact-services-commercial-pricing",
      title: "Commercial Services Pricing",
      content:
        "Time and expertise for commercial services are billed at an hourly rate of $165.00/hour plus hst",
      page: "contact",
      section: "services-commercial",
      contentType: "paragraph",
      description: "Commercial services pricing information",
      sortOrder: 3,
    },
  ];

  let successCount = 0;
  let errorCount = 0;

  for (const item of copyData) {
    try {
      const result = await createCopyContent(item);
      if (result.success) {
        console.log(`✓ Created: ${item.sectionKey}`);
        successCount++;
      } else {
        console.log(`✗ Failed: ${item.sectionKey} - ${result.error}`);
        errorCount++;
      }
    } catch (error) {
      console.log(`✗ Error: ${item.sectionKey} - ${error}`);
      errorCount++;
    }
  }

  console.log(`\nSeeding completed:`);
  console.log(`Success: ${successCount}`);
  console.log(`Errors: ${errorCount}`);
};

// Run the seeding if this file is executed directly
if (require.main === module) {
  seedCopyContent()
    .then(() => {
      console.log("Seeding finished");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Seeding failed:", error);
      process.exit(1);
    });
}

export default seedCopyContent;
