/**
 * It will check the presupuesto and the restante then return in proportion of them
 * @param  {[number]} presupuesto
 * @param  {[number]} restante 
 * @return {[string]}  class     
 */
export const revisarPresupuesto=(presupuesto,restante)=>{
  let clase;
  if((presupuesto / 4)> restante){
    clase='alert alert-daner';
  } else if ((presupuesto/2) > restante){
    clase='alert alert-warning';
  } else{
    clase='alert alert-success';
  }
  return clase;
}