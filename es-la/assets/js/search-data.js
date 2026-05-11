
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
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Publicaciones",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Publicaciones",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "Noticias",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "Noticias",handler: () => {
              window.location.href = "/es-la/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "Noticias",},{
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
