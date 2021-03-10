
exports.min = function min (array) {
    if (array==undefined || array==0) {
        return 0;
    }else{
let mina = Math.min.apply(null, array);
return mina;}
    };

exports.max = function max (array) {
  if (array==undefined || array==0) {
        return(0);
    }else{
    let maxa = Math.max.apply(null, array);
    return maxa;
    }
};

exports.avg = function avg (array) {
  if (array===undefined || array.length===0) {
    return 0;}
  
  let balanc=0;
  for (let i=0; i < array.length;i++){
    balanc += array[i];} 
    return balanc/array.length;};