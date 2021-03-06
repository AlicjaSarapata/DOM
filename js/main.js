//wyglad dokumnetu - glownego obiektu DOM
//console.log(document); - wyciagam caly dokument
//console.log(document.documentElement); - wyciagam element html
//console.log(document.head); - wyciagam sekcje head
//console.log(document.body);


//znajdowanie elementow
//po ID
var parFirst = document.getElementById('parFirst');
console.log(parFirst);


//otrzymujemy tablice elementow - mozemy uzywac elementow przeznaczonych dla tablic

var linki = document.getElementsByClassName('link');
console.log(linki);

//np 1 link
console.log(linki[1]);

//po nazwie znacznika

var paragrafy = document.getElementsByTagName('p');
console.log(paragrafy);

//po okreslonym selektorze (podajemy # lub .) - zwraca PIERWSZE trafienie

var divPoId = document.querySelector('#parSecond');
console.log(divPoId);

var linkPoKlasie = document.querySelector('.link');
console.log(linkPoKlasie);

//po okreslonym selektorze (podajemy # lub.) - zwraca wszystkie trafienie

var linkiPoKlasie = document.querySelectorAll('#parFirst .link');
console.log(linkiPoKlasie);

//odnajdywanie wezlow
//odnalezienie rodzica
console.log(parFirst.parentNode);

//odnalezienie wezlow (child)
console.log(parFirst.childNodes);

//odnalezienie child - konkretnego dziecka (wezla)
console.log(parFirst.childNodes[6]);

//odnalezienie dzieci (dokumentu HTML)
var pierwszaSekcja = document.getElementById('sectionFirst');
console.log(pierwszaSekcja.children);

//wyszukanie konkretnego dziecka jak w tablicy
console.log(pierwszaSekcja.children[3]);

//wyszukanie pierwszego dziecka
console.log(pierwszaSekcja.firstChild);

//wyszukanie ostattniego dziecka
console.log(pierwszaSekcja.lastChild);

//wczesniejsze/nastepne rodzenstwo
console.log(document.getElementById('link').nextElementSibling.nodeType);
console.log(document.getElementById('link').previousSibling.nodeType);

//tworzenie wezlow i dodawanie ci do HTML
var btn = document.createElement('button');
//console.log(btn);
var btnTxt = document.createTextNode('Kliknij mnie');
//console.log(btnTxt);
var btnClass = document.createAttribute('class');
//console.log(btnClass);
btnClass.value = 'btn';

//dodaj btn do body
document.body.appendChild(btn);

//dodaj wezel tekstu do danego button
btn.appendChild(btnTxt);

//podpinamy do button node z klasa
btn.setAttributeNode(btnClass);

btn.setAttribute('title', 'jestem guzikiem');

//usuwanie atrybutu za pomoca funkcji
btn.removeAttribute('title');

//usuwanie atrybutu za pomoca wezla
//najpierw do zmiennej przypisujemy wezel z atrybutem, nastepnie go usuwamy
//var attfClass = btn.getAttributeNode('class');
//btn.removeAttributeNode(attfClass);
btn.removeAttribute('class');

document.body.removeChild(btn);

//manipulowanie DOM
var header = document.getElementById('header');
console.log(header.innerHTML);

//mozemy dodawac znaczniki za pomoca innerHTML
header.innerHTML = '<p>Nowa tresc w naglowku</p>';
//header.innerText = '<p>121213</p>';

console.log(header.outerHTML);

//mozemy dodawac znaczniki za pomoca outerHTML - lacznie ze znacznikiem, do ktorego sie odnosimy
header.outerHTML = '<header id="header" class="klasa" <p>12121212</p></header>';

//pobieranie/zmienianie atrybutow
console.log(linki[2].href);
console.log(linki[2].className);


//className - ustawia/pobiera klasy elementu (mozna podac wiecej niz jedna)
//jezeli modyfikujemy za pomoca outerHTML, to nie jestesmy w stanie tego nadpisac
header.className = 'klasa_2 klasa_3';
console.log(header.className);

linki[2].href = 'http://google.com';
console.log(linki[2].href);

linki[2].title = 'tytul';
linki[2].title = 'klasa_2 klasa_3';


var linkCSS = document.getElementById('link');
linkCSS.style.color = 'red';
link.style.fontSize = '25px';


//czeka na zaladowanie drzewa DOM
document.addEventListener("DOMContentLoaded", function () {
	// tutaj trafia skrypt operujący na elementach ze strony
	zmienKolor();
	klawiszWcisniety();
	pokazWpisane();
	usunPokaz();
});


function zmienKolor() {
	//	linkCSS.addEventListener('mouseover',function() {
	//		this.style.color = 'violet';
	//	});
	//
	//
	//	linkCSS.addEventListener('mouseout',function() {
	//		this.style.color = 'green';
	//	});

	for (var i = 0; i < linki.length; i++) {
		linki[i].addEventListener('mouseover', function () {
			this.style.color = 'violet';
		});

		linki[i].addEventListener('mouseout', function () {
			this.style.color = 'green';
		});
	}


}

function klawiszWcisniety() {
	var inputy = document.querySelectorAll('#formularz input');
	console.log(inputy);
	for (var i = 0; i < inputy.length; i++) {
		inputy[i].addEventListener('keydown', function () {
			this.style.border = '10px solid red';

		});
		inputy[i].addEventListener('keyup', function () {
			this.style.border = '10px solid violet';

		});
	}

}


function pokazWpisane() {
	var inputy = document.querySelectorAll('#formularz input');
	//	console.log(inputy);
	for (var i = 0; i < inputy.length; i++) {
		inputy[i].addEventListener('change', pokaz);
//		inputy[i].removeEventListener('change', pokaz);
	}
}

function pokaz() {
	console.log(this.value);
}

function alarm() {
	alert('997');
}

function usunPokaz() {
	var inputy = document.querySelectorAll('#formularz input');

	for (var i = 0; i<inputy.length; i++) {
		inputy[i].removeEventListener('change', pokaz);
	}
}

linkCSS.addEventListener('click', function(event){
	console.log(event);
	event.stopPropagation();
	event.preventDefault();
	console.log('123');
});



























