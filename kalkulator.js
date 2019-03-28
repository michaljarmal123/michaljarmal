const double = x => 2 * x;
const init = (e, x) => {
    console.error(typeof e);
    console.info(double(x));
    console.log('Container:' , document.getElementById('container'));
    if(something){
        const abc = [7,9];
        abc[0] = 8
        abc = 9; !!!
    }

}

window.addEventListener('DOMContentLoaded', e =>  init(e,5));



