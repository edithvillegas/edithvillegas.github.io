
const currentUrl = window.location.href;
const siteUrl = "https://edithvillegas.github.io";
let updatedUrl = currentUrl.replace("https://edithvillegas.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("fr-fr".length > 0) {
  updatedUrl = updatedUrl.replace("/fr-fr", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-à-propos",
    title: "À propos",
    section: "menu de navigation",
    handler: () => {
      window.location.href = "/fr-fr/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications scientifiques dans leur langue originale.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-fr/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr-fr/cv/";
          },
        },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "actualités",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "actualités",handler: () => {
              window.location.href = "/fr-fr/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "actualités",},{
        id: 'social-github',
        title: 'GitHub',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://github.com/edithvillegas", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7338-2068", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=QPDv7y0AAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://www.ictp.it/member/edith-natalia-villegas-garcia", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'langues',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-es-la',
          title: 'es-la',
          section: 'langues',
          handler: () => {
            window.location.href = "/es-la" + updatedUrl;
          },
        },{
          id: 'lang-it-it',
          title: 'it-it',
          section: 'langues',
          handler: () => {
            window.location.href = "/it-it" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'changer le thème en clair',
      description: 'changer le thème du site en clair',
      section: 'thème',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'changer le thème en sombre',
      description: 'changer le thème du site en sombre',
      section: 'thème',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'utiliser le thème par défaut du système',
      description: 'changer le thème du site selon le système par défaut',
      section: 'thème',
      handler: () => {
        setThemeSetting("system");
      },
    },];
