import fideitySite from "../../../assets/images/fidelity.png";
import exadsSite from "../../../assets/images/exads.png";
import equifaxSite from "../../../assets/images/equifax.png";
import medicalSite from "../../../assets/images/bluebridgetech.png";
import liveirishradio from "../../../assets/images/liveirishradio.jpg";
import AIproject from "../../../assets/images/project-ia.png";
import stream1 from "../../../assets/images/stream1.jpg";
import panasearch from "../../../assets/images/panasearch.png";
import sugiPdfApplication from "../../../assets/images/sugipdf.png";
import sugifkms from "../../../assets/images/sugifkms.png";
import mailboxSite from "../../../assets/images/project-mailbox.png";
import scuv14 from "../../../assets/images/project-scuv14.png";
import laundrywithme from "../../../assets/images/laundrywithme.png";
import swaggerUi from "../../../assets/images/SwaggerUI.png";
import esbnetworks from "../../../assets/images/esbnetworks.png";

import type { PortfolioProject } from "../domain/portfolio.types";

export const portfolioProjects: PortfolioProject[] = [
    {
    image: sugifkms,
    alt: "Official SUGI FKMS site",
    title: "SUGI FKMS",
    summary: "Shipped full-stack capabilities for the official business platform.",
    stack: "Spring Boot, React, Docker, Azure DevOps, AWS",
  },
  { 
    image: esbnetworks,
    alt: "ESB Networks project",
    title: "ESB Networks",
    summary: "Worked on implementing the design system, and authentication flows, ensuring consistency and efficiency across projects.",
    stack: "React.js, Design Systems, Azure DevOps",
  },
  {
    image: fideitySite,
    alt: "Fidelity Investment - Digital Platform",
    title: "Fidelity Investments",
    summary:
      "Web development and microservices work for one of the largest asset managers in the world.",
    stack: "Angular, React.js, TypeScript, Java (Spring Boot) and Node.js, Microservices, Testing",
  },
  {
    image: exadsSite,
    alt: "Exads platform",
    title: "Exads",
    summary:
      "Contributed to ad-tech platform experiences across Angular and React properties.",
    stack: "Angular, React, Jasmine, Karma, MUI, TailwindCSS",
  },
  {
    image: equifaxSite,
    alt: "Compliance Center and I-9 platform",
    title: "Equifax Compliance Center",
    summary: "Built features for compliance workflows and I-9 platform modules.",
    stack: "Angular, Bootstrap, Jasmine, Karma, Material UI, AWS, Docker, Jenkins, ASP.NET Core Web API",
  },
  {
    image: medicalSite,
    alt: "BlueBridge Technology mobile project",
    title: "BlueBridge Technology",
    summary:
      "Delivered mobile Java modules with reactive patterns and backend integrations.",
    stack: "Java, Reactive Programming, XML, Ruby, Python",
  },
  {
    image: panasearch,
    alt: "SUGI Search Jobs app",
    title: "SUGI Search Jobs",
    summary: "Implemented product features for a searchable jobs experience.",
    stack: "JavaScript, TailwindCSS, Vue, Docker",
  },
  {
    image: scuv14,
    alt: "Servicio Comunitario Universitario",
    title: "SCUV14",
    summary:
      "Supported database and software components for university service workflows.",
    stack: "Java, SQL, Forms, Reporting",
  },
  {
    image: mailboxSite,
    alt: "Mailbox web design project",
    title: "Mailbox",
    summary: "Prototyped frontend and mobile-facing API integration flows.",
    stack: "Web Design, API Design, Mobile",
  },
  {
    image: liveirishradio,
    alt: "Radio station web and mobile app",
    title: "Live Irish Radio",
    summary:
      "Built web, mobile, and backend pieces for streaming-first experiences.",
    stack: "Java, REST APIs, Mobile, Web",
  },
  {
    image: stream1,
    alt: "Stream4Pro mobile app",
    title: "Stream4Pro",
    summary:
      "Developed Android features and app navigation patterns for media workflows.",
    stack: "Android Studio, Java",
  },
  {
    image: AIproject,
    alt: "Artificial intelligence project",
    title: "AI Research Project",
    summary:
      "Applied neural network techniques for classification and prediction tasks.",
    stack: "Neural Networks, Matlab",
  },
  {
    image: sugiPdfApplication,
    alt: "PDF application project",
    title: "Document Automation App",
    summary:
      "Implemented document workflow features with robust cloud-friendly delivery.",
    stack: "JavaScript, UI Engineering, Docker",
  },
  {
    image: laundrywithme,
    alt: "LaundryWithMe mobile app",
    title: "LaundryWithMe",
    summary:
      "Built a laundry service experience focused on booking flow, pickup/drop-off coordination, and customer convenience.",
    stack: "Mobile App, Product Design, API Integration",
  },
  {
    image: swaggerUi,
    alt: "SwaggerUI API documentation portal",
    title: "SwaggerUI",
    summary:
      "Implemented an interactive API documentation portal to test endpoints, validate contracts, and improve developer onboarding.",
    stack: "OpenAPI, SwaggerUI, REST APIs, Documentation",
  }
];
