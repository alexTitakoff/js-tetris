//https://www.youtube.com/watch?v=H2aW5V46khA
const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
context.scale(20, 20);
const matrix = [
	[0, 0, 0],
	[1, 1, 1],
	[0, 1, 0],
];

function drawMatrix(matrix, offset) {
	matrix.forEach((row, y) => {
		row.forEach((value, x) => {
			if (value !== 0) {
				context.fillStyle = 'rgb(208, 72, 169)';
				context.fillRect(x + offset.x, y + offset.y, 1, 1);
			}
		});
	});
} //drawMatrix


function collide(arena, player) {
  const[m,o] = [player.matrix, player.pos];
  for(let y = 0; y < m.length; ++y) {
    for(let x = 0; x < m[y].length; ++x){
      if(m[y][x] !== 0 &&
        arena[y + o.y] &&
        // !!!!!!!!!!!!!!!!!!!!!!!!!! 20:24!!!!!!!!!!!!!!!!!!!!
      )
    }
  }
}


function createMatrix(w, h) {
	const matrix = [];
	while (h--) {
		matrix.push(new Array(w).fill(0));
	}
	return matrix;
}

// функция заполнения
function merge(arena, player) {
  player.matrix.forEach((row,y)=>{
    row.forEach((value, x) => {
      if(value !== 0 ) {
        arena[y + player.pos.y][x + player.pos.x] = value;
      }
    });
  });
}

function draw() {
	context.fillStyle = '#000';
	context.fillRect(0, 0, canvas.width, canvas.height);
	drawMatrix(player.matrix, player.pos);
}

function playerDrop() {
	player.pos.y++;
	dropCounter = 0;
}
let dropCounter = 0;
let dropInterval = 500;
let lastTime = 0;

function update(time = 0) {
	const deltaTime = time - lastTime;
	lastTime = time;
	dropCounter += deltaTime;
	if (dropCounter > dropInterval) {
		player.pos.y++;
		dropCounter = 0;
	}
	draw();
	requestAnimationFrame(update);
}

const arena = createMatrix(12,20);

const player = {
	pos: {
		x: 5,
		y: 5
	},
	matrix: matrix
};


document.addEventListener('keydown', event => {
	if (event.keyCode === 37) {
		player.pos.x--;
	} else if (event.keyCode === 39) {
		player.pos.x++;
	} else if (event.keyCode === 40) {
		playerDrop();
	}
})
update();
