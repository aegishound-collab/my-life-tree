const targetElements = document.querySelectorAll('h2,p, .left, .right, .ovb');
const observer=new IntersectionObserver((allEle)=>{
    allEle.forEach(element=>{
        if (element.isIntersecting){
            if(element.target.matches(".d")){
                element.target.classList.add("all_text")
            /*if(element.target.tagName==="H2"){
                element.target.classList.add("hani")
            }else if(element.target.tagName==="P"){
                element.target.classList.add("pani")*/
            }else if(element.target.matches(".right")){
                element.target.classList.add("ra")
            }else if(element.target.matches(".left")){
                element.target.classList.add("la")
            }else if(element.target.matches(".ovb")){
                element.target.classList.add("ovb_anime")
            }observer.unobserve(element.target)
        }
    });
},{threshold:0.5});
targetElements.forEach(el => observer.observe(el));