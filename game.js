window.onload = function () {
    let labyrinth = new Labyrinth();
    labyrinth.printConsole();
    labyrinth.printDisplay('map');
    document.onkeydown = function (event) {
        var char = event.key;
        if (char == 'a') {
            if (labyrinth.playerPos.x - 1 >= 0 && labyrinth.map[labyrinth.playerPos.y][labyrinth.playerPos.x - 1] == 0) {
                labyrinth.playerPos.x -= 1;
                labyrinth.player.style.left = (labyrinth.playerPos.x * CELL_SIZE).toString() + 'px';
            }
        } else if (char == 's') {
            if (labyrinth.playerPos.y + 1 < labyrinth.height  && labyrinth.map[labyrinth.playerPos.y+1][labyrinth.playerPos.x] == 0) {
                labyrinth.playerPos.y += 1;
                labyrinth.player.style.top = (labyrinth.playerPos.y * CELL_SIZE).toString() + 'px';
            }
        } else if (char == 'd') {
            if (labyrinth.playerPos.x + 1 < labyrinth.width && labyrinth.map[labyrinth.playerPos.y][labyrinth.playerPos.x + 1] == 0) {
                labyrinth.playerPos.x += 1;
                labyrinth.player.style.left = (labyrinth.playerPos.x * CELL_SIZE).toString() + 'px';
            }
        } else if (char == 'w') {
            if (labyrinth.playerPos.y - 1 >= 0  && labyrinth.map[labyrinth.playerPos.y-1][labyrinth.playerPos.x] == 0) {
                labyrinth.playerPos.y -= 1;
                labyrinth.player.style.top = (labyrinth.playerPos.y * CELL_SIZE).toString() + 'px';
            }
        }

        if(labyrinth.playerPos.x == labyrinth.end.x && labyrinth.playerPos.y == labyrinth.end.y){
            alert("Congratulations!");
        }
    }
}