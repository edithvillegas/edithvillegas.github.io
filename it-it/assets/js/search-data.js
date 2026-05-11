
const currentUrl = window.location.href;
const siteUrl = "https://edithvillegas.github.io";
let updatedUrl = currentUrl.replace("https://edithvillegas.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("it-it".length > 0) {
  updatedUrl = updatedUrl.replace("/it-it", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-info",
    title: "Info",
    section: "Menu di navigazione",
    handler: () => {
      window.location.href = "/it-it/";
    },
  },{id: "nav-pubblicazioni",
          title: "Pubblicazioni",
          description: "Pubblicazioni scientifiche nella loro lingua originale.",
          section: "Menu di navigazione",
          handler: () => {
            window.location.href = "/it-it/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Menu di navigazione",
          handler: () => {
            window.location.href = "/it-it/cv/";
          },
        },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "Notizie",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "Notizie",handler: () => {
              window.location.href = "/it-it/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "Notizie",},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Social',
        handler: () => {
          window.open("https://github.com/edithvillegas", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Social',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7338-2068", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Social',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=QPDv7y0AAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Social',
        handler: () => {
          window.open("https://www.ictp.it/member/edith-natalia-villegas-garcia", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Lingue',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-es-la',
          title: 'es-la',
          section: 'Lingue',
          handler: () => {
            window.location.href = "/es-la" + updatedUrl;
          },
        },{
          id: 'lang-fr-fr',
          title: 'fr-fr',
          section: 'Lingue',
          handler: () => {
            window.location.href = "/fr-fr" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Attiva tema chiaro',
      description: 'Cambia il tema del sito in chiaro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Attiva tema scuro',
      description: 'Cambia il tema del sito in scuro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Usa tema di sistema',
      description: 'Usa il tema predefinito del sistema',
      section: 'Tema',
      handler: () => {
        setThemeSetting("system");
      },
    },];
