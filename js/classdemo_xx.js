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

function showMid1(item) {
  switch (item) {
    case 'm1_55':
      p.innerHTML = `<iframe src='./exams/mid1_55/m1_55/src/p1_55.html' width='100%' height='100%' />`;
      break;
    case 'm2_55':
      p.innerHTML = `<iframe src='./exams/mid1_55/m2_55/p2_55.html' width='100%' height='100%' />`;
      break;
    case 'm3_55':
      p.innerHTML = `<iframe src='./exams/mid1_55/m3_55/p3_55.html' width="100%" height="100%" />`;
      break;
  }
}

function showQuiz1(item) {
  switch (item) {
    case 'p1_xx':
      p.innerHTML = `<iframe src='./exams/quiz1_xx/p1_xx/src/p1_xx.html' width='100%' height='100%' />`;
      break;
    case 'p2_xx':
      p.innerHTML = `<iframe src='./exams/quiz1_xx/p2_xx/src/p2_xx.html' width='100%' height='100%' />`;
      break;
    case 'p3_xx':
      p.innerHTML = `<iframe src='./exams/quiz1_xx/p3_xx/p3_xx.html' width="100%" height="100%" />`;
      break;
    case 'p4_xx':
      p.innerHTML = `<iframe src='./exams/quiz1_xx/p4_xx/p4_xx.html' width="100%" height="100%" />`;
      break;
  }
}
