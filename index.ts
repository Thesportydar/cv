import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { jobsT } from "./jobs.ts";
import { educationT } from "./education.ts";
import { personalInfoT } from "./personalInfo.ts";
import { skillsT } from "./skills.ts";

type Lang = "es" | "en";

interface CVData {
  name: string;
  role: string;
  summary: string;
  experience: {
    title: string;
    company: string;
    location: string;
    isRemote?: boolean;
    duration: string;
    description: string | string[];
    technologies?: string[];
  }[];
  education: {
    title: string;
    company: string;
    location: string;
    isRemote?: boolean;
    duration: string;
    description: string | string[];
  }[];
  personal: {
    email: string;
    linkedin: string;
    github: string;
    portfolio: string;
    ciudad: string;
    edad: number;
  };
  backend: string[];
  ai: string[];
  frontend: string[];
  devops: string[];
  cta: string;
}

function extractCVData(lang: Lang): CVData {
  const experience = jobsT[lang];
  const education = educationT[lang];
  const skills = skillsT[lang];

  return {
    name: personalInfoT[lang].name,
    role: personalInfoT[lang].role,
    summary: personalInfoT[lang].profile,
    experience,
    education,
    personal: personalInfoT[lang],
    backend: skills.backend,
    ai: skills.ai,
    frontend: skills.frontend,
    devops: skills.devops,
    cta: skills.cta
  };
}

function harvardCvHtml(data: CVData, lang: Lang, profileImageBase64: string): string {
  return `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="author" content="${data.name}">
  <meta name="description" content="CV of ${data.name} - ${data.role}">
  <meta name="keywords" content="CV, Resume, ${data.role}, ${data.name}">
  <title>CV ${data.name}</title>
  <style>
    body { font-family: 'Georgia', serif; margin: 40px; color: #000; line-height: 1.45; }
    
    .header {
        margin-bottom: 25px;
        border-bottom: 2px solid #000;
        padding-bottom: 20px;
        overflow: hidden; /* Clear floats */
    }
    .header-info {
        float: left;
        width: 75%;
    }
    .header-photo {
        float: right;
    }
    .header-photo img {
        display: none; /* Hide original img tag if present */
    }
    .profile-photo-div {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        background-image: url('data:image/png;base64,${profileImageBase64}');
        background-size: cover;
        background-position: center;
        border: 1px solid #ccc;
    }

    h1 { font-size: 2.2em; margin: 0 0 5px 0; text-transform: uppercase; letter-spacing: 0.5px; }
    .role { font-size: 1.1em; font-style: italic; margin-bottom: 10px; color: #333; }
    
    .contact-line { margin-bottom: 4px; font-size: 0.95em; }
    .contact-line a { color: #000; text-decoration: none; border-bottom: 1px dotted #666; }
    
    .section { margin-top: 22px; }
    
    /* Semantic Header styling to match previous look */
    h2 { 
        font-size: 1.05em; 
        font-weight: bold; 
        text-transform: uppercase; 
        border-bottom: 1px solid #000; 
        margin: 0 0 12px 0; 
        padding-bottom: 3px;
        color: #000;
    }
    
    .entry { margin-bottom: 16px; }
    
    /* Semantic Job Title */
    .job-title {
        font-size: 1.05em;
        font-weight: bold;
        margin: 0;
        color: #000;
    }
    
    .company-name {
        font-size: 1em;
        font-weight: bold;
        color: #333;
        margin-top: 2px;
    }
    
    .entry-date { 
        font-weight: bold; 
        font-size: 1em; 
        margin-top: 2px;
    }

    .entry-sub { font-style: italic; color: #333; font-size: 0.95em; margin-bottom: 4px; margin-top: 2px;}
    .entry-desc { font-size: 0.95em; text-align: justify; }
    

    .skills-row { margin-bottom: 6px; font-size: 0.95em; }
    .skills-label { font-weight: bold; text-decoration: underline; margin-right: 6px; }

    .cta-block { margin-top: 30px; border-top: 1px solid #ccc; padding-top: 10px; text-align: center; font-size: 0.9em; color: #555; }
    .cta-block a { color: #000; }
  </style>
</head>
<body>
  <div class="header">
      <div class="header-info">
          <h1>${data.name}</h1>
          <div class="role">${data.role}</div>
          <div class="contact-line">
             ${data.personal.email} • ${data.personal.ciudad}
          </div>
          <div class="contact-line">
             <a href="${data.personal.linkedin}">LinkedIn</a> • 
             <a href="${data.personal.portfolio}/${lang}">Portfolio</a> • 
             <a href="${data.personal.github}">GitHub</a>
          </div>
      </div>
      <div class="header-photo">
          <div class="profile-photo-div" role="img" aria-label="Profile photo of ${data.name}"></div>
      </div>
  </div>

  <div class="section">
    <h2>${lang === "es" ? "Resumen Profesional" : "Professional Summary"}</h2>
    <div class="entry-desc">${data.summary}</div>
  </div>

  <div class="section">
    <h2>${lang === "es" ? "Habilidades Técnicas" : "Technical Skills"}</h2>
    <div class="skills-row">
        <span class="skills-label">AI / ML:</span>
        ${data.ai.join(", ")}
    </div>
    <div class="skills-row">
        <span class="skills-label">${lang === "es" ? "Cloud" : "Cloud"}:</span>
        ${data.devops.join(", ")}
    </div>
    <div class="skills-row">
        <span class="skills-label">${lang === "es" ? "Backend" : "Backend"}:</span>
        ${data.backend.join(", ")}
    </div>
    <div class="skills-row">
        <span class="skills-label">${lang === "es" ? "Frontend" : "Frontend"}:</span>
        ${data.frontend.join(", ")}
    </div>
  </div>

  <div class="section">
    <h2>${lang === "es" ? "Experiencia" : "Experience"}</h2>
    ${data.experience.map(e => `
      <div class="entry">
        <h3 class="job-title">${e.title}</h3>
        <div class="company-name">${e.company}</div>
        <div class="entry-date">${e.duration}</div>
        <div class="entry-sub">${e.location} ${e.isRemote ? "(Remote)" : ""}</div>
        <ul style="margin: 4px 0 0 0; padding-left: 20px;">
            ${(Array.isArray(e.description) ? e.description : [e.description]).map(d => `<li>${d}</li>`).join("\n            ")}
        </ul>
        ${e.technologies && e.technologies.length > 0 ? `<div style="font-size: 0.85em; margin-top: 4px;"><strong>${lang === "es" ? "Tecnologías" : "Technologies"}:</strong> ${e.technologies.join(", ")}</div>` : ""}
      </div>
    `).join("")}
  </div>

  <div class="section">
    <h2>${lang === "es" ? "Educación" : "Education"}</h2>
    ${data.education.map(ed => `
      <div class="entry">
        <h3 class="job-title">${ed.title}</h3>
        <div class="company-name">${ed.company}</div>
        <div class="entry-date">${ed.duration}</div>
        <ul style="margin: 4px 0 0 0; padding-left: 20px;">
            ${(Array.isArray(ed.description) ? ed.description : [ed.description]).map(d => `<li>${d}</li>`).join("\n            ")}
        </ul>
      </div>
    `).join("")}
  </div>



  <div class="cta-block">
    ${data.cta} <a href="${data.personal.portfolio}/${lang}">${data.personal.portfolio.replace(/^https?:\/\//, "")}</a>
  </div>
</body>
</html>
  `;
}

async function generatePdfForLang(lang: Lang) {
  const data = extractCVData(lang);

  const profilePath = path.join(__dirname, "profile_small.png");
  let profileBase64 = "";
  try {
    const imageBuffer = fs.readFileSync(profilePath);
    profileBase64 = imageBuffer.toString('base64');
  } catch (err) {
    console.error("Warning: Could not read profile_small.png", err);
  }

  const html = harvardCvHtml(data, lang, profileBase64);
  const fileName = `inaqui-paladino-cv-${lang}.pdf`;
  const htmlPath = path.join(__dirname, `cv-temp-${lang}.html`);
  fs.writeFileSync(htmlPath, html, "utf8");

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome-stable',
    // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto("file://" + htmlPath, { waitUntil: "networkidle0" });
  await page.pdf({
    path: fileName,
    format: "A4",
    printBackground: true,
    margin: { top: "30px", bottom: "30px", left: "36px", right: "36px" }
  });
  await browser.close();
  fs.unlinkSync(htmlPath);
  console.log(`✅ PDF generado: ${fileName}`);
}

async function main() {
  await generatePdfForLang("es");
  await generatePdfForLang("en");
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
