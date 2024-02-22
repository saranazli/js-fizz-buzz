

const conteinerBox = document.getElementById('conteiner');

const numElconteinerBox = 100;

for(let i = 1; i <= numElconteinerBox; i++){

  const boxJ = document.createElement('div');
  boxJ.innerHTML = `${i}`
  boxJ.classList.add('box')
  conteinerBox.append(boxJ);

  if(i % 3 === 0 && i % 5 === 0) {
    boxJ.innerHTML = 'FizzBuzz'
    boxJ.classList = 'fucsia'
  }else if (i % 5 === 0) {
    boxJ.innerHTML = 'Buzz'
    boxJ.classList = 'yellow'
  }else if (i % 3 === 0 ) {
    boxJ.innerHTML = 'Fizz'
    boxJ.classList = 'white'
  }else {
    boxJ.innerHTML = `${i}`
  };
};
  