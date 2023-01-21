import * as pages from "./pages";

export const config = {
  profile_photo:
    "https://media-exp1.licdn.com/dms/image/C4E03AQEIMEQE0WtHkg/profile-displayphoto-shrink_100_100/0/1639533909203?e=1675296000&v=beta&t=y66viCmxgpyTQlpdX1SyC57WbGsrrjeExbrbN3ZB9Gk",
  pages: [
    { path: "/", title: "Home", component: pages.Home },
    { path: "/articles", title: "Articles", component: pages.Articles },
    { path: "/projects", title: "Projects", component: pages.Projects },
    { path: "/talks", title: "Talks", component: pages.Talks },
  ],
  comments: [
    {
      photo:
        "https://media-exp1.licdn.com/dms/image/C5603AQF8Rrj4VI8O8A/profile-displayphoto-shrink_100_100/0/1656083620251?e=1675296000&v=beta&t=Bl29yS0E_BADDOTjmWFOIl5KxtCD__4comorYDR-TjI",
      name: "Clay Olsen",
      title: "CEO/Founder | Impact Suite",
      comment:
        "Tanner is incredibly talented and amazing to work with. He's a hard worker and is willing to flex when needed. Any team would be lucky to have him!",
    },
    {
      photo:
        "https://media-exp1.licdn.com/dms/image/C5603AQHkEQ8jq0v09A/profile-displayphoto-shrink_100_100/0/1523466739398?e=1675296000&v=beta&t=UuaN5-4Pm_bbJejDrPCuy3f2cISSr78JEq4as-QVpGM",
      name: "Cashe Collins",
      title: "Senior Software Engineer ",
      comment:
        "Tanner is one of the most talented developers I’ve worked with, and he’s just getting started. If you’re looking for an engineer with rediculous talent, gets along with your whole team, and can take your department to the next level you found your guy in Tanner.",
    },
    {
      photo:
        "https://media-exp1.licdn.com/dms/image/C5603AQFpCo9JlAAIMQ/profile-displayphoto-shrink_100_100/0/1542654320258?e=1675296000&v=beta&t=tIHYf5beU7DQYL7j_xAt-yP_2uShHV1mMv8G-xokGYc",
      name: "Zach Johnson",
      title: "Product Manager",
      comment:
        "Tanner Thomas is simply amazing! I love this guy. Anyone who has the need for a ridiculously talented engineer please hit him up.",
    },
  ],
  jobs: [
    {
      title: "Frontend Engineer",
      company: "National Processing",
      date: "2022 - Present",
      image:
        "https://media.licdn.com/dms/image/C560BAQEWJeoJecVJhQ/company-logo_200_200/0/1594232164361?e=2147483647&v=beta&t=Tn7FmcNrzkIcUUTO59wnyJZbgBBP3a1FRyQyhKrw91k",
    },
    {
      title: "Software Engineer",
      company: "Impact Suite",
      date: "2021 - 2023",
      image:
        "https://pbs.twimg.com/profile_images/1513622937580019722/Z3-QXBiZ_400x400.jpg",
    },
    {
      title: "Developer / Mentor",
      company: "Devmountain",
      date: "2021 - 2021",
      image:
        "https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/devmountain/original.png?1568083750",
    },
  ],
};
