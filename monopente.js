var createScene = function () {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 100, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    var heightt = 0.2
    var widtht = 35
    var deptht = 35
    var toit = BABYLON.MeshBuilder.CreateBox("toit", {height : heightt, width : widtht, depth: deptht}, scene);
    

    const nblombardes = 6;
    var lombardes = []

    for(let i = 0; i <=(nblombardes-1); i++){
        var heightl = 0.5
        var widthl = 0.5
        var depthl = deptht-0.5
        var facteur = (widtht+4)/(nblombardes+1);
        lombardes.push(BABYLON.MeshBuilder.CreateBox("lombardes", {height: heightl, width : widthl, depth : depthl}, scene));
        
        if (i==0 && nblombardes%2 != 0){
            lombardes[i].position.x = 0
        }
        
        else if (i==0 && nblombardes%2 == 0){
             
            lombardes[i].position.x = -(facteur/2)
        }

        else if(i==(nblombardes/2)+1){
 
            lombardes[i].position.x = facteur/2
        }
        else if(i>=0 && (i+1)<=(nblombardes-(nblombardes%2))/2){
            lombardes[i].position.x = -((facteur/2)+facteur*i)
        }

        else{
            lombardes[i].position.x = ((facteur/2)+facteur*i)
        }
        console.log(i, lombardes[i].position.x)

        lombardes[i].position.y = -heightt/2 -heightl/2
        lombardes[i].position.z = 0.5/2
        
        
    }

    return scene;
};
