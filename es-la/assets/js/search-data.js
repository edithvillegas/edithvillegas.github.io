
const currentUrl = window.location.href;
const siteUrl = "https://edithvillegas.github.io";
let updatedUrl = currentUrl.replace("https://edithvillegas.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("es-la".length > 0) {
  updatedUrl = updatedUrl.replace("/es-la", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-intro",
    title: "Intro",
    section: "Menú de navegación",
    handler: () => {
      window.location.href = "/es-la/";
    },
  },{id: "nav-publicaciones",
          title: "Publicaciones",
          description: "Publicaciones cientificas en su idioma original.",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/es-la/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/es-la/cv/";
          },
        },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://github.com/edithvillegas", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7338-2068", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=QPDv7y0AAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://www.ictp.it/member/edith-natalia-villegas-garcia", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Idiomas',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-fr-fr',
          title: 'fr-fr',
          section: 'Idiomas',
          handler: () => {
            window.location.href = "/fr-fr" + updatedUrl;
          },
        },{
          id: 'lang-it-it',
          title: 'it-it',
          section: 'Idiomas',
          handler: () => {
            window.location.href = "/it-it" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Cambiar tema a claro',
      description: 'Cambiar el tema del sitio a claro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Cambiar tema a oscuro',
      description: 'Cambiar el tema del sitio a oscuro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Usar el tema predeterminado del sistema',
      description: 'Cambiar el tema del sitio al predeterminado del sistema',
      section: 'Tema',
      handler: () => {
        setThemeSetting("system");
      },
    },];
