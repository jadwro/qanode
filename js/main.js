const strzalki = document.querySelector('.arrow');
const menu = document.querySelector('.side-menu');

strzalki.addEventListener('click', () => {
    menu.classList.toggle('changed');
})
menu.addEventListener('mouseover', () => {
    menu.classList.toggle('changed');
})
menu.addEventListener('mouseout', () => {
    menu.classList.remove('changed');
})

let nrLitery = 0;
(function type(el, tekst, speed) {
    var dlugosc = tekst.length;
    if(nrLitery < dlugosc) {
        document.querySelector(el).innerHTML += tekst.charAt(nrLitery);
        nrLitery++;  
        setTimeout(type, speed, el, tekst, speed);                
    }                
})(".tytul","QA Junior Team ;)", 100);

function malaLitera(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}
function wielkaLitera(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function adresURL(param) {
    return new URL(window.location.href).searchParams.get(param);
}

// FIREBASE START

var db = firebase.firestore();

const slownik = db.collection('slownik');

const kartaEl = document.querySelector('.slownik-siatka');

const popupEdit = document.querySelector('.popupEdit');
const popupConfirm = document.querySelector('.popupConfirm');

const editForm = document.querySelector('.form-edit');
const btnYes = document.querySelector('.btnYes');

let wpisID;
let wpisDelID;

function dzialy(dzial) {
    if(dzial == "Ogólne skróty IT") {
        return dzialLink = '<a href="?dzial=1" class="dzialLink">' + dzial + '</a>';
    }
    if(dzial == "Pojęcia z IT") {
        return dzialLink = '<a href="?dzial=2" class="dzialLink">' + dzial + '</a>';
    }
    if(dzial == "Ogólne skróty N.G") {
        return dzialLink = '<a href="?dzial=3" class="dzialLink">' + dzial + '</a>';
    }
    if(dzial == "Różności") {
        return dzialLink = '<a href="?dzial=4" class="dzialLink">' + dzial + '</a>';
    }
}
istqb = false;
function getWpisy(wpis,i) {
    if(istqb) return;
    dzial = wpis.data().dzial;    
    dzialy(dzial);

    autor = wpis.data().autor;
    if(autor) {
         autor = "<br/><span class='sl-autor'>(by <span>" + autor +"</span>)</span>";
    } else {
        autor = '';
    }

    const karta = `
    <div class="slownik-karta" data-id="${ wpis.id }">
        <div class="sl-tytul-wrap">
            <div class="sl-tytul" id="sl-tytul">
                <h2>${ wpis.data().tytul }</h2>
            </div>
            <div class="icons">
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
            </div>
        </div>
        <p class="sl-dzial">Dział: ${ dzialLink }</p>
        <p class="sl-tresc">${ wpis.data().tresc } ${autor}</p>
    </div>
    `
   
    kartaEl.insertAdjacentHTML('beforeend', karta);
    

    const deleteIcon = document.querySelector(`[data-id="${ wpis.id }"] .fa-trash-alt`);
    

    deleteIcon.addEventListener('click', e => {
        popupConfirm.classList.toggle('hideConfirm');
        wpisDelID = wpis.id;
    });
   
    const editID = document.querySelector(`[data-id="${ wpis.id }"] .fa-edit`);

    editID.addEventListener('click', e => {
        popupEdit.classList.toggle('hideEdit');
        
        wpisID = wpis.id;
        editForm.tytul.value = wielkaLitera(wpis.data().tytul);
        editForm.tresc.value = wielkaLitera(wpis.data().tresc);
        editForm.dzial.value = wielkaLitera(wpis.data().dzial);
        editForm.autor.value = wielkaLitera(wpis.data().autor);
    });
}


// slownik.get().then(query => {
//     query.forEach(wpis => {
//         getWpisy(wpis);
//     });
// });

function wyswietlLive(snap) {
    snap.docChanges().forEach(function(zmiana, i) {
        if(zmiana.type === 'added') {
            getWpisy(zmiana.doc,i);         
        }
        if(zmiana.type === 'removed') {
            let div = document.querySelector(`[data-id="${ zmiana.doc.id }"]`);
            div.remove();
        }
        if(zmiana.type === 'modified') {
            let div = document.querySelector(`[data-id="${ zmiana.doc.id }"]`);
            div.remove();
            getWpisy(zmiana.doc,i);
        }
    });
}


if(!adresURL('dzial')) {
    var pobierz = slownik.orderBy("tytul");
} else if(adresURL('dzial') == '1') {
    var pobierz = slownik.where("dzial", "==", "Ogólne skróty IT").orderBy("tytul");
} else if(adresURL('dzial') == '2') {
    var pobierz = slownik.where("dzial", "==", "Pojęcia z IT").orderBy("tytul");
} else if(adresURL('dzial') == '3') {
    var pobierz = slownik.where("dzial", "==", "Ogólne skróty N.G").orderBy("tytul");
} else if(adresURL('dzial') == '4') {
    var pobierz = slownik.where("dzial", "==", "Różności").orderBy("tytul");
}

pobierz.onSnapshot(snap => {
    wyswietlLive(snap);
});

// Dodaj wpis

const addIcon = document.querySelector('.fa-plus-circle');
const popupAdd = document.querySelector('.popupAdd');
const addForm = document.querySelector('.form-dodaj');
const btnNo = document.querySelector('.btnNo');

addIcon.addEventListener('click', e => {
    popupAdd.classList.toggle('hideAdd');

    addForm.tytul.value = '';
    addForm.tresc.value = '';
    // addForm.dzial.value = '';
    addForm.autor.value = '';
});

window.addEventListener('click', e => {
    if(e.target === popupAdd) {
        popupAdd.classList.toggle('hideAdd');
    }
});
window.addEventListener('click', e => {
    if(e.target === popupEdit) {
        popupEdit.classList.toggle('hideEdit');
    }
});
window.addEventListener('click', e => {
    if(e.target === popupConfirm) {
        popupConfirm.classList.toggle('hideConfirm');
    }
});

addForm.addEventListener('submit', e => {
    e.preventDefault();
    slownik.add({
        autor: addForm.autor.value,
        dzial: addForm.dzial.value,
        tytul: malaLitera(addForm.tytul.value),
        tresc: malaLitera(addForm.tresc.value),
    });

    popupAdd.classList.toggle('hideAdd');
});

editForm.addEventListener('submit', e => {
    e.preventDefault();
    slownik.doc(wpisID).update({
        autor: editForm.autor.value,
        dzial: editForm.dzial.value,
        tytul: malaLitera(editForm.tytul.value),
        tresc: malaLitera(editForm.tresc.value),
    });

    popupEdit.classList.toggle('hideEdit');
});

btnYes.addEventListener('click', e => {
    e.preventDefault();
    slownik.doc(wpisDelID).delete().catch(err => {
        console.log('Nie udało się usunąć, błąd: ', err);
    });
    popupConfirm.classList.toggle('hideConfirm');
});

btnNo.addEventListener('click', (e) => {
    e.preventDefault();
    popupConfirm.classList.toggle('hideConfirm');
})

