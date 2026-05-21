const introduction_box=document.querySelector(".introduction_box")
const button=document.querySelector(".introduction_box button")
const text=document.querySelector(".introduction_box p")
const cards=document.querySelectorAll(".ani_img img")
const ovlay=document.querySelector(".overlay")
dog_p="Hello everyone! I’m the Border Collie who accompanies Allen. I’ve witnessed his recent struggles, and honestly, he wasn’t in a great place for a while. Fortunately, after a period of recuperation, he’s doing much better, and we are finally back to enjoying our happy times together!"
lion_p="I’ve only just met Allen, but it feels like we share a profound connection. I crossed paths with him during his lowest ebb. I hope to see a whole new side of him in the future... perhaps he’s actually a 'beast' deep down."
capybara_p="(An indescribable sense of comfort mixed with regret drifts by like a gentle breeze. Perhaps... we are destined to meet again in the future.)"
cat_p="Our meeting was purely coincidental. To be honest, he acted like a complete weirdo when we first met, just randomly striking up a conversation... but maybe that’s just destiny. I feel like we’re meant to stay in each other's lives."
let typingTimer;
let currenttext=""
let word_num=0
cards.forEach(card=>{
    card.addEventListener('click',function(e){
        ovlay.classList.add('os')
        text.textContent='';
        button.classList.remove('show-button')
        word_num=0;
        /*判斷是誰*/
        const animalName=e.currentTarget.dataset.animal;
        if (animalName==="lion")
            {currenttext=lion_p}
        else if (animalName==="dog")
            {currenttext=dog_p}
        else if (animalName==="cat")
            {currenttext=cat_p}
        else if (animalName==="capybara")
            {currenttext=capybara_p};
        setTimeout(()=>{introduction_box.classList.add('show-animation')},10);
        e.preventDefault();
        clearTimeout(typingTimer);
        text.textContent='';
        word_num=0;
       
    });  
});
function Typing() {
    if (word_num<currenttext.length){
        text.textContent+=currenttext.charAt(word_num);
        word_num++;
        typingTimer=setTimeout(Typing,23);
    }else {button.classList.add('show-button')
    }
}
/*cards.addEventListener('click',function(){;
    text.textContent='';
    word_num=0;
    setTimeout(()=>{introduction_box.classList.add('show-animation')},10);
});*/
introduction_box.addEventListener('animationend',function(){
    Typing();  
});
button.addEventListener('click',function(e){
    e.preventDefault
    introduction_box.classList.remove('show-animation')
    ovlay.classList.remove('os')
    clearTimeout(typingTimer);
});


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


