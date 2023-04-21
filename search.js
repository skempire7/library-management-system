const product = [
    {
        id: 0,
        image: 'images/dsp.jpg',
        title: 'Digital Signal Processing -ECE',
        author: 'John G.Proakis and Dimitris G.Manolakis',
        year: 1996,
    },
    {
        id: 1,
        image: 'images/micro.jpg',
        title: 'Microelectronic Circuits',
        author: 'Adel S. Sedra and Kenneth C. Smith',
        year: 1998,
    },
    {
        id: 2,
        image: 'images/electronics.jpg',
        title: 'Electronic Principles',
        author: 'John G.Proakis and Dimitris G.Manolakis',
        year: 1996,
    },
    {
        id: 3,
        image: 'images/3.jpg',
        title: 'Effective Java',
        author: 'Joshua Bloch',
        year: 2001,
    },
    {
        id: 4,
        image: 'images/4.jpg',
        title: 'Structure and Interpretation of Computer Programs',
        author: 'Harold Abelson and Gerald Jay Sussman',
        year: 1985,
    },
    {
        id: 5,
        image: 'images/5.jpg',
        title: 'Analog and Digital Communication',
        author: 'Sanjay Sharma',
        year: 2009,
    },
    {
        id: 6,
        image: 'images/6.jpg',
        title: 'The Stranger',
        author: 'Albert Camus',
        year: 1942,
    },
    {
        id: 7,
        image: 'images/7.jpg',
        title: 'Linear Algebra and Its Applications',
        author: 'Gilbert Strang',
        year: 2014,
    },
    {
        id: 8,
        image: 'images/8.jpg',
        title: 'Complex Analysis',
        author: 'Joseph Bak and Donald J. Newman',
        year: 2010,
    },
    {
        id: 9,
        image: 'images/9.jpg',
        title: 'The Martian',
        author: 'Andy Weir',
        year: 2011,
    },
    {
        id: 10,
        image: 'images/10.jpg',
        title: 'The High Frontier: Human Colonies in Space',
        author: 'Gerard K. O Neill',
        year: 1976,
    },
    {
        id: 11,
        image: 'images/11.jpg',
        title: 'Probability and Random Processes',
        author: 'Geoffrey Grimmett and David Stirzaker',
        year: 2001,
    },
    {
        id: 12,
        image: 'images/12.jpg',
        title: 'The Search for Life on Mars',
        author: 'Malcolm Walter',
        year: 2002,
    },
    {
        id: 13,
        image: 'images/13.jpg',
        title: 'Field and Wave Electromagnetics',
        author: 'David K. Cheng',
        year: 1989,
    },
    {
        id: 14,
        image: 'images/14.jpg',
        title: 'The Overview Effect: Space Exploration and Human Evolution',
        author: 'Frank White ',
        year: 2014,
    },
    {
      id: 15,
      image: 'images/15.jpg',
      title: 'Harry Potter and the Sorcerer Stone',
      author: 'J.K. Rowling',
      year: 1997,
  },
  {
    id: 16,
    image: 'images/16.jpg',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    year: 1998,
},
{
  id: 17,
  image: 'images/17.jpg',
  title: 'Harry Potter and the Prisoner of Azkaban',
  author: 'J.K. Rowling',
  year: 1999,
},
{
  id: 18,
  image: 'images/18.jpg',
  title: 'Harry Potter and the Goblet of Fire',
  author: 'J.K. Rowling',
  year: 2000,
},
{
  id: 19,
  image: 'images/19.jpg',
  title: 'Harry Potter and the Order of the Phoenix',
  author: 'J.K. Rowling',
  year: 2003,
},
{
  id: 20,
  image: 'images/20.jpg',
  title: 'Harry Potter and the Half-Blood Prince',
  author: 'J.K. Rowling',
  year: 2005,
},
{
  id: 21,
  image: 'images/21.jpg',
  title: 'Harry Potter and the Deathly Hallows',
  author: 'J.K. Rowling',
  year: 2007,
},
{
  id: 22,
  image: 'images/22.jpg',
  title: 'Harry Potter and the Cursed Child',
  author: 'J.K. Rowling',
  year: 2016,
},
{
  id: 23,
  image: 'images/23.jpg',
  title: 'The Pragmatic Programmer: From Journeyman to Master',
  author: 'Andrew Hunt',
  year: 1999,
},
{
  id: 24,
  image: 'images/24.jpg',
  title: 'The Heart Invisible Furies',
  author: 'John Boyn7',
  year: 2016,
},
{
  id: 25,
  image: 'images/25.jpg',
  title: 'The Midnight Library',
  author: 'Matt Haig',
  year: 2020,
},
{
  id: 26,
  image: 'images/26.jpg',
  title: 'The Water Dancer',
  author: 'Ta-Nehisi Coates',
  year: 2019,
},
{
  id: 27,
  image: 'images/27.jpg',
  title: 'Where the Crawdads Sing',
  author: 'Delia Owens',
  year: 2018,
},
{
  id: 28,
  image: 'images/28.jpg',
  title: 'A Little Life',
  author: 'Hanya Yanagihara',
  year: 2015,
},
{
  id: 29,
  image: 'images/29.jpg',
  title: 'The Testaments',
  author: 'Margaret Atwood',
  year: 2019,
},
{
  id: 30,
  image: 'images/30.jpg',
  title: 'The Silent Patient',
  author: 'Alex Michaelides',
  year: 2019,
},
{
  id: 31,
  image: 'images/31.jpg',
  title: 'An American Marriage',
  author: 'Tayari Jones',
  year: 2018,
},
{
  id: 32,
  image: 'images/32.jpg',
  title: 'The Hunger Games',
  author: 'Suzanne Collins',
  year: 2010,
},
{
  id: 33,
  image: 'images/33.jpg',
  title: 'The Nightingale',
  author: 'Kristin Hannah',
  year: 2015,
},
{
  id: 34,
  image: 'images/34.jpg',
  title: 'The Vanishing Half',
  author: 'Brit Bennett',
  year: 2020,
},
{
  id: 35,
  image: 'images/35.jpg',
  title: 'Crime and Punishment',
  author: 'Fyodor Dostoevsky',
  year: 1866,
},
{
  id: 36,
  image: 'images/36.jpg',
  title: 'The Color Purple',
  author: 'Alice Walker',
  year: 1982,
},
{
  id: 37,
  image: 'images/37.jpg',
  title: 'The Picture of Dorian Gray',
  author: 'Oscar Wilde',
  year: 2016,
},
{
  id: 38,
  image: 'images/38.jpg',
  title: 'Jane Eyre',
  author: 'Charlotte Bronte',
  year: 1847,
},
{
  id: 39,
  image: 'images/39.jpg',
  title: 'Animal Farm',
  author: 'George Orwell',
  year: 1945,
},
{
  id: 40,
  image: 'images/40.jpg',
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  year: 1960,
},
{
  id: 41,
  image: 'images/41.jpg',
  title: 'Code Complete: A Practical Handbook of Software Construction',
  author: 'Steve McConnell',
  year: 1993,
},
];

const PAGE_SIZE = 10;
let currentPage = 1;
let filteredData = [];

const categories = [...new Set(product.map((item) => { return item }))];

document.getElementById('searchBar').addEventListener('keyup', (e) => {
  const searchData = e.target.value.toLowerCase();
  filteredData = categories.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchData)
    )
  });
  currentPage = 1;
  displayItem(getItemsForPage(currentPage));
});

document.getElementById('filterYear').addEventListener('change', (e) => {
  const year = parseInt(e.target.value);
  const author = document.getElementById('filterAuthor').value;
  filteredData = product.filter((item) => {
    return (
      (year ? item.year === year : true) &&
      (author ? item.author.toLowerCase().includes(author.toLowerCase()) : true)
    )
  });
  currentPage = 1;
  displayItem(getItemsForPage(currentPage));
});

document.getElementById('filterAuthor').addEventListener('change', (e) => {
  const author = e.target.value;
  const year = parseInt(document.getElementById('filterYear').value);
  filteredData = product.filter((item) => {
    return (
      (year ? item.year === year : true) &&
      (author ? item.author.toLowerCase().includes(author.toLowerCase()) : true)
    )
  });
  currentPage = 1;
  displayItem(getItemsForPage(currentPage));
});

const displayItem = (items) => {
  document.getElementById('root').innerHTML = items.map((item) => {
    var { image, title, author, year } = item;
    return (
      `<div class='ResultBox'>
        <div class='box'>
          <div class='img-box'>
            <img class='images' src=${image}></img>
          </div> 
          <div class='bottom'>
            <h2>${title}</h2>
            <p>${author} - ${year}</p>
            <br>
          </div>
        </div>
      </div>
      `
    )
  }).join('');

  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);
  if (totalPages > 1) {
    const pagination = document.createElement('div');
    pagination.className = 'pagination';
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.innerText = i;
      button.addEventListener('click', () => {
        currentPage = i;
        displayItem(getItemsForPage(currentPage));
      });
      pagination.appendChild(button);
    }
    document.getElementById('root').appendChild(pagination);
  }
};

const getItemsForPage = (page) => {
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  return filteredData.slice(startIndex, endIndex);
};

filteredData = product;
displayItem(getItemsForPage(currentPage));
