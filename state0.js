var demo = {};
var speed = 3;
var skunk;
//var platforms

demo.state0 = function(){};

demo.state0.prototype = { 
 preload: function(){
game.load.image('city', "cityBG.png");
game.load.spritesheet('skunk', 'skunk.png');
    //asset
     game.load.image('car', "carredch.png");
     game.load.image('trash', "trash.png");
     game.load.image('cup', "cup.png");
     
    },
    
    create: function(){
       game.world.setBounds(0,0,2183,1000);
       game.physics.startSystem(Phaser.Physics.ARCADE);
        
    
   var bg = game.add.sprite(0, 0, 'city');  
     bg.height = game.height;
     bg.width = game.width;
        
    skunk = game.add.sprite(0, 600, 'skunk');
        
        game.physics.enable(skunk);
      
        skunk.body.gravity.y = 600;
   
        skunk.body.collideWorldBounds = true;
        
        skunk.scale.setTo(2,2);
     
    
    var spaceKey = game.input.keyboard.addKey(
    Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);
      
    },
    
  //  update: function

    
    };

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    

        
    
    
    
