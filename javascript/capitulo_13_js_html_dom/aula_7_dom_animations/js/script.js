function mover() {
  let id = null;
  let ex2 = document.getElementById('ex2');
  let poss = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (poss == 200) {
      clearInterval(id);
    } else {
      poss++;
      ex2.style.top = poss + 'px';
      ex2.style.left = poss + 'px';
    }
  }
}