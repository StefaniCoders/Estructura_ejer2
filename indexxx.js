function calcularEdad(nombre,dia,mes,anioNacimiento){
  this.nombre=nombre;
  this.dia=dia;
  this.mes=mes;
  this.anioNacimiento=anioNacimiento;
}
var edad = new calcularEdad("tefi",25,1,1994);
var anioActua=2017 - edad.anioNacimiento;

console.log(anioActua);
