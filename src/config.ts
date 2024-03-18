import icon from "../src/assets/icon.png";

interface IConfig {
  me: {
    name: string;
    job: string;
    school: string;
    started: string;
    stack: string;
    hobby: string;
  };
  socials: {
    [name: string]: string;
  };
  projects: {
    [name: string]: {
      url: string;
      tags: string[];
    };
  };
  og: {
    image: string;
  };
}

export const config: IConfig = {
  me: {
    name: "Seraph Yang",
    job: "junior",
    school: "Valley Christian",
    started: "2015-01-01",
    stack: "Scratch",
    hobby: "draw and sleep",
  },
  socials: {
    instagram: "https://instagram.com/seraphyangg",
    github: "https://github.com/seraph-yang",
  },
  projects: {
    "NASDAQ Web Scraper": {
      url: "https://github.com/seraph-yang/nasdaq-web-scraper",
      tags: ["python", "ai", "stocks", "web scraping"],
    },
    "y86 assembler": {
      url: "https://github.com/seraph-yang/y86-assembler",
      tags: ["java", "assembly", "computer systems"],
    },
  },
  og: {
    image: icon.src,
  },
};
