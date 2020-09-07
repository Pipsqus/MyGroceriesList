function Aggiunte() {
  var AggiunteInputTrimRight = document.getElementById("Aggiunte").value.trimRight()
  var AggiunteInputTrimAll = AggiunteInputTrimRight.trimLeft()
  var TextNode = " " + AggiunteInputTrimAll;

  if (document.getElementById(TextNode) || TextNode == " "){
    if (TextNode == document.getElementById(TextNode).innerHTML || TextNode == " ")
    { }
  } else {
    var TextToAppend = document.createTextNode(TextNode);

    var box = document.createElement("INPUT");
    box.type = "checkbox";

    var parag = document.createElement("P");
    parag.id = TextNode
    parag.appendChild(box);
    parag.appendChild(TextToAppend);

    var list_aggiunte = document.getElementById("list_aggiunte")
    list_aggiunte.appendChild(parag);
  }
  var list_aggiunte = document.getElementById("list_aggiunte")
  localStorage.setItem("list_aggiunte", list_aggiunte);
}

var retrievedObject = localStorage.getItem("ingredienti");
if (typeof retrievedObject == "string") {
ingredienti = JSON.parse(retrievedObject);
} else {
ingredienti = {
    pane: 0,
    avena: 0,
    cioccolato: 0,
    savoiardi: 0,
    pomodori: 0,
    pomodorini: 0,
    mele: 0,
    pere: 0,
    pesche: 0,
    fragole: 0,
    limone: 0,
    porro: 0,
    zucchine: 0,
    melanzane: 0,
    chinakohl: 0,
    blumenkohl: 0,
    mangold: 0,
    zenzero: 0,
    aglio: 0,
    sedano: 0,
    rucola: 0,
    funghi: 0,
    asparagi: 0,
    cipolle: 0,
    cipolle_rosse: 0,
    patate: 0,
    carote: 0,
    succo_di_arancia: 0,
    zucca: 0,
    brodo: 0,
    radicchio: 0,
    noci: 0,
    pinoli: 0,
    mandorle: 0,
    pistacchi: 0,
    nocciole: 0,
    uova: 0,
    farina: 0,
    sugar: 0,
    brown_sugar: 0,
    olio: 0,
    strutto: 0,
    polenta: 0,
    cacao: 0,
    lievito_birra: 0,
    lievito_dolce: 0,
    amido: 0,
    gelatina: 0,
    aceto: 0,
    aceto_balsamico: 0,
    passata_di_pomodoro: 0,
    ceci: 0,
    riso: 0,
    fagioli : 0,
    sauerkraut: 0,
    olive_verdi: 0,
    olive_nere: 0,
    tonno: 0,
    vino_rosso: 0,
    vino_bianco:0,
    vino_liquoroso: 0,
    sale: 0,
    pepe: 0,
    origano: 0,
    rosmarino: 0,
    basilico: 0,
    timo: 0,
    salvia: 0,
    noce_moscata: 0,
    peperoncino: 0,
    cumin: 0,
    cardamomo: 0,
    cannella: 0,
    zafferano: 0,
    prosciutto_cotto: 0,
    prosciutto_crudo: 0,
    mortadella: 0,
    pancetta: 0,
    bratwurst: 0,
    pollo: 0,
    bacon: 0,
    salsiccia: 0,
    hackfleisch: 0,
    latte: 0,
    panna: 0,
    panna_montata: 0,
    yoghurt: 0,
    burro: 0,
    pecorino: 0,
    stracchino: 0,
    mascarpone: 0,
    gorgonzola: 0,
    mozzarella: 0,
    parmigiano: 0,
    brie: 0,
    schmelzkäse: 0,
    saure_sahne: 0,
    feta: 0,
    ricotta: 0,
    spinaci: 0,

    tartufo: 0,
    soia: 0,
    coconut_milk: 0,
    red_currypaste: 0,
    fish_sauce: 0,
    kaffir_lime: 0,
    tahini: 0,

    scottex: 0,
    tissues: 0,
    bagnoschiuma_e_sapone: 0,
    dentifricio: 0,
    detersivo: 0,
    spugne: 0,
    guanti: 0,
    spazzatura: 0,
    lettiera: 0,
    dishwasher_apparatus: 0,
  };
}

function SfogliaLorda() {
    ingredienti.ricotta += 2;
    ingredienti.parmigiano += 2;
    ingredienti.pomodorini += 1;
  }
function Parmigiana() {
  ingredienti.zucchine += 2;
  ingredienti.mozzarella += 2;
  ingredienti.parmigiano += 1;
}
function PestoAlleNoci() {
  ingredienti.noci += 1;
  ingredienti.pinoli += 1;
  ingredienti.pane += 1;
  ingredienti.parmigiano += 1;
}
function PestoTrapanese() {
  ingredienti.pinoli += 1;
  ingredienti.mandorle += 1;
  ingredienti.pomodorini += 1;
  ingredienti.rucola += 1;
  ingredienti.parmigiano += 1;
}
function PestoPistacchiPomodorini() {
  ingredienti.pistacchi += 1;
  ingredienti.pomodorini += 1;
  ingredienti.porri += 1;
}
function Ragù() {
  var isChecked = document.getElementById("Ragù").checked
  if (isChecked == true) {
    ingredienti.carote += 1;
    ingredienti.sedano += 1;
    ingredienti.vino_rosso += 1;
    ingredienti.parmigiano += 1 } else {
    ingredienti.carote -= 1;
    ingredienti.sedano -= 1;
    ingredienti.vino_rosso -= 1;
    ingredienti.parmigiano -= 1
    }
  }
function KaeseLauch() {
    ingredienti.hackfleisch += 1;
    ingredienti.saure_sahne += 1;
    ingredienti.schmelzkäse += 1;
    ingredienti.porro += 1;
  }
function Cannelloni() {
    ingredienti.funghi += 1;
    ingredienti.spinaci += 1;
    ingredienti.burro += 1;
}
function PaneCipolle() {
    ingredienti.pane += 1;
    ingredienti.parmigiano += 1;
    ingredienti.cipolle += 1;
}
function RipienoTartufo() {
  ingredienti.spinaci += 1;
  ingredienti.ricotta += 2;
  ingredienti.parmigiano += 1;
  ingredienti.tartufo += 1;
}
function GorgonzolaRadicchio() {
  ingredienti.gorgonzola += 1;
  ingredienti.noci += 2;
  ingredienti.radicchio += 1;
  ingredienti.parmigiano += 1;
}scottex: 0,
function LasagnaRolls() {
  ingredienti.spinaci += 1;
  ingredienti.parmigiano += 1;
  ingredienti.mozzarella += 2;
  ingredienti.ricotta += 1;
}
function Camille() {
  ingredienti.carote += 1;
  ingredienti.succo_di_arancia += 1;
  ingredienti.mandorle += 1;
}
function PizzaMargherita() {
  ingredienti.mozzarella += 2;
}
function PizzaQuattroFormaggi() {
  ingredienti.mozzarella += 2;
  ingredienti.parmigiano += 1;
  ingredienti.gorgonzola += 1;
}
function PizzaCipollaTonno() {
  ingredienti.mozzarella += 2;
  ingredienti.tonno +=1 ;
}
function PizzaCavolfiore() {
  ingredienti.blumenkohl += 1;
  ingredienti.parmigiano += 1;
  ingredienti.mozzarella += 2;
}
function Hamburger() {
  ingredienti.funghi += 1;
  ingredienti.fagioli += 1;
  ingredienti.cipolle_rosse += 1;
  ingredienti.burro += 1;
  ingredienti.rucola += 1;
  ingredienti.pomodori += 1;
}
function Gnocco() {
  ingredienti.strutto += 1;
  ingredienti.mortadella += 1;
  ingredienti.pancetta += 1;
  ingredienti.pecorino += 1;
}
function Crescia() {
  ingredienti.strutto += 1;
}
function CresciaOrtolana() {
  ingredienti.zucchine += 1;
  ingredienti.pomodori += 1;
  ingredienti.aceto_balsamico +=1;
}
function CresciaAutunno() {
  ingredienti.funghi += 1;
  ingredienti.spinaci += 1;
  ingredienti.aceto_balsamico += 1;
}
function CresciaProvenzale() {
  ingredienti.tonno += 1;
  ingredienti.cipolle_rosse += 1;
}
function CresciaSquacqueroneRucolaPomodorini() {
  ingredienti.rucola += 1;
  ingredienti.pomodorini += 1;
  ingredienti.stracchino += 1;
}
function CresciaBrie() {
  ingredienti.brie += 1;
  ingredienti.mele += 1;
  ingredienti.ceci += 1;
}
function PistachioEclaire () {
  ingredienti.burro += 1;
  ingredienti.gelatina += 1;
  ingredienti.panna += 1;
  ingredienti.cioccolato += 1;
  ingredienti.pistacchi += 1;
  ingredienti.mandorle += 1;
  ingredienti.fragole += 1;
}

function Farina() {
  ingredienti.farina += 1;
}
function Aglio() {
  ingredienti.aglio += 1;
}
function Cipolle() {
  ingredienti.cipolle += 1;
}
function Uova() {
  ingredienti.uova += 1;
}
function PassataPomodoro() {
  ingredienti.passata_di_pomodoro += 1;
}
function Latte() {
  ingredienti.latte += 1;
}
function Olio() {
  ingredienti.olio += 1;
}
function Brodo() {
  ingredienti.brodo += 1;
}
function LievitoBirraDolci() {
  ingredienti.lievito_birra += 1;
  ingredienti.lievito_dolce += 1;
}
function Sugar () {
  ingredienti.sugar += 1;
}
function BrownSugar() {
  ingredienti.brown_sugar += 1;
}
function Amido() {
  ingredienti.amido += 1;
}
function Riso() {
  ingredienti.riso += 1;
}


function Sale() {
ingredienti.sale += 1;
}
function Pepe() {
ingredienti.pepe += 1;
}
function Origano() {
ingredienti.origano += 1;
}
function Salvia() {
  ingredienti.salvia += 1;
}
function Rosmarino() {
  ingredienti.rosmarino += 1;
}
function Timo() {
  ingredienti.timo += 1;
}
function Noce_Moscata() {
  ingredienti.noce_moscata += 1;
}
function Cannella() {
  ingredienti.cannella += 1;
}
function Zafferano() {
  ingredienti.zafferano += 1;
}
function Scottex() {
  ingredienti.scottex += 1;
}
function Tissues() {
  ingredienti.tissues += 1;
}
function BagnoschiumaSapone() {
  ingredienti.bagnoschiuma_e_sapone += 1;
}
function Dentifricio() {
  ingredienti.dentifricio += 1;
}
function Detersivo() {
  ingredienti.detersivo += 1;
}
function Spugne() {
  ingredienti.spugne += 1;
}
function Guanti() {
  ingredienti.guanti += 1;
}
function Spazzatura() {
  ingredienti.spazzatura += 1;
}
function Lettiera() {
  ingredienti.lettiera += 1;
}
function DishwasherApparatus() {
    ingredienti.dishwasher_apparatus += 1;
}


function generate_list() {
  document.getElementById("list_groceries").innerHTML = "";

  for (const [key, value] of Object.entries(ingredienti)) {
    if (value > 0) {
      var box = document.createElement("INPUT");
      box.type = "checkbox";
      box.name = key;
      box.id = key;

      var label = document.createElement("LABEL")
      label.htmlFor = key;
      var TextNode = " " + key.charAt(0).toUpperCase() + key.slice(1) + " " + value
      var TextNode = TextNode.replace("_", " ");
      var TextNode = document.createTextNode(TextNode);
      label.appendChild(TextNode);

      var parag = document.createElement("P")
      parag.appendChild(box)
      parag.appendChild(label)

      document.getElementById("list_groceries").appendChild(parag);
    };

  };
  localStorage.setItem("ingredienti", JSON.stringify(ingredienti));
  document.getElementById("end").scrollIntoView()
}

function clear_list() {
    if (window.confirm("Sure you want to reset the list?")) {
      list_input_elements = document.getElementsByTagName("input");
      var i = 0;
      while (list_input_elements[i]) {
        list_input_elements[i].checked = false;
        i++
      }
      ;ingredienti = {
        pane: 0,
        avena: 0,
        cioccolato: 0,
        savoiardi: 0,
        pomodori: 0,
        pomodorini: 0,
        mele: 0,
        pere: 0,
        pesche: 0,
        fragole: 0,
        limone: 0,
        porro: 0,
        zucchine: 0,
        melanzane: 0,
        chinakohl: 0,
        blumenkohl: 0,
        mangold: 0,
        zenzero: 0,
        aglio: 0,
        sedano: 0,
        rucola: 0,
        funghi: 0,
        asparagi: 0,
        cipolle: 0,
        cipolle_rosse: 0,
        patate: 0,
        carote: 0,
        succo_di_arancia: 0,
        zucca: 0,
        brodo: 0,
        radicchio: 0,
        noci: 0,
        pinoli: 0,
        mandorle: 0,
        pistacchi: 0,
        nocciole: 0,
        uova: 0,
        farina: 0,
        sugar: 0,
        brown_sugar: 0,
        olio: 0,
        strutto: 0,
        polenta: 0,
        cacao: 0,
        lievito_birra: 0,
        lievito_dolce: 0,
        amido: 0,
        gelatina: 0,
        aceto: 0,
        aceto_balsamico: 0,
        passata_di_pomodoro: 0,
        ceci: 0,
        riso: 0,
        fagioli: 0,
        sauerkraut: 0,
        olive_verdi: 0,
        olive_nere: 0,
        tonno: 0,
        vino_rosso: 0,
        vino_bianco:0,
        vino_liquoroso: 0,
        sale: 0,
        pepe: 0,
        origano: 0,
        rosmarino: 0,
        basilico: 0,
        timo: 0,
        salvia: 0,
        noce_moscata: 0,
        peperoncino: 0,
        cumin: 0,
        cardamomo: 0,
        cannella: 0,
        zafferano: 0,
        prosciutto_cotto: 0,
        prosciutto_crudo: 0,
        mortadella: 0,
        pancetta: 0,
        bratwurst: 0,
        pollo: 0,
        bacon: 0,
        salsiccia: 0,
        hackfleisch: 0,
        latte: 0,
        panna: 0,
        panna_montata: 0,
        yoghurt: 0,
        burro: 0,
        pecorino: 0,
        stracchino: 0,
        mascarpone: 0,
        gorgonzola: 0,
        mozzarella: 0,
        parmigiano: 0,
        brie: 0,
        schmelzkäse: 0,
        saure_sahne: 0,
        feta: 0,
        ricotta: 0,
        spinaci: 0,

        tartufo: 0,
        soia: 0,
        coconut_milk: 0,
        red_currypaste: 0,
        fish_sauce: 0,
        kaffir_lime: 0,
        tahini: 0,

        scottex: 0,
        tissues: 0,
        bagnoschiuma_e_sapone: 0,
        dentifricio: 0,
        detersivo: 0,
        spugne: 0,
        guanti: 0,
        spazzatura: 0,
        lettiera: 0,
        dishwasher_apparatus: 0,
      };
    document.getElementById("list_groceries").innerHTML = "";
    localStorage.clear();
    location.reload();
  }
}

function Dropdown() {
document.getElementById("DropdownMenu").classList.toggle("show");
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
