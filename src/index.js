import { promises as fs } from "fs";
import { PLACEHOLDERS } from "./config/index.js";
import socials from "../src/components/socials.js";
import header from "../src/components/header.js";
import languages from "../src/components/languages.js";

(async () => {
  const [template] = await Promise.all([
    fs.readFile("./src/README.md.tpl", { encoding: "utf-8" }),
  ]);

  const newMarkdown = template
    .replace(PLACEHOLDERS.SOCIALS, socials)
    .replace(PLACEHOLDERS.HEADER, header)
    .replace(PLACEHOLDERS.LANGUAGES, languages);
  await fs.writeFile("README.md", newMarkdown);
})();
