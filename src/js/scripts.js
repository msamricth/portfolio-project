import $ from "jquery";
import 'owl.carousel';
import { inview } from "@/inview.js";
import { main } from "@/main.js";
import { markedJS } from '@/marked.js';
import { VibJS } from '@/mdc.js';
import { MixItUpScripts } from '@/mixitup.js';
const appCntr = document.querySelector('.app');
const ifWork = appCntr.classList.contains('work-page');
import { workPage } from '@/work.js';
inview();
markedJS();
MixItUpScripts();
main();
if(ifWork) {
    workPage();
}