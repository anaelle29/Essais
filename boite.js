var createScene = function () {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    new BABYLON.AxesViewer(scene, 5);
    const localAxes = new BABYLON.AxesViewer(scene, 1);

    const longueur_v = 3;
    const largeur_v = 5;
    const epaisseur_v = .01;
    const vertical = BABYLON.MeshBuilder.CreateBox("vertical", { height: longueur_v, width: largeur_v, depth: epaisseur_v}, scene);


    

    const longueur_h = 4;
    const largeur_h = 5;
    const epaisseur_h = .01;
    const horizontal = BABYLON.MeshBuilder.CreateBox("horizontal", { height: epaisseur_h, width: largeur_h, depth: longueur_h}, scene);
    horizontal.position.z = longueur_h/2-epaisseur_h/2
    horizontal.position.y = -longueur_v/2+epaisseur_h/2



    const longueur_p = Math.sqrt(Math.pow(longueur_h, 2)+Math.pow(longueur_v, 2));
    const largeur_p = largeur_h;
    const epaisseur_p = epaisseur_h;
    const penche = BABYLON.MeshBuilder.CreateBox("penche", { height: epaisseur_p, width: largeur_p, depth: longueur_p}, scene);
    // penche.rotation.x = (profondeur_h/2)/(hauteur_v/2)
    

    // penche.rotation.x = (Math.PI-(Math.PI/2+(hauteur_v/profondeur_h)));
    // penche.position.z = longueur_p/2-epaisseur_v/2
 
    // penche.position.y = hauteur_v/2-hauteur_h/2


    console.log(Math.sqrt(Math.pow(longueur_h, 2)+ Math.pow(longueur_v, 2)))
    console.log(longueur_v, longueur_h, longueur_p, (longueur_v/2)/(longueur_h/2))

    penche.setPivotMatrix(
        BABYLON.Matrix.Translation(
            0,
            longueur_v/2,
            longueur_h/2,
        
        ),
        false
    );
    penche.rotation.x = (longueur_v/2)/(longueur_h/2)
    const monopente = BABYLON.Mesh.MergeMeshes([vertical, horizontal, penche], true, false, null, false, true);
    monopente.setPivotMatrix(
        BABYLON.Matrix.Translation(
            0,
            longueur_h/2,
            0
        ),
        false
    );
    






    return scene;
};
