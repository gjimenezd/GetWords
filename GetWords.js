let input = document.getElementById("input");
let output = document.getElementById("output");
let separator = document.getElementById("separator");
let wordCount = document.getElementById("wordCount");
let minWordSize = document.getElementById("minWordSize");
let uniqueWords = document.getElementById("uniqueWords");
let ignoreWords = document.getElementById("ignoreWords");
let word_count = 0;

const ignoredSet = new Set([
    // Articles
    "a", "an", "the",

    // Prepositions
    "about", "above", "across", "after", "against", "along", "amid", "among", "around",
    "at", "before", "behind", "below", "beneath", "beside", "besides", "between",
    "beyond", "but", "by", "concerning", "considering", "despite", "down", "during",
    "except", "for", "from", "in", "inside", "into", "like", "near", "of", "off", "on",
    "onto", "opposite", "out", "outside", "over", "past", "regarding", "round", "since",
    "through", "throughout", "to", "toward", "under", "underneath", "until", "up",
    "upon", "with", "within", "without",

    // Pronouns
    "i", "me", "you", "he", "him", "she", "her", "it", "we", "us", "they", "them",
    "my", "your", "his", "her", "its", "our", "their", "mine", "yours", "hers", "ours", "theirs",
    "this", "that", "these", "those", "who", "whom", "whose", "which", "what", "where", "when", "why", "how",

    // Conjunctions
    "and", "but", "or", "nor", "for", "yet", "so", "although", "because", "since", "unless", "while", "whereas",
    "accordingly", "also", "as", "both", "case", "consequently", "conversely", "either", "even", "event", "finally",
    "furthermore", "hence", "however", "if", "indeed", "instead", "lest", "likewise", "long", "many", "meanwhile",
    "moreover", "much", "neither", "nevertheless", "next", "no", "nonetheless", "not", "now", "once", "only", "order",
    "otherwise", "provided", "rather", "scarcely", "similarly", "soon", "sooner", "still", "subsequently", "such",
    "supposing", "than", "then", "therefore", "though", "thus", "till", "time", "whenever", "wherever", "whether",

    "ok", "itself",


    // Articles
    "el", "la", "lo", "los", "las", "un", "una", "unos", "unas",

    // Prepositions
    "a", "al","ante", "bajo", "cabe", "con", "contra", "de", "desde", "durante", "en", "entre",
    "hacia", "hasta", "mediante", "para", "por", "según", "sin", "sobre", "tras",
    "versus", "vía",

    // Pronouns
    "yo", "tú", "él", "ella", "nosotros", "nosotras", "vosotros", "vosotras", "ellos", "ellas",
    "me", "te", "se", "nos", "os",
    "mi", "tu", "su", "nuestro", "nuestra", "vuestro", "vuestra", "mis", "tus", "sus", "nuestros", "nuestras", "vuestros", "vuestras",
    "este", "esta", "estos", "estas", "ese", "esa", "esos", "esas", "aquel", "aquella", "aquellos", "aquellas",
    "que", "quien", "quienes", "cuyo", "cuya", "cuyos", "cuyas", "cual", "cuales",

    // Conjunctions
    "aunque", "como", "cuando", "donde", "e", "entonces", "mas","mientras", "ni", "no","o", "pero", "pesar", "porque", "pronto", "pues", "si", "sino", "tan", "u", "y", "ya",

    //????
    "del"

]);

function GetWords(str = document.body.outerText, separator = "\n", minWordSize = 1, uniqueWords = 1, ignoreWords = 1) {

    let wordCount = 0;
    let lastWord = "";

    if (str == "") {
        str = document.body.outerText;
    }

    

    // let wordSet = new Set();

    //
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare
    //const collator = new Intl.Collator("de-u-co-phonebk");

    // str =  str.replaceAll("\n"," ");
    // str =  str.replaceAll(":"," ");
    // str =  str.replaceAll(";"," ");


    //Usando Regex
    //HTML Unicode (UTF-8) Reference - https://www.w3schools.com/charsets/ref_html_utf8.asp

    str = str.replace(/[^-@A-Za-zÀ-ÖØ-öø-ÿ]/gi, " "); //Remplaza todo lo que no sea letra o @ con un espacio " "
    str = str.toLowerCase();
    let crossArray = str.split(" ");
    
    
    
    if (uniqueWords == 1) {
        crossArray.sort();
    }


    str = "";

    for (c of crossArray) {
        if (c != lastWord && c.length > minWordSize) {


            if (ignoreWords == 1) {
                if (ignoredSet.has(c)) continue;
            }

            wordCount++;
            str += c + separator;
            // wordSet.add(c);
            lastWord = c;
        }
    }

    // clear();
    console.log(wordCount);
    console.log(str);
    // wordSet;

    word_count = wordCount;

    return str;
}


function GetTheWords() {
    output.innerHTML = GetWords(input.value, separator.value, minWordSize.value, uniqueWords.value, ignoreWords.value);
    wordCount.value = word_count;
}