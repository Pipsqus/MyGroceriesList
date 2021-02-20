function defineIngredienti() {
    var retrievedObject = localStorage.getItem("ingredienti");
    if (retrievedObject) {
      ingredienti = JSON.parse(retrievedObject);
    } else {
      ingredienti = {};
  }
}

function defineRecipes() {
  var retrievedObject = localStorage.getItem("recipes");
  if (retrievedObject) {
    recipes = JSON.parse(retrievedObject);
  } else {
    recipes = {};
}
}


function generateListGroceries() {
  document.getElementById("list_groceries").innerHTML = "";
  for (const [key, value] of Object.entries(ingredienti)) {
      AppendToList(key, value, "list_groceries")
  };
  localStorage.setItem("ingredienti", JSON.stringify(ingredienti));
  document.getElementById("end").scrollIntoView()
}

function generateListRecipes() {
  document.getElementById("list_recipes").innerHTML = "";
  for (const [key, value] of Object.entries(recipes)) {
      AppendToList(key, value, "list_recipes")
  };
  localStorage.setItem("recipes", JSON.stringify(recipes));
}

function AppendToList(key, value, list_input) {
  	var box = createBox(key);
  	var label = createLabel(key, value);
  	var paragraph = createParagraph(key, box, label);

  	var list_add = list_input;
  	document.getElementById(list_add).appendChild(paragraph);
 
	if (list_input == "list_recipes" && value == 1) {
			box.checked = true;
	}
 	document.getElementById(box.id).addEventListener("click", function() {
		var nameOfElement = this.getAttribute("name");
		recipes[nameOfElement] = (recipes[nameOfElement] + 1) % 2;
  		localStorage.setItem("recipes", JSON.stringify(recipes));
  });
}

function aggiunte() {
  var AggiunteInputTrimRight = document.getElementById("Aggiunte").value.trimRight()
  var AggiunteInputTrimAll = AggiunteInputTrimRight.trimLeft()
  var TextNode = " " + AggiunteInputTrimAll;

  if (document.getElementById(TextNode) || TextNode == " "){
    if (TextNode == document.getElementById(TextNode).innerHTML || TextNode == " ")
    { }
  } else {
    var TextToAppend = document.createTextNode(TextNode);
  }

  (ingredienti[TextNode] += 1) || (ingredienti[TextNode] = 1);

  var AddedParagraph = document.getElementById(TextNode);
  if (AddedParagraph) {AddedParagraph.remove();}
  AppendToList(TextNode, ingredienti[TextNode], "list_groceries")

  ;localStorage.setItem("ingredienti", JSON.stringify(ingredienti));

  var sectionAggiunte = document.getElementById("Aggiunte");
  sectionAggiunte.value = "";
}


function clearLists() {
    if (window.confirm("Sure you want to reset the list?")) {
      list_input_elements = document.getElementsByTagName("input");
      var i = 0;
      while (list_input_elements[i]) {
        list_input_elements[i].checked = false;
        i++
      }
      ;localStorage.clear();
      ;
    document.getElementById("list_groceries").innerHTML = "";
    location.reload();
  }
}

function toggleRecipesAndIngredients() {
 	var listGroceries = document.getElementById("list_groceries")
  	var listRecipes = document.getElementById("list_recipes")
  	listGroceries.classList.toggle("hidden");
	listRecipes.classList.toggle("hidden");
}
function fischratgeber() {
  	document.getElementById("fischratgeber").classList.toggle("hidden");
}


function createBox(key) {
	var box = document.createElement("INPUT");
	box.type = "checkbox";
	box.name = key;
	box.id = "box" + key;

  	return box;
}

function createLabel(key, value) {
  	var label = document.createElement("LABEL")
  	label.htmlFor = "box" + key;
	
	if (value <= 1) {
  	var TextNode = " " + key.charAt(0).toUpperCase() + key.slice(1);
	} else {
  	var TextNode = " " + key.charAt(0).toUpperCase() + key.slice(1) + " " + value;
	}
  	var TextNode = TextNode.replace(/_/g, " ");
  	var TextNode = document.createTextNode(TextNode);
  	label.appendChild(TextNode);

  	return label;
}

function createParagraph(key, box, label) {
  var paragraph = document.createElement("P")
  paragraph.id = key;
  paragraph.appendChild(box);
  paragraph.appendChild(label);

  return paragraph;
}


// Menu Dropdown
  function Dropdown() {
    document.getElementById("DropdownMenu").classList.toggle("show");
    document.getElementsByClassName("DropdownButton")[1].classList.toggle("hidden");
    document.getElementsByClassName("DropdownButton")[2].classList.toggle("hidden");
    event.stopPropagation();
  }
  function GoToPasta() {
    document.getElementById("liPasta").scrollIntoView()
  }
  function GoToMinestre() {
    document.getElementById("liMinestre").scrollIntoView()
  }
  function GoToRisotto() {
    document.getElementById("liRisotto").scrollIntoView()
  }
  function GoToPanetteria() {
    document.getElementById("liPanetteria").scrollIntoView()
  }
  function GoToFrittura() {
    document.getElementById("liFrittura").scrollIntoView()
  }
  function GoToCarne() {
    document.getElementById("liCarne").scrollIntoView()
  }
  function GoToSecondi() {
    document.getElementById("liSecondi").scrollIntoView()
  }
  function GoToDolci() {
    document.getElementById("liDolci").scrollIntoView()
  }
  function GoToFondamentali() {
    document.getElementById("liFondamentali").scrollIntoView()
  }



// Following, all our recipes

function Aglione() {
  (recipes.aglione = 0);
}
function AglioOlio() {
  (recipes.aglio_olio = 0);
}
function Soffritto() {
  (ingredienti.carote += 2) || (ingredienti.carote = 2);
  (ingredienti.sedano += 2) || (ingredienti.sedano = 2);
  (recipes.soffritto = 0);
}
function SfogliaLorda() {
  (ingredienti.ricotta += 2) || (ingredienti.ricotta = 2);
  (ingredienti.parmigiano += 2) || (ingredienti.parmigiano = 2);
  (ingredienti.pomodorini += 1) || (ingredienti.pomodorini = 1);
  (recipes.sfoglia_lorda = 0)
}
function Cannelloni() {
  (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
  (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
  (ingredienti.burro += 1) || (ingredienti.burro = 1);
  (recipes.cannelloni_funghi_e_spinaci = 0)
  }
function LasagnaRolls() {
  (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
  (ingredienti.ricotta += 1) || (ingredienti.ricotta = 1);
  (recipes.lasagna_rolls = 0);
}
function LasagnaZuccaFunghi() {
  (ingredienti.zucca += 1) || (ingredienti.zucca = 1);
  (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
  (ingredienti.mozzarella += 1) || (ingredienti.mozzarella = 1);
  (ingredienti.scamorza += 1) || (ingredienti.scamorza = 1);
  (recipes.lasagna_zucca_e_funghi = 0)
}
function LasagnaCavoloRosso() {
  (ingredienti.cavolo_rosso += 1) || (ingredienti.cavolo_rosso = 1);
  (ingredienti.mozzarella += 1) || (ingredienti.mozzarella = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.lasagna_al_cavolo_rosso = 0)
}
function PaneCipolle() {
    (ingredienti.pane += 1) || (ingredienti.pane = 1);
    (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
    (ingredienti.cipolle += 1) || (ingredienti.cipolle = 1);
  (recipes.pane_e_cipolle = 0)
  }
function PastaTonnoZucchinePomodorini() {
    (ingredienti.tonno += 1) || (ingredienti.tonno = 1);
    (ingredienti.zucchine += 1) || (ingredienti.zucchine = 1);
    (ingredienti.pomodorini += 1) || (ingredienti.pomodorini = 1);
  (recipes.tonno_zucchine_pomodorini_prezzemolo_e_chili = 0)
  }
function PastaPomodoroScamorza() {
    (ingredienti.scamorza += 1) || (ingredienti.scamorza = 1);
    (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
  (recipes.pasta_pomodoro_scamorza = 0)
}
function CremaZuccaGorgonzola() {
    (ingredienti.zucca += 1) || (ingredienti.zucca = 1);
    (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
  (recipes.crema_zucca_gorgonzola = 0)
  }
function GorgonzolaRadicchio() {
  (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
  (ingredienti.noci += 2) || (ingredienti.noci = 2);
  (ingredienti.radicchio += 1) || (ingredienti.radicchio = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.pasta_gorgonzola_e_radicchio = 0)
}
function CremaAsparagi() {
  (ingredienti.asparagi += 2) || (ingredienti.asparagi = 2);
  (ingredienti.schmelzkäse += 1) || (ingredienti.schmelzkäse = 1);
  (recipes.pasta_con_crema_di_asparagi = 0)
}
function RipienoTartufo() {
  (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
  (ingredienti.ricotta += 2) || (ingredienti.ricotta = 2);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (ingredienti.tartufo += 1) || (ingredienti.tartufo = 1);
  (recipes.pasta_ripiena_di_tartufo = 0)
}
function GnocchiZuccaConCavoloRosso() {
  (ingredienti.zucca += 1) || (ingredienti.zucca = 1);
  (ingredienti.cavolo_rosso += 2) || (ingredienti.cavolo_rosso = 2);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (ingredienti.patate += 1) || (ingredienti.patate = 1);
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (recipes.gnocchi_di_zucca_con_cavolo_rosso = 0)
}

// Ravioli, Scarpinocc, Pi Fasacc

function RavioliRicottaSpinaci() {
  (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
  (ingredienti.ricotta += 2) || (ingredienti.ricotta = 2);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.ravioli_ricotta_e_spinaci = 0)
}
function PansotiPnoci() {
  (ingredienti.vino_bianco += 1) || (ingredienti.vino_bianco = 1);
  (ingredienti.erbette += 1) || (ingredienti.erbette = 1);
  (ingredienti.ricotta += 1) || (ingredienti.ricotta = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.pansoti_con_pesto_pane_pnoci = 0)
}
function PereRicottaZafferanoBurro() {
  (ingredienti.pere += 1) || (ingredienti.pere = 1);
  (ingredienti.ricotta += 2) || (ingredienti.ricotta = 2);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (ingredienti.zafferano += 1) || (ingredienti.zafferano = 1);
  (recipes.ravioli_pere_ricotta_zafferano = 0)
}
function Scarpinocc() {
  (ingredienti.pane += 2) || (ingredienti.pane = 2);
  (ingredienti.parmigiano += 2) || (ingredienti.parmigiano = 2);
  (recipes.scarpinocc = 0)
}
function Gyoza() {
  (ingredienti.cavolo_cinese += 2) || (ingredienti.cavolo_cinese = 2);
  (ingredienti.carote += 2) || (ingredienti.carote = 2);
  (ingredienti.zenzero += 2) || (ingredienti.zenzero = 2);
  (recipes.gyoza = 0)
}

// Tortellini, Cappellacci

function CappellacciAllaZucca() {
  (ingredienti.zucca += 2) || (ingredienti.zucca = 2);
  (ingredienti.parmigiano += 2) || (ingredienti.parmigiano = 2);
  (recipes.cappellacci_alla_zucca = 0)
}
function VerdeDiCarne() {
  (ingredienti.hackfleisch += 2) || (ingredienti.hackfleisch = 2);
  (ingredienti.prosciutto_crudo += 2) || (ingredienti.prosciutto_crudo = 2);
  (ingredienti.mortadella += 2) || (ingredienti.mortadella = 2);
  (ingredienti.parmigiano += 2) || (ingredienti.parmigiano = 2);
  (recipes.tortellini_verdi_di_carne = 0)
}

// Pesti, Salse

function PestoTrapanese() {
  (ingredienti.pinoli += 1) || (ingredienti.pinoli = 1);
  (ingredienti.mandorle += 1) || (ingredienti.mandorle = 1);
  (ingredienti.pomodorini += 1) || (ingredienti.pomodorini = 1);
  (ingredienti.rucola += 1) || (ingredienti.rucola = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.pesto_trapanese = 0)
}
function PestoAlleNoci() {
  (ingredienti.noci += 1) || (ingredienti.noci = 1);
  (ingredienti.pinoli += 1) || (ingredienti.pinoli = 1);
  (ingredienti.pane += 1) || (ingredienti.pane = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.pesto_alle_noci = 0)
}
function PestoAlCavoloRosso() {
  (ingredienti.noci += 1) || (ingredienti.noci = 1);
  (ingredienti.pinoli += 1) || (ingredienti.pinoli = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (ingredienti.cavolo_rosso += 1) || (ingredienti.cavolo_rosso = 1);
  (recipes.pesto_al_cavolo_rosso = 0)
}
function PestoPistacchiPomodorini() {
  (ingredienti.pistacchi += 1) || (ingredienti.pistacchi = 1);
  (ingredienti.pomodorini += 1) || (ingredienti.pomodorini = 1);
  (ingredienti.porri += 1) || (ingredienti.porri = 1);
  (recipes.pesto_pistacchi_e_pomodorini = 0)
}
function PestoDiRucola() {
  (ingredienti.rucola += 1) || (ingredienti.rucola = 1);
  (ingredienti.noci += 1) || (ingredienti.noci = 1);
  (ingredienti.mandorle += 1) || (ingredienti.mandorle = 1);
  (ingredienti.pomodorini += 1) || (ingredienti.pomodorini = 1);
  (recipes.pesto_di_rucola = 0)
}
function PestoDiSedano() {
  (ingredienti.sedano += 1) || (ingredienti.sedano = 1);
  (ingredienti.pistacchi += 1) || (ingredienti.pistacchi = 1);
  (ingredienti.mandorle += 1) || (ingredienti.mandorle = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.pesto_di_sedano = 0)
}
function PestoGenovese() {
  (ingredienti.basilico += 1) || (ingredienti.basilico = 1);
  (ingredienti.pinoli += 1) || (ingredienti.pinoli = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.pesto_genovese = 0)
}

// Risotto, Riso

function RisottoAllaZucca() {
  (ingredienti.zucca += 1) || (ingredienti.zucca = 1);
  (ingredienti.vino_bianco += 1) || (ingredienti.vino_bianco = 1);
  (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.risotto_alla_zucca = 0)
}
function RisottoCavoloRossoGorgonzola() {
  (ingredienti.cavolo_rosso += 1) || (ingredienti.cavolo_rosso = 1);
  (ingredienti.vino_bianco += 1) || (ingredienti.vino_bianco = 1);
  (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.risotto_cavolo_rosso_gorgonzola = 0)
}
function RisottoZucchine() {
  (ingredienti.zucchine += 1) || (ingredienti.zucchine = 1);
  (ingredienti.vino_bianco += 1) || (ingredienti.vino_bianco = 1);
  (ingredienti.menta += 1) || (ingredienti.menta = 1);
  (recipes.risotto_alle_zucchine = 0)
}
function RisoFritto() {
  (ingredienti.zenzero += 1) || (ingredienti.zenzero = 1);
  (ingredienti.carote += 1) || (ingredienti.carote = 1);
  (ingredienti.olio_arachidi += 1) || (ingredienti.olio_arachidi = 1);
  (recipes.riso_fritto = 0)
}

// Minestre

function Vichyssoise() {
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (ingredienti.patate += 1) || (ingredienti.patate = 1);
  (ingredienti.porri += 1) || (ingredienti.porri = 1);
  (recipes.vichyssoise = 0)
}
function Stracciatella() {
  (ingredienti.pastina += 1) || (ingredienti.pastina = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.stracciatella = 0)
}
function VellutataCavoloRosso() {
  (ingredienti.cavolo_rosso += 1) || (ingredienti.cavolo_rosso = 1);
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (recipes.vellutata_di_cavolo_rosso = 0)
}

// Panetteria

function Hamburger() {
  (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
  (ingredienti.fagioli += 1) || (ingredienti.fagioli = 1);
  (ingredienti.cipolle_rosse += 1) || (ingredienti.cipolle_rosse = 1);
  (ingredienti.burro += 1) || (ingredienti.burro = 1);
  (ingredienti.rucola += 1) || (ingredienti.rucola = 1);
  (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
  (recipes.hamburger_di_funghi_e_fagioli = 0)
}
function FrenchToast() {
  (ingredienti.pane += 1) || (ingredienti.pane = 1);
  (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
  (recipes.french_toast = 0)
}
function Strangolapreti() {
  (ingredienti.pane += 1) || (ingredienti.pane = 1);
  (ingredienti.bietole += 1) || (ingredienti.bietole = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.strangolapreti = 0)
}
function Canederli() {
  (ingredienti.pane += 1) || (ingredienti.pane = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.canederli = 0)
}
function PolentaFunghiGorgonzola() {
  (ingredienti.polenta += 1) || (ingredienti.polenta = 1);
  (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
  (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (recipes.polenta_funghi_e_gorgonzola = 0)
}
function PanettoneGastronomico() {
  (recipes.panettone_gastronomico = 0)
}

// Crescia

function Crescia() {
  (ingredienti.strutto += 1) || (ingredienti.strutto = 1);
  (recipes.crescia = 0)
}
function CresciaHummus() {
  (ingredienti.lenticchie_rosse += 1) || (ingredienti.lenticchie_rosse = 1);
  (ingredienti.carote += 1) || (ingredienti.carote = 1);
  (recipes.crescia_con_hummus = 0)
}
function CresciaOrtolana() {
  (ingredienti.zucchine += 1) || (ingredienti.zucchine = 1);
  (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
  (ingredienti.aceto_balsamico +=1) || (ingredienti.aceto_balsamico+=1);
  (recipes.crescia_ortolana = 0)
}
function CresciaAutunno() {
  (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
  (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
  (ingredienti.aceto_balsamico += 1) || (ingredienti.aceto_balsamico = 1);
  (recipes.crescia_autunno = 0)
}
function CresciaInverno() {
  (ingredienti.cavolo_rosso += 1) || (ingredienti.cavolo_rosso = 1);
  (ingredienti.aceto_balsamico += 1) || (ingredienti.aceto_balsamico = 1);
  (recipes.crescia_inverno = 0)
}
function CresciaProvenzale() {
  (ingredienti.tonno += 1) || (ingredienti.tonno = 1);
  (ingredienti.cipolle_rosse += 1) || (ingredienti.cipolle_rosse = 1);
  (recipes.crescia_provenzale = 0)
}
function CresciaSquacqueroneRucolaPomodorini() {
  (ingredienti.rucola += 1) || (ingredienti.rucola = 1);
  (ingredienti.pomodorini += 1) || (ingredienti.pomodorini = 1);
  (ingredienti.stracchino += 1) || (ingredienti.stracchino = 1);
  (recipes.crescia_squacquerone_rucola_e_pomodorini = 0)
}
function CresciaBrie() {
  (ingredienti.brie += 1) || (ingredienti.brie = 1);
  (ingredienti.mele += 1) || (ingredienti.mele = 1);
  (ingredienti.ceci += 1) || (ingredienti.ceci = 1);
  (recipes.crescia_al_brie = 0)
}

// Sfoglia

function SfogliaZucchineUovaSpinaci() {
  (ingredienti.zucchine += 1) || (ingredienti.zucchine = 1);
  (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
  (ingredienti.scamorza += 1) || (ingredienti.scamorza = 1);
  (recipes.sfoglia_zucchine_uova_e_spinaci = 0)
}
function PizzetteSfoglia() {
  (ingredienti.mozzarella += 1) || (ingredienti.mozzarella = 1);
  (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
  (recipes.pizzette_di_sfoglia = 0)
}
function SfogliaPatateRicotta() {
  (ingredienti.patate += 1) || (ingredienti.patate = 1);
  (ingredienti.ricotta += 1) || (ingredienti.ricotta = 1);
  (recipes.sfoglia_patate_e_ricotta = 0)
}

// Pizza

function PizzaMargherita() {
  (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
  (recipes.pizza_margherita = 0)
}
function PizzaQuattroFormaggi() {
  (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
  (recipes.pizza_quattro_formaggi = 0)
}
function PizzaCipollaTonno() {
  (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
  (ingredienti.tonno += 1) || (ingredienti.tonno = 1);
  (recipes.pizza_cipolla_e_tonno = 0)
}
function PizzaCavolfiore() {
  (ingredienti.blumenkohl += 1) || (ingredienti.blumenkohl = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
  (recipes.finta_pizza_al_cavolfiore = 0)
}

// Focaccia

function FocacciaCipollaGorgonzola() {
  (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
  (recipes.focaccia_cipolla_e_gorgonzola = 0)
}
function FocacciaPomodoriOlive() {
  (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
  (ingredienti.olive += 1) || (ingredienti.olive = 1);
  (recipes.focaccia_pomodorini_e_olive = 0)
}
function FocacciaPatateRosmarino() {
  (ingredienti.patate += 1) || (ingredienti.patate = 1);
  (recipes.focaccia_patate_e_rosmarino = 0)
}
function FocacciaCavoloRosso() {
  (ingredienti.cavolo_rosso += 1) || (ingredienti.cavolo_rosso = 1);
  (recipes.focaccia_al_cavolo_rosso = 0)
}

// Frittura

function Gnocco() {
  (ingredienti.strutto += 1) || (ingredienti.strutto = 1);
  (ingredienti.mortadella += 1) || (ingredienti.mortadella = 1);
  (ingredienti.pancetta += 1) || (ingredienti.pancetta = 1);
  (ingredienti.pecorino += 1) || (ingredienti.pecorino = 1);
  (recipes.gnocco_fritto = 0)
}
function Panzerotti() {
  (ingredienti.friarielli += 1) || (ingredienti.friarielli = 1);
  (ingredienti.mozzarella += 1) || (ingredienti.mozzarella = 1);
  (ingredienti.mandorle += 1) || (ingredienti.mandorle = 1);
  (recipes.panzerotti = 0)
}
function OliveAscolane() {
  (ingredienti.hackfleisch += 1) || (ingredienti.hackfleisch = 1);
  (ingredienti.olive += 1) || (ingredienti.olive = 1);
  (ingredienti.pane += 1) || (ingredienti.pane = 1);
  (recipes.olive_ascolane = 0)
}
function ZucchineAllaRomana() {
  (ingredienti.zucchine += 1) || (ingredienti.zucchine = 1);
  (recipes.zucchine_alla_romana = 0)
}
function MozzarellaInCarrozza() {
  (ingredienti.mozzarella += 1) || (ingredienti.mozzarella = 1);
  (ingredienti.pane += 1) || (ingredienti.pane = 1);
  (ingredienti.paniermehl += 1) || (ingredienti.paniermehl = 1);
  (recipes.mozzarella_in_carrozza = 0)
}

// Carne
function Ragù() {
    (ingredienti.hackfleisch += 1) || (ingredienti.hackfleisch = 1);
    (ingredienti.carote += 1) || (ingredienti.carote = 1);
    (ingredienti.sedano += 1) || (ingredienti.sedano = 1);
    (ingredienti.vino_rosso += 1) || (ingredienti.vino_rosso = 1);
    (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.ragù = 0)
  }
function LasagnaRagù () {
    Ragù();
  (recipes.lasagna_col_ragù = 0)
  }
function LasagnaBianca() {
  (ingredienti.prosciutto_cotto += 1) || (ingredienti.prosciutto_cotto = 1);
  (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
  (recipes.lasagna_bianca = 0)
}
function CrispyMcBacon () {
  (ingredienti.cheddar += 1) || (ingredienti.cheddar = 1);
  (ingredienti.bacon += 1) || (ingredienti.bacon = 1);
  (ingredienti.hackfleisch += 1) || (ingredienti.hackfleisch = 1);
  (ingredienti.gewürzgurken += 1) || (ingredienti.gewürzgurken = 1);
  (ingredienti.aceto += 1) || (ingredienti.aceto = 1);
  (recipes.crispy_McBacon = 0)
}
function KaeseLauch() {
    (ingredienti.hackfleisch += 1) || (ingredienti.hackfleisch = 1);
    (ingredienti.saure_sahne += 1) || (ingredienti.saure_sahne = 1);
    (ingredienti.schmelzkäse += 1) || (ingredienti.schmelzkäse = 1);
    (ingredienti.porro += 1) || (ingredienti.porro = 1);
  (recipes.Kaeselauchsuppe = 0)
  }
function CroquetasDeJamon() {
    (ingredienti.prosciutto_cotto += 1) || (ingredienti.prosciutto_cotto = 1);
  (recipes.croquetas_de_jamon = 0)
  }
function BratwurstSauerkraut () {
  (ingredienti.bratwurst += 1) || (ingredienti.bratwurst = 1);
  (ingredienti.sauerkraut += 1) || (ingredienti.sauerkraut = 1);
  (ingredienti.patate += 1) || (ingredienti.patate = 1);
  (recipes.bratwurst_und_Sauerkraut = 0)
}
function AllaFilippo() {
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (ingredienti.vino_rosso += 1) || (ingredienti.vino_rosso = 1);
  (ingredienti.salsiccia += 1) || (ingredienti.salsiccia = 1);
  (recipes.pasta_alla_Filippo = 0)
}
function PastaSalsicciaZucca() {
  (recipes.pasta_salsiccia_e_zucca = 0)
}
function Currywurst() {
  (ingredienti.bratwurst += 1) || (ingredienti.bratwurst = 1);
  (ingredienti.worcestershire_sauce += 1) || (ingredienti.worcestershire_sauce = 1);
  (ingredienti.tomato_paste += 1) || (ingredienti.tomato_paste = 1);
  (recipes.currywurst = 0)
}

// Pollo

function TikkaMasala() {
  (recipes.tikka_masala = 0)
}
function RedCurryChicken() {
  (recipes.red_curry_chicken = 0)
}

// Secondi

function Parmigiana() {
  (ingredienti.zucchine += 2) || (ingredienti.zucchine = 2);
  (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.parmigiana = 0)
}
function SformatoZucca() {
  (ingredienti.zucca += 1) || (ingredienti.zucca = 1);
  (ingredienti.carote += 1) || (ingredienti.carote = 1);
  (ingredienti.mozzarella += 1) || (ingredienti.mozzarella = 1);
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.sformato_di_zucca = 0)
}

// Uova

function Crepe4formaggi() {
  (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
  (ingredienti.mozzarella += 1) || (ingredienti.mozzarella = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (ingredienti.scamorza += 1) || (ingredienti.scamorza = 1);
  (ingredienti.noci += 1) || (ingredienti.noci = 1);
  (recipes.crepe_ai_4_formaggi = 0)
}
function Deviled() {
  (ingredienti.maionese += 1) || (ingredienti.maionese = 1);
  (ingredienti.tonno += 1) || (ingredienti.tonno = 1);
  (recipes.deviled_eggs = 0)
}
function InSalsaPomodoro() {
  (recipes.uova_in_salsa_di_pomodoro = 0)
}
function Reibekuchen() {
  (ingredienti.patate += 1) || (ingredienti.patate = 1);
  (recipes.reibekuchen = 0)
}

// Sauces

function BabaGanoush() {
  (ingredienti.melanzane += 1) || (ingredienti.melanzane = 1);
  (ingredienti.tahini += 1) || (ingredienti.tahini = 1);
  (recipes.baba_ganoush = 0)
}
function ThaiChiliSauce() {
  (recipes.thai_chili_sauce = 0)
}
function CremaBroccoliCeci() {
  (ingredienti.broccoli += 1) || (ingredienti.broccoli = 1);
  (ingredienti.ceci += 1) || (ingredienti.ceci = 1);
  (ingredienti.lenticchie += 1) || (ingredienti.lenticchie = 1);
  (recipes.crema_di_broccoli_e_ceci = 0)
}

// Insalate

function InsalataGreca() {
  (ingredienti.olive += 1) || (ingredienti.olive = 1);
  (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
  (ingredienti.feta += 1) || (ingredienti.feta = 1);
  (ingredienti.cipolle_rosse += 1) || (ingredienti.cipolle_rosse = 1);
  (ingredienti.cetriolo += 1) || (ingredienti.cetriolo = 1);
  (recipes.insalata_greca = 0)
}
function InsalataCaesar() {
  (ingredienti.pane += 1) || (ingredienti.pane = 1);
  (ingredienti.insalata += 1) || (ingredienti.insalata = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (ingredienti.succo_di_limone += 1) || (ingredienti.succo_di_limone = 1);
  (recipes.insalata_Caesar = 0)
}
function InsalataEstiva() {
  (ingredienti.mozzarelline += 1) || (ingredienti.mozzarelline = 1);
  (ingredienti.mais += 1) || (ingredienti.mais = 1);
  (ingredienti.olive += 1) || (ingredienti.olive = 1);
  (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
  (ingredienti.cipolle_rosse += 1) || (ingredienti.cipolle_rosse = 1);
  (recipes.insalata_estiva = 0)
}


// Dolci

function Camille() {
  (ingredienti.carote += 1) || (ingredienti.carote = 1);
  (ingredienti.succo_di_arancia += 1) || (ingredienti.succo_di_arancia = 1);
  (ingredienti.mandorle += 1) || (ingredienti.mandorle = 1);
  (recipes.camille = 0)
}
function OttolenghiCookies() {
  (ingredienti.brown_sugar += 1) || (ingredienti.brown_sugar = 1);
  (ingredienti.cioccolato_bianco += 1) || (ingredienti.cioccolato_bianco = 1);
  (ingredienti.pere += 1) || (ingredienti.pere = 1);
  (ingredienti.lime += 1) || (ingredienti.lime = 1);
  (recipes.ottolenghi_pear_cookies = 0)
}
function PereVino() {
  (ingredienti.pere += 1) || (ingredienti.pere = 1);
  (ingredienti.vino_rosso += 1) || (ingredienti.vino_rosso = 1);
  (ingredienti.panna_montata += 1) || (ingredienti.panna_montata = 1);
  (recipes.pere_e_vino = 0)
}
function PistachioEclaire () {
  (ingredienti.burro += 1) || (ingredienti.burro = 1);
  (ingredienti.gelatina += 1) || (ingredienti.gelatina = 1);
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (ingredienti.cioccolato += 1) || (ingredienti.cioccolato = 1);
  (ingredienti.pistacchi += 1) || (ingredienti.pistacchi = 1);
  (ingredienti.mandorle += 1) || (ingredienti.mandorle = 1);
  (ingredienti.fragole += 1) || (ingredienti.fragole = 1);
  (recipes.pistachio_eclaire = 0)
}
function Cicerchiata() {
  (ingredienti.vino_liquoroso += 1) || (ingredienti.vino_liquoroso = 1);
  (ingredienti.succo_di_limone += 1) || (ingredienti.succo_di_limone = 1);
  (recipes.cicerchiata = 0)
}
function PannaCotta() {
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (ingredienti.agar_agar += 1) || (ingredienti.agar_agar = 1);
  (ingredienti.berries += 1) || (ingredienti.berries = 1);
  (ingredienti.succo_di_limone += 1) || (ingredienti.succo_di_limone = 1);
  (recipes.panna_cotta = 0)
}
function Waffles() {
  (recipes.waffles = 0)
}
function Pancakes() {
  (recipes.pancakes = 0)
}
function Milkshake() {
  (ingredienti.marmellata += 1) || (ingredienti.marmellata = 1);
  (ingredienti.menta += 1) || (ingredienti.menta = 1);
  (ingredienti.berries += 1) || (ingredienti.berries = 1);
  (ingredienti.succo_di_limone += 1) || (ingredienti.succo_di_limone = 1);
  (ingredienti.gelato_alla_vaniglia += 1) || (ingredienti.gelato_alla_vaniglia = 1);
  (recipes.milkshake = 0)
}
function Cestini() {
  CremaPasticcera();
  (ingredienti.berries += 1) || (ingredienti.berries = 1);
  (recipes.cestini = 0)
}
function Profiteroles() {
  (ingredienti.cioccolato_fondente += 1) || (ingredienti.cioccolato_fondente = 1);
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (ingredienti.zucchero_velo += 1) || (ingredienti.zucchero_velo = 1);
  (recipes.profiteroles = 0)
}
function Tiramisù() {
  (ingredienti.mascarpone += 1) || (ingredienti.mascarpone = 1);
  (ingredienti.caffè += 1) || (ingredienti.caffè = 1);
  (ingredienti.savoiardi += 1) || (ingredienti.savoiardi = 1);
  (ingredienti.cacao += 1) || (ingredienti.cacao = 1);
  (recipes.tiramisù = 0)
}
function CremaPasticcera() {
  (recipes.crema_pasticcera = 0)
}
function CrepeKompottPinoli() {
  (ingredienti.mele += 1) || (ingredienti.mele = 1);
  (recipes.crepe_kompott_e_pinoli = 0)
}

// Fondamentali

function Farina() {
  (ingredienti.farina += 1) || (ingredienti.farina = 1);
}
function Aglio() {
  (ingredienti.aglio += 1) || (ingredienti.aglio = 1);
}
function Cipolle() {
  (ingredienti.cipolle += 1) || (ingredienti.cipolle = 1);
}
function Uova() {
  (ingredienti.uova += 1) || (ingredienti.uova = 1);
}
function PassataPomodoro() {
  (ingredienti.passata_di_pomodoro += 1) || (ingredienti.passata_di_pomodoro = 1);
}
function Latte() {
  (ingredienti.latte += 1) || (ingredienti.latte = 1);
}
function Olio() {
  (ingredienti.olio += 1) || (ingredienti.olio = 1);
}
function Burro() {
  (ingredienti.olio += 1) || (ingredienti.olio = 1);
}
function LievitoBirraDolci() {
  (ingredienti.lievito_birra += 1) || (ingredienti.lievito_birra = 1);
  (ingredienti.lievito_dolce += 1) || (ingredienti.lievito_dolce = 1);
}
function Sugar () {
  (ingredienti.sugar += 1) || (ingredienti.sugar = 1);
}
function BrownSugar() {
  (ingredienti.brown_sugar += 1) || (ingredienti.brown_sugar = 1);
}
function Amido() {
  (ingredienti.amido += 1) || (ingredienti.amido = 1);
}
function Riso() {
  (ingredienti.riso += 1) || (ingredienti.riso = 1);
}
function AcetoBalsamico() {
  (ingredienti.aceto_balsamico += 1) || (ingredienti.aceto_balsamico = 1);
}

function Sale() {
(ingredienti.sale += 1) || (ingredienti.sale = 1);
}
function Pepe() {
(ingredienti.pepe += 1) || (ingredienti.pepe = 1);
}
function Origano() {
(ingredienti.origano += 1) || (ingredienti.origano = 1);
}
function Salvia() {
  (ingredienti.salvia += 1) || (ingredienti.salvia = 1);
}
function Rosmarino() {
  (ingredienti.rosmarino += 1) || (ingredienti.rosmarino = 1);
}
function Timo() {
  (ingredienti.timo += 1) || (ingredienti.timo = 1);
}
function Noce_Moscata() {
  (ingredienti.noce_moscata += 1) || (ingredienti.noce_moscata = 1);
}
function Cannella() {
  (ingredienti.cannella += 1) || (ingredienti.cannella = 1);
}
function Zafferano() {
  (ingredienti.zafferano += 1) || (ingredienti.zafferano = 1);
}

// Utilità

function Scottex() {
  (ingredienti.scottex += 1) || (ingredienti.scottex = 1);
}
function Tissues() {
  (ingredienti.tissues += 1) || (ingredienti.tissues = 1);
}
function BagnoschiumaSapone() {
  (ingredienti.bagnoschiuma_e_sapone += 1) || (ingredienti.bagnoschiuma_e_sapone = 1);
}
function Dentifricio() {
  (ingredienti.dentifricio += 1) || (ingredienti.dentifricio = 1);
}
function Detersivo() {
  (ingredienti.detersivo += 1) || (ingredienti.detersivo = 1);
}
function Spugne() {
  (ingredienti.spugne += 1) || (ingredienti.spugne = 1);
}
function Guanti() {
  (ingredienti.guanti += 1) || (ingredienti.guanti = 1);
}
function CleaningProducts() {
  (ingredienti.cleaning_products += 1) || (ingredienti.cleaning_products = 1);
}
function CartaIgienica() {
  (ingredienti.carta_igienica += 1) || (ingredienti.carta_igienica = 1);
}
function Spazzatura() {
  (ingredienti.spazzatura += 1) || (ingredienti.spazzatura = 1);
}
function Lettiera() {
  (ingredienti.lettiera += 1) || (ingredienti.lettiera = 1);
}
function CatFood() {
  (ingredienti.cat_food += 1) || (ingredienti.cat_food = 1)
}
function DishwasherApparatus() {
  (ingredienti.dishwasher_apparatus += 1) || (ingredienti.dishwasher_apparatus = 1);
}
