const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
};

const searchQuotes= (arr, person) =>{
  return { quotes: arr.filter((quote)=>quote.person = person) }
};

module.exports = {
  getRandomElement, 
  searchQuotes
};
