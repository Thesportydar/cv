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
    fechaNacimiento: string;
    dni: string;
    edad: number;
  };
  backend: string[];
  frontend: string[];
  devops: string[];
  soft: string[];
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
    frontend: skills.frontend,
    devops: skills.devops,
    soft: skills.soft,
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
        display: flex;
        gap: 30px;
        margin-bottom: 25px;
        border-bottom: 2px solid #000;
        padding-bottom: 20px;
    }
    .header-info {
        flex: 1;
    }
    .header-photo {
        flex-shrink: 0;
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
    
    .entry-head { 
        display: flex; 
        justify-content: space-between; 
        align-items: flex-start; /* Changed from baseline to handle wrapping better */
    }
    
    /* Semantic Job Title */
    h3 {
        font-size: 1em;
        font-weight: bold;
        margin: 0;
        color: #000;
        /* Allow title to wrap if needed, taking available space */
        flex: 1; 
        padding-right: 15px; /* Add some space between title and date */
    }
    
    .entry-date { 
        font-weight: bold; 
        font-size: 1em; 
        white-space: nowrap; /* Prevent date from wrapping */
        flex-shrink: 0; /* Ensure date doesn't shrink */
        text-align: right;
    } /* Visual match for the date/duration */

    .entry-sub { font-style: italic; color: #333; font-size: 0.95em; margin-bottom: 4px; margin-top: 2px;}
    .entry-desc { font-size: 0.95em; text-align: justify; }
    
    ul.tags { margin: 5px 0 0 0; padding: 0; list-style: none; }
    ul.tags li { 
        display: inline-block; 
        font-size: 0.8em; 
        border: 1px solid #333; 
        padding: 1px 5px; 
        border-radius: 3px; 
        margin-right: 4px; 
        margin-bottom: 2px;
    }

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
    <h2>${lang === "es" ? "Perfil" : "Profile"}</h2>
    <div class="entry-desc">${data.summary}</div>
  </div>

  <div class="section">
    <h2>${lang === "es" ? "Habilidades" : "Skills"}</h2>
    <div class="skills-row">
        <span class="skills-label">DevOps:</span>
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
    <div class="skills-row">
        <span class="skills-label">${lang === "es" ? "Blandas" : "Soft Skills"}:</span>
        ${data.soft.join(", ")}
    </div>
  </div>

  <div class="section">
    <h2>${lang === "es" ? "Experiencia" : "Experience"}</h2>
    ${data.experience.map(e => `
      <div class="entry">
        <div class="entry-head">
            <h3>${e.title}, ${e.company}</h3>
            <span class="entry-date">${e.duration}</span>
        </div>
        <div class="entry-sub">${e.location} ${e.isRemote ? "(Remote)" : ""}</div>
        <div class="entry-desc">
            ${Array.isArray(e.description) ? e.description.join(" ") : e.description}
        </div>
        ${e.technologies && e.technologies.length > 0 ? `<ul class="tags">${e.technologies.map(t => `<li>${t}</li>`).join("")}</ul>` : ""}
      </div>
    `).join("")}
  </div>

  <div class="section">
    <h2>${lang === "es" ? "Educación" : "Education"}</h2>
    ${data.education.map(ed => `
      <div class="entry">
        <div class="entry-head">
            <h3>${ed.title}, ${ed.company}</h3>
            <span class="entry-date">${ed.duration}</span>
        </div>
        <div class="entry-desc">
            ${Array.isArray(ed.description)
      ? `<ul style="margin: 0; padding-left: 20px;">${ed.description.map(d => `<li>${d}</li>`).join("")}</ul>`
      : ed.description}
        </div>
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

  // Read and convert profile image to base64
  const profilePath = path.join(__dirname, "profile.png");
  let profileBase64 = "";
  try {
    const imageBuffer = fs.readFileSync(profilePath);
    profileBase64 = imageBuffer.toString('base64');
  } catch (err) {
    console.error("Warning: Could not read profile.png", err);
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
