//za shop item
//preuzimanje podataka da se prikaze
var niz;
var text_niz;
let kategorija = location.search.substring(1);
var slides = document.getElementsByClassName("prod_image");
var texts = document.getElementsByClassName("text_slike");
var ime = document.getElementById("ime_proiz");
/*zapravo index2 treba da salje podatke sta punimo, koji niz, ili tabelu baze
*/

/* a ovo je bilo u kristali html:
<div class="proizvodi">

		<div class="image">
	!!!	---->	<a href="nakitMenu.html?sir_kristali">
				<img src="silma/sirovi kristali/gorski kristal geoda (Medium).jpg" alt="kristali">
				<div class="text_ispod">
					<p>Sirovi kristali</p>
				</div></a>
			</div>
			
			<div class="image">
	---->		<a href="nakitMenu.html?obr_kristali">
					<img src="silma/Kristali za masazu i veliki obluci/roze kvarc joni jaja (Medium).jpg" alt="kristali">
					<div class="text_ispod">
						<p>Kristali za masažu i veliki obluci</p>
					</div></a>
				</div>
*/

//niz je onaj koji vec imam, iz silma, videcu ovde sta kako, mozes za sada 
// napraviti niz da vidis jel radi, pa posle s bazom
window.onload = function setNiz(){
	if(kategorija=="sir_kristali"){
		niz=sirovi_kristali;
		ime.innerHTML = "Sirovi Kristali";
		text_niz=sirovi_kristali_text;
		lastPage=8;
	}
	if(kategorija=="obr_kristali"){
		niz=kristali_masaza_veliki;
		ime.innerHTML = "Obradjeni Kristali";
		text_niz=kristali_miv_text;
		lastPage=1;
	}
	if(kategorija=="figure"){
		niz=figure;
		ime.innerHTML = "Figure";
		text_niz=figure_text;
		lastPage=4;
	}
	if(kategorija=="vrste_kristala"){
		niz=vrsteKrist;
		ime.innerHTML = "Vrste kristala";
		text_niz=vrsteKrist_text;
		lastPage=13;
	}
	if(lastPage==1){
		calcLastPage();
	}else{
		for (i = 0; i < slides.length; i++) {
			slides[i].src= niz[i];
			texts[i].innerHTML = text_niz[i];
		}
	}
	document.getElementById("demo").innerHTML = "Stranica "+brojac+ " od "+lastPage;
}