

const conteinerBox = document.getElementById('conteiner');

const numElconteinerBox = 100;

for(let i = 0; i <= numElconteinerBox; i++){

  const boxJ = document.createElement('div');
  boxJ.innerHTML = `${i}`
  boxJ.classList.add('box')
  conteinerBox.append(boxJ);

  if(i % 3 === 0 ) {
    boxJ.innerHTML = 'Fizz'
  }else if (i % 5 === 0) {
    boxJ.innerHTML = 'Buzz'
  }else if (i % 30 === 0 ) {
    boxJ.innerHTML = 'FizzBuzz'
  }else {
    boxJ.innerHTML = `${i}`
  };
};
  