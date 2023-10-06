// Registering component in Fishes.js

AFRAME.registerComponent("fishes", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        //id
        var id = `fish${i}`;
  
        //position variables     
        var posX =(Math.random() * 100 + -50);      
        var posY = (Math.random() * 5 + 5);
        var posZ = (Math.random() * 50 + -40);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createFishes(id, position);
      }
    } ,
  
    createFishes: function(id, position) { 
      
      const treasurEntity = document.querySelector("#Fishes")
      var fishEl = document.createElement("a-entity");
  
      fishEl.setAttribute("id",id);
      fishEl.setAttribute("position",position);
      
    //  fishEl.setAttribute("material","color","#ff9100");
      
   //   fishEl.setAttribute("geometry",{ primitive: "circle",radius: 1 });   
      
      //fishEl.setAttribute("animation",{
       // property:"rotation",
       // to:"0 360 0",
       // loop:"true",
       // duration: 1000
     // }
      //);
     treasurEntity.appendChild(fishEl);
    }
  });
  
  