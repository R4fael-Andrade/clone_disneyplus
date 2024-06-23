document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const question = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const  alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero) {
            ocultaElementosHeader();
        }else{
            exibeElementosHeader();
        }
    })
    
    //Seção  de atrações, programação das abas dinamicas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is--active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is--active');
        })
    }

    for( let i = 0; i < question.length; i++) {
        question[i].addEventListener('click', abreOuFechaResposta);
    }
})

//Ocultando elementos do header
function ocultaElementosHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

//Exibindo elementos do header
function exibeElementosHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

//Seção Faq, accordion
function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active')
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i =  0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}