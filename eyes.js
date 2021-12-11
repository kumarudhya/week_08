const balls = document.getElementsByClassName('ball');
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
//Using for loop 
  for(i in balls){
  balls[i].style.left = x;
  balls[i].style.top = y;
  balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
}; 