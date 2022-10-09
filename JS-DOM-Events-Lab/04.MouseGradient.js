function attachGradientEvents() {
    let hoverHereElement = document.getElementById("gradient");
    let resultElement = document.getElementById("result");

    hoverHereElement.addEventListener('mousemove',mouseMove);
    hoverHereElement.addEventListener('mouseout',mouseOut);


    function mouseMove(e){
        let power = e.offsetX / (e.target.clientWidth -1 );
       

        power = Math.trunc(power * 100);
    
        resultElement.textContent = power + '%';
  

    }

    function mouseOut(){
        resultElement.textContent = '';

    }
    
}