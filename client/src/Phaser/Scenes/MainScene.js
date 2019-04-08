import * as Phaser from 'phaser';

class MainScene extends Phaser.Scene {
    constructor (test) {
        super({
            key: 'MainScene'
        });

        window.mainScene = this;

        this.posSendTimer = 0;

        this.characters = {}; // should contain refs to all nearby user controlled characters

        this.myCharacter = null;

        this.NPCs = {}; // should contain refs to all nearby npcs

        this.projectiles = {};

        this.playerToMove = {
            x: 0,
            y: 0
        };
    }

    // todo: clean this all up

    preload () {
    /*
        this.load.image(
            "tiles",
            "../assets/tilesets/tiles-extruded-name.png"
        );

        this.load.tilemapTiledJSON(
            "map",
            "../assets/tilemaps/tilemapname.json"
        );
        */
        /*
        this.load.spritesheet('warrior', 'assets/sprites/warrior_test.png',
            { frameWidth: 32, frameHeight: 32 });
        */
        /*
        this.load.scenePlugin('animatedTiles', AnimatedTiles, 'animatedTiles', 'animatedTiles');
        */

        this.load.spritesheet('player', './assets/initialspritesheet.png', {
            frameWidth: 17,
            frameHeight: 19
        });

        console.log('in mainscene');
    }
    /*
    resize (width, height) {
        if (width === undefined) {
            width = this.sys.game.config.width;
        }
        if (height === undefined) {
            height = this.sys.game.config.height;
        }

        this.cameras.resize(width, height);
        console.log('resized!');
    //this.cameras.main.setViewport(0, 0, width, height);
    }
    */
    create () {
        this.player = this.add.sprite(
            window.innerWidth / 2,
            window.innerHeight / 2,
            'player'
        );

        this.scale.on('resize', (gameSize, baseSize, displaySize, resolution) => {
            //console.log("resize called");
            this.cameras.main.setViewport(0, 0, baseSize.width, baseSize.height);
        });

        /*
      const camera = this.cameras.main;

      //camera.setZoom();

      // Set up the arrows to control the camera
      const cursors = this.input.keyboard.createCursorKeys();
      this.controls = new Phaser.Cameras.Controls.FixedKeyControl({
        camera: camera,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        speed: 0.75
      });
      */
        /*
     const map = this.make.tilemap({ key: "map" });

     const tiles = map.addTilesetImage(
     "0x72-industrial-tileset-32px-extruded",
     "tiles"

     map.createDynamicLayer("Background", tiles);
     this.groundLayer = map.createDynamicLayer("Ground", tiles);
     map.createDynamicLayer("Foreground", tiles);
     */
        //);

        // this.mainSprite = this.add.sprite(1, 1, 'warrior');

        //var newPlayer = new Player(this);
        // this.myPlayer = new MyPlayer(newPlayer);

        var graphics = this.add.graphics({
            lineStyle: { width: 2, color: 0xaa0000 },
            fillStyle: { color: 0xc1c1c1, alpha: 0.3 }
        });

        graphics.fillRect(
            window.innerWidth / 2 - 11,
            window.innerHeight / 2 - 11,
            24,
            24
        );

        // also draw graphics for joystick

        graphics.fillRoundedRect(
            100,
            100,
            50,
            50,
            50
        );
        //graphics.fillRoundedRect(25, window.innerHeight - 100, 26, 26, 13);

        console.log('created mainScene');

        window.onMainFinishedLoading();
    }

    update (time, delta) {

        // update fakeServer
        window.fakeServer.update(time, delta);

        delta /= 1000;

        if (this.playerToMove.x !== 0) {this.player.x += this.playerToMove.x * delta * 50;}
        if (this.playerToMove.y !== 0) {this.player.y += this.playerToMove.y * delta * 50;}

        this.cameras.main.startFollow(this.player);

    /*

        if(window.keysDown[window.keyBindings.moveUp]) {
            this.myPlayer.player.sprite.y -= 100 *delta;
        }
        if(window.keysDown[window.keyBindings.moveDown]) {
            this.myPlayer.player.sprite.y += 100 *delta;
        }
        if(window.keysDown[window.keyBindings.moveLeft]) {
            this.myPlayer.player.sprite.x -= 100 *delta;
        }
        if(window.keysDown[window.keyBindings.moveRight]) {
            this.myPlayer.player.sprite.x += 100 *delta;
        }

        // after input is resolved, send info about new player's position to the server
        this.posSendTimer += delta;

        if(this.posSendTimer > 0.1) {
            if(this.myPlayer.isInDifferentPosition()) {

                //broadcast new pos here
                window.networkClient.sendPositionUpdate(this.myPlayer.player.sprite.x,
                    this.myPlayer.player.sprite.y);

                this.myPlayer.setOldPos(this.myPlayer.player.sprite.x,
                    this.myPlayer.player.sprite.y);

                this.posSendTimer = 0;
            }
        }

        // todo - make a more manual camera follow solution, however for now, this is fine


        */
    }
}

export default MainScene;
