const p = document.querySelector('.show-classdemo');
console.log('p', p);

function showClassDemo(item) {
  switch (item) {
    case 'w01_dom_xx':
      p.innerHTML = `<iframe src='./demo/w01_dom_55/index.html' width='100%' height='100%' />`;
      break;
    case 'w02_dom_xx':
      p.innerHTML = `<iframe src='./demo/w02_dom_55/index.html' width='100%' height='100%' />`;
      break;
    case 'w03_tictactoe_xx':
      p.innerHTML = `<iframe src='./demo/w03_tictactoe_55/tictactoe_55.html' width="100%" height="100%" />`;
      break;
    case 'w03_p1_xx':
      p.innerHTML = `<iframe src='./demo/w03_basics_55/p1_00/p1_55.html' width="100%" height="100%" />`;
      break;
    case 'w04_p2_xx':
      p.innerHTML = `<iframe src='./demo/w04_basics_55/p2_55/p2_55.html' width="100%" height="100%" />`;
      break;
  }
}
