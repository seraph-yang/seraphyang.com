import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Seraph Yang",
  DESCRIPTION: "seraphyang.com",
  AUTHOR: "Seraph Yang",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Research",
  DESCRIPTION: "Research I have conducted.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "seraph.k.yang@gmail.com",
    HREF: "mailto:seraph.k.yang@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "seraph-yang",
    HREF: "https://github.com/seraph-yang"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "seraph-yang",
    HREF: "https://www.linkedin.com/in/seraph-yang/",
  },
]

