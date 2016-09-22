function Alumnos("nombre", [nota]) {

			    this."nombre" = "nombre";
			    this.[nota] = [
			    		var r=0;
						for(var q=0;q<nota.length;q++)
						{
						if(typeof(nota[q])=='number') {r+=nota[q];}
						} ];

		}
var jose = new Alumnos(.n1, [.n2,.n3])

document.write(jose)
console.log(jose)