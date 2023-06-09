const teams = [
  {
    id: 1,
    name: "Elizabeth Graham",
    post: "CEO/Co-Founder",
    img: "../img/person_1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vitae aut minima nihil sit distinctio recusandae doloribus
        ut fugit officia voluptate soluta`,
  },
  {
    id: 2,
    name: "Jennifer Greive",
    post: "Co-Founder",
    img: "../img/person_2.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vitae aut minima nihil sit distinctio recusandae doloribus
        ut fugit officia voluptate soluta`,
  },
  {
    id: 3,
    name: "Patrick Marx",
    post: "Marketing",
    img: "../img/person_3.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vitae aut minima nihil sit distinctio recusandae doloribus
        ut fugit officia voluptate soluta`,
  },
  {
    id: 4,
    name: "Mike Coolbert",
    post: "Sales Manager",
    img: "../img/person_4.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vitae aut minima nihil sit distinctio recusandae doloribus
        ut fugit officia voluptate soluta`,
  },
];

export const getTeams = () =>
  new Promise((resolve) => {
    resolve(teams);
  });
