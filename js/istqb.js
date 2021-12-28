let istqb = true;

const pytanie = [
    {
        id: 1,
        tresc: "Które z poniższych stwierdzeń NAJLEPIEJ opisuje podział zadań pomiędzy kierownika testów a testera?",
        odp1: 
        {
            tresc: "Kierownik testów planuje i nadzoruje czynności testowe, a tester automatyzuje testy.",
            correct: true
        },
        odp2: 
        {
            tresc: "Kierownik testów planuje i organizuje czynności testowe oraz specyfikuje przypadki testowe, a tester ustala priorytety i wykonuje testy.",
            correct: false
        },
        odp3: 
        {
            tresc: "Kierownik testów planuje, monitoruje i nadzoruje czynności testowe, a tester projektuje testy i podejmuje decyzje o wdrożeniu testowanego obiektu.",
            correct: false
        },
        odp4: 
        {
            tresc: "Kierownik testów planuje czynności testowe i wybiera standardy, których należy przestrzegać, a tester wybiera stosowane narzędzia i sposób ich użycia.",
            correct: false
        },
        right: 1,
        bylo: false
    },
    {
        id: 2,
        tresc: "Które z poniższych stwierdzeń porównujących testowanie modułowe z testowaniem systemowym jest PRAWDZIWE?",
        odp1: 
        {
            tresc: "Testowanie modułowe służy do weryfikowania funkcjonalności modułów oprogramowania, obiektów programów i klas, które można przetestować oddzielnie, natomiast testowanie systemowe pozwala zweryfikować interfejsy między modułami oraz interakcje między poszczególnymi częściami systemu.",
            correct: false
        },
        odp2: 
        {
            tresc: "Przypadki testowe do testowania modułowego tworzy się zwykle na podstawie specyfikacji modułów, specyfikacji projektowych lub modeli danych, natomiast przypadki testowe do testowania systemowego wyprowadza się zwykle ze specyfikacji wymagań, specyfikacji funkcjonalnych lub przypadków użycia.",
            correct: true
        },
        odp3: 
        {
            tresc: "Testowanie modułowe skupia się wyłącznie na charakterystykach funkcjonalnych, natomiast testowanie systemowe skupia się na charakterystykach funkcjonalnych i niefunkcjonalnych.",
            correct: false
        },
        odp4: 
        {
            tresc: "Za testowanie modułowe odpowiadają testerzy, natomiast za testowanie systemowe zwykle odpowiadają użytkownicy systemu.",
            correct: false
        },
        right: 2,
        bylo: false
    },
    {
        id: 3,
        tresc: "Która z poniższych odpowiedzi NAJLEPIEJ opisuje technikę zgadywania błędów?",
        odp1: 
        {
            tresc: "Zgadywanie błędów polega na wykorzystaniu własnego doświadczenia w wytwarzaniu oprogramowania i wiedzy na temat pomyłek, które samemu popełniłoby się podczas pracy na stanowisku programisty.",
            correct: false
        },
        odp2: 
        {
            tresc: "Zgadywanie błędów wymaga szybkiego powielenia zadania związanego z wytwarzaniem oprogramowania w celu zidentyfikowania pomyłek, jakie mógłby popełnić programista.",
            correct: false
        },
        odp3: 
        {
            tresc: "Zgadywanie błędów polega na wykorzystaniu wiedzy i doświadczenia w zakresie dotychczas wykrytych defektów oraz typowych pomyłek popełnianych przez programistów.",
            correct: true
        },
        odp4: 
        {
            tresc: "Zgadywanie błędów wymaga wyobrażenia sobie, że jest się użytkownikiem przedmiotu testów, i zgadywania, jakie pomyłki mógłby popełnić korzystający z niego użytkownik.",
            correct: false
        },
        right: 3,
        bylo: false
    },
    {
        id: 4,
        tresc: "Która z poniższych odpowiedzi zawiera POPRAWNE dopasowanie ról i obowiązków związanych z przeglądem formalnym?",
        odp1: 
        {
            tresc: "Moderator — monitoruje na bieżąco opłacalność.",
            correct: false
        },
        odp2: 
        {
            tresc: "Lider przeglądu — dba o sprawny przebieg spotkań związanych z przeglądem.",
            correct: false
        },
        odp3: 
        {
            tresc: "Kierownik — podejmuje decyzję o przeprowadzeniu przeglądu.",
            correct: true
        },
        odp4: 
        {
            tresc: "Protokolant — usuwa defekty w produkcie pracy będącym przedmiotem przeglądu.",
            correct: false
        },
        right: 3,
        bylo: false
    }
]


var goodAns = 0;
var badAns = 0;

function wyswPyt(nrPyt) {
    if(koniec) {
        showResult(this.goodAns, this.badAns);
        return;
    }

    console.log("nr pytania", nrPyt);

    const odp = document.getElementsByName('pytOdp');

    // const bbb = () => {
    //     for(i=0; i<3; i++) { 
    //         var aba = "<input type='radio' id='quiz-a' name='pytOdp' value='1' checked>" 
    //         return aba;
    //     }
    // }
        
    const trescDiv = `
        <div class="pyt-tresc">
            ${ pytanie[nrPyt].tresc }
        </div>                    
        <div class="pyt-odp">
        <form class="pyt-form">
            <input type="radio" id="quiz-a" name="pytOdp" value="1" checked>
            <label for="quiz-a">${ pytanie[nrPyt].odp1.tresc }</label>
            <br/><br/>
            <input type="radio" id="quiz-b" name="pytOdp" value="2">
            <label for="quiz-b">${ pytanie[nrPyt].odp2.tresc }</label>
            <br/><br/>
            <input type="radio" id="quiz-c" name="pytOdp" value="3">
            <label for="quiz-c">${ pytanie[nrPyt].odp3.tresc }</label>
            <br/><br/>
            <input type="radio" id="quiz-d" name="pytOdp" value="4">
            <label for="quiz-d">${ pytanie[nrPyt].odp4.tresc }</label>
            <br/><br/>
            <button class="quizbtn-next">Dalej</button>
        </form>
        </div>
    `
    document.querySelector('.pytanie').innerHTML = trescDiv;
    
    pytanie[nrPyt].bylo = true;

    const btnQuiz = document.querySelector('.quizbtn-next');
    
    const ileOdp = odp.length;


    btnQuiz.addEventListener('click', (e) => {
        e.preventDefault();

        for(let i = 0; i < ileOdp; i++) {
            if(odp[i].checked) {
                if(odp[i].value == pytanie[nrPyt].right) {
                    goodAns++;
                } else {
                    badAns++;
                }
                break;
            }
        }
        wyswPyt(losowePyt());
    });
}


let byly = [];
let tablicaPyt = [];
let koniec = false;

function losowePyt() {
    if(tablicaPyt.length < pytanie.length) {
        for(i=0; i < pytanie.length; i++) {
            tablicaPyt.push(i);
        }        
    }

    let tabPyt = tablicaPyt.filter(x => !byly.includes(x));

    let nrPyt = tabPyt[Math.floor(Math.random()*tabPyt.length)];
    
    if(nrPyt === undefined) {
        koniec = true;
    } 
    
    byly.push(nrPyt);
    
    return nrPyt;    
}

function showResult(goodAns, badAns) {
    window.alert("Dobrze: " + goodAns + " Źle: " + badAns);
}

if(!koniec) {
    wyswPyt(losowePyt());
}

