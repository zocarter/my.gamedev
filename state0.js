var demo = {};
//var speed = 3;
var skunk;
//var cursors;
//var car1;
//var car2;
var obstacles;

demo.state0 = function(){};

demo.state0.prototype = { 
 preload: function(){
game.load.image('city', "cityBG.png");
game.load.image('skunk', 'skunk2.png');
     game.load.image('car1', 'cars.png');
     game.load.image('yellow', 'mustang.png');
     game.load.image('trash', 'trash.png');
    },
    
    create: function(){
       game.world.setBounds(0,0,2183,920);
       game.physics.startSystem(Phaser.Physics.ARCADE);
//    var bg = game.add.tileSprite(0,0, 2183, 920);
   var bg = game.add.sprite(0, 0, 'city');  
     bg.height = game.height;
     bg.width = game.width;
        
    skunk = game.add.sprite(59, 600, 'skunk');
//        
        game.physics.enable(skunk);
//      
      skunk.body.gravity.y = 900;
//   
        skunk.body.collideWorldBounds = true;
        skunk.anchor.setTo(.5,.5);
        skunk.scale.setTo(-.15,.15);
        
        obstacles = game.add.group();
        obstacles.enableBody = true;
        
        var car = obstacles.create(800, 880, 'car1');
        car.body.immovable = true;
        
//        car1 = game.add.sprite(800, 880, 'car1');
        
//        car2 = game.add.sprite(1800, 870, 'yellow');
        var car2 = obstacles.create(1800,870,'yellow');
        car2.body.immovable = true; 
        car2.scale.setTo(0.8,0.8);
        
        var trash = obstacles.create(2500, 880,'trash');
        
        cursors = game.input.keyboard.createCursorKeys();
        this.spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    },
    update: function(){
        game.physics.arcade.collide(obstacles, skunk);
        obstacles.x -=2;

//        if(checkOverlap(obstacles, skunk)){
//            
//        }
//        
        if(this.spacekey.isDown){
            skunk.body.velocity.y = -300;
        }
        
    },
    checkOverlap: function(spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);

    }
    
};

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    

        
    
    
    
