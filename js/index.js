import { Router } from './router.js';
import { Backgrounds } from './event.js';
import { bgHome, bgUniverse, bgExploration } from './elements.js'

const backgrounds = Backgrounds( { bgHome, bgUniverse, bgExploration });

if(bgHome) {
    bgHome.addEventListener("click", function() {
        backgrounds.backgroundHome();
    });
}

if(bgUniverse) {
    bgUniverse.addEventListener("click", function() {
        backgrounds.backgroundUniverso();
    });
}

if(bgExploration) {
    bgExploration.addEventListener("click", function() {
        backgrounds.backgroundExploracao();
    });
}

const router = new Router();
router.add("/", "./index.html");
router.add("/", "../pages/universo.html");
router.add("/", "../pages/exploracao.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = (href) => router.route(href);