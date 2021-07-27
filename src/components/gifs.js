const items = [
  {
    name: "catRainbow",
    link: "https://media.giphy.com/media/mTs11L9uuyGiI/giphy.gif",
    size: 80,
  },
  {
    name: "catRainbow2",
    link: "https://media.giphy.com/media/12PXNbcHW8C9Bm/giphy.gif",
    size: 80,
  },
  {
    name: "dev",
    link: "https://media.giphy.com/media/H83F4AfL798AmtKXIL/giphy.gif",
    size: 80,
  },
  {
    name: "computer",
    link: "https://media.giphy.com/media/ihZH2vOfn02gs9i1U9/giphy.gif",
    size: 80,
  },
  {
    name: "github",
    link: "https://media.giphy.com/media/KzJkzjggfGN5Py6nkT/giphy.gif",
    size: 80,
  },
];

const gifs = items.map((item) => ({
  name: item.name,
  gif: `<img src=${item.link} alt="${item.name}" width="${item.size}" />`,
}));

export default gifs;
