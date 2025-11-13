import fs from "fs";
import path from "path";
import projectsData from "../app/data/projectsContent.js";

const outDir = path.resolve("./content/projects");
fs.mkdirSync(outDir, { recursive: true });

projectsData.projects.forEach((project) => {
  const fileName = project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const filePath = path.join(outDir, `${fileName}.md`);

  const yamlFrontmatter = [
    "---",
    `title: "${project.title}"`,
    project.description
      ? `description: "${project.description.replace(/"/g, "'")}"` 
      : null,
    project.thumbnail ? `thumbnail: "${project.thumbnail}"` : null,
    project.siteLink ? `siteLink: "${project.siteLink}"` : null,
    project.repoLink ? `repoLink: "${project.repoLink}"` : null,
    project.bedges ? `bedges:\n${project.bedges.map(b => `  - "${b}"`).join("\n")}` : null,
    project.features
      ? `features:\n${project.features.map(f => `  - "${f}"`).join("\n")}`
      : null,
    "---",
    "",
    "## Dettagli",
    "",
    project.description || "",
  ]
    .filter(Boolean)
    .join("\n");

  fs.writeFileSync(filePath, yamlFrontmatter, "utf-8");
  console.log(`✅ Creato ${fileName}.md`);
});