export function Backgrounds({bgHome, bgUniverse, bgExploration}){
    function backgroundHome() {
        document.body.classList.remove('universo')
        document.body.classList.remove('exploracao')
        document.body.classList.add('home')
    }

    function backgroundUniverso() {
        document.body.classList.remove('home')
        document.body.classList.remove('exploracao')
        document.body.classList.add('universo')
    }

    function backgroundExploracao() {
        document.body.classList.remove('universo')
        document.body.classList.remove('home')
        document.body.classList.add('exploracao')
    }

    return {
        backgroundHome,
        backgroundUniverso,
        backgroundExploracao
    };
}