const canvas =  document.getElementById('tetris');
const context = canvas.getContext('2d');


context.scale(20,20);

const matrix = [
  [0,0,0],
  [1,1,1],
  [0,1,0],
];

function drawMatrix(matrix, offset) {
  matrix.forEach((row, y) =>{
    row.forEach((value, x)=> {
      if(value !== 0 ) {
        context.fillStyle =  'rgb(208, 72, 169)';
        context.fillRect(x + offset.x,
                         y + offset.y,
                         1, 1);
      }
    });
  });
} //drawMatrix

const player = {
    pos: {x: 5, y: 5},
    matrix: matrix,
};

function draw() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawMatrix(player.matrix, player.pos);
}
// !!!!!!!!!!!!!  остановился на 9:35 https://www.youtube.com/watch?v=H2aW5V46khA
function update(time = 0) {
  draw();
  requestAnimationFrame(update);
}
update();
