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
  var TextNode = " " + key.charAt(0).toUpperCase() + key.slice(1) + " " + value;
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
  (recipes.aglione += 1) || (recipes.aglione = 1);
}
function AglioOlio() {
  (recipes.aglio_olio += 1) || (recipes.aglio_olio = 1);
}
function Soffritto() {
  (ingredienti.carote += 2) || (ingredienti.carote = 2);
  (ingredienti.sedano += 2) || (ingredienti.sedano = 2);
  (recipes.soffritto += 1) || (recipes.soffritto = 1);
}
function SfogliaLorda() {
  (ingredienti.ricotta += 2) || (ingredienti.ricotta = 2);
  (ingredienti.parmigiano += 2) || (ingredienti.parmigiano = 2);
  (ingredienti.pomodorini += 1) || (ingredienti.pomodorini = 1);
  (recipes.sfoglia_lorda += 1) || (recipes.sfoglia_lorda = 1)
}
function Cannelloni() {
    (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
    (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
    (ingredienti.burro += 1) || (ingredienti.burro = 1);
    (recipes.cannelloni_funghi_e_spinaci += 1) || (recipes.cannelloni_funghi_e_spinaci = 1)
  }
function LasagnaRolls() {
  (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
  (ingredienti.ricotta += 1) || (ingredienti.ricotta = 1);
  (recipes.lasagna_rolls += 1) || (recipes.lasagna_rolls = 1)
}
function LasagnaZuccaFunghi() {
  (ingredienti.zucca += 1) || (ingredienti.zucca = 1);
  (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
  (ingredienti.mozzarella += 1) || (ingredienti.mozzarella = 1);
  (ingredienti.scamorza += 1) || (ingredienti.scamorza = 1);
  (recipes.lasagna_zucca_funghi += 1) || (recipes.lasagna_zucca_funghi = 1)
}
function PaneCipolle() {
    (ingredienti.pane += 1) || (ingredienti.pane = 1);
    (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
    (ingredienti.cipolle += 1) || (ingredienti.cipolle = 1);
    (recipes.pane_e_cipolle += 1) || (recipes.pane_e_cipolle = 1)
  }
function PastaTonnoZucchinePomodorini() {
    (ingredienti.tonno += 1) || (ingredienti.tonno = 1);
    (ingredienti.zucchine += 1) || (ingredienti.zucchine = 1);
    (ingredienti.pomodorini += 1) || (ingredienti.pomodorini = 1);
    (recipes.tonno_zucchine_pomodorini_prezzemolo_e_chili += 1) || (recipes.tonno_zucchine_pomodorini_prezzemolo_e_chili = 1)
  }
function PastaPomodoroScamorza() {
    (ingredienti.scamorza += 1) || (ingredienti.scamorza = 1);
    (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
    (recipes.pasta_pomodoro_scamorza += 1) || (recipes.pasta_pomodoro_scamorza = 1)
}
function CremaZuccaGorgonzola() {
    (ingredienti.zucca += 1) || (ingredienti.zucca = 1);
    (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
    (recipes.crema_zucca_gorgonzola += 1) || (recipes.crema_zucca_gorgonzola = 1)
  }
function GorgonzolaRadicchio() {
  (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
  (ingredienti.noci += 2) || (ingredienti.noci = 2);
  (ingredienti.radicchio += 1) || (ingredienti.radicchio = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.pasta_gorgonzola_e_radicchio += 1) || (recipes.pasta_gorgonzola_e_radicchio = 1)
}
function CremaAsparagi() {
  (ingredienti.asparagi += 2) || (ingredienti.asparagi = 2);
  (ingredienti.schmelzkäse += 1) || (ingredienti.schmelzkäse = 1);
  (recipes.pasta_con_crema_di_asparagi += 1) || (recipes.pasta_con_crema_di_asparagi = 1)
}
function RipienoTartufo() {
  (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
  (ingredienti.ricotta += 2) || (ingredienti.ricotta = 2);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (ingredienti.tartufo += 1) || (ingredienti.tartufo = 1);
  (recipes.pasta_ripiena_di_tartufo += 1) || (recipes.pasta_ripiena_di_tartufo = 1)
}

      // Ravioli, Scarpinocc, Pi Fasacc

      function RavioliRicottaSpinaci() {
        (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
        (ingredienti.ricotta += 2) || (ingredienti.ricotta = 2);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (recipes.ravioli_ricotta_e_spinaci += 1) || (recipes.ravioli_ricotta_e_spinaci = 1)
      }
      function PansotiPnoci() {
        (ingredienti.vino_bianco += 1) || (ingredienti.vino_bianco = 1);
        (ingredienti.erbette += 1) || (ingredienti.erbette = 1);
        (ingredienti.ricotta += 1) || (ingredienti.ricotta = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (recipes.pansoti_con_pesto_pane_pnoci += 1) || (recipes.pansoti_con_pesto_pane_pnoci = 1)
      }
      function PereRicottaZafferanoBurro() {
        (ingredienti.pere += 1) || (ingredienti.pere = 1);
        (ingredienti.ricotta += 2) || (ingredienti.ricotta = 2);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (ingredienti.zafferano += 1) || (ingredienti.zafferano = 1);
        (recipes.ravioli_pere_ricotta_zafferano += 1) || (recipes.ravioli_pere_ricotta_zafferano = 1)
      }
      function Scarpinocc() {
        (ingredienti.pane += 2) || (ingredienti.pane = 2);
        (ingredienti.parmigiano += 2) || (ingredienti.parmigiano = 2);
        (recipes.scarpinocc += 1) || (recipes.scarpinocc = 1)
      }
      function Gyoza() {
        (ingredienti.cavolo_cinese += 2) || (ingredienti.cavolo_cinese = 2);
        (ingredienti.carote += 2) || (ingredienti.carote = 2);
        (ingredienti.zenzero += 2) || (ingredienti.zenzero = 2);
        (recipes.gyoza += 1) || (recipes.gyoza = 1)
      }

      // Tortellini, Cappellacci

      function CappellacciAllaZucca() {
        (ingredienti.zucca += 2) || (ingredienti.zucca = 2);
        (ingredienti.parmigiano += 2) || (ingredienti.parmigiano = 2);
        (recipes.cappellacci_alla_zucca += 1) || (recipes.cappellacci_alla_zucca = 1)
      }
      function VerdeDiCarne() {
        (ingredienti.hackfleisch += 2) || (ingredienti.hackfleisch = 2);
        (ingredienti.prosciutto_crudo += 2) || (ingredienti.prosciutto_crudo = 2);
        (ingredienti.mortadella += 2) || (ingredienti.mortadella = 2);
        (ingredienti.parmigiano += 2) || (ingredienti.parmigiano = 2);
        (recipes.tortellini_verdi_di_carne += 1) || (recipes.tortellini_verdi_di_carne = 1)
      }

      // Pesti, Salse

      function PestoTrapanese() {
        (ingredienti.pinoli += 1) || (ingredienti.pinoli = 1);
        (ingredienti.mandorle += 1) || (ingredienti.mandorle = 1);
        (ingredienti.pomodorini += 1) || (ingredienti.pomodorini = 1);
        (ingredienti.rucola += 1) || (ingredienti.rucola = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (recipes.pesto_trapanese += 1) || (recipes.pesto_trapanese = 1)
      }
      function PestoAlleNoci() {
        (ingredienti.noci += 1) || (ingredienti.noci = 1);
        (ingredienti.pinoli += 1) || (ingredienti.pinoli = 1);
        (ingredienti.pane += 1) || (ingredienti.pane = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (recipes.pesto_alle_noci += 1) || (recipes.pesto_alle_noci = 1)
      }
      function PestoPistacchiPomodorini() {
        (ingredienti.pistacchi += 1) || (ingredienti.pistacchi = 1);
        (ingredienti.pomodorini += 1) || (ingredienti.pomodorini = 1);
        (ingredienti.porri += 1) || (ingredienti.porri = 1);
        (recipes.pesto_pistacchi_e_pomodorini += 1) || (recipes.pesto_pistacchi_e_pomodorini = 1)
      }
      function PestoDiRucola() {
        (ingredienti.rucola += 1) || (ingredienti.rucola = 1);
        (ingredienti.noci += 1) || (ingredienti.noci = 1);
        (ingredienti.mandorle += 1) || (ingredienti.mandorle = 1);
        (ingredienti.pomodorini += 1) || (ingredienti.pomodorini = 1);
        (recipes.pesto_di_rucola += 1) || (recipes.pesto_di_rucola = 1)
      }
      function PestoDiSedano() {
        (ingredienti.sedano += 1) || (ingredienti.sedano = 1);
        (ingredienti.pistacchi += 1) || (ingredienti.pistacchi = 1);
        (ingredienti.mandorle += 1) || (ingredienti.mandorle = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (recipes.pesto_di_sedano += 1) || (recipes.pesto_di_sedano = 1)
      }
      function PestoGenovese() {
        (ingredienti.basilico += 1) || (ingredienti.basilico = 1);
        (ingredienti.pinoli += 1) || (ingredienti.pinoli = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (recipes.pesto_genovese += 1) || (recipes.pesto_genovese = 1)
      }

      // Risotto, Riso

      function RisottoAllaZucca() {
        (ingredienti.zucca += 1) || (ingredienti.zucca = 1);
        (ingredienti.vino_bianco += 1) || (ingredienti.vino_bianco = 1);
        (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (recipes.risotto_alla_zucca += 1) || (recipes.risotto_alla_zucca = 1)
      }
      function RisottoPorroGorgonzola() {
        (ingredienti.porro += 1) || (ingredienti.porro = 1);
        (ingredienti.vino_bianco += 1) || (ingredienti.vino_bianco = 1);
        (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (recipes.risotto_porro_e_gorgonzola += 1) || (recipes.risotto_porro_e_gorgonzola = 1)
      }
      function RisottoZucchine() {
        (ingredienti.zucchine += 1) || (ingredienti.zucchine = 1);
        (ingredienti.vino_bianco += 1) || (ingredienti.vino_bianco = 1);
        (ingredienti.menta += 1) || (ingredienti.menta = 1);
        (recipes.risotto_alle_zucchine += 1) || (recipes.risotto_alle_zucchine = 1)
      }
      function RisoFritto() {
        (ingredienti.zenzero += 1) || (ingredienti.zenzero = 1);
        (ingredienti.carote += 1) || (ingredienti.carote = 1);
        (ingredienti.olio_arachidi += 1) || (ingredienti.olio_arachidi = 1);
        (recipes.riso_fritto += 1) || (recipes.riso_fritto = 1)
      }

      // Minestre

      function Vichyssoise() {
        (ingredienti.panna += 1) || (ingredienti.panna = 1);
        (ingredienti.patate += 1) || (ingredienti.patate = 1);
        (ingredienti.porri += 1) || (ingredienti.porri = 1);
        (recipes.vichyssoise += 1) || (recipes.vichyssoise = 1)
      }
      function Stracciatella() {
        (ingredienti.pastina += 1) || (ingredienti.pastina = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (recipes.stracciatella += 1) || (recipes.stracciatella = 1)
      }

// Panetteria

function Hamburger() {
  (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
  (ingredienti.fagioli += 1) || (ingredienti.fagioli = 1);
  (ingredienti.cipolle_rosse += 1) || (ingredienti.cipolle_rosse = 1);
  (ingredienti.burro += 1) || (ingredienti.burro = 1);
  (ingredienti.rucola += 1) || (ingredienti.rucola = 1);
  (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
  (recipes.hamburger_di_funghi_e_fagioli += 1) || (recipes.hamburger_di_funghi_e_fagioli = 1)
}
function FrenchToast() {
  (ingredienti.pane += 1) || (ingredienti.pane = 1);
  (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
  (recipes.french_toast += 1) || (recipes.french_toast = 1)
}
function Strangolapreti() {
  (ingredienti.pane += 1) || (ingredienti.pane = 1);
  (ingredienti.bietole += 1) || (ingredienti.bietole = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.strangolapreti += 1) || (recipes.strangolapreti = 1)
}
function Canederli() {
  (ingredienti.pane += 1) || (ingredienti.pane = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.canederli += 1) || (recipes.canederli = 1)
}
function PolentaFunghiGorgonzola() {
  (ingredienti.polenta += 1) || (ingredienti.polenta = 1);
  (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
  (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (recipes.polenta_funghi_e_gorgonzola += 1) || (recipes.polenta_funghi_e_gorgonzola = 1)
}
function PanettoneGastronomico() {
  (recipes.panettone_gastronomico += 1) || (recipes.panettone_gastronomico = 1)
}
function PolpetteSedanoPatate() {
  (ingredienti.sedano += 1) || (ingredienti.sedano = 1);
  (ingredienti.patate += 1) || (ingredienti.patate = 1);
  (ingredienti.paniermehl += 1) || (ingredienti.paniermehl = 1);
  (recipes.polpette_di_sedano_e_patate += 1) || (recipes.polpette_di_sedano_e_patate = 1)
}

      // Crescia

      function Crescia() {
        (ingredienti.strutto += 1) || (ingredienti.strutto = 1);
        (recipes.crescia += 1) || (recipes.crescia = 1)
      }
      function CresciaHummus() {
        (ingredienti.lenticchie_rosse += 1) || (ingredienti.lenticchie_rosse = 1);
        (ingredienti.carote += 1) || (ingredienti.carote = 1);
        (recipes.crescia_con_hummus += 1) || (recipes.crescia_con_hummus = 1)
      }
      function CresciaOrtolana() {
        (ingredienti.zucchine += 1) || (ingredienti.zucchine = 1);
        (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
        (ingredienti.aceto_balsamico +=1) || (ingredienti.aceto_balsamico+=1);
        (recipes.crescia_ortolana += 1) || (recipes.crescia_ortolana = 1)
      }
      function CresciaAutunno() {
        (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
        (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
        (ingredienti.aceto_balsamico += 1) || (ingredienti.aceto_balsamico = 1);
        (recipes.crescia_autunno += 1) || (recipes.crescia_autunno = 1)
      }
      function CresciaProvenzale() {
        (ingredienti.tonno += 1) || (ingredienti.tonno = 1);
        (ingredienti.cipolle_rosse += 1) || (ingredienti.cipolle_rosse = 1);
        (recipes.crescia_provenzale += 1) || (recipes.crescia_provenzale = 1)
      }
      function CresciaSquacqueroneRucolaPomodorini() {
        (ingredienti.rucola += 1) || (ingredienti.rucola = 1);
        (ingredienti.pomodorini += 1) || (ingredienti.pomodorini = 1);
        (ingredienti.stracchino += 1) || (ingredienti.stracchino = 1);
        (recipes.crescia_squacquerone_rucola_e_pomodorini += 1) || (recipes.crescia_squacquerone_rucola_e_pomodorini = 1)
      }
      function CresciaBrie() {
        (ingredienti.brie += 1) || (ingredienti.brie = 1);
        (ingredienti.mele += 1) || (ingredienti.mele = 1);
        (ingredienti.ceci += 1) || (ingredienti.ceci = 1);
        (recipes.crescia_al_brie += 1) || (recipes.crescia_al_brie = 1)
      }

      // Sfoglia

      function SfogliaZucchineUovaSpinaci() {
        (ingredienti.zucchine += 1) || (ingredienti.zucchine = 1);
        (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
        (ingredienti.scamorza += 1) || (ingredienti.scamorza = 1);
        (recipes.sfoglia_zucchine_uova_e_spinaci += 1) || (recipes.sfoglia_zucchine_uova_e_spinaci = 1)
      }
      function PizzetteSfoglia() {
        (ingredienti.mozzarella += 1) || (ingredienti.mozzarella = 1);
        (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
        (recipes.pizzette_di_sfoglia += 1) || (recipes.pizzette_di_sfoglia = 1)
      }
      function SfogliaPatateRicotta() {
        (ingredienti.patate += 1) || (ingredienti.patate = 1);
        (ingredienti.ricotta += 1) || (ingredienti.ricotta = 1);
        (recipes.sfoglia_patate_e_ricotta += 1) || (recipes.sfoglia_patate_e_ricotta = 1)
      }

      // Pizza

      function PizzaMargherita() {
        (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
        (recipes.pizza_margherita += 1) || (recipes.pizza_margherita = 1)
      }
      function PizzaQuattroFormaggi() {
        (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
        (recipes.pizza_quattro_formaggi += 1) || (recipes.pizza_quattro_formaggi = 1)
      }
      function PizzaCipollaTonno() {
        (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
        (ingredienti.tonno += 1) || (ingredienti.tonno = 1);
        (recipes.pizza_cipolla_e_tonno += 1) || (recipes.pizza_cipolla_e_tonno = 1)
      }
      function PizzaCavolfiore() {
        (ingredienti.blumenkohl += 1) || (ingredienti.blumenkohl = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
        (recipes.finta_pizza_al_cavolfiore += 1) || (recipes.finta_pizza_al_cavolfiore = 1)
      }

      // Focaccia

      function FocacciaCipollaGorgonzola() {
        (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
        (recipes.focaccia_cipolla_e_gorgonzola += 1) || (recipes.focaccia_cipolla_e_gorgonzola = 1)
      }
      function FocacciaPomodoriOlive() {
        (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
        (ingredienti.olive += 1) || (ingredienti.olive = 1);
        (recipes.focaccia_pomodorini_e_olive += 1) || (recipes.focaccia_pomodorini_e_olive = 1)
      }
      function FocacciaPatateRosmarino() {
        (ingredienti.patate += 1) || (ingredienti.patate = 1);
        (recipes.focaccia_patate_e_rosmarino += 1) || (recipes.focaccia_patate_e_rosmarino = 1)
      }

      // Frittura

      function Gnocco() {
        (ingredienti.strutto += 1) || (ingredienti.strutto = 1);
        (ingredienti.mortadella += 1) || (ingredienti.mortadella = 1);
        (ingredienti.pancetta += 1) || (ingredienti.pancetta = 1);
        (ingredienti.pecorino += 1) || (ingredienti.pecorino = 1);
        (recipes.gnocco_fritto += 1) || (recipes.gnocco_fritto = 1)
      }
      function Panzerotti() {
        (ingredienti.friarielli += 1) || (ingredienti.friarielli = 1);
        (ingredienti.mozzarella += 1) || (ingredienti.mozzarella = 1);
        (ingredienti.mandorle += 1) || (ingredienti.mandorle = 1);
        (recipes.panzerotti += 1) || (recipes.panzerotti = 1)
      }
      function OliveAscolane() {
        (ingredienti.hackfleisch += 1) || (ingredienti.hackfleisch = 1);
        (ingredienti.olive += 1) || (ingredienti.olive = 1);
        (ingredienti.pane += 1) || (ingredienti.pane = 1);
        (recipes.olive_ascolane += 1) || (recipes.olive_ascolane = 1)
      }
      function ZucchineAllaRomana() {
        (ingredienti.zucchine += 1) || (ingredienti.zucchine = 1);
        (recipes.zucchine_alla_romana += 1) || (recipes.zucchine_alla_romana = 1)
      }
      function MozzarellaInCarrozza() {
        (ingredienti.mozzarella += 1) || (ingredienti.mozzarella = 1);
        (ingredienti.pane += 1) || (ingredienti.pane = 1);
        (ingredienti.paniermehl += 1) || (ingredienti.paniermehl = 1);
        (recipes.mozzarella_in_carrozza += 1) || (recipes.mozzarella_in_carrozza = 1)
      }

// Carne
function Ragù() {
    (ingredienti.hackfleisch += 1) || (ingredienti.hackfleisch = 1);
    (ingredienti.carote += 1) || (ingredienti.carote = 1);
    (ingredienti.sedano += 1) || (ingredienti.sedano = 1);
    (ingredienti.vino_rosso += 1) || (ingredienti.vino_rosso = 1);
    (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
    (recipes.ragù += 1) || (recipes.ragù = 1)
  }
function LasagnaRagù () {
    Ragù();
    (recipes.lasagna_col_ragù += 1) || (recipes.lasagna_col_ragù = 1)
  }
function LasagnaBianca() {
  (ingredienti.prosciutto_cotto += 1) || (ingredienti.prosciutto_cotto = 1);
  (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
  (recipes.lasagna_bianca += 1) || (recipes.lasagna_bianca = 1)
}
function CrispyMcBacon () {
  (ingredienti.cheddar += 1) || (ingredienti.cheddar = 1);
  (ingredienti.bacon += 1) || (ingredienti.bacon = 1);
  (ingredienti.hackfleisch += 1) || (ingredienti.hackfleisch = 1);
  (ingredienti.gewürzgurken += 1) || (ingredienti.gewürzgurken = 1);
  (ingredienti.aceto += 1) || (ingredienti.aceto = 1);
  (recipes.crispy_McBacon += 1) || (recipes.crispy_McBacon = 1)
}
function KaeseLauch() {
    (ingredienti.hackfleisch += 1) || (ingredienti.hackfleisch = 1);
    (ingredienti.saure_sahne += 1) || (ingredienti.saure_sahne = 1);
    (ingredienti.schmelzkäse += 1) || (ingredienti.schmelzkäse = 1);
    (ingredienti.porro += 1) || (ingredienti.porro = 1);
    (recipes.Kaeselauchsuppe += 1) || (recipes.Kaeselauchsuppe = 1)
  }
function CroquetasDeJamon() {
    (ingredienti.prosciutto_cotto += 1) || (ingredienti.prosciutto_cotto = 1);
    (recipes.croquetas_de_jamon += 1) || (recipes.croquetas_de_jamon = 1)
  }
function BratwurstSauerkraut () {
  (ingredienti.bratwurst += 1) || (ingredienti.bratwurst = 1);
  (ingredienti.sauerkraut += 1) || (ingredienti.sauerkraut = 1);
  (ingredienti.patate += 1) || (ingredienti.patate = 1);
  (recipes.bratwurst_und_Sauerkraut += 1) || (recipes.bratwurst_und_Sauerkraut = 1)
}
function AllaFilippo() {
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (ingredienti.vino_rosso += 1) || (ingredienti.vino_rosso = 1);
  (ingredienti.salsiccia += 1) || (ingredienti.salsiccia = 1);
  (recipes.pasta_alla_Filippo += 1) || (recipes.pasta_alla_Filippo = 1)
}
function PastaSalsicciaZucca() {
  (recipes.pasta_salsiccia_e_zucca += 1) || (recipes.pasta_salsiccia_e_zucca = 1)
}
function Currywurst() {
  (ingredienti.bratwurst += 1) || (ingredienti.bratwurst = 1);
  (ingredienti.worcestershire_sauce += 1) || (ingredienti.worcestershire_sauce = 1);
  (ingredienti.tomato_paste += 1) || (ingredienti.tomato_paste = 1);
  (recipes.currywurst += 1) || (recipes.currywurst = 1)
}

      // Pollo

      function TikkaMasala() {
        (recipes.tikka_masala += 1) || (recipes.tikka_masala = 1)
      }
      function RedCurryChicken() {
        (recipes.red_curry_chicken += 1) || (recipes.red_curry_chicken = 1)
      }

// Secondi

function Parmigiana() {
  (ingredienti.zucchine += 2) || (ingredienti.zucchine = 2);
  (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.parmigiana += 1) || (recipes.parmigiana = 1)
}
function SformatoZucca() {
  (ingredienti.zucca += 1) || (ingredienti.zucca = 1);
  (ingredienti.carote += 1) || (ingredienti.carote = 1);
  (ingredienti.mozzarella += 1) || (ingredienti.mozzarella = 1);
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (recipes.sformato_di_zucca += 1) || (recipes.sformato_di_zucca = 1)
}

// Uova

      function Crepe4formaggi() {
        (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
        (ingredienti.mozzarella += 1) || (ingredienti.mozzarella = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (ingredienti.scamorza += 1) || (ingredienti.scamorza = 1);
        (ingredienti.noci += 1) || (ingredienti.noci = 1);
        (recipes.crepe_ai_4_formaggi += 1) || (recipes.crepe_ai_4_formaggi = 1)
      }
      function Deviled() {
        (ingredienti.maionese += 1) || (ingredienti.maionese = 1);
        (ingredienti.tonno += 1) || (ingredienti.tonno = 1);
        (recipes.deviled_eggs += 1) || (recipes.deviled_eggs = 1)
      }
      function InSalsaPomodoro() {
        (recipes.uova_in_salsa_di_pomodoro += 1) || (recipes.uova_in_salsa_di_pomodoro = 1)
      }
      function Reibekuchen() {
        (ingredienti.patate += 1) || (ingredienti.patate = 1);
        (recipes.reibekuchen += 1) || (recipes.reibekuchen = 1)
      }

// Sauces

      function BabaGanoush() {
        (ingredienti.melanzane += 1) || (ingredienti.melanzane = 1);
        (ingredienti.tahini += 1) || (ingredienti.tahini = 1);
        (recipes.baba_ganoush += 1) || (recipes.baba_ganoush = 1)
      }
      function ThaiChiliSauce() {
        (recipes.thai_chili_sauce += 1) || (recipes.thai_chili_sauce = 1)
      }
      function CremaBroccoliCeci() {
        (ingredienti.broccoli += 1) || (ingredienti.broccoli = 1);
        (ingredienti.ceci += 1) || (ingredienti.ceci = 1);
        (ingredienti.lenticchie += 1) || (ingredienti.lenticchie = 1);
        (recipes.crema_di_broccoli_e_ceci += 1) || (recipes.crema_di_broccoli_e_ceci = 1)
      }

// Insalate

      function InsalataGreca() {
        (ingredienti.olive += 1) || (ingredienti.olive = 1);
        (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
        (ingredienti.feta += 1) || (ingredienti.feta = 1);
        (ingredienti.cipolle_rosse += 1) || (ingredienti.cipolle_rosse = 1);
        (ingredienti.cetriolo += 1) || (ingredienti.cetriolo = 1);
        (recipes.insalata_greca += 1) || (recipes.insalata_greca = 1)
      }
      function InsalataCaesar() {
        (ingredienti.pane += 1) || (ingredienti.pane = 1);
        (ingredienti.insalata += 1) || (ingredienti.insalata = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (ingredienti.succo_di_limone += 1) || (ingredienti.succo_di_limone = 1);
        (recipes.insalata_Caesar += 1) || (recipes.insalata_Caesar = 1)
      }
      function InsalataEstiva() {
        (ingredienti.mozzarelline += 1) || (ingredienti.mozzarelline = 1);
        (ingredienti.mais += 1) || (ingredienti.mais = 1);
        (ingredienti.olive += 1) || (ingredienti.olive = 1);
        (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
        (ingredienti.cipolle_rosse += 1) || (ingredienti.cipolle_rosse = 1);
        (recipes.insalata_estiva += 1) || (recipes.insalata_estiva = 1)
      }


// Dolci

function Camille() {
  (ingredienti.carote += 1) || (ingredienti.carote = 1);
  (ingredienti.succo_di_arancia += 1) || (ingredienti.succo_di_arancia = 1);
  (ingredienti.mandorle += 1) || (ingredienti.mandorle = 1);
  (recipes.camille += 1) || (recipes.camille = 1)
}
function OttolenghiCookies() {
  (ingredienti.brown_sugar += 1) || (ingredienti.brown_sugar = 1);
  (ingredienti.cioccolato_bianco += 1) || (ingredienti.cioccolato_bianco = 1);
  (ingredienti.pere += 1) || (ingredienti.pere = 1);
  (ingredienti.lime += 1) || (ingredienti.lime = 1);
  (recipes.ottolenghi_pear_cookies += 1) || (recipes.ottolenghi_pear_cookies = 1)
}
function PereVino() {
  (ingredienti.pere += 1) || (ingredienti.pere = 1);
  (ingredienti.vino_rosso += 1) || (ingredienti.vino_rosso = 1);
  (ingredienti.panna_montata += 1) || (ingredienti.panna_montata = 1);
  (recipes.pere_e_vino += 1) || (recipes.pere_e_vino = 1)
}
function PistachioEclaire () {
  (ingredienti.burro += 1) || (ingredienti.burro = 1);
  (ingredienti.gelatina += 1) || (ingredienti.gelatina = 1);
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (ingredienti.cioccolato += 1) || (ingredienti.cioccolato = 1);
  (ingredienti.pistacchi += 1) || (ingredienti.pistacchi = 1);
  (ingredienti.mandorle += 1) || (ingredienti.mandorle = 1);
  (ingredienti.fragole += 1) || (ingredienti.fragole = 1);
  (recipes.pistachio_eclaire += 1) || (recipes.pistachio_eclaire = 1)
}
function Cicerchiata() {
  (ingredienti.vino_liquoroso += 1) || (ingredienti.vino_liquoroso = 1);
  (ingredienti.succo_di_limone += 1) || (ingredienti.succo_di_limone = 1);
  (recipes.cicerchiata += 1) || (recipes.cicerchiata = 1)
}
function PannaCotta() {
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (ingredienti.agar_agar += 1) || (ingredienti.agar_agar = 1);
  (ingredienti.berries += 1) || (ingredienti.berries = 1);
  (ingredienti.succo_di_limone += 1) || (ingredienti.succo_di_limone = 1);
  (recipes.panna_cotta += 1) || (recipes.panna_cotta = 1)
}
function Waffles() {
  (recipes.waffles += 1) || (recipes.waffles = 1)
}
function Pancakes() {
  (recipes.pancakes += 1) || (recipes.pancakes = 1)
}
function Milkshake() {
  (ingredienti.marmellata += 1) || (ingredienti.marmellata = 1);
  (ingredienti.menta += 1) || (ingredienti.menta = 1);
  (ingredienti.berries += 1) || (ingredienti.berries = 1);
  (ingredienti.succo_di_limone += 1) || (ingredienti.succo_di_limone = 1);
  (ingredienti.gelato_alla_vaniglia += 1) || (ingredienti.gelato_alla_vaniglia = 1);
  (recipes.milkshake += 1) || (recipes.milkshake = 1)
}
function Cestini() {
  CremaPasticcera();
  (ingredienti.berries += 1) || (ingredienti.berries = 1);
  (recipes.cestini += 1) || (recipes.cestini = 1)
}
function Profiteroles() {
  (ingredienti.cioccolato_fondente += 1) || (ingredienti.cioccolato_fondente = 1);
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (ingredienti.zucchero_velo += 1) || (ingredienti.zucchero_velo = 1);
  (recipes.profiteroles += 1) || (recipes.profiteroles = 1)
}
function Tiramisù() {
  (ingredienti.mascarpone += 1) || (ingredienti.mascarpone = 1);
  (ingredienti.caffè += 1) || (ingredienti.caffè = 1);
  (ingredienti.savoiardi += 1) || (ingredienti.savoiardi = 1);
  (ingredienti.cacao += 1) || (ingredienti.cacao = 1);
  (recipes.tiramisù += 1) || (recipes.tiramisù = 1)
}
function CremaPasticcera() {
  (recipes.crema_pasticcera += 1) || (recipes.crema_pasticcera = 1)
}
function CrepeKompottPinoli() {
  (ingredienti.mele += 1) || (ingredienti.mele = 1);
  (recipes.crepe_kompott_e_pinoli += 1) || (recipes.crepe_kompott_e_pinoli = 1)
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
function Brodo() {
  (ingredienti.brodo += 1) || (ingredienti.brodo = 1);
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
