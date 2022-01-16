let istqb = true;

let licznikPyt = 0;
let savedAns = [];
let odp = false;

let tempBylo = false;

function wyswPyt(nrPyt, licz=true, start=false, chked=0) {
    if(koniec) {
        showResult();
        return;
    }

    document.querySelector('.fa-sync-alt').classList.remove('ukryj');

    
    id = pytania[nrPyt].id;
    const tempAktPyt = pytania.find((item) => item.id == id);
    let currQ, nextBtn;
    
    if(licz) licznikPyt++;

    let prevBtn = "";    
    if(licznikPyt == 1) {
        prevBtn = '<button class="quizbtn-prev ukryj">Poprzednie</button>';
    } else {
        prevBtn = '<button class="quizbtn-prev">Poprzednie</button>';
    }    
    if(licznikPyt == limitPyt) {
        nextBtn = '<button class="quizbtn-next">Zobacz wyniki</button>';
    } else {
        nextBtn = '<button class="quizbtn-next">Następne</button>';
    }
    
    if(tempBylo) {
        currQ = savedAns.find((item) => parseInt(item.pytID) === parseInt(id));
        chked = currQ.odp;
        odp = currQ.odp;
    } else {
        odp = false;
        currQ = false;
    }


    let ansList = "";
    let checked = "";

    const showAnsList = () => {
        for(i = 0; i < pytania[nrPyt].answers.length; i++) {                    
            (odp == i && odp !== false) ? checked = "checked" : checked = "";
            
            ansList += `
                <label for="quiz-${i}">
                    <div class="odp odp${i}">
                        <input type="radio" id="quiz-${i}" name="pytOdp" value="${i}" ${checked}>
                        <div class="trescOdp">
                            ${ pytania[nrPyt].answers[i].tresc } 
                            <div class="trescOdpHint ukryj" data-hint="${ pytania[nrPyt].answers[i].hint }">
                                <i class="fas fa-question-circle"></i>
                            </div>
                        </div>
                    </div>
                </label>
            `        
        }
        return ansList;
    }        
    const trescDiv = `
        <div class="pyt-tresc">  
            <span>Pytanie ${licznikPyt} / ${limitPyt} (ID: ${id})</span>
            <br/><br/>
            ${ pytania[nrPyt].tresc }
        </div>                    
        <div class="pyt-odp">
            <form class="pyt-form">
                ${ showAnsList() }
                <div class="quiz-btns">
                    <div class="noAnswer"">Chyba by wypadało zaznaczyć jakąś odpowiedź</div>
                    ${prevBtn} <button class="quizbtn-show">Sprawdź odpowiedź</button> ${nextBtn}
                </div>
            </form>
            
        </div>
    `
    document.querySelector('.pytanie').innerHTML = '';
    document.querySelector('.pytanie').insertAdjacentHTML('afterbegin', trescDiv);

    const btnNext = document.querySelector('.quizbtn-next');
    const btnPrev = document.querySelector('.quizbtn-prev');
    const btnShow = document.querySelector('.quizbtn-show');
    const noAnswer = document.querySelector('.noAnswer');
    const odpDiv = document.querySelectorAll('.odp');
    
    document.querySelectorAll('input[name="pytOdp"').forEach((radio) => {
        radio.addEventListener('change', (e) => {
            odp = parseInt(e.target.value);     
            odpDiv.forEach(item => {
                item.style.outline = "none";
                noAnswer.style.display = "none";
            })
        });
    });

    console.log("answ", savedAns);   
    
    pytania[nrPyt].bylo = true;

    console.log("odpowiedź zapamiętana: ", currQ.odp);

    btnNext.addEventListener('click', (e) => {
        e.preventDefault();
        if(odp === false) {
            noAnswer.style.display = "block";
            odpDiv.forEach(item => {
                item.style.outline = "1px solid red";
            })            
        } else {     
            sprOdp(nrPyt, odp, id);
            next(odp);
        }
        
    });

    if(btnPrev) {
        btnPrev.addEventListener('click', (e) => {
            e.preventDefault();
                        
            sprOdp(nrPyt, odp, id);
            prev(odp);
        });
    }

    btnShow.addEventListener('click', (e) => {
        e.preventDefault();
        
        showAnswer(id, odp);
    });

    console.log(byly);

    consoleLogPoWysw(tempBylo, id, tempAktPyt, odp)
}

function showAnswer(id, odp) {
    const question = pytania.find((item) => parseInt(item.id) === parseInt(id));
    const goodAns = question.right;

    console.log("good Ans: ", goodAns)
    
    const correct = document.querySelector(`.odp${goodAns}`);
    const selected = document.querySelector(`.odp${odp}`);
    const allAns = document.querySelectorAll('.odp');
    const trescOdpHint = document.querySelectorAll('.trescOdpHint');

    trescOdpHint.forEach(item => {
        item.classList.remove('ukryj');
    });

    if(odp != goodAns && odp !== false) {
        allAns.forEach(item => {
            item.classList.remove('wrongAns');
        });
        selected.classList.add('wrongAns');
    }

    if(odp == goodAns) {
        allAns.forEach(item => {
            item.classList.remove('wrongAns');
        });
    }
    correct.classList.add('goodAns');
}

function consoleLogPoWysw(tempBylo, id, tempAktPyt, odp) {
    console.log("tempBylo: ", tempBylo)
    console.log("ID: ", id);
    // console.log("tempAktPyt: ", tempAktPyt);
    console.log("odp poprzedniego pyt: ", odp);
    console.log("savedAns: ", savedAns);
}

function sprOdp(nrPyt, odp, id) {
    if(savedAns.length === 0) {        
        var byloID = nrPyt;
    }
    let odpow = [];
    for(i in savedAns) {
        if(nrPyt == savedAns[i].pyt) {
            var byloID = i;
        }
    }
                       
    odpow = {
        pyt: nrPyt,
        pytID: id,
        odp: odp
    }
    
    if(!tempBylo) {
        savedAns.push(odpow);
    } else {
        savedAns[byloID].odp = odp;
    }
}

function next(chked) {      
    if(licznikPyt === byly.length) { 
        tempBylo = false;
        wyswPyt(losowePyt(limitPyt),true,false, chked);
    } else {    // PYTANIE BYŁO
        tempBylo = true;
        wyswPyt(byly[licznikPyt],true,false, chked);
    }
    
}

function prev(chked) {          
    licznikPyt--; 
    let prev = byly[licznikPyt-1];

    tempBylo = true;
    wyswPyt(prev,false,false, chked);
}

function showResult() {
    let goodArr = [];
    let badArr = [];
    let pyt;
    for(j in savedAns) {
        pyt = pytania.find((item) => item.id == savedAns[j].pytID);
        if(savedAns[j].odp == pyt.right) {           
            goodArr.push(savedAns[j].pytID);
        } else {
            badArr.push(savedAns[j].pytID);
        }
    }

    console.log("good id", goodArr);
    console.log("bad id", badArr);

    trescWrong = "";
    var qu = "";
    let checkedAns = "";
    const zleID = () => {
        if(badArr.length === 0) return "";

        trescWrong += `Poniżej Twoje błędy (${badArr.length}) wraz z poprawnymi odpowiedziami.<br/><br/>`;
        for (i in badArr) {
            qu = pytania.find((item) => item.id == badArr[i]);
            checkedAns = savedAns.find((item) => item.pytID == qu.id);            
            
            trescWrong += `                
                <div class="odp-sum-wrap">
                    <h3>${qu.tresc} (ID: ${qu.id})</h3>
                    <br/>
            `
            
            for(i = 0; i < qu.answers.length; i++) {
                (qu.right == i) ? goodClass = "goodAns" : goodClass = "";
                (checkedAns.odp == i) ? wrongClass = "wrongAns" : wrongClass = "";
                trescWrong += `                    
                    <div class="odp-sum ${goodClass}${wrongClass}">                        
                        <div class="trescOdp">
                            ${ qu.answers[i].tresc } 
                            <div class="trescOdpHint" data-hint="${ qu.answers[i].hint }">
                                <i class="fas fa-question-circle"></i>
                            </div>
                        </div>
                    </div>
                `
            } 
            trescWrong += `</div>`;
        }
        trescWrong += `
        <div class="btn-again">
            <button onClick="window.location.reload()">Jeszcze raz</button>
        </div>`;

        return trescWrong;
    }

    trescCorr = "<h1>Dobre odpowiedzi:</h1><br/>";  
    const dobreID = () => {
        if(goodArr.length === 0) return "";

        for (i in goodArr) {
            qu = pytania.find((item) => item.id == goodArr[i]);          
            
            trescCorr += `
                <div class="odp-sum-wrap">
                    <h3>${qu.tresc} (ID: ${qu.id})</h3>
                    <br/>
            `
            
            for(i = 0; i < qu.answers.length; i++) {
                (qu.right == i) ? goodClass = "goodAns" : goodClass = "";
                trescCorr += `                    
                    <div class="odp-sum ${goodClass}">                        
                        <div class="trescOdp">
                            ${ qu.answers[i].tresc } 
                        <div class="trescOdpHint" data-hint="${ qu.answers[i].hint }">
                            <i class="fas fa-question-circle"></i>
                        </div>
                    </div>   
                </div>                       
                `
            } 
            trescCorr += `</div>`;          
        }
        trescCorr += `
        <div class="btn-again">
            <button onClick="window.location.reload()">Jeszcze raz</button>
        </div>`;
        return trescCorr;
    }    

    

    const p = pytania.find((item) => item.id == id);
    const allQ = goodArr.length + badArr.length;
    const procent = Math.round(goodArr.length / allQ * 100);
    (procent >= 65) ? pass = "<span class='yes'>- zdałeś :)</span>" : pass = "<span class='no'>- nie zdałeś :(</span>"
    
    const trescDiv = `
        <h1 class="h1-score">Twój wynik: ${goodArr.length} / ${allQ} (${procent}%) ${pass}</h1>
        <br/>
        
        ${zleID()}
        <br/>        
        ${dobreID()}

    `

    document.querySelector('.pytanie').innerHTML = '';
    document.querySelector('.pytanie').insertAdjacentHTML('afterbegin', trescDiv);
    
    // window.alert("Dobrze: " + goodArr.length + "\nŹle: " + badArr.length);
    // window.location.reload();
}

let tablicaPyt = [];
let byly = [];
let koniec = false;
let limitPyt;

function losowePyt(ilePyt = pytania.length) {
    if(tablicaPyt.length < pytania.length) {
        for(i=0; i < pytania.length; i++) {
            tablicaPyt.push(i);
        }        
    }

    let tabPyt = tablicaPyt.filter(x => !byly.includes(x));

    let nrPyt = tabPyt[Math.floor(Math.random()*tabPyt.length)];
    
    if(nrPyt === undefined || licznikPyt >= ilePyt) {
        koniec = true;
    } 
    
    byly.push(nrPyt);
    
    return nrPyt;    
}

let start = true;
function init() {   
    const trescDiv = `
    <div class="ile-pyt">
    <form class="ilepyt-form">
    <label for="ilepyt">Ile chcesz pytań? (domyślnie: 5)</label>
    <br/>
    <input type="number" id="ilepyt" placeholder="Pytań w bazie: ${ pytania.length }">
    <br/>
    <button class="quizbtn-next btn-ile">Start</button>
    </form>
    `
    document.querySelector('.pytanie').innerHTML = trescDiv;
    
    const btn = document.querySelector('.btn-ile');
    const ileForm = document.querySelector('.ilepyt-form').ilepyt;
    
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        start = true;
        licz = true;
        ileForm.value == "" || ileForm.value <= 0  ? limitPyt = 5 : limitPyt = ileForm.value;
        
        wyswPyt(losowePyt(limitPyt), licz, start);
    });
}

if(start) {
    document.querySelector('.fa-sync-alt').classList.add('ukryj');
    init();
} else if(!koniec) {    
    wyswPyt(losowePyt(limitPyt));  
}

