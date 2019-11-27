//const btn = document.querySelector('button');

//btn.addEventListener('click', function() {
   // var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
   // document.body.style.backgroundColor = rndCol;
  //});
const input = document.getElementById('infor');
  input.onblur = () =>{
    if (!input.value.includes('@')) { // not email
      input.classList.add('invalid');
      values.innerHTML = 'Please enter a valid email.'
    }
  };