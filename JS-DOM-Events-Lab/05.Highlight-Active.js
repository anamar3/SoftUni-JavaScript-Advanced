function focused() {
    
    let inputFieldsElement = document.querySelectorAll('input');
    
    Array.from(inputFieldsElement).forEach(text=>{
        text.addEventListener('focus',focusEvent)});

    function focusEvent(e){
        e.currentTarget.parentNode.className = "focused";
        let currentSection = e.currentTarget.parentNode;
        console.log(currentSection);
        Array.from(inputFieldsElement).forEach(el=>{
            if(el != e.currentTarget){

                el.parentNode.className = '';
              
            }
        });
    }
}

