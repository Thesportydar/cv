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
    telefono: string;
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
  collaboration: string[];
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
    collaboration: skills.collaboration,
    soft: skills.soft,
    cta: skills.cta
  };
}

function harvardCvHtml(data: CVData, lang: Lang): string {
  return `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <title>CV ${data.name}</title>
  <style>
    body { font-family: 'Georgia', serif; margin: 40px; color: #222; }
    h1 { font-size: 2.3em; margin-bottom: 0; }
    .role { color: #c0392b; font-size: 1.1em; margin-bottom: 14px; }
    .contact-block { font-size: 0.98em; margin-bottom: 14px; }
    .contact-block span { display: inline-block; margin-right: 18px; }
    .section { margin-top: 28px; }
    .section-title { border-bottom: 2px solid #c0392b; font-size: 1.08em; letter-spacing: 0.04em; margin-bottom: 8px; font-weight: bold;}
    .entry { margin-bottom: 16px; }
    .entry-title { font-weight: bold; }
    .entry-meta { font-size: 0.97em; color: #888; margin-bottom: 2px; }
    .entry-desc { margin: 3px 0 0 0; }
    ul.tags { list-style: none; padding: 0; margin: 0; }
    ul.tags li { display: inline-block; background: #eaeaea; color: #c0392b; border-radius: 6px; padding: 2px 8px; margin-right: 4px; font-size: 0.91em; }
    .skills-block { margin-top: 28px; }
    .skills-title { font-weight: bold; color: #c0392b; margin-bottom: 4px; }
    .skills-list { margin: 0 0 10px 0; padding: 0; list-style: none; }
    .skills-list li { display: inline-block; margin-right: 12px; font-size: 0.99em; }
    a { color: #2c3e50; text-decoration: underline; }
    .cta-block { margin-top: 32px; font-size: 1.05em; border-top: 1px solid #c0392b; padding-top: 16px; }
  </style>
</head>
<body>
  <h1>${data.name}</h1>
  <div class="role">${data.role}</div>
  <div class="contact-block">
    <span><strong>${lang === "es" ? "Email" : "Email"}:</strong> ${data.personal.email}</span>
    <span><strong>${lang === "es" ? "Teléfono" : "Phone"}:</strong> ${data.personal.telefono}</span>
    <span><strong>LinkedIn:</strong> <a href="${data.personal.linkedin}">${data.personal.linkedin.replace(/^https?:\/\//, "")}</a></span>
    <span><strong>Portfolio:</strong> <a href="${data.personal.portfolio}/${lang}">${data.personal.portfolio.replace(/^https?:\/\//, "")}</a></span>
    <br>
    <span><strong>${lang === "es" ? "Ciudad" : "City"}:</strong> ${data.personal.ciudad}</span>
    <span><strong>${lang === "es" ? "Edad" : "Age"}:</strong> ${data.personal.edad}</span>
  </div>
  <div class="section">
    <div class="section-title">${lang === "es" ? "Perfil" : "Profile"}</div>
    <div>${data.summary}</div>
  </div>
  <div class="section">
    <div class="section-title">${lang === "es" ? "Experiencia Profesional" : "Experience"}</div>
    ${data.experience.map(e => `
      <div class="entry">
        <div class="entry-title">${e.title} <span class="entry-meta">@ ${e.company} (${e.location}) • ${e.duration}${e.isRemote ? " • Remote" : ""}</span></div>
        <div class="entry-desc">${Array.isArray(e.description) ? e.description.join(" ") : e.description}</div>
        ${e.technologies && e.technologies.length > 0 ? `<ul class="tags">${e.technologies.map(t => `<li>${t}</li>`).join("")}</ul>` : ""}
      </div>
    `).join("")}
  </div>
  <div class="section">
    <div class="section-title">${lang === "es" ? "Educación" : "Education"}</div>
    ${data.education.map(ed => `
      <div class="entry">
        <div class="entry-title">${ed.title} <span class="entry-meta">@ ${ed.company} (${ed.location}) • ${ed.duration}${ed.isRemote ? " • Remote" : ""}</span></div>
        <div class="entry-desc">${Array.isArray(ed.description) ? ed.description.join(" ") : ed.description}</div>
      </div>
    `).join("")}
  </div>
  <div class="skills-block">
    <div class="skills-title">${lang === "es" ? "Backend" : "Backend"}:</div>
    <ul class="skills-list">
      ${data.backend.map(skill => `<li>${skill}</li>`).join("")}
    </ul>
    <div class="skills-title">${lang === "es" ? "Frontend" : "Frontend"}:</div>
    <ul class="skills-list">
      ${data.frontend.map(skill => `<li>${skill}</li>`).join("")}
    </ul>
    <div class="skills-title">DevOps:</div>
    <ul class="skills-list">
      ${data.devops.map(skill => `<li>${skill}</li>`).join("")}
    </ul>
    <div class="skills-title">${lang === "es" ? "Colaboración" : "Collaboration"}:</div>
    <ul class="skills-list">
      ${data.collaboration.map(skill => `<li>${skill}</li>`).join("")}
    </ul>
    <div class="skills-title">${lang === "es" ? "Habilidades Blandas" : "Soft Skills"}:</div>
    <ul class="skills-list">
      ${data.soft.map(skill => `<li>${skill}</li>`).join("")}
    </ul>
  </div>
  <div class="cta-block">
    <span>🔗 ${data.cta} <a href="${data.personal.portfolio}/${lang}">${data.personal.portfolio.replace(/^https?:\/\//, "")}</a></span>
  </div>
</body>
</html>
  `;
}

async function generatePdfForLang(lang: Lang) {
  const data = extractCVData(lang);
  const html = harvardCvHtml(data, lang);
  const fileName = `inaqui-paladino-cv-${lang}.pdf`;
  const htmlPath = path.join(__dirname, `cv-temp-${lang}.html`);
  fs.writeFileSync(htmlPath, html, "utf8");

  const browser = await puppeteer.launch();
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
