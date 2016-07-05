var demo = {};
var speed = 3;
var skunk;
var cursors;
//var platforms

demo.state0 = function(){};

demo.state0.prototype = { 
 preload: function(){
game.load.image('city', "cityBG.png");
game.load.spritesheet('skunk', 'skunk.png');
    },
    
    create: function(){
//        game.world.setBounds(0,0,2183,1000);
//        game.physics.startSystem(Phaser.Physics.ARCADE);
    
   var bg = game.add.sprite(0, 0, 'city');  
     bg.height = game.height;
     bg.width = game.width;
        
    skunk = game.add.sprite(0, 200, 'skunk');
        
//        game.physics.enable(skunk);
//       
//        skunk.body.gravity.y = 600;
//    
//        skunk.body.collideWorldBounds = true;
//        
//        skunk.scale.setTo(4,4);
//     
//        skunk.animations.add("walk", [0,1,2,3]);
//        
//        cursors = game.input.keyboard.createCursorKeys();
      
    }
    
  //  update: function
     
  //  cursors = game.input.keyboard.createCursorKeys();
  //     fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);      
	//},

	//update: function(){
//        game.physics.arcade.collide(adam, slaw);
        //game.physics.arcade.collide(skunk, platforms);
////<<<<<<< HEAD
//           ghost.body.velocity.x = 0;

   // if (cursors.left.isDown)
   // {
        //  Move to the left
   //     skunk.body.velocity.x = -150;

  //      skunk.animations.play('walk', 10, true);
  //  }
 //   else if (cursors.right.isDown)
   // {
        //  Move to the right
 //       skunk.body.velocity.x = 150;

//        skunk.animations.play('walk', 10 , true);
  //  }
  //  else
  //  {
  //      skunk.body.velocity.x = 0;
        //  Stand still
     //   skunk.animations.stop();

    //    skunk.frame = 0;
   // }
  //  if(cursors.down.isDown){
     //   skunk.body.velocity.y = 200;
 //   }
  //  if (cursors.up.isDown)
 //   {
 //       skunk.body.velocity.y = -200;
 //   }
       // platforms = game.add.group()
//platforms.enbleBody = true
    
    };

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    

        
    
    
    
