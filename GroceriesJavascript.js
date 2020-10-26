function DefineIngredienti() {
    var retrievedObject = localStorage.getItem("ingredienti");
    if (retrievedObject) {
    ingredienti = JSON.parse(retrievedObject);
    } else {
    ingredienti = {};
  }
}

function Aggiunte() {
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
  AppendToList(TextNode, ingredienti[TextNode])

  ;localStorage.setItem("ingredienti", JSON.stringify(ingredienti));
}

function generate_list() {
  document.getElementById("list_groceries").innerHTML = "";
  for (const [key, value] of Object.entries(ingredienti)) {
    if (value > 0) {
      AppendToList(key, value)
    };
  };
  localStorage.setItem("ingredienti", JSON.stringify(ingredienti));
  document.getElementById("end").scrollIntoView()
}

function AppendToList(key, value) {
  var box = document.createElement("INPUT");
  box.type = "checkbox";
  box.name = key;
  box.id = "box" + key;

  var label = document.createElement("LABEL")
  label.htmlFor = "box" + key;
  var TextNode = " " + key.charAt(0).toUpperCase() + key.slice(1) + " " + value
  var TextNode = TextNode.replace("_", " ");
  var TextNode = document.createTextNode(TextNode);
  label.appendChild(TextNode);

  var parag = document.createElement("P")
  parag.id = key;
  parag.appendChild(box);
  parag.appendChild(label);

  document.getElementById("list_groceries").appendChild(parag);
}

function clear_list() {
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
  function GoToUtilita() {
    document.getElementById("liUtilita").scrollIntoView()
  }
  function GoToFondamentali() {
    document.getElementById("liFondamentali").scrollIntoView()
  }



// Following, all our recipes

function Aglione() {
}
function AglioOlio() {
}
function Soffritto() {
  (ingredienti.carote += 2) || (ingredienti.carote = 2);
  (ingredienti.sedano += 2) || (ingredienti.sedano = 2);
}
function SfogliaLorda() {
  (ingredienti.ricotta += 2) || (ingredienti.ricotta = 2);
  (ingredienti.parmigiano += 2) || (ingredienti.parmigiano = 2);
  (ingredienti.pomodorini += 1) || (ingredienti.pomodorini = 1);
}
function Cannelloni() {
    (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
    (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
    (ingredienti.burro += 1) || (ingredienti.burro = 1);
}
function LasagnaRolls() {
  (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
  (ingredienti.ricotta += 1) || (ingredienti.ricotta = 1);
}
function PaneCipolle() {
    (ingredienti.pane += 1) || (ingredienti.pane = 1);
    (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
    (ingredienti.cipolle += 1) || (ingredienti.cipolle = 1);
}
function GorgonzolaRadicchio() {
  (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
  (ingredienti.noci += 2) || (ingredienti.noci = 2);
  (ingredienti.radicchio += 1) || (ingredienti.radicchio = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
}
function CremaAsparagi() {
  (ingredienti.asparagi += 2) || (ingredienti.asparagi = 2);
  (ingredienti.schmelzkäse += 1) || (ingredienti.schmelzkäse = 1);
}
function RipienoTartufo() {
  (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
  (ingredienti.ricotta += 2) || (ingredienti.ricotta = 2);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  (ingredienti.tartufo += 1) || (ingredienti.tartufo = 1);
}

      // Ravioli, Scarpinocc, Pi Fasacc

      function RavioliRicottaSpinaci() {
        (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
        (ingredienti.ricotta += 2) || (ingredienti.ricotta = 2);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
      }
      function PereRicottaZafferanoBurro() {
        (ingredienti.pere += 1) || (ingredienti.pere = 1);
        (ingredienti.ricotta += 2) || (ingredienti.ricotta = 2);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (ingredienti.zafferano += 1) || (ingredienti.zafferano = 1);
      }
      function Scarpinocc() {
        (ingredienti.pane += 2) || (ingredienti.pane = 2);
        (ingredienti.parmigiano += 2) || (ingredienti.parmigiano = 2);
      }
      function Gyoza() {
        (ingredienti.cavolo_cinese += 2) || (ingredienti.cavolo_cinese = 2);
        (ingredienti.carote += 2) || (ingredienti.carote = 2);
        (ingredienti.zenzero += 2) || (ingredienti.zenzero = 2);
      }

      // Tortellini, Cappellacci

      function CappellacciAllaZucca() {
        (ingredienti.zucca += 2) || (ingredienti.zucca = 2);
        (ingredienti.parmigiano += 2) || (ingredienti.parmigiano = 2);
      }
      function VerdeDiCarne() {
        (ingredienti.hackfleisch += 2) || (ingredienti.hackfleisch = 2);
        (ingredienti.prosciutto_crudo += 2) || (ingredienti.prosciutto_crudo = 2);
        (ingredienti.mortadella += 2) || (ingredienti.mortadella = 2);
        (ingredienti.parmigiano += 2) || (ingredienti.parmigiano = 2);
      }

      // Pesti, Salse

      function PestoTrapanese() {
        (ingredienti.pinoli += 1) || (ingredienti.pinoli = 1);
        (ingredienti.mandorle += 1) || (ingredienti.mandorle = 1);
        (ingredienti.pomodorini += 1) || (ingredienti.pomodorini = 1);
        (ingredienti.rucola += 1) || (ingredienti.rucola = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
      }
      function PestoAlleNoci() {
        (ingredienti.noci += 1) || (ingredienti.noci = 1);
        (ingredienti.pinoli += 1) || (ingredienti.pinoli = 1);
        (ingredienti.pane += 1) || (ingredienti.pane = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
      }
      function PestoPistacchiPomodorini() {
        (ingredienti.pistacchi += 1) || (ingredienti.pistacchi = 1);
        (ingredienti.pomodorini += 1) || (ingredienti.pomodorini = 1);
        (ingredienti.porri += 1) || (ingredienti.porri = 1);
      }
      function PestoDiRucola() {
        (ingredienti.rucola += 1) || (ingredienti.rucola = 1);
        (ingredienti.noci += 1) || (ingredienti.noci = 1);
        (ingredienti.mandorle += 1) || (ingredienti.mandorle = 1);
        (ingredienti.pomodorini += 1) || (ingredienti.pomodorini = 1);
      }
      function PestoDiSedano() {
        (ingredienti.sedano += 1) || (ingredienti.sedano = 1);
        (ingredienti.pistacchi += 1) || (ingredienti.pistacchi = 1);
        (ingredienti.mandorle += 1) || (ingredienti.mandorle = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
      }
      function PestoGenovese() {
        (ingredienti.basilico += 1) || (ingredienti.basilico = 1);
        (ingredienti.pinoli += 1) || (ingredienti.pinoli = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
      }

      // Risotto, Riso

      function RisottoAllaZucca() {
        (ingredienti.zucca += 1) || (ingredienti.zucca = 1);
        (ingredienti.vino_bianco += 1) || (ingredienti.vino_bianco = 1);
        (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
      }
      function RisottoPorroGorgonzola() {
        (ingredienti.porro += 1) || (ingredienti.porro = 1);
        (ingredienti.vino_bianco += 1) || (ingredienti.vino_bianco = 1);
        (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
      }
      function RisottoZucchine() {
        (ingredienti.zucchine += 1) || (ingredienti.zucchine = 1);
        (ingredienti.vino_bianco += 1) || (ingredienti.vino_bianco = 1);
        (ingredienti.menta += 1) || (ingredienti.menta = 1);
      }
      function RisoFritto() {
        (ingredienti.zenzero += 1) || (ingredienti.zenzero = 1);
        (ingredienti.carote += 1) || (ingredienti.carote = 1);
        (ingredienti.olio_arachidi += 1) || (ingredienti.olio_arachidi = 1);
      }

      // Minestre

      function Vichyssoise() {
        (ingredienti.panna += 1) || (ingredienti.panna = 1);
        (ingredienti.patate += 1) || (ingredienti.patate = 1);
        (ingredienti.porri += 1) || (ingredienti.porri = 1);
      }
      function Stracciatella() {
        (ingredienti.pastina += 1) || (ingredienti.pastina = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
      }

// Panetteria

function Hamburger() {
  (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
  (ingredienti.fagioli += 1) || (ingredienti.fagioli = 1);
  (ingredienti.cipolle_rosse += 1) || (ingredienti.cipolle_rosse = 1);
  (ingredienti.burro += 1) || (ingredienti.burro = 1);
  (ingredienti.rucola += 1) || (ingredienti.rucola = 1);
  (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
}
function FrenchToast() {
  (ingredienti.pane += 1) || (ingredienti.pane = 1);
  (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
}
function Strangolapreti() {
  (ingredienti.pane += 1) || (ingredienti.pane = 1);
  (ingredienti.bietole += 1) || (ingredienti.bietole = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
}
function Canederli() {
  (ingredienti.pane += 1) || (ingredienti.pane = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
}
function PolentaFunghiGorgonzola() {
  (ingredienti.polenta += 1) || (ingredienti.polenta = 1);
  (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
  (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
}
function PanettoneGastronomico() {
}
function PolpetteSedanoPatate() {
  (ingredienti.sedano += 1) || (ingredienti.sedano = 1);
  (ingredienti.patate += 1) || (ingredienti.patate = 1);
  (ingredienti.paniermehl += 1) || (ingredienti.paniermehl = 1);
}

      // Crescia

      function Crescia() {
        (ingredienti.strutto += 1) || (ingredienti.strutto = 1);
      }
      function CresciaHummus() {
        (ingredienti.lenticchie_rosse += 1) || (ingredienti.lenticchie_rosse = 1);
        (ingredienti.carote += 1) || (ingredienti.carote = 1);
      }
      function CresciaOrtolana() {
        (ingredienti.zucchine += 1) || (ingredienti.zucchine = 1);
        (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
        (ingredienti.aceto_balsamico +=1) || (ingredienti.aceto_balsamico+=1);
      }
      function CresciaAutunno() {
        (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
        (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
        (ingredienti.aceto_balsamico += 1) || (ingredienti.aceto_balsamico = 1);
      }
      function CresciaProvenzale() {
        (ingredienti.tonno += 1) || (ingredienti.tonno = 1);
        (ingredienti.cipolle_rosse += 1) || (ingredienti.cipolle_rosse = 1);
      }
      function CresciaSquacqueroneRucolaPomodorini() {
        (ingredienti.rucola += 1) || (ingredienti.rucola = 1);
        (ingredienti.pomodorini += 1) || (ingredienti.pomodorini = 1);
        (ingredienti.stracchino += 1) || (ingredienti.stracchino = 1);
      }
      function CresciaBrie() {
        (ingredienti.brie += 1) || (ingredienti.brie = 1);
        (ingredienti.mele += 1) || (ingredienti.mele = 1);
        (ingredienti.ceci += 1) || (ingredienti.ceci = 1);
      }

      // Sfoglia

      function SfogliaZucchineUovaSpinaci() {
        (ingredienti.zucchine += 1) || (ingredienti.zucchine = 1);
        (ingredienti.spinaci += 1) || (ingredienti.spinaci = 1);
        (ingredienti.scamorza += 1) || (ingredienti.scamorza = 1);
      }
      function PizzetteSfoglia() {
        (ingredienti.mozzarella += 1) || (ingredienti.mozzarella = 1);
        (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
      }
      function SfogliaPatateRicotta() {
        (ingredienti.patate += 1) || (ingredienti.patate = 1);
        (ingredienti.ricotta += 1) || (ingredienti.ricotta = 1);
      }

      // Pizza

      function PizzaMargherita() {
        (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
      }
      function PizzaQuattroFormaggi() {
        (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
      }
      function PizzaCipollaTonno() {
        (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
        (ingredienti.tonno += 1) || (ingredienti.tonno = 1);
      }
      function PizzaCavolfiore() {
        (ingredienti.blumenkohl += 1) || (ingredienti.blumenkohl = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
      }

      // Focaccia

      function FocacciaCipollaGorgonzola() {
        (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
      }
      function FocacciaPomodoriOlive() {
        (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
        (ingredienti.olive += 1) || (ingredienti.olive = 1);
      }
      function FocacciaPatateRosmarino() {
        (ingredienti.patate += 1) || (ingredienti.patate = 1);
      }

      // Frittura

      function Gnocco() {
        (ingredienti.strutto += 1) || (ingredienti.strutto = 1);
        (ingredienti.mortadella += 1) || (ingredienti.mortadella = 1);
        (ingredienti.pancetta += 1) || (ingredienti.pancetta = 1);
        (ingredienti.pecorino += 1) || (ingredienti.pecorino = 1);
      }
      function OliveAscolane() {
        (ingredienti.hackfleisch += 1) || (ingredienti.hackfleisch = 1);
        (ingredienti.olive += 1) || (ingredienti.olive = 1);
        (ingredienti.pane += 1) || (ingredienti.pane = 1);
      }
      function ZucchineAllaRomana() {
        (ingredienti.zucchine += 1) || (ingredienti.zucchine = 1);
      }
      function MozzarellaInCarrozza() {
        (ingredienti.mozzarella += 1) || (ingredienti.mozzarella = 1);
        (ingredienti.pane += 1) || (ingredienti.pane = 1);
        (ingredienti.paniermehl += 1) || (ingredienti.paniermehl = 1);
      }

// Carne
function Ragù() {
    (ingredienti.carote += 1) || (ingredienti.carote = 1);
    (ingredienti.sedano += 1) || (ingredienti.sedano = 1);
    (ingredienti.vino_rosso += 1) || (ingredienti.vino_rosso = 1);
    (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
  }
function LasagnaRagù () {
    Ragù();
}
function LasagnaBianca() {
  (ingredienti.prosciutto_cotto += 1) || (ingredienti.prosciutto_cotto = 1);
  (ingredienti.funghi += 1) || (ingredienti.funghi = 1);
}
function CrispyMcBacon () {
  (ingredienti.cheddar += 1) || (ingredienti.cheddar = 1);
  (ingredienti.bacon += 1) || (ingredienti.bacon = 1);
  (ingredienti.hackfleisch += 1) || (ingredienti.hackfleisch = 1);
  (ingredienti.gewürzgurken += 1) || (ingredienti.gewürzgurken = 1);
  (ingredienti.aceto += 1) || (ingredienti.aceto = 1);
}
function KaeseLauch() {
    (ingredienti.hackfleisch += 1) || (ingredienti.hackfleisch = 1);
    (ingredienti.saure_sahne += 1) || (ingredienti.saure_sahne = 1);
    (ingredienti.schmelzkäse += 1) || (ingredienti.schmelzkäse = 1);
    (ingredienti.porro += 1) || (ingredienti.porro = 1);
  }
function CroquetasDeJamon() {
    (ingredienti.prosciutto_cotto += 1) || (ingredienti.prosciutto_cotto = 1);
}
function BratwurstSauerkraut () {
  (ingredienti.bratwurst += 1) || (ingredienti.bratwurst = 1);
  (ingredienti.sauerkraut += 1) || (ingredienti.sauerkraut = 1);
  (ingredienti.patate += 1) || (ingredienti.patate = 1);
}
function AllaFilippo() {
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (ingredienti.vino_rosso += 1) || (ingredienti.vino_rosso = 1);
  (ingredienti.salsiccia += 1) || (ingredienti.salsiccia = 1);
}
function PastaSalsicciaZucca() {
}

      // Pollo

      function TikkaMasala() {
      }
      function RedCurryChicken() {
      }

// Secondi

function Parmigiana() {
  (ingredienti.zucchine += 2) || (ingredienti.zucchine = 2);
  (ingredienti.mozzarella += 2) || (ingredienti.mozzarella = 2);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
}
function SformatoZucca() {
  (ingredienti.zucca += 1) || (ingredienti.zucca = 1);
  (ingredienti.carote += 1) || (ingredienti.carote = 1);
  (ingredienti.mozzarella += 1) || (ingredienti.mozzarella = 1);
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
}

// Uova

      function Crepe4formaggi() {
        (ingredienti.gorgonzola += 1) || (ingredienti.gorgonzola = 1);
        (ingredienti.mozzarella += 1) || (ingredienti.mozzarella = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (ingredienti.scamorza += 1) || (ingredienti.scamorza = 1);
        (ingredienti.noci += 1) || (ingredienti.noci = 1);
      }
      function Deviled() {
        (ingredienti.maionese += 1) || (ingredienti.maionese = 1);
        (ingredienti.tonno += 1) || (ingredienti.tonno = 1);
      }
      function InSalsaPomodoro() {
      }
      function Reibekuchen() {
        (ingredienti.patate += 1) || (ingredienti.patate = 1);
      }

// Sauces

      function BabaGanoush() {
        (ingredienti.melanzane += 1) || (ingredienti.melanzane = 1);
        (ingredienti.tahini += 1) || (ingredienti.tahini = 1);
      }
      function ThaiChiliSauce() {
      }
      function CremaBroccoliCeci() {
        (ingredienti.broccoli += 1) || (ingredienti.broccoli = 1);
        (ingredienti.ceci += 1) || (ingredienti.ceci = 1);
        (ingredienti.lenticchie += 1) || (ingredienti.lenticchie = 1);
      }

// Insalate

      function InsalataGreca() {
        (ingredienti.olive += 1) || (ingredienti.olive = 1);
        (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
        (ingredienti.feta += 1) || (ingredienti.feta = 1);
        (ingredienti.cipolle_rosse += 1) || (ingredienti.cipolle_rosse = 1);
        (ingredienti.cetriolo += 1) || (ingredienti.cetriolo = 1);
      }
      function InsalataCaesar() {
        (ingredienti.pane += 1) || (ingredienti.pane = 1);
        (ingredienti.insalata += 1) || (ingredienti.insalata = 1);
        (ingredienti.parmigiano += 1) || (ingredienti.parmigiano = 1);
        (ingredienti.succo_di_limone += 1) || (ingredienti.succo_di_limone = 1);
      }
      function InsalataEstiva() {
        (ingredienti.mozzarelline += 1) || (ingredienti.mozzarelline = 1);
        (ingredienti.mais += 1) || (ingredienti.mais = 1);
        (ingredienti.olive += 1) || (ingredienti.olive = 1);
        (ingredienti.pomodori += 1) || (ingredienti.pomodori = 1);
        (ingredienti.cipolle_rosse += 1) || (ingredienti.cipolle_rosse = 1);
      }


// Dolci

function Camille() {
  (ingredienti.carote += 1) || (ingredienti.carote = 1);
  (ingredienti.succo_di_arancia += 1) || (ingredienti.succo_di_arancia = 1);
  (ingredienti.mandorle += 1) || (ingredienti.mandorle = 1);
}
function OttolenghiCookies() {
  (ingredienti.brown_sugar += 1) || (ingredienti.brown_sugar = 1);
  (ingredienti.cioccolato_bianco += 1) || (ingredienti.cioccolato_bianco = 1);
  (ingredienti.pere += 1) || (ingredienti.pere = 1);
  (ingredienti.lime += 1) || (ingredienti.lime = 1);
}
function PereVino() {
  (ingredienti.pere += 1) || (ingredienti.pere = 1);
  (ingredienti.vino_rosso += 1) || (ingredienti.vino_rosso = 1);
  (ingredienti.panna_montata += 1) || (ingredienti.panna_montata = 1);
}
function PistachioEclaire () {
  (ingredienti.burro += 1) || (ingredienti.burro = 1);
  (ingredienti.gelatina += 1) || (ingredienti.gelatina = 1);
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (ingredienti.cioccolato += 1) || (ingredienti.cioccolato = 1);
  (ingredienti.pistacchi += 1) || (ingredienti.pistacchi = 1);
  (ingredienti.mandorle += 1) || (ingredienti.mandorle = 1);
  (ingredienti.fragole += 1) || (ingredienti.fragole = 1);
}
function Cicerchiata() {
  (ingredienti.vino_liquoroso += 1) || (ingredienti.vino_liquoroso = 1);
  (ingredienti.succo_di_limone += 1) || (ingredienti.succo_di_limone = 1);
}
function PannaCotta() {
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (ingredienti.agar_agar += 1) || (ingredienti.agar_agar = 1);
  (ingredienti.berries += 1) || (ingredienti.berries = 1);
  (ingredienti.succo_di_limone += 1) || (ingredienti.succo_di_limone = 1);
}
function Waffles() {
}
function Pancakes() {
}
function Milkshake() {
  (ingredienti.marmellata += 1) || (ingredienti.marmellata = 1);
  (ingredienti.menta += 1) || (ingredienti.menta = 1);
  (ingredienti.berries += 1) || (ingredienti.berries = 1);
  (ingredienti.succo_di_limone += 1) || (ingredienti.succo_di_limone = 1);
  (ingredienti.gelato_alla_vaniglia += 1) || (ingredienti.gelato_alla_vaniglia = 1);
}
function Cestini() {
  CremaPasticcera();
  (ingredienti.berries += 1) || (ingredienti.berries = 1);
}
function Profiteroles() {
  (ingredienti.cioccolato_fondente += 1) || (ingredienti.cioccolato_fondente = 1);
  (ingredienti.panna += 1) || (ingredienti.panna = 1);
  (ingredienti.zucchero_velo += 1) || (ingredienti.zucchero_velo = 1);
}
function Tiramisù() {
  (ingredienti.mascarpone += 1) || (ingredienti.mascarpone = 1);
  (ingredienti.caffè += 1) || (ingredienti.caffè = 1);
  (ingredienti.savoiardi += 1) || (ingredienti.savoiardi = 1);
  (ingredienti.cacao += 1) || (ingredienti.cacao = 1);
}
function CremaPasticcera() {
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
