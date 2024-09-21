"use strict";

var first_time = true;

var Mario =
/** @class */
function () {
  function Mario(position) {
    this.position = position;
    this.mario_URLimage = 'images/mario_player.png';
    this.id = Math.random();
    this.domElement = document.createElement("div");
  }

  Mario.prototype.renderGameBord = function () {
    var gameBord = document.createElement('img');
    if (!gameBord) throw new Error("error");
    this.domElement.id = 'main';
    gameBord.id = 'gameBord';
    this.domElement.style.border = 'none;';
    this.domElement.style.width = 'auto';
    gameBord.style.backgroundImage = 'url(images/background_game.avif)';
    gameBord.style.backgroundRepeat = "no-repeat";
    gameBord.style.width = "60vw";
    gameBord.style.height = "40vh";
    gameBord.style.border = 'none';
    gameBord.style.margin = "0px";
    this.domElement.appendChild(gameBord);
    document.body.appendChild(this.domElement); // this.domElement.style.backgroundImage = 'url(images/background_game.avif)';
    // this.domElement.style.width = "50%";
    // this.domElement.style.height = "50%";
    // this.domElement.innerHTML = "assdad"
    // gameBord.style.backgroundImage = 'url(images/background_game.avif)'
    // gameBord.style.width = "70vw";
    // gameBord.style.height = "70vh";
    // gameBord.style.backgroundRepeat = "no-repeat";
  };

  Mario.prototype.renderMario = function (position_mario) {
    if (!this.marioelement) this.marioelement = document.createElement("img");
    this.marioelement.src = this.mario_URLimage;
    this.marioelement.id = String(this.id);
    this.marioelement.style.width = "3rem";
    this.marioelement.style.height = "3rem";
    this.marioelement.style.position = "absolute";
    this.marioelement.style.left = position_mario.x + "px";
    this.marioelement.style.top = position_mario.y + "px";
    this.domElement.appendChild(this.marioelement);
  };

  Mario.prototype.moveMario = function (event) {
    if (first_time) {
      this.position.x = 0;
      this.position.y = 335.5;
      first_time = false;
    }

    switch (event.key) {
      case 'ArrowUp':
        // this.position.y -= 7;
        // this.marioelement.style.transform = "rotate(-90deg)";
        this.renderMario(this.position);
        var marioElement_1 = this.domElement.querySelector("img");
        if (!marioElement_1) throw console.error();
        var jumpHeight = -100; // גובה הקפיצה בפיקסלים

        var originalTop_1 = parseInt(window.getComputedStyle(marioElement_1).top) || 0;
        marioElement_1.style.transition = "top 0.9s"; // זמן הקפיצה

        marioElement_1.style.position = "absolute"; // קבע את המיקום לאבסולוטי
        // קפיצה למעלה

        marioElement_1.style.top = originalTop_1 - jumpHeight + "px"; // החזרת הדמות למקום המקורי לאחר הקפיצה

        setTimeout(function () {
          marioElement_1.style.top = originalTop_1 + 10 + "px";
        }, 500); // זמן חזרה

        break;

      case 'ArrowDown':
        this.position.y += 7;
        this.marioelement.style.transform = "rotate(90deg)";
        this.renderMario(this.position);
        break;

      case 'ArrowLeft':
        this.position.x -= 7;
        this.marioelement.style.transform = "scaleX(-1)";
        this.renderMario(this.position);
        break;

      case 'ArrowRight':
        this.position.x += 7;
        this.marioelement.style.transform = "rotate(0deg)";
        this.renderMario(this.position);
        break;

      default:
        break;
    }
  };

  Mario.prototype.move_right = function () {
    this.position.x += 100;
    this.renderMario(this.position);
  };

  return Mario;
}();

function main() {
  var mario = new Mario({
    x: 100,
    y: 100
  });
  mario.renderGameBord();
  mario.renderMario({
    x: 1,
    y: 335.5
  });
  document.addEventListener('keydown', function (event) {
    mario.moveMario(event);
  });
}