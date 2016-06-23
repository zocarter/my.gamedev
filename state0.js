var demo = {};
var speed = 6;
var skunk;


demo.state0 = function(){};

demo.state0.prototype = { 

    preload: function(){
        game.load.image('city', "cityBG.png");
        
        game.load.spritesheet('skunk', "skunk.png", 32, 32 );
    },
    
    create: function(){
          game.world.setBounds(0,0,2183,1000);
        
      game.physics.startSystem(Phaser.Physics.ARCADE);
       
    var bg = game.add.sprite(0, 0, 'city');  
     bg.height = game.height;
     bg.width = game.width;
       
     skunk = game.add.sprite(0, 900, 'skunk');
        
  game.physics.enable(skunk);
        
   skunk.body.collideWorldBounds = true;
        
    skunk.scale.setTo(1,1);
       
 skunk.animations.add("walk",[0,1,2,3]);
        
    },
    
    //update: function(){
      
  //  if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
    // skunk.animations.play("walk");
  //  skunk.x = skunk.x + 6;
    //skunk.scale.setTo(1,1);
     
   // }
       
//                                                        if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
 //    skunk.animations.play("walk");
  //  skunk.x = skunk.x - 6;
  //   skunk.scale.setTo(-1,1);
      
 //     }
        
   //     if(game.inoute.keyboard.isDown(Phaser.Keyboard.UP)){
          // if(skunk.y < 200 ){
          //      skunk.y = 200;
        //  } 
       //    skunk.animatins.play("walk");
     //    skunk.y = skunk.y - 6; }
        
        //if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
       //     skuk.animations.play("walk");
      //     skunk.y = skunk.y + 6; } 
        };

        
    
    
    
