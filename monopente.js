var lombardes = [];


        for (let i = 0; i <= (this.data.nblombardes - 1); i++) {
  
            let lombarde = BABYLON.MeshBuilder.CreateBox("lombardes", { height: this.data.hauteur_lombardes, width: this.data.largeur - this.data.espace_bordure_devant, depth: this.data.largeur_lombardes }, scene);
     
            lombardes.push(lombarde);




            lombardes[i].position.z = (((((this.data.longueur-this.data.largeur_lombardes-this.data.espace_bordure_cotes)/(this.data.nblombardes-1))*i)-(this.data.longueur/2))+(this.data.largeur_lombardes/2))+(this.data.espace_bordure_cotes/2)


            lombardes[i].position.y = -this.data.epaisseur / 2 - this.data.hauteur_lombardes / 2
            lombardes[i].position.x = (this.data.espace_bordure_devant/2)

        }
