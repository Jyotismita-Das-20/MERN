const outer= document.querySelector('.outer');
const inner= document.querySelector('.inner');

outer.addEventListener('click', () => {
  console.log('outer');
});

inner.addEventListener('click', () => {
  console.log('inner');
});