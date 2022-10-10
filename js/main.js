Vue.createApp({
  data() {
    return {
      data_artikel: [],
      bacaan: null,

      judul: "Ervina ",
      navbar: {
        a: "Home",
        b: "About",
        c: "Blog",
        d: "Portofolio",
      },
      nama: "Ervina Nurfa Hidayah ",
      keterangan: "Back-end Development",

      sosial_media: [
        {
          nama: " ervinanh__",
          link: "https://www.instagram.com/ervinanh__/",
          gmb: "fa fa-instagram",
        },
        {
          nama: " ervinanh",
          link: "https://github.com/ervinanh",
          gmb: "fa fa-github",
        },
      ],

      tabel: {
        nama: "SKILLS",
        n: "No.",
        judul_tabel: ["Skill", "Level"],
        data: [
          {
            nama: "HTML",
            skill: "intermediatte",
          },
          {
            nama: "CSS",
            skill: "Advance",
          },
          {
            nama: "Javascript",
            skill: "Advance",
          },
          {
            nama: "Java",
            skill: "intermediatte",
          },
          {
            nama: "Python",
            skill: "Intermediatte",
          },
          {
            nama: "Microsoft Word",
            skill: "Advance",
          },
        ],
      },
      ab: "About Me",
      deskripsi_1: "Hallo, My name is Ervina Nufa Hidayah, commonly called Ervin. I am currently studying S1 at STMIK Bandung university with information systems study program . I am a student of the class of 2019. And I am currently learning Web Deployment in skilvul.",

      portfolio: {
        judul: "Portofolio",
        data: [
          {
            nama: "HTML",
            skill: "intermediatte",
            src: "img/portofolio/html.png",
          },
          {
            nama: "CSS",
            skill: "Advance",
            src: "img/portofolio/css.png",
          },
          {
            nama: "Python",
            skill: "Intermediatte",
            src: "img/portofolio/python.png",
          },
          {
            nama: "Figma",
            skill: "Advance",
            src: "img/portofolio/figma.jpg",
          },
          {
            nama: "SQLyog",
            skill: "Advance",
            src: "img/portofolio/sqlyog.png",
          },
          {
            nama: "Kotlin",
            skill: "Advance",
            src: "img/portofolio/kotlin.jpg",
          },
          {
            nama: "java",
            skill: "Advance",
            src: "img/portofolio/java.jpg",
          }
        ],
      },
    
    };
  },
  
}).mount("#app");
