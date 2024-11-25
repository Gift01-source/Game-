//game.js
class Game extends Phaser.scene
  {
    constructor(){
      supper('Game');
     }
    preload(){
      //Load game assets here
     }
    create(){
//Create game objects here
    }
    update(time, delta) {
      //Update game logic here
    }
  }

const config={
type=Phaser.AUTO,
  width:800,
  height:600,
  scene: [Game]
  };

const game=new
  Phaser.Game(config);
