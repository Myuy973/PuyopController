
window.addEventListener("gamepadconnected", function(e) {
    var gamepad = navigator.getGamepads()[e.gamepad.index];
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
      gamepad.index, gamepad.id,
      gamepad.buttons.length, gamepad.axes.length);
  });

  
  
  
  
  var presstype = false;
  function gameLoop() {
    var gamepad = navigator.getGamepads()[0];
    
    if (gamepad) {
      var data = gamepad.buttons;
       switch (true) {

            // ぷよ回転
            case data[0].pressed && !presstype:
                // console.log("0 press");

                keypress_action({key: 'k',keyCode: 75});
                break;
            case data[1].pressed && !presstype:
                // console.log("1 press");

                keypress_action({key: 'l',keyCode: 76});
                break;

            
            // 十字ボタン
            case data[14].pressed && !presstype:
                // console.log("14 press left");

                keypress_action({key: 'v',keyCode: 86});
                break;
            case data[13].pressed && !presstype:
                // console.log("13 press bottom");

                keypress_action({key: 'b',keyCode: 66});
                break;
            case data[15].pressed && !presstype:
                // console.log("15 press right");

                keypress_action({key: 'n',keyCode: 78});
                break;

            
            //戻る、進む
            case data[4].pressed && !presstype:
                // console.log("4 press");

                keypress_action({key: 'g',keyCode: 71});
                break;
            case data[5].pressed && !presstype:
                // console.log("5 press");

                keypress_action({key: 'h',keyCode: 72});
                break;

            
            // 開始、リトライ
            case data[9].pressed && !presstype:
                // console.log("9 press");

                keypress_action({key: 's',keyCode: 83});
                break;

            case data[8].pressed && !presstype:
                // console.log("8 press");

                keypress_action({key: 'r',keyCode: 82});
                break;

            
            // エディター、とこぷよ
            case data[10].pressed && !presstype:

                document.getElementById("editor_button").click();
                break;

            case data[11].pressed && !presstype:

                document.getElementById("tokopuyo_button").click();
                break;

            case !data[0].pressed && !data[1].pressed && !data[14].pressed && !data[13].pressed && 
                 !data[15].pressed && !data[4].pressed && !data[5].pressed && !data[9].pressed && 
                 !data[8].pressed && !data[10].pressed && !data[11].pressed:
                // console.log("repress");
                presstype = false;
                break;
       }
      
    }
    requestAnimationFrame(gameLoop);
  }
  
  requestAnimationFrame(gameLoop);
  


  function keypress_action(config) {

    var keydownEvent = new KeyboardEvent('keydown', config);      
    document.dispatchEvent(keydownEvent);
    
    presstype = true;

  }
