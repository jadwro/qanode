const pytania = [
    {
        id: 1,
        tresc: "Które z poniższych stwierdzeń NAJLEPIEJ opisuje podział zadań pomiędzy kierownika testów a testera?",
        answers: [
            ["Kierownik testów planuje i nadzoruje czynności testowe, a tester automatyzuje testy.",true],
            ["Kierownik testów planuje i organizuje czynności testowe oraz specyfikuje przypadki testowe, a tester ustala priorytety i wykonuje testy.",false],
            ["Kierownik testów planuje, monitoruje i nadzoruje czynności testowe, a tester projektuje testy i podejmuje decyzje o wdrożeniu testowanego obiektu.",false],
            ["Kierownik testów planuje czynności testowe i wybiera standardy, których należy przestrzegać, a tester wybiera stosowane narzędzia i sposób ich użycia.",false]
        ],
        right: 0,
    },
    {
        id: 2,
        tresc: "Które z poniższych stwierdzeń porównujących testowanie modułowe z testowaniem systemowym jest PRAWDZIWE?",
        answers: [
            ["Testowanie modułowe służy do weryfikowania funkcjonalności modułów oprogramowania, obiektów programów i klas, które można przetestować oddzielnie, natomiast testowanie systemowe pozwala zweryfikować interfejsy między modułami oraz interakcje między poszczególnymi częściami systemu.",false],
            ["Przypadki testowe do testowania modułowego tworzy się zwykle na podstawie specyfikacji modułów, specyfikacji projektowych lub modeli danych, natomiast przypadki testowe do testowania systemowego wyprowadza się zwykle ze specyfikacji wymagań, specyfikacji funkcjonalnych lub przypadków użycia.",true],
            ["Testowanie modułowe skupia się wyłącznie na charakterystykach funkcjonalnych, natomiast testowanie systemowe skupia się na charakterystykach funkcjonalnych i niefunkcjonalnych.",false],
            ["Za testowanie modułowe odpowiadają testerzy, natomiast za testowanie systemowe zwykle odpowiadają użytkownicy systemu.",false]
        ],
        right: 1,
        hint: "Patrz sylabus p. 5.1.2. (kierownik testów podpunkty 2, 4 oraz 8, tester podpunkt 10)."
    },
    {
        id: 3,
        tresc: "Która z poniższych odpowiedzi NAJLEPIEJ opisuje technikę zgadywania błędów?",
        answers: [
            ["Zgadywanie błędów polega na wykorzystaniu własnego doświadczenia w wytwarzaniu oprogramowania i wiedzy na temat pomyłek, które samemu popełniłoby się podczas pracy na stanowisku programisty.",false],
            ["Zgadywanie błędów wymaga szybkiego powielenia zadania związanego z wytwarzaniem oprogramowania w celu zidentyfikowania pomyłek, jakie mógłby popełnić programista.",false],
            ["Zgadywanie błędów polega na wykorzystaniu wiedzy i doświadczenia w zakresie dotychczas wykrytych defektów oraz typowych pomyłek popełnianych przez programistów.",true],
            ["Zgadywanie błędów wymaga wyobrażenia sobie, że jest się użytkownikiem przedmiotu testów, i zgadywania, jakie pomyłki mógłby popełnić korzystający z niego użytkownik.",false]
        ],
        right: 2,
    },
    {
        id: 4,
        tresc: "Która z poniższych odpowiedzi zawiera POPRAWNE dopasowanie ról i obowiązków związanych z przeglądem formalnym?",
        answers: [
            ["Moderator — monitoruje na bieżąco opłacalność.",false],
            ["Lider przeglądu — dba o sprawny przebieg spotkań związanych z przeglądem.",false],
            ["Kierownik — podejmuje decyzję o przeprowadzeniu przeglądu.",true],
            ["Protokolant — usuwa defekty w produkcie pracy będącym przedmiotem przeglądu.",false]
        ],
        right: 2,
    },
    {
        id: 5,
        tresc: "Która z poniższych odpowiedzi NAJLEPIEJ opisuje testowanie eksploracyjne?",
        answers: [
            ["Testowanie oparte na doświadczeniu testera, jego wiedzy i intuicji.",false],
            ["Sposób testowania polegający na wnikliwym zbadaniu kontekstu przedmiotu testów w celu zidentyfikowania potencjalnych słabych punktów, które należy sprawdzić przy użyciu przypadków testowych.",false],
            ["Podejście do testowania, w którym testerzy dynamicznie projektują i przeprowadzają testy na podstawie swojej wiedzy, badania obiektu testów i wyników z poprzednich testów.",true],
            ["Podejście do testowania, w którym zadania testowe są planowane jako nieprzerywalne sesje projektowania i wykonywania testów, często stosowane w połączeniu z testowaniem opartym na liście kontrolnej.",false]
        ],
        right: 2,
    },
    {
        id: 6,
        tresc: "Która z poniższych jest często używaną metryką testową do monitorowania ZARÓWNO przygotowania testu, jak i wykonania testu?",
        answers: [
            ["Stosunek defektów znalezionych/naprawionych",false],
            ["Przygotowanie środowiska testowego",false],
            ["Status przypadku testowego",true],
            ["Szacowany koszt znalezienia następnej usterki.",false]
        ],
        right: 2,
    },
    {
        id: 7,
        tresc: 
            `Jako kierownik testów musisz przetestować następujące wymagania:
            <br/>R1 — nieprawidłowości związane z procesami
            <br/>R2 — synchronizacja
            <br/>R3 — potwierdzenie
            <br/>R4 — problemy
            <br/>R5 — dane finansowe
            <br/>R6 — dane do diagramów
            <br/>R7 — zmiany profilu użytkownika
            <br/><img src="https://laborqa.pl/wp-content/uploads/istqb_poziom_podstawowy_przykladowe_zadanie_zestaw_a_zad_37.png">
            <br/>
            Notacja wskazująca ewentualne zależności logiczne między wymaganiami ma postać na przykład „R1 -> R3”, co oznacza, że wymaganie R3 zależy od wymagania R1. Która z poniższych odpowiedzi pozwala ustalić harmonogram wykonywania testów zgodnie z zależnościami między wymaganiami?
            `,
        answers: [
            ["R1 -> R2 -> R5 -> R6 -> R3 -> R4 -> R7.",false],
            ["R1 -> R3 -> R4 -> R7 -> R2 -> R5 -> R6.",false],
            ["R1 -> R3 -> R2 -> R4 -> R7 -> R5 -> R6.",false],
            ["R1 -> R3 -> R2 -> R5 -> R6 -> R4 -> R7.",true]
        ],
        right: 2,
        img: "https://laborqa.pl/wp-content/uploads/istqb_poziom_podstawowy_przykladowe_zadanie_zestaw_a_zad_37.png"
    },
    {
        id: 8,
        tresc: "Testujesz system do handlu elektronicznego, który umożliwia sprzedaż artykułów spożywczych luzem, takich jak: przyprawy, mąka i inne produkty. Jednostki, w których sprzedawane są te artykuły, to albo gramy (np. przyprawy i inne drogie produkty) albo kilogramy (np. mąka i inne niedrogie produkty). Niezależnie od jednostek, najmniejsza dopuszczalna wielkość zamówienia wynosi 0,5 jednostki (np. 0,5 grama kardamonu), a największa dopuszczalna wielkość zamówienia to 25,0 jednostek (np. 25 kilogramów cukru). Dokładność to 0,1 jednostki. Który z poniższych jest zbiorem wartości wejściowych, które obejmują wartości brzegowe z dwupunktowymi wartościami granicznymi dla pola, w którym wprowadzasz jednostki zakupu?",
        answers: [
            ["0,5; 0,6; 24,9; 25,0",false],
            ["0,4; 0,5; 25,0; 25,1",true],
            ["0,3; 10,0; 28,0",false],
            ["0,4; 0,5; 0,6; 24,9;25;0; 25,1",false]
        ],
        right: 1,
    },
    {
        id: 9,
        tresc: "Które z poniższych technik testowania zaliczają się do kategorii technik czarnoskrzynkowych?",
        answers: [
            ["Techniki oparte na wymaganiach formalnych.",true],
            ["Techniki oparte na analizie architektury.",false],
            ["Techniki oparte na wiedzy o poprzednich defektach albo ogólnej wiedzy o awariach.",false],
            ["Techniki sprawdzające, czy przedmiot testów działa zgodnie z projektem technicznym.",false]
        ],
        right: 0,
        hint: "Patrz sylabus p. 4.1.2.: „Techniki czarnoskrzynkowe (…) bazują na analizie podstawy testów np. na formalnych dokumentach zawierających wymagania, specyfikacjach, przypadkach użycia, historyjkach użytkownika.”"
    },
    {
        id: 10,
        tresc: "Który z poniższych elementów jest charakterystyczny dla szacowania testów techniką opartą na miarach?",
        answers: [            
            ["Średnia kalkulacji zebranych od ekspertów merytorycznych.",false],
            ["Łączne oszacowanie nakładu pracy uzgodnione z programistami.",false],
            ["Łączne doświadczenie zdobyte dzięki rozmowom z kierownikami testów.",false],
            ["Wykorzystanie budżetu we wcześniejszym projekcie związanym z testowaniem.",true]
        ],
        right: 3,
        hint: "Patrz sylabus p. 5.2.6.: „Technika oparta na miarach — szacowanie pracochłonności testowania na podstawie miar z wcześniejszych, podobnych projektów lub na podstawie wartości typowych”."
    },
    {
        id: 11,
        tresc: "Która z poniższych miar jest NAJBARDZIEJ przydatna w kontekście monitorowania wykonywania testów?",
        answers: [            
            ["Odsetek przypadków testowych już utworzonych i sprawdzonych.",false],
            ["Łączne oszacowanie nakładu pracy uzgodnione z programistami.",false],
            ["Średnia liczba testerów zaangażowanych w wykonanie testów",false],
            ["Pokrycie wymagań przez kod źródłowy.",true]
        ],
        right: 3,
        hint: "Patrz sylabus p. 5.3.1.: poziom wykonania przypadków testowych (np. liczba wykonanych/niewykonanych przypadków testowych oraz zaliczonych/niezaliczonych przypadków testowych)."
    },
    {
        id: 12,
        tresc: "Która z poniższych odpowiedzi przedstawia role występujące w przeglądzie formalnym?",
        answers: [            
            ["Autor, moderator, kierownik, przeglądający, programista.",false],
            ["Autor, moderator, lider przeglądu, przeglądający, protokolant.",true],
            ["Programista, moderator, lider przeglądu, przeglądający, tester.",false],
            ["Autor, kierownik, lider przeglądu, przeglądający, projektant.",false]
        ],
        right: 3,
        hint: "Zgodnie z p. 3.2.2. sylabusa"
    },
]