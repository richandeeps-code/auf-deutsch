const CHAPTERS = [
{
  id: 0,
  title: "Willkommen!",
  subtitle: "Welcome to Auf Deutsch!",
  level: "intro",
  isCover: true
},
{
  id: 1,
  title: "Guten Tag!",
  subtitle: "Greetings and Introductions",
  level: "A1",
  partIntro: "At A1 level you learn to introduce yourself, count, name everyday objects, and form simple sentences. Grammar focuses on sein/haben, basic genders, and present tense.",
  vocab: [
    ["hallo","—","hello","Hallo! Wie geht es dir?"],
    ["guten Tag","—","good day / hello","Guten Tag, Herr Müller!"],
    ["guten Morgen","—","good morning","Guten Morgen! Hast du gut geschlafen?"],
    ["guten Abend","—","good evening","Guten Abend, schön Sie zu sehen."],
    ["gute Nacht","—","good night","Gute Nacht! Schlaf gut."],
    ["auf Wiedersehen","—","goodbye (formal)","Auf Wiedersehen, bis morgen!"],
    ["tschüss","—","bye (informal)","Tschüss! Bis später."],
    ["bitte","—","please / you're welcome","Bitte schön!"],
    ["danke","—","thank you","Danke sehr!"],
    ["ja","—","yes","Ja, das stimmt."],
    ["nein","—","no","Nein, danke."],
    ["ich","—","I","Ich heiße Anna."],
    ["du","—","you (informal)","Wie heißt du?"],
    ["Sie","—","you (formal)","Wie heißen Sie?"],
    ["er / sie / es","—","he / she / it","Er ist mein Freund."],
    ["wir","—","we","Wir kommen aus Australien."],
    ["heißen","—","to be called","Ich heiße Thomas."],
    ["sein","—","to be","Ich bin müde."],
    ["kommen","—","to come","Ich komme aus Berlin."],
    ["wohnen","—","to live / reside","Ich wohne in München."],
    ["der Name","m","the name","Mein Name ist Lena."],
    ["die Stadt","f","the city","Ich wohne in der Stadt."],
    ["was","—","what","Was machst du?"],
    ["wo","—","where","Wo wohnst du?"],
    ["wie","—","how","Wie heißt du?"]
  ],
  passageDE: `Thomas trifft Anna in der Schule. Er lächelt und sagt: „Hallo! Ich heiße Thomas. Wie heißt du?"\n\nAnna antwortet: „Hallo Thomas! Ich heiße Anna. Ich komme aus Wien. Und du — woher kommst du?"\n\nThomas sagt: „Ich komme aus München. Das ist in Bayern." Er fragt: „Wo wohnst du jetzt?"\n\nAnna erklärt: „Ich wohne jetzt in Berlin. Ich bin neu hier." Sie lacht und sagt: „Berlin ist eine sehr große Stadt!"\n\nThomas nickt: „Ja, das stimmt! Willkommen in Berlin, Anna!"\n\nAnna sagt: „Danke! Es ist schön, dich kennenzulernen, Thomas."\n\n„Dich auch! Tschüss, Anna. Bis morgen!"`,
  passageEN: `Thomas meets Anna at school. He smiles and says: "Hello! My name is Thomas. What's your name?"\n\nAnna answers: "Hello Thomas! My name is Anna. I'm from Vienna. And you — where are you from?"\n\nThomas says: "I'm from Munich. That's in Bavaria." He asks: "Where do you live now?"\n\nAnna explains: "I live in Berlin now. I'm new here." She laughs and says: "Berlin is a very big city!"\n\nThomas nods: "Yes, that's right! Welcome to Berlin, Anna!"\n\nAnna says: "Thank you! It's nice to meet you, Thomas."\n\n"You too! Bye, Anna. See you tomorrow!"`,
  passageTitle: "Ein erstes Gespräch — A First Conversation",
  grammarTitle: "The Verb <em>sein</em> (to be)",
  grammarHTML: `<p>The verb <em>sein</em> (to be) is the most important verb in German. It is irregular — memorise these forms:</p>
<table><thead><tr><th>Pronoun</th><th>German</th><th>English</th></tr></thead><tbody>
<tr><td>ich</td><td><strong>bin</strong></td><td>I am</td></tr>
<tr><td>du</td><td><strong>bist</strong></td><td>you are</td></tr>
<tr><td>er/sie/es</td><td><strong>ist</strong></td><td>he/she/it is</td></tr>
<tr><td>wir</td><td><strong>sind</strong></td><td>we are</td></tr>
<tr><td>ihr</td><td><strong>seid</strong></td><td>you all are</td></tr>
<tr><td>sie/Sie</td><td><strong>sind</strong></td><td>they/you (formal) are</td></tr>
</tbody></table>
<p><strong>Examples:</strong> Ich <strong>bin</strong> müde. · Du <strong>bist</strong> nett. · Wir <strong>sind</strong> Freunde.</p>`,
  memoryHTML: `<p>Think of the English word "be." The German forms: <strong>bin</strong> (think "I'm in"), <strong>bist</strong> (think "beast"), <strong>ist</strong> (sounds like "is"), <strong>sind</strong> (sounds like "sinned"). A fun line: <em>"I'm in a beastly situation — it is what it sind!"</em></p>`,
  practice: [
    ["Ich bin Anna.","I am Anna."],
    ["Du bist sehr nett.","You are very nice."],
    ["Er ist aus Berlin.","He is from Berlin."],
    ["Wir sind müde.","We are tired."],
    ["Wie heißt du?","What is your name?"]
  ]
},
{
  id: 2,
  title: "Zahlen und Zeit",
  subtitle: "Numbers and Time",
  level: "A1",
  vocab: [
    ["eins – zehn","—","one – ten","Ich habe zehn Euro."],
    ["zwanzig","—","twenty","Ich bin zwanzig Jahre alt."],
    ["dreißig","—","thirty","Er ist dreißig."],
    ["hundert","—","one hundred","Das kostet hundert Euro."],
    ["die Uhr","f","the clock / o'clock","Es ist drei Uhr."],
    ["die Stunde","f","the hour","Eine Stunde hat 60 Minuten."],
    ["die Minute","f","the minute","Warte eine Minute!"],
    ["der Tag","m","the day","Einen schönen Tag!"],
    ["die Woche","f","the week","Diese Woche bin ich beschäftigt."],
    ["der Monat","m","the month","Im nächsten Monat fahre ich hin."],
    ["das Jahr","n","the year","Das Jahr hat 365 Tage."],
    ["heute","—","today","Heute ist Montag."],
    ["morgen","—","tomorrow","Morgen gehe ich einkaufen."],
    ["gestern","—","yesterday","Gestern war ich krank."],
    ["jetzt","—","now","Ich bin jetzt bereit."],
    ["früh","—","early","Ich stehe früh auf."],
    ["spät","—","late","Es ist schon spät."],
    ["der Montag","m","Monday","Am Montag habe ich Arbeit."],
    ["der Dienstag","m","Tuesday","Am Dienstag treffe ich Anna."],
    ["der Mittwoch","m","Wednesday","Mittwoch ist die Mitte der Woche."],
    ["der Donnerstag","m","Thursday","Am Donnerstag gehe ich ins Kino."],
    ["der Freitag","m","Friday","Am Freitag feiern wir!"],
    ["der Samstag","m","Saturday","Am Samstag schlafe ich lange."],
    ["der Sonntag","m","Sunday","Der Sonntag ist der Ruhetag."]
  ],
  passageDE: `Es ist Montag. Es ist sieben Uhr morgens. Ich stehe früh auf. Ich dusche mich und trinke einen Kaffee. Um acht Uhr gehe ich zur Arbeit.\n\nDie Arbeit beginnt um neun Uhr und endet um fünf Uhr nachmittags. Das sind acht Stunden Arbeit pro Tag.\n\nAm Mittwoch esse ich mit meiner Kollegin Anna zu Mittag. Wir gehen in ein Restaurant in der Nähe. Das Essen kostet ungefähr zwölf Euro pro Person.\n\nAm Freitag bin ich immer glücklich, weil das Wochenende kommt! Am Samstag schlafe ich bis neun Uhr. Am Sonntag besuche ich meine Familie.\n\nDiese Woche ist besonders, weil mein Geburtstag am Donnerstag ist. Ich bin dann dreißig Jahre alt!`,
  passageEN: `It is Monday. It is seven o'clock in the morning. I get up early. I shower and drink a coffee. At eight o'clock I go to work.\n\nWork starts at nine and ends at five in the afternoon. That is eight hours of work per day.\n\nOn Wednesday I eat lunch with my colleague Anna. We go to a restaurant nearby. The food costs about twelve euros per person.\n\nOn Friday I am always happy because the weekend is coming! On Saturday I sleep until nine. On Sunday I visit my family.\n\nThis week is special because my birthday is on Thursday. I will then be thirty years old!`,
  passageTitle: "Mein Wochentag — My Weekday",
  grammarTitle: "Telling the Time in German",
  grammarHTML: `<p>Time is expressed simply:</p>
<table><thead><tr><th>German</th><th>English</th></tr></thead><tbody>
<tr><td><strong>Es ist drei Uhr.</strong></td><td>It is three o'clock.</td></tr>
<tr><td><strong>Es ist halb vier.</strong></td><td>It is half past three. (lit. "half four")</td></tr>
<tr><td><strong>Es ist Viertel nach zwei.</strong></td><td>It is quarter past two.</td></tr>
<tr><td><strong>Es ist Viertel vor fünf.</strong></td><td>It is quarter to five.</td></tr>
</tbody></table>
<p>⚠️ <strong>Watch out:</strong> <em>halb vier</em> means 3:30, NOT 4:30! "Half four" means "halfway to four."</p>`,
  memoryHTML: `<p>The German days are rooted in mythology. Spot the patterns: <strong>Montag</strong> = Moon day · <strong>Donnerstag</strong> = Thunder/Thor's day · <strong>Freitag</strong> = Freya's day · <strong>Sonntag</strong> = Sun day · <strong>Mittwoch</strong> = Mid-week (the only one not named after a celestial body!).</p>`,
  practice: [
    ["Es ist zehn Uhr.","It is ten o'clock."],
    ["Heute ist Freitag.","Today is Friday."],
    ["Morgen ist Samstag.","Tomorrow is Saturday."],
    ["Die Woche hat sieben Tage.","The week has seven days."],
    ["Ich bin zwanzig Jahre alt.","I am twenty years old."]
  ]
},
{
  id: 3,
  title: "Familie und Menschen",
  subtitle: "Family and People",
  level: "A1",
  vocab: [
    ["die Familie","f","the family","Meine Familie ist groß."],
    ["die Mutter","f","the mother","Meine Mutter kocht sehr gut."],
    ["der Vater","m","the father","Mein Vater arbeitet viel."],
    ["die Eltern","pl","the parents","Meine Eltern wohnen in Hamburg."],
    ["der Bruder","m","the brother","Ich habe einen Bruder."],
    ["die Schwester","f","the sister","Meine Schwester heißt Lea."],
    ["die Geschwister","pl","siblings","Ich habe zwei Geschwister."],
    ["der Sohn","m","the son","Das ist mein Sohn Paul."],
    ["die Tochter","f","the daughter","Meine Tochter ist drei Jahre alt."],
    ["die Kinder","pl","the children","Die Kinder spielen im Garten."],
    ["der Großvater","m","the grandfather","Mein Großvater ist achtzig."],
    ["die Großmutter","f","the grandmother","Meine Großmutter backt Kuchen."],
    ["der Mann","m","the man / husband","Mein Mann heißt Peter."],
    ["die Frau","f","the woman / wife","Meine Frau ist Ärztin."],
    ["der Freund","m","the friend / boyfriend","Das ist mein Freund Klaus."],
    ["die Freundin","f","the friend / girlfriend","Meine Freundin Anna ist lustig."],
    ["alt","—","old","Wie alt bist du?"],
    ["jung","—","young","Sie ist sehr jung."],
    ["groß","—","tall / big","Er ist sehr groß."],
    ["klein","—","small / short","Das Kind ist noch klein."],
    ["nett","—","nice / kind","Sie ist sehr nett."],
    ["lustig","—","funny","Er ist sehr lustig."],
    ["haben","—","to have","Ich habe zwei Kinder."],
    ["lieben","—","to love","Ich liebe meine Familie."]
  ],
  passageDE: `Ich heiße Jonas und ich möchte euch meine Familie vorstellen. Meine Familie ist nicht sehr groß — wir sind fünf Personen.\n\nMein Vater heißt Karl. Er ist fünfzig Jahre alt und arbeitet als Ingenieur. Er ist groß und hat braune Haare. Er ist manchmal streng, aber sehr fair.\n\nMeine Mutter heißt Ingrid. Sie ist siebenundvierzig und ist Lehrerin. Sie ist sehr nett und geduldig. Sie kocht wunderbar — besonders ihre Suppe ist fantastisch!\n\nIch habe eine Schwester. Sie heißt Lena und ist sechzehn Jahre alt. Wir streiten manchmal, aber wir lieben uns.\n\nMeine Großeltern wohnen in Bayern. Mein Großvater heißt Heinrich und meine Großmutter heißt Helga. Sie sind beide sehr freundlich. Unsere Familie ist nicht perfekt, aber wir halten zusammen. Das ist das Wichtigste.`,
  passageEN: `My name is Jonas and I would like to introduce my family. My family is not very big — there are five of us.\n\nMy father's name is Karl. He is fifty years old and works as an engineer. He is tall and has brown hair. He is sometimes strict, but very fair.\n\nMy mother's name is Ingrid. She is forty-seven and is a teacher. She is very nice and patient. She cooks wonderfully — especially her soup is fantastic!\n\nI have a sister. Her name is Lena and she is sixteen. We argue sometimes, but we love each other.\n\nMy grandparents live in Bavaria. My grandfather is Heinrich and my grandmother is Helga. They are both very friendly. Our family is not perfect, but we stick together. That is the most important thing.`,
  passageTitle: "Meine Familie — My Family",
  grammarTitle: "Noun Gender and <em>mein</em> (my)",
  grammarHTML: `<p>Every German noun has a gender: <strong>der</strong> (masculine), <strong>die</strong> (feminine), or <strong>das</strong> (neuter). The word <em>mein</em> (my) changes accordingly:</p>
<table><thead><tr><th>Gender</th><th>Form</th><th>Example</th></tr></thead><tbody>
<tr><td>Masculine (der)</td><td><strong>mein</strong></td><td>mein Vater</td></tr>
<tr><td>Feminine (die)</td><td><strong>meine</strong></td><td>meine Mutter</td></tr>
<tr><td>Neuter (das)</td><td><strong>mein</strong></td><td>mein Kind</td></tr>
<tr><td>Plural (die)</td><td><strong>meine</strong></td><td>meine Eltern</td></tr>
</tbody></table>`,
  memoryHTML: `<p>There are patterns to German gender: words ending in <strong>-ung, -heit, -keit, -schaft, -ion</strong> → always <strong>die</strong>. Words ending in <strong>-chen</strong> or <strong>-lein</strong> → always <strong>das</strong>. Words ending in <strong>-er</strong> for male people → usually <strong>der</strong>. When in doubt: always learn the article WITH the noun — not just <em>Bruder</em>, but <strong>der</strong> Bruder.</p>`,
  practice: [
    ["Meine Mutter ist sehr nett.","My mother is very nice."],
    ["Mein Bruder ist zwanzig Jahre alt.","My brother is twenty years old."],
    ["Ich habe zwei Geschwister.","I have two siblings."],
    ["Meine Großeltern wohnen in Bayern.","My grandparents live in Bavaria."],
    ["Wir lieben unsere Familie.","We love our family."]
  ]
},
{
  id: 4,
  title: "Farben und Beschreibungen",
  subtitle: "Colours, Shapes and Descriptions",
  level: "A1",
  vocab: [
    ["rot","—","red","Das Auto ist rot."],
    ["blau","—","blue","Der Himmel ist blau."],
    ["grün","—","green","Das Gras ist grün."],
    ["gelb","—","yellow","Die Sonne ist gelb."],
    ["schwarz","—","black","Die Katze ist schwarz."],
    ["weiß","—","white","Der Schnee ist weiß."],
    ["grau","—","grey","Das Wetter ist grau."],
    ["braun","—","brown","Sein Haar ist braun."],
    ["groß","—","big / large","Das Haus ist sehr groß."],
    ["klein","—","small","Die Maus ist sehr klein."],
    ["lang","—","long","Der Fluss ist sehr lang."],
    ["kurz","—","short","Das Kleid ist kurz."],
    ["schön","—","beautiful","Das Bild ist sehr schön."],
    ["neu","—","new","Ich habe ein neues Auto."],
    ["alt","—","old","Das Buch ist sehr alt."],
    ["schnell","—","fast","Der Zug ist sehr schnell."],
    ["langsam","—","slow","Die Schildkröte ist langsam."],
    ["leicht","—","light / easy","Diese Aufgabe ist leicht."],
    ["schwer","—","heavy / difficult","Der Koffer ist sehr schwer."],
    ["sehen","—","to see","Ich sehe einen roten Vogel."],
    ["aussehen","—","to look / appear","Du siehst heute gut aus."]
  ],
  passageDE: `Heute mache ich einen Spaziergang im Park. Das Wetter ist schön — der Himmel ist hellblau und die Sonne ist warm und gelb.\n\nIm Park gibt es viele Bäume. Die Bäume sind sehr groß und grün. Im Herbst werden die Blätter rot, orange und gelb.\n\nIch sehe einen Hund. Er ist schwarz und weiß, und er ist sehr schnell. Er läuft hinter einem roten Ball her.\n\nAuf einer Bank sitzt eine alte Frau. Sie trägt ein blaues Kleid und einen braunen Hut. Am See gibt es Enten — braun und weiß. Das Wasser ist grün und ruhig.\n\nIch setze mich auf eine Bank und schaue mir alles an. Die Welt ist voller Farben — wenn man genau hinschaut.`,
  passageEN: `Today I am going for a walk in the park. The weather is nice — the sky is light blue and the sun is warm and yellow.\n\nIn the park there are many trees. The trees are very big and green. In autumn the leaves turn red, orange and yellow.\n\nI see a dog. He is black and white, and he is very fast. He runs after a red ball.\n\nOn a bench sits an old woman. She is wearing a blue dress and a brown hat. At the lake there are ducks — brown and white. The water is green and calm.\n\nI sit down on a bench and look at everything. The world is full of colours — if you look carefully.`,
  passageTitle: "Ein Spaziergang im Park — A Walk in the Park",
  grammarTitle: "Adjective Endings with <em>ein</em>",
  grammarHTML: `<p>Adjectives change endings based on the gender of the noun:</p>
<table><thead><tr><th>Gender</th><th>Pattern</th><th>Example</th></tr></thead><tbody>
<tr><td>Masculine (der)</td><td>ein + adj + <strong>-er</strong></td><td>ein rot<strong>er</strong> Ball</td></tr>
<tr><td>Feminine (die)</td><td>eine + adj + <strong>-e</strong></td><td>eine blau<strong>e</strong> Tasche</td></tr>
<tr><td>Neuter (das)</td><td>ein + adj + <strong>-es</strong></td><td>ein grün<strong>es</strong> Buch</td></tr>
</tbody></table>`,
  memoryHTML: `<p>Many German colours look almost like English: <strong>rot</strong> → red · <strong>blau</strong> → blue · <strong>grün</strong> → green · <strong>grau</strong> → gray · <strong>braun</strong> → brown · <strong>weiß</strong> → white. Spot the similarity and you already know half the colour vocabulary!</p>`,
  practice: [
    ["Der Himmel ist blau.","The sky is blue."],
    ["Das Auto ist rot und schnell.","The car is red and fast."],
    ["Die Katze ist schwarz und klein.","The cat is black and small."],
    ["Ich sehe ein grünes Haus.","I see a green house."],
    ["Das Buch ist alt und schwer.","The book is old and heavy."]
  ]
},
{
  id: 5,
  title: "Essen und Trinken",
  subtitle: "Food and Drink",
  level: "A1",
  vocab: [
    ["das Brot","n","bread","Ich esse Brot zum Frühstück."],
    ["die Butter","f","butter","Bitte gib mir die Butter."],
    ["der Käse","m","cheese","Ich mag Käse sehr."],
    ["das Ei","n","egg","Ich esse jeden Morgen ein Ei."],
    ["die Milch","f","milk","Kinder brauchen Milch."],
    ["der Kaffee","m","coffee","Ich trinke morgens immer Kaffee."],
    ["der Tee","m","tea","Magst du Tee oder Kaffee?"],
    ["das Wasser","n","water","Ich möchte ein Glas Wasser."],
    ["der Saft","m","juice","Der Apfelsaft ist frisch."],
    ["das Fleisch","n","meat","Ich esse kein Fleisch."],
    ["das Gemüse","n","vegetables","Gemüse ist gesund."],
    ["das Obst","n","fruit","Ich esse gerne Obst."],
    ["der Apfel","m","apple","Ein Apfel am Tag hält den Arzt fern."],
    ["die Kartoffel","f","potato","Deutsche lieben Kartoffeln!"],
    ["die Suppe","f","soup","Die Suppe ist heiß."],
    ["essen","—","to eat","Ich esse gerne Pizza."],
    ["trinken","—","to drink","Er trinkt täglich Wasser."],
    ["kochen","—","to cook","Meine Mutter kocht sehr gut."],
    ["möchten","—","would like","Ich möchte einen Kaffee, bitte."],
    ["lecker","—","delicious","Das ist sehr lecker!"],
    ["gesund","—","healthy","Gemüse ist gesund."],
    ["das Restaurant","n","the restaurant","Wir gehen ins Restaurant."],
    ["die Speisekarte","f","the menu","Darf ich die Speisekarte haben?"]
  ],
  passageDE: `Heute Abend gehe ich mit meiner Freundin Lisa ins Restaurant. Das Restaurant heißt „Zur alten Post" und ist sehr gemütlich.\n\nDie Kellnerin fragt: „Was möchten Sie trinken?"\n\nIch sage: „Ich möchte bitte ein Glas Wasser und einen Kaffee." Lisa sagt: „Ich nehme einen Tee, bitte."\n\nWir schauen die Speisekarte an. Ich bestelle die Tomatensuppe als Vorspeise und dann ein Schnitzel mit Kartoffeln. Lisa bestellt einen Salat und eine Gemüsepfanne.\n\nDas Essen kommt nach zwanzig Minuten. Die Suppe ist heiß und sehr lecker. Das Schnitzel ist groß — vielleicht etwas zu groß! Aber ich esse alles auf.\n\nNach dem Essen bestellen wir Nachtisch. Ich nehme Schokoladenkuchen, Lisa nimmt Apfelstrudel. „Zum Wohl!" sagen wir.`,
  passageEN: `This evening I am going to the restaurant with my friend Lisa. The restaurant is called "Zur alten Post" and is very cosy.\n\nThe waitress asks: "What would you like to drink?"\n\nI say: "I would like a glass of water and a coffee please." Lisa says: "I'll have a tea, please."\n\nWe look at the menu. I order the tomato soup as a starter and then a schnitzel with potatoes. Lisa orders a salad and a vegetable pan.\n\nThe food comes after twenty minutes. The soup is hot and very tasty. The schnitzel is big — perhaps a bit too big! But I eat everything.\n\nAfter the meal we order dessert. I have chocolate cake, Lisa has apple strudel. "Cheers!" we say.`,
  passageTitle: "Im Restaurant — At the Restaurant",
  grammarTitle: "The Verb <em>haben</em> and German Hunger/Thirst",
  grammarHTML: `<p>German expresses hunger and thirst differently from English — using <em>haben</em> (to have):</p>
<table><thead><tr><th>German</th><th>English</th></tr></thead><tbody>
<tr><td><strong>Ich habe Hunger.</strong></td><td>I am hungry. (lit. I have hunger)</td></tr>
<tr><td><strong>Ich habe Durst.</strong></td><td>I am thirsty. (lit. I have thirst)</td></tr>
<tr><td><strong>Ich habe Angst.</strong></td><td>I am scared. (lit. I have fear)</td></tr>
</tbody></table>
<p><em>haben</em> forms: ich <strong>habe</strong> · du <strong>hast</strong> · er/sie/es <strong>hat</strong> · wir <strong>haben</strong> · ihr <strong>habt</strong> · sie/Sie <strong>haben</strong></p>`,
  memoryHTML: `<p>German and English share many food words — spot the cognates: <strong>Brot</strong>→bread · <strong>Butter</strong>→butter · <strong>Milch</strong>→milk · <strong>Wasser</strong>→water · <strong>Apfel</strong>→apple · <strong>Wein</strong>→wine. The vocabulary is already half-familiar!</p>`,
  practice: [
    ["Ich habe Hunger und Durst.","I am hungry and thirsty."],
    ["Das Brot ist frisch und lecker.","The bread is fresh and delicious."],
    ["Möchtest du Kaffee oder Tee?","Would you like coffee or tea?"],
    ["Wir gehen heute Abend ins Restaurant.","We are going to the restaurant this evening."],
    ["Das Schnitzel mit Kartoffeln ist sehr gut.","The schnitzel with potatoes is very good."]
  ]
},
{
  id: 6,
  title: "Zuhause und Alltag",
  subtitle: "Home and Daily Routine",
  level: "A2",
  partIntro: "At A2 level you handle familiar everyday situations: shopping, getting around, describing routines, talking about weather, and expressing simple opinions. Grammar expands to include accusative/dative cases, modal verbs, and separable verbs.",
  vocab: [
    ["das Haus","n","the house","Wir wohnen in einem großen Haus."],
    ["die Wohnung","f","the flat / apartment","Ich habe eine kleine Wohnung."],
    ["das Zimmer","n","the room","Meine Wohnung hat vier Zimmer."],
    ["das Schlafzimmer","n","the bedroom","Mein Schlafzimmer ist ruhig."],
    ["das Wohnzimmer","n","the living room","Wir sitzen im Wohnzimmer."],
    ["die Küche","f","the kitchen","Die Küche ist modern."],
    ["das Badezimmer","n","the bathroom","Das Badezimmer ist sauber."],
    ["der Garten","m","the garden","Im Garten wachsen Tomaten."],
    ["aufstehen","—","to get up","Ich stehe um sieben Uhr auf."],
    ["sich duschen","—","to shower","Ich dusche mich jeden Morgen."],
    ["frühstücken","—","to have breakfast","Wir frühstücken um acht Uhr."],
    ["arbeiten","—","to work","Ich arbeite von neun bis fünf."],
    ["fernsehen","—","to watch TV","Abends sehe ich fern."],
    ["immer","—","always","Ich dusche mich immer morgens."],
    ["manchmal","—","sometimes","Manchmal koche ich nicht."],
    ["nie","—","never","Ich schlafe nie vor Mitternacht."],
    ["oft","—","often","Ich gehe oft spazieren."],
    ["zuerst","—","first","Zuerst frühstücke ich."],
    ["dann","—","then","Dann gehe ich zur Arbeit."],
    ["danach","—","afterwards","Danach gehe ich einkaufen."]
  ],
  passageDE: `Mein Tag beginnt um halb sieben. Der Wecker klingelt und ich stehe auf — das ist immer schwer für mich! Zuerst gehe ich ins Badezimmer. Ich dusche mich etwa zehn Minuten lang und putze mir dann die Zähne.\n\nDanach frühstücke ich. Ich esse ein Brot mit Käse und trinke einen Kaffee mit Milch.\n\nUm acht Uhr verlasse ich das Haus. Ich fahre mit dem Fahrrad zur Arbeit — das dauert fünfzehn Minuten.\n\nIch arbeite bis halb sechs. Wenn ich nach Hause komme, bin ich manchmal müde. Ich lege mich kurz auf das Sofa und schaue die Nachrichten.\n\nUm sieben Uhr koche ich das Abendessen. Ich koche gerne — es entspannt mich. Dann lese ich ein Buch oder schaue einen Film. Um elf Uhr gehe ich schlafen.`,
  passageEN: `My day begins at half past six. The alarm goes off and I get up — that is always hard for me! First I go to the bathroom. I shower for about ten minutes and then brush my teeth.\n\nAfterwards I have breakfast. I eat bread with cheese and drink a coffee with milk.\n\nAt eight o'clock I leave the house. I cycle to work — that takes fifteen minutes.\n\nI work until half past five. When I come home, I am sometimes tired. I lie down briefly on the sofa and watch the news.\n\nAt seven o'clock I cook dinner. I like cooking — it relaxes me. Then I read a book or watch a film. At eleven o'clock I go to sleep.`,
  passageTitle: "Ein normaler Tag — A Normal Day",
  grammarTitle: "Separable Verbs (Trennbare Verben)",
  grammarHTML: `<p>German has <em>separable verbs</em> — the prefix splits off and goes to the end of the sentence:</p>
<table><thead><tr><th>Verb</th><th>Example</th></tr></thead><tbody>
<tr><td><strong>aufstehen</strong> (get up)</td><td>Ich <strong>stehe</strong> um sieben <strong>auf</strong>.</td></tr>
<tr><td><strong>fernsehen</strong> (watch TV)</td><td>Er <strong>sieht</strong> abends <strong>fern</strong>.</td></tr>
<tr><td><strong>anrufen</strong> (call)</td><td>Ich <strong>rufe</strong> meine Mutter <strong>an</strong>.</td></tr>
<tr><td><strong>aufräumen</strong> (tidy up)</td><td>Sie <strong>räumt</strong> das Zimmer <strong>auf</strong>.</td></tr>
</tbody></table>
<p>The rule: in a main clause, the prefix goes to the <strong>very end</strong> of the sentence.</p>`,
  memoryHTML: `<p>Think of separable verbs like English phrasal verbs that get split: "I <em>call</em> my mum <em>up</em>" — same idea! The prefix is the boss that goes to the end to "close off" the sentence, just like pulling a zipper shut.</p>`,
  practice: [
    ["Ich stehe jeden Morgen um sieben Uhr auf.","I get up every morning at seven o'clock."],
    ["Zuerst dusche ich mich, dann frühstücke ich.","First I shower, then I have breakfast."],
    ["Manchmal koche ich nicht und bestelle Pizza.","Sometimes I don't cook and order pizza."],
    ["Er sieht jeden Abend fern.","He watches TV every evening."],
    ["Wir räumen samstags das Haus auf.","We tidy the house on Saturdays."]
  ]
},
{
  id: 7,
  title: "Einkaufen und Geld",
  subtitle: "Shopping and Money",
  level: "A2",
  vocab: [
    ["das Geld","n","money","Hast du genug Geld?"],
    ["der Euro","m","euro","Das kostet fünf Euro."],
    ["teuer","—","expensive","Das ist zu teuer!"],
    ["billig","—","cheap","Das ist sehr billig."],
    ["günstig","—","good value","Diese Jacke ist sehr günstig."],
    ["kaufen","—","to buy","Ich kaufe ein neues Buch."],
    ["bezahlen","—","to pay","Ich bezahle mit Karte."],
    ["kosten","—","to cost","Was kostet das?"],
    ["der Supermarkt","m","the supermarket","Ich gehe in den Supermarkt."],
    ["die Kasse","f","the checkout","Bitte zahlen Sie an der Kasse."],
    ["die Größe","f","the size","Welche Größe haben Sie?"],
    ["suchen","—","to look for","Ich suche ein blaues Hemd."],
    ["finden","—","to find","Haben Sie das in Größe M?"],
    ["das Sonderangebot","n","the special offer","Das Sonderangebot gilt bis Freitag."],
    ["der Rabatt","m","the discount","Gibt es einen Rabatt?"],
    ["die Kleidung","f","clothing","Ich kaufe gerne Kleidung."],
    ["das Hemd","n","shirt","Das Hemd ist zu groß."],
    ["die Hose","f","trousers","Die Hose passt perfekt."],
    ["die Schuhe","pl","shoes","Ich brauche neue Schuhe."],
    ["brauchen","—","to need","Ich brauche neue Schuhe."]
  ],
  passageDE: `Am Samstag gehe ich gerne einkaufen. Heute brauche ich Lebensmittel für die Woche und vielleicht eine neue Jacke.\n\nZuerst gehe ich in den Supermarkt. Ich kaufe Brot, Milch, Käse, Äpfel, Kartoffeln und Nudeln. An der Kasse bezahle ich mit meiner Karte. Das kostet insgesamt siebenundzwanzig Euro und fünfzig Cent.\n\nDann gehe ich in die Innenstadt. Ich suche eine Winterjacke. Im ersten Laden ist alles sehr teuer — eine Jacke kostet zweihundert Euro! Zu teuer!\n\nIm zweiten Laden finde ich eine schöne dunkelblaue Jacke. Ich probiere sie an — sie passt gut und ist sehr warm. Der Preis ist neunundsiebzig Euro. Das ist günstig!\n\nDie Verkäuferin fragt: „Zahlen Sie bar oder mit Karte?" „Mit Karte, bitte." Ich bekomme eine Quittung und gehe glücklich nach Hause.`,
  passageEN: `On Saturday I like to go shopping. Today I need groceries for the week and maybe a new jacket.\n\nFirst I go to the supermarket. I buy bread, milk, cheese, apples, potatoes and pasta. At the checkout I pay by card. That comes to twenty-seven euros fifty in total.\n\nThen I go into the city centre. I am looking for a winter jacket. In the first shop everything is very expensive — a jacket costs two hundred euros! Too expensive!\n\nIn the second shop I find a nice dark blue jacket. I try it on — it fits well and it is very warm. The price is seventy-nine euros. That's great value!\n\nThe sales assistant asks: "Are you paying cash or by card?" "By card, please." I receive a receipt and go home happy.`,
  passageTitle: "Ein Tag beim Einkaufen — A Day of Shopping",
  grammarTitle: "The Accusative Case",
  grammarHTML: `<p>The object of a verb takes the <strong>accusative case</strong>. This mainly affects <em>der</em> → <strong>den</strong> for masculine nouns:</p>
<table><thead><tr><th>Gender</th><th>Nominative</th><th>Accusative</th><th>Example</th></tr></thead><tbody>
<tr><td>Masculine</td><td>der</td><td><strong>den</strong></td><td>Ich kaufe <strong>den</strong> Apfel.</td></tr>
<tr><td>Feminine</td><td>die</td><td>die</td><td>Ich kaufe <strong>die</strong> Jacke.</td></tr>
<tr><td>Neuter</td><td>das</td><td>das</td><td>Ich kaufe <strong>das</strong> Buch.</td></tr>
</tbody></table>`,
  memoryHTML: `<p>Only the masculine article changes in the accusative: <strong>der → den</strong>. All others stay the same. Remember the rhyme: <em>"Den Mann, den Mann — masculine always takes the -n!"</em></p>`,
  practice: [
    ["Ich kaufe einen Apfel und eine Banane.","I buy an apple and a banana."],
    ["Das Hemd kostet fünfzig Euro — das ist zu teuer!","The shirt costs fifty euros — that is too expensive!"],
    ["Ich suche eine blaue Jacke in Größe M.","I am looking for a blue jacket in size M."],
    ["Bezahlen Sie bar oder mit Karte?","Are you paying cash or by card?"],
    ["Das Sonderangebot gilt bis Freitag.","The special offer is valid until Friday."]
  ]
},
{
  id: 8,
  title: "Unterwegs",
  subtitle: "Getting Around",
  level: "A2",
  vocab: [
    ["die Straße","f","the street / road","Die Straße ist sehr breit."],
    ["links","—","left","Biegen Sie links ab."],
    ["rechts","—","right","Das Geschäft ist rechts."],
    ["geradeaus","—","straight ahead","Gehen Sie geradeaus."],
    ["der Bahnhof","m","train station","Wann fährt der nächste Zug?"],
    ["der Zug","m","the train","Der Zug kommt um zehn Uhr."],
    ["der Bus","m","the bus","Ich fahre mit dem Bus."],
    ["die U-Bahn","f","the metro","Die U-Bahn ist schnell."],
    ["das Auto","n","the car","Er fährt ein rotes Auto."],
    ["das Fahrrad","n","the bicycle","Ich fahre mit dem Fahrrad."],
    ["das Flugzeug","n","the aeroplane","Wir fliegen mit dem Flugzeug."],
    ["fahren","—","to drive / travel","Ich fahre nach Berlin."],
    ["ankommen","—","to arrive","Wann kommen wir an?"],
    ["abfahren","—","to depart","Der Zug fährt um zehn Uhr ab."],
    ["umsteigen","—","to change","Sie müssen in Frankfurt umsteigen."],
    ["die Fahrkarte","f","the ticket","Die Fahrkarte kostet drei Euro."],
    ["der Fahrplan","m","the timetable","Schauen Sie in den Fahrplan."],
    ["nah","—","near","Der Bahnhof ist nah."],
    ["weit","—","far","Das Krankenhaus ist weit."],
    ["ungefähr","—","approximately","Es dauert ungefähr 20 Minuten."]
  ],
  passageDE: `Ich möchte meine Schwester in Hamburg besuchen. Ich entscheide mich, mit dem Zug zu fahren.\n\nIch gehe zum Bahnhof und kaufe eine Fahrkarte. Sie kostet neununddreißig Euro. Der Zug fährt um neun Uhr dreißig ab.\n\nIm Zug finde ich meinen Platz — Nummer 42 im Wagen 3. Ich sitze am Fenster und beobachte die Landschaft: Felder, Wälder und Flüsse. Es ist eine sehr schöne Strecke.\n\nNach etwa zwei Stunden kommt der Zug in Hamburg Hauptbahnhof an. Meine Schwester wartet auf mich.\n\nSie sagt: „Gute Reise gehabt?" Ich antworte: „Ja, ausgezeichnet! Der Zug war sehr pünktlich."\n\nSie lacht: „Das ist Deutschland! Manchmal. Komm, ich zeige dir die Stadt." Wir fahren mit der U-Bahn zu ihrer Wohnung. Nach fünfzehn Minuten sind wir da.`,
  passageEN: `I want to visit my sister in Hamburg. I decide to travel by train.\n\nI go to the station and buy a ticket. It costs thirty-nine euros. The train departs at nine thirty.\n\nOn the train I find my seat — number 42 in carriage 3. I sit by the window and watch the landscape: fields, forests and rivers. It is a very beautiful route.\n\nAfter about two hours the train arrives at Hamburg Central Station. My sister is waiting for me.\n\nShe says: "Did you have a good journey?" I answer: "Yes, excellent! The train was very punctual."\n\nShe laughs: "That's Germany! Sometimes. Come on, I'll show you the city." We take the metro to her flat. After fifteen minutes we are there.`,
  passageTitle: "Mit dem Zug nach Hamburg — By Train to Hamburg",
  grammarTitle: "Modal Verbs",
  grammarHTML: `<p>Modal verbs express ability, necessity, or desire. They pair with an infinitive at the <strong>end</strong> of the sentence:</p>
<table><thead><tr><th>Verb</th><th>English</th><th>Example</th></tr></thead><tbody>
<tr><td><strong>können</strong></td><td>can / be able to</td><td>Ich <strong>kann</strong> Deutsch <strong>sprechen</strong>.</td></tr>
<tr><td><strong>müssen</strong></td><td>must / have to</td><td>Du <strong>musst</strong> jetzt <strong>gehen</strong>.</td></tr>
<tr><td><strong>wollen</strong></td><td>want to</td><td>Er <strong>will</strong> nach Berlin <strong>fahren</strong>.</td></tr>
<tr><td><strong>möchten</strong></td><td>would like to</td><td>Ich <strong>möchte</strong> Kaffee <strong>trinken</strong>.</td></tr>
<tr><td><strong>dürfen</strong></td><td>may / allowed to</td><td>Darf ich <strong>fragen</strong>?</td></tr>
</tbody></table>`,
  memoryHTML: `<p>The modal verb is "the boss" — it sits in position 2, and the infinitive (the worker) goes to the very end doing the actual job. <em>"The boss gives orders from the front; the worker does the job at the back."</em></p>`,
  practice: [
    ["Wie komme ich zum Bahnhof?","How do I get to the train station?"],
    ["Der Zug fährt um neun Uhr dreißig ab.","The train departs at nine thirty."],
    ["Ich möchte ein Ticket nach München kaufen.","I would like to buy a ticket to Munich."],
    ["Sie müssen in Frankfurt umsteigen.","You have to change in Frankfurt."],
    ["Das dauert ungefähr zwanzig Minuten.","That takes approximately twenty minutes."]
  ]
},
{
  id: 9,
  title: "Wetter und Jahreszeiten",
  subtitle: "Weather and Seasons",
  level: "A2",
  vocab: [
    ["das Wetter","n","the weather","Wie ist das Wetter heute?"],
    ["die Temperatur","f","the temperature","Die Temperatur ist 20 Grad."],
    ["sonnig","—","sunny","Es ist sonnig und warm."],
    ["bewölkt","—","cloudy","Es ist heute bewölkt."],
    ["der Regen","m","rain","Der Regen ist kalt."],
    ["regnen","—","to rain","Es regnet seit drei Tagen."],
    ["der Schnee","m","snow","Im Winter gibt es viel Schnee."],
    ["schneien","—","to snow","Heute schneit es!"],
    ["der Wind","m","wind","Der Wind ist sehr stark."],
    ["warm","—","warm","Im Sommer ist es warm."],
    ["heiß","—","hot","Im Juli ist es sehr heiß."],
    ["kalt","—","cold","Im Winter ist es sehr kalt."],
    ["der Frühling","m","spring","Im Frühling blühen die Blumen."],
    ["der Sommer","m","summer","Der Sommer ist meine Lieblingszeit."],
    ["der Herbst","m","autumn","Im Herbst werden die Blätter bunt."],
    ["der Winter","m","winter","Der Winter in Deutschland ist kalt."],
    ["die Sonne","f","the sun","Die Sonne scheint heute."],
    ["scheinen","—","to shine","Die Sonne scheint."],
    ["der Regenschirm","m","umbrella","Nimm einen Regenschirm mit!"]
  ],
  passageDE: `Deutschland hat vier sehr unterschiedliche Jahreszeiten.\n\n<strong>Der Frühling</strong> beginnt im März. Die Temperaturen steigen langsam. Die Bäume bekommen Blätter, überall blühen Blumen. Das Wetter ist manchmal noch wechselhaft — an einem Tag scheint die Sonne, am nächsten regnet es.\n\n<strong>Der Sommer</strong> ist von Juni bis August. Es kann sehr heiß werden — manchmal über dreißig Grad! Viele Deutsche fahren an die Nordsee oder nach Bayern.\n\n<strong>Der Herbst</strong> kommt im September. Die Wälder werden wunderschön bunt — rot, orange, gelb und braun. Es regnet öfter. Viele Leute mögen den Herbst wegen des Oktoberfests!\n\n<strong>Der Winter</strong> dauert von Dezember bis Februar. Es kann sehr kalt werden. In manchen Regionen gibt es Schnee, besonders in den Alpen. Weihnachtsmärkte mit heißer Schokolade und Glühwein sind beliebt.`,
  passageEN: `Germany has four very different seasons.\n\n<strong>Spring</strong> begins in March. Temperatures rise slowly. Trees get their leaves back, flowers bloom everywhere. The weather is sometimes still changeable.\n\n<strong>Summer</strong> is from June to August. It can get very hot — sometimes over thirty degrees! Many Germans go to the North Sea or Bavaria.\n\n<strong>Autumn</strong> comes in September. The forests turn wonderfully colourful — red, orange, yellow and brown. It rains more often. Many people love autumn because of Oktoberfest!\n\n<strong>Winter</strong> lasts from December to February. It can get very cold. In some regions there is snow, especially in the Alps. Christmas markets with hot chocolate and mulled wine are popular.`,
  passageTitle: "Die vier Jahreszeiten — The Four Seasons",
  grammarTitle: "Impersonal <em>es</em> for Weather",
  grammarHTML: `<p>German uses the impersonal pronoun <em>es</em> (it) for weather expressions:</p>
<table><thead><tr><th>German</th><th>English</th></tr></thead><tbody>
<tr><td><strong>Es regnet.</strong></td><td>It is raining.</td></tr>
<tr><td><strong>Es schneit.</strong></td><td>It is snowing.</td></tr>
<tr><td><strong>Es ist kalt.</strong></td><td>It is cold.</td></tr>
<tr><td><strong>Es gibt einen Sturm.</strong></td><td>There is a storm.</td></tr>
</tbody></table>`,
  memoryHTML: `<p>Spot the season cognates: <strong>Sommer</strong> = summer · <strong>Winter</strong> = winter · <strong>Herbst</strong> sounds like "harvest" (what you do in autumn) · <strong>Frühling</strong> = <em>früh</em> (early) + <em>ling</em> = the early season when things start growing.</p>`,
  practice: [
    ["Wie ist das Wetter heute?","What is the weather like today?"],
    ["Im Sommer ist es sehr heiß in Deutschland.","In summer it is very hot in Germany."],
    ["Es regnet — nimm einen Regenschirm mit!","It is raining — take an umbrella!"],
    ["Der Herbst ist meine Lieblingszeit.","Autumn is my favourite season."],
    ["Im Winter kann es unter null Grad werden.","In winter it can get below zero degrees."]
  ]
},
{
  id: 10,
  title: "Gesundheit und Körper",
  subtitle: "Health and the Body",
  level: "A2",
  vocab: [
    ["der Körper","m","the body","Sport ist gut für den Körper."],
    ["der Kopf","m","the head","Ich habe Kopfschmerzen."],
    ["der Bauch","m","stomach / belly","Ich habe Bauchschmerzen."],
    ["der Rücken","m","the back","Mein Rücken schmerzt."],
    ["krank","—","ill / sick","Ich bin krank."],
    ["gesund","—","healthy","Ich fühle mich wieder gesund."],
    ["Kopfschmerzen","pl","headache","Ich habe Kopfschmerzen."],
    ["Halsschmerzen","pl","sore throat","Ich habe Halsschmerzen."],
    ["das Fieber","n","fever","Ich habe Fieber — 38 Grad."],
    ["der Husten","m","a cough","Ich habe einen starken Husten."],
    ["der Arzt","m","the doctor (m)","Ich muss zum Arzt gehen."],
    ["die Ärztin","f","the doctor (f)","Die Ärztin untersucht mich."],
    ["das Krankenhaus","n","the hospital","Er ist im Krankenhaus."],
    ["die Apotheke","f","the pharmacy","Ich gehe in die Apotheke."],
    ["das Medikament","n","medication","Ich nehme ein Medikament."],
    ["sich fühlen","—","to feel","Ich fühle mich nicht gut."],
    ["wehtun","—","to hurt","Mein Kopf tut weh."],
    ["ausruhen","—","to rest","Du musst dich ausruhen."]
  ],
  passageDE: `Seit drei Tagen fühle ich mich nicht gut. Ich habe Halsschmerzen, Fieber und einen starken Husten. Ich beschließe, zum Arzt zu gehen.\n\nDie Ärztin, Frau Dr. Wagner, fragt: „Was fehlt Ihnen?"\n\nIch erkläre: „Ich fühle mich seit drei Tagen krank. Ich habe Halsschmerzen und Fieber — gestern Abend hatte ich achtunddreißig Komma fünf Grad."\n\nDie Ärztin untersucht meinen Hals und meine Ohren. Sie sagt: „Ihr Hals ist sehr gerötet. Ich verschreibe Ihnen ein Antibiotikum. Sieben Tage, dreimal täglich nach dem Essen. Außerdem müssen Sie viel trinken — warmen Tee mit Honig — und sich ausruhen. Kein Sport für eine Woche!"\n\nIch gehe mit dem Rezept in die Apotheke. Zu Hause lege ich mich ins Bett und hoffe, dass ich bald wieder gesund bin.`,
  passageEN: `For three days I have not been feeling well. I have a sore throat, fever and a bad cough. I decide to go to the doctor.\n\nThe doctor, Dr Wagner, asks: "What is the matter?"\n\nI explain: "I have been feeling ill for three days. I have a sore throat and a fever — yesterday evening I had thirty-eight point five degrees."\n\nThe doctor examines my throat and my ears. She says: "Your throat is very red. I will prescribe you an antibiotic. Seven days, three times a day after meals. You also need to drink a lot — warm tea with honey — and rest. No sport for a week!"\n\nI go to the pharmacy with the prescription. At home I lie down in bed and hope to be well again soon.`,
  passageTitle: "Beim Arzt — At the Doctor",
  grammarTitle: "The Dative Case",
  grammarHTML: `<p>The dative marks the indirect object and follows key prepositions: <em>mit, von, zu, bei, nach, aus, seit, gegenüber</em>.</p>
<table><thead><tr><th>Gender</th><th>Nominative</th><th>Dative</th></tr></thead><tbody>
<tr><td>Masculine</td><td>der Mann</td><td><strong>dem</strong> Mann</td></tr>
<tr><td>Feminine</td><td>die Frau</td><td><strong>der</strong> Frau</td></tr>
<tr><td>Neuter</td><td>das Kind</td><td><strong>dem</strong> Kind</td></tr>
</tbody></table>
<p><strong>Examples:</strong> Ich gehe <strong>zum</strong> (zu+dem) Arzt. · Sie gibt <strong>dem</strong> Kind ein Medikament.</p>`,
  memoryHTML: `<p>Use this chant to remember the dative-only prepositions: <em>"aus, bei, mit, nach, seit, von, zu, gegenüber."</em> Set it to a rhythm and repeat it every time you learn a new dative context — the rhythm will trigger the memory!</p>`,
  practice: [
    ["Ich fühle mich heute nicht gut.","I do not feel well today."],
    ["Mein Kopf tut sehr weh.","My head hurts a lot."],
    ["Ich muss zum Arzt gehen.","I have to go to the doctor."],
    ["Die Ärztin gibt mir ein Rezept.","The doctor gives me a prescription."],
    ["Du musst viel trinken und dich ausruhen.","You must drink a lot and rest."]
  ]
},
{
  id: 11,
  title: "Arbeit und Beruf",
  subtitle: "Work and Career",
  level: "B1",
  partIntro: "At B1 level you handle most everyday situations confidently. You describe experiences, explain opinions, and discuss plans. Grammar includes the perfect tense, comparatives, and subordinate clauses.",
  vocab: [
    ["die Arbeit","f","work / job","Ich gehe jeden Tag zur Arbeit."],
    ["der Beruf","m","the profession","Was ist Ihr Beruf?"],
    ["die Stelle","f","the position / post","Ich habe eine neue Stelle gefunden."],
    ["das Büro","n","the office","Ich arbeite im Büro."],
    ["der Kollege","m","the colleague","Mein Kollege ist hilfsbereit."],
    ["die Besprechung","f","the meeting","Um zehn Uhr haben wir eine Besprechung."],
    ["das Gehalt","n","the salary","Das Gehalt ist gut."],
    ["die Bewerbung","f","the application","Ich schreibe eine Bewerbung."],
    ["der Lebenslauf","m","the CV / résumé","Mein Lebenslauf ist aktuell."],
    ["das Vorstellungsgespräch","n","job interview","Morgen habe ich ein Vorstellungsgespräch."],
    ["eingestellt werden","—","to be hired","Ich wurde eingestellt!"],
    ["kündigen","—","to resign / quit","Er hat gekündigt."],
    ["bewerben","—","to apply","Ich bewerbe mich um die Stelle."],
    ["verdienen","—","to earn","Er verdient gut."],
    ["die Erfahrung","f","experience","Ich habe fünf Jahre Erfahrung."],
    ["selbstständig","—","self-employed","Er ist selbstständig."],
    ["stressig","—","stressful","Der Job ist manchmal stressig."],
    ["erfolgreich","—","successful","Das Projekt war sehr erfolgreich."]
  ],
  passageDE: `Seit drei Monaten suche ich einen neuen Job. Vor zwei Wochen habe ich mich bei einer internationalen Designfirma in Frankfurt beworben. Gestern habe ich die Nachricht bekommen: Ich bin zu einem Vorstellungsgespräch eingeladen!\n\nHeute ist der große Tag. Ich bin natürlich nervös. Ich habe mir einen dunklen Anzug angezogen und bin pünktlich erschienen.\n\nDie Personalleiterin, Frau Dr. Schreiber, fragt: „Erzählen Sie mir etwas über sich. Warum möchten Sie bei uns arbeiten?"\n\nIch antworte: „Ich arbeite seit fünf Jahren als Grafiker und habe viel Erfahrung in der Konzeption von Kampagnen. Ich schätze die internationale Ausrichtung Ihres Unternehmens."\n\nDas Gespräch dauert eine Stunde. Am Ende schütteln wir uns die Hände. Drei Tage später: „Herzlichen Glückwunsch — Sie haben die Stelle bekommen!" Ich bin überglücklich.`,
  passageEN: `For three months I have been looking for a new job. Two weeks ago I applied at an international design firm in Frankfurt. Yesterday I received the news: I have been invited to a job interview!\n\nToday is the big day. I am naturally nervous. I put on a dark suit and arrived punctually.\n\nThe HR manager, Dr Schreiber, asks: "Tell me something about yourself. Why would you like to work with us?"\n\nI answer: "I have been working as a graphic designer for five years and have extensive experience designing campaigns. I appreciate the international orientation of your company."\n\nThe conversation lasts an hour. At the end we shake hands. Three days later: "Congratulations — you have got the position!" I am overjoyed.`,
  passageTitle: "Das Vorstellungsgespräch — The Job Interview",
  grammarTitle: "The Perfect Tense (Perfekt)",
  grammarHTML: `<p>In spoken German, the <strong>Perfekt</strong> is the standard way to talk about past events. Structure: <strong>haben/sein + Partizip II</strong></p>
<table><thead><tr><th>Type</th><th>Helper</th><th>Example</th></tr></thead><tbody>
<tr><td>Most verbs</td><td><strong>haben</strong></td><td>Ich <strong>habe</strong> gearbeitet.</td></tr>
<tr><td>Movement / change of state</td><td><strong>sein</strong></td><td>Ich <strong>bin</strong> gegangen.</td></tr>
</tbody></table>
<p>Regular Partizip II: <strong>ge- + stem + -t</strong> → ge<strong>macht</strong>, ge<strong>kauft</strong><br>
Irregular: must be memorised → gehen → ge<strong>gang</strong>en · kommen → ge<strong>komm</strong>en · essen → ge<strong>gess</strong>en</p>`,
  memoryHTML: `<p>Use "MOVE and CHANGE" to remember <em>sein</em>: verbs of <strong>movement</strong> (gehen, kommen, fahren) and <strong>change of state</strong> (aufwachen, einschlafen, werden) use <em>sein</em>. Everything else uses <em>haben</em>. A person walking uses <em>sein</em> because their location changes. A person eating stays still — <em>haben</em>.</p>`,
  practice: [
    ["Ich habe gestern eine Bewerbung geschrieben.","Yesterday I wrote an application."],
    ["Er hat sich um die Stelle beworben.","He applied for the position."],
    ["Sie ist pünktlich zum Gespräch gekommen.","She came to the interview on time."],
    ["Wir haben viele Überstunden gemacht.","We worked a lot of overtime."],
    ["Er hat den Job bekommen — herzlichen Glückwunsch!","He got the job — congratulations!"]
  ]
},
{
  id: 12,
  title: "Hobbys und Freizeit",
  subtitle: "Hobbies and Leisure",
  level: "B1",
  vocab: [
    ["das Hobby","n","the hobby","Was sind deine Hobbys?"],
    ["die Freizeit","f","free time","Was machst du in deiner Freizeit?"],
    ["lesen","—","to read","Ich lese gerne Bücher."],
    ["der Film","m","the film","Welchen Film siehst du gerne?"],
    ["das Kino","n","the cinema","Gehen wir ins Kino!"],
    ["spielen","—","to play","Ich spiele Klavier."],
    ["singen","—","to sing","Sie singt wunderschön."],
    ["der Sport","m","sport","Ich mache gerne Sport."],
    ["schwimmen","—","to swim","Im Sommer schwimme ich oft."],
    ["laufen","—","to run","Ich laufe dreimal pro Woche."],
    ["wandern","—","to hike","Wir wandern in den Bergen."],
    ["reisen","—","to travel","Ich reise sehr gerne."],
    ["fotografieren","—","to photograph","Er fotografiert Natur."],
    ["backen","—","to bake","Ich backe gerne Kuchen."],
    ["zeichnen","—","to draw","Sie zeichnet sehr gut."],
    ["der Verein","m","the club","Ich bin in einem Sportverein."],
    ["sich erholen","—","to relax / recover","Am Wochenende erhol ich mich."],
    ["genießen","—","to enjoy","Ich genieße die Ruhe."],
    ["spannend","—","exciting / gripping","Das Spiel war sehr spannend."],
    ["langweilig","—","boring","Der Film war langweilig."]
  ],
  passageDE: `Als Kind hatte ich viele Hobbys. Ich habe Fußball gespielt, im Chor gesungen und Klavier gelernt. Das Klavierlernen war manchmal frustrierend, aber heute bin ich froh, dass ich durchgehalten habe — es entspannt mich sehr.\n\nMit fünfzehn Jahren habe ich angefangen zu fotografieren. Mein Vater hat mir seine alte Kamera gegeben, und seitdem bin ich davon fasziniert. Letztes Jahr hatte ich sogar eine kleine Fotoausstellung!\n\nHeute laufe ich mindestens dreimal pro Woche morgens vor der Arbeit. Am Wochenende wandere ich gerne in der Natur.\n\nMeine Freundin und ich kochen jeden Samstagabend zusammen. Wir probieren immer ein neues Rezept — letzte Woche haben wir Thai-Curry gemacht. Das war köstlich!\n\nIch glaube, Hobbys sind sehr wichtig. Sie geben dem Leben Spaß und Bedeutung.`,
  passageEN: `As a child I had many hobbies. I played football, sang in a choir and learned piano. Learning piano was sometimes frustrating, but today I am glad I persevered — it relaxes me greatly.\n\nAt fifteen I began to photograph. My father gave me his old camera, and since then I have been fascinated by it. Last year I even had a small photo exhibition!\n\nToday I go running at least three times a week in the mornings before work. At the weekend I like to hike in nature.\n\nMy girlfriend and I cook together every Saturday evening. We always try a new recipe — last week we made Thai curry. That was delicious!\n\nI believe hobbies are very important. They give life fun and meaning.`,
  passageTitle: "Meine Hobbys — My Hobbies",
  grammarTitle: "Subordinate Clauses with <em>weil</em>, <em>dass</em>, <em>wenn</em>",
  grammarHTML: `<p>In German subordinate clauses, the verb goes to the <strong>end</strong>:</p>
<table><thead><tr><th>Conjunction</th><th>Example</th></tr></thead><tbody>
<tr><td><strong>weil</strong> (because)</td><td>Ich bin glücklich, <strong>weil</strong> ich einen Job <strong>gefunden habe</strong>.</td></tr>
<tr><td><strong>dass</strong> (that)</td><td>Ich glaube, <strong>dass</strong> Hobbys wichtig <strong>sind</strong>.</td></tr>
<tr><td><strong>wenn</strong> (when/if)</td><td><strong>Wenn</strong> ich wandere, <strong>vergesse</strong> ich alles.</td></tr>
</tbody></table>`,
  memoryHTML: `<p>Think of a German subordinate clause as a suitcase: you pack everything in, and the verb is the lock — it goes on <strong>at the very end</strong> to close everything up. Without the verb at the end, the suitcase won't shut!</p>`,
  practice: [
    ["Was machst du in deiner Freizeit?","What do you do in your free time?"],
    ["Ich spiele Fußball, weil es Spaß macht.","I play football because it is fun."],
    ["Ich glaube, dass Lesen sehr wichtig ist.","I believe that reading is very important."],
    ["Wenn ich müde bin, höre ich Musik.","When I am tired, I listen to music."],
    ["Letztes Wochenende haben wir einen Film gesehen.","Last weekend we watched a film."]
  ]
},
{
  id: 13,
  title: "Reisen und Urlaub",
  subtitle: "Travel and Holidays",
  level: "B1",
  vocab: [
    ["die Reise","f","the journey / trip","Wir machen eine Reise nach Italien."],
    ["der Urlaub","m","the holiday","Ich nehme zwei Wochen Urlaub."],
    ["buchen","—","to book","Ich habe das Hotel gebucht."],
    ["das Hotel","n","the hotel","Das Hotel ist sehr komfortabel."],
    ["der Koffer","m","the suitcase","Ich packe meinen Koffer."],
    ["der Pass","m","the passport","Vergiss deinen Pass nicht!"],
    ["die Sehenswürdigkeit","f","the sight / attraction","Welche Sehenswürdigkeiten gibt es?"],
    ["das Museum","n","the museum","Das Museum ist sehr interessant."],
    ["der Strand","m","the beach","Wir liegen am Strand."],
    ["erkunden","—","to explore","Ich möchte die Stadt erkunden."],
    ["besichtigen","—","to visit / sightsee","Wir besichtigen das Schloss."],
    ["empfehlen","—","to recommend","Was empfehlen Sie?"],
    ["beeindruckend","—","impressive","Der Dom ist sehr beeindruckend."],
    ["unvergesslich","—","unforgettable","Es war ein unvergessliches Erlebnis."],
    ["die Währung","f","the currency","Welche Währung gilt hier?"],
    ["der Reiseführer","m","the guidebook","Der Reiseführer ist sehr hilfreich."]
  ],
  passageDE: `Im letzten Sommer habe ich eine Woche in Wien verbracht. Wien ist die Hauptstadt von Österreich und eine der schönsten Städte Europas.\n\nAm ersten Tag habe ich den Stephansdom besichtigt. Der Dom ist riesig und beeindruckend — ich konnte kaum glauben, wie alt und schön er ist.\n\nAm zweiten Tag habe ich das Kunsthistorische Museum besucht. Ich habe drei Stunden dort verbracht — die Zeit ist wie im Flug vergangen.\n\nEin Highlight war das Schloss Schönbrunn. Der Garten ist riesig und sehr gepflegt. Ich habe viele Fotos gemacht.\n\nNatürlich habe ich auch die Wiener Küche probiert: ein Wiener Schnitzel und im berühmten Café Central Kaffee und Apfelstrudel — wie ein echter Wiener!\n\nAm letzten Abend habe ich den Sonnenuntergang über Wien beobachtet. Es war ein unvergesslicher Moment. Wien hat mein Herz gewonnen.`,
  passageEN: `Last summer I spent a week in Vienna. Vienna is the capital of Austria and one of the most beautiful cities in Europe.\n\nOn the first day I visited St Stephen's Cathedral. The cathedral is enormous and impressive — I could hardly believe how old and beautiful it is.\n\nOn the second day I visited the Art History Museum. I spent three hours there — the time flew by.\n\nA highlight was Schönbrunn Palace. The garden is enormous and very well kept. I took many photos.\n\nOf course I also tried Viennese cuisine: a Wiener Schnitzel and at the famous Café Central, coffee and apple strudel — like a real Viennese!\n\nOn the last evening I watched the sunset over Vienna. It was an unforgettable moment. Vienna has won my heart.`,
  passageTitle: "Eine Woche in Wien — A Week in Vienna",
  grammarTitle: "Two-Way Prepositions (Wechselpräpositionen)",
  grammarHTML: `<p>Nine prepositions take <strong>accusative</strong> (movement) or <strong>dative</strong> (location):<br>
<strong>an, auf, hinter, in, neben, über, unter, vor, zwischen</strong></p>
<table><thead><tr><th>Question</th><th>Case</th><th>Example</th></tr></thead><tbody>
<tr><td><strong>Wohin?</strong> (where to?)</td><td>Accusative</td><td>Ich gehe <strong>in die</strong> Stadt.</td></tr>
<tr><td><strong>Wo?</strong> (where?)</td><td>Dative</td><td>Ich bin <strong>in der</strong> Stadt.</td></tr>
</tbody></table>
<p>Tip: movement → accusative · at rest → dative</p>`,
  memoryHTML: `<p>Picture a room: you can go <em>into</em> it (accusative — movement) and be <em>in</em> it (dative — rest). All 9 two-way prepositions describe things you can do in or around a space. Ask yourself: <em>is something moving toward a place, or resting at one?</em> That decides the case.</p>`,
  practice: [
    ["Ich habe letzten Sommer eine Reise nach Wien gemacht.","Last summer I took a trip to Vienna."],
    ["Das Hotel liegt in der Nähe des Zentrums.","The hotel is close to the centre."],
    ["Wir haben den Dom besichtigt — er war sehr beeindruckend.","We visited the cathedral — it was very impressive."],
    ["Ich habe drei Wochen Urlaub gebucht.","I have booked three weeks of holiday."],
    ["Was empfehlen Sie in dieser Stadt?","What do you recommend in this city?"]
  ]
},
{
  id: 14,
  title: "Essen und Kultur",
  subtitle: "Food Culture and Dining Out",
  level: "B1",
  vocab: [
    ["die Küche","f","the cuisine / kitchen","Die deutsche Küche ist deftig."],
    ["das Gericht","n","the dish","Das Gericht des Tages ist Suppe."],
    ["die Vorspeise","f","the starter","Als Vorspeise nehme ich Suppe."],
    ["das Hauptgericht","n","the main course","Das Hauptgericht ist Schnitzel."],
    ["der Nachtisch","m","dessert","Als Nachtisch möchte ich Eis."],
    ["bestellen","—","to order","Ich möchte bestellen."],
    ["die Rechnung","f","the bill","Die Rechnung, bitte!"],
    ["das Trinkgeld","n","the tip","Ich gebe ein Trinkgeld."],
    ["vegetarisch","—","vegetarian","Ich esse vegetarisch."],
    ["frisch","—","fresh","Das Gemüse ist sehr frisch."],
    ["das Rezept","n","the recipe","Das Rezept ist einfach."],
    ["braten","—","to fry / roast","Ich brate die Kartoffeln."],
    ["schmecken","—","to taste","Das schmeckt fantastisch!"],
    ["süß","—","sweet","Der Kuchen ist süß."],
    ["salzig","—","salty","Das ist zu salzig."],
    ["scharf","—","spicy","Das Essen ist sehr scharf."]
  ],
  passageDE: `Die deutsche Küche wird im Ausland oft auf Klischees reduziert: Bratwurst, Sauerkraut und Bier. Diese Gerichte gibt es wirklich und sie schmecken gut — aber die deutsche Küche ist viel vielfältiger!\n\nJedes Bundesland hat seine eigene Tradition. In Bayern gibt es Schweinebraten mit Knödeln. Im Norden isst man viel Fisch — Matjes und Fischbrötchen sind beliebt. In Schwaben gibt es Maultaschen, eine Art große Nudeltasche. In Thüringen liebt man herzhafte Rostbratwürste.\n\nBesonders wichtig ist das Frühstück — oft üppig: verschiedene Brotsorten, Wurst, Käse, Eier, Marmelade, Kaffee.\n\nEin weiteres wichtiges Konzept ist der „Kaffee und Kuchen" — der Nachmittagskaffee um Punkt drei Uhr. Das ist für viele Deutsche fast heilig!\n\nDie Deutschen erwähnen als „Heimweh-Essen" oft die traditionellen Gerichte: ein warmer Eintopf im Winter oder frisches Brot mit guter Butter.`,
  passageEN: `German cuisine is often reduced to clichés abroad: bratwurst, sauerkraut and beer. These dishes do exist and taste good — but German cuisine is much more diverse!\n\nEach federal state has its own tradition. In Bavaria there is roast pork with dumplings. In the north a lot of fish is eaten — pickled herring and fish rolls are popular. In Swabia there are Maultaschen, a kind of large pasta pocket. In Thuringia people love hearty grilled sausages.\n\nBreakfast is particularly important — often abundant: various breads, cold meats, cheese, eggs, jam, coffee.\n\nAnother important concept is "coffee and cake" — afternoon coffee at precisely three o'clock. This is almost sacred for many Germans!\n\nGermans often mention traditional dishes as "homesick food": a warm stew in winter or simply fresh bread with good butter.`,
  passageTitle: "Traditionelle deutsche Küche — Traditional German Cuisine",
  grammarTitle: "Comparative and Superlative",
  grammarHTML: `<p>Add <strong>-er</strong> for comparative and <strong>am -sten</strong> for superlative:</p>
<table><thead><tr><th>Base</th><th>Comparative</th><th>Superlative</th></tr></thead><tbody>
<tr><td>groß (big)</td><td>größ<strong>er</strong></td><td>am größ<strong>ten</strong></td></tr>
<tr><td>gut (good)</td><td><strong>besser</strong></td><td>am <strong>besten</strong></td></tr>
<tr><td>viel (much)</td><td><strong>mehr</strong></td><td>am <strong>meisten</strong></td></tr>
<tr><td>gern (gladly)</td><td><strong>lieber</strong></td><td>am <strong>liebsten</strong></td></tr>
</tbody></table>
<p>Short adjectives often add an umlaut: alt → <strong>älter</strong> · jung → <strong>jünger</strong> · groß → <strong>größer</strong></p>`,
  memoryHTML: `<p>Short, common adjectives "grow a hat" (umlaut) when they become bigger in the comparative. Think: <em>groß</em> (big) → when it becomes <em>bigger</em>, it gets a little hat on top → <strong>größer</strong>. The adjective literally gets decorated as it grows!</p>`,
  practice: [
    ["Die bayerische Küche ist deftig und lecker.","Bavarian cuisine is hearty and delicious."],
    ["Ich esse lieber Fisch als Fleisch.","I prefer fish to meat."],
    ["Das Schnitzel ist besser als die Suppe.","The schnitzel is better than the soup."],
    ["Die Rechnung, bitte! Wir möchten bezahlen.","The bill, please! We would like to pay."],
    ["Das ist das beste Restaurant in der Stadt.","That is the best restaurant in the city."]
  ]
},
{
  id: 15,
  title: "Technologie und Medien",
  subtitle: "Technology and Media",
  level: "B1",
  vocab: [
    ["das Internet","n","the internet","Ich nutze das Internet täglich."],
    ["die App","f","the app","Ich lade eine neue App herunter."],
    ["das Smartphone","n","the smartphone","Mein Smartphone ist neu."],
    ["soziale Medien","pl","social media","Ich nutze soziale Medien täglich."],
    ["posten","—","to post","Sie postet viele Fotos."],
    ["herunterladen","—","to download","Ich lade Musik herunter."],
    ["hochladen","—","to upload","Ich lade ein Video hoch."],
    ["die E-Mail","f","the email","Ich schreibe eine E-Mail."],
    ["der Datenschutz","m","data protection / privacy","Datenschutz ist sehr wichtig."],
    ["die Zeitung","f","the newspaper","Ich lese die Zeitung online."],
    ["der Podcast","m","the podcast","Ich höre täglich einen Podcast."],
    ["streamen","—","to stream","Wir streamen Serien."],
    ["der Akku","m","the battery","Mein Akku ist leer."],
    ["die Verbindung","f","the connection","Die Verbindung ist langsam."],
    ["digital","—","digital","Wir leben in einer digitalen Welt."],
    ["die Plattform","f","the platform","Welche Plattform nutzt du?"]
  ],
  passageDE: `Wir leben in einer digitalen Revolution. In den letzten zwanzig Jahren hat sich unsere Welt durch Technologie grundlegend verändert.\n\nAuf der einen Seite bietet die Digitalisierung viele Vorteile. Wir können sofort mit Menschen auf der ganzen Welt kommunizieren. Informationen sind innerhalb von Sekunden verfügbar. Wir können von überall arbeiten, einkaufen und lernen.\n\nAuf der anderen Seite bringt die Digitalisierung auch Probleme. Viele Menschen sind von ihren Smartphones abhängig. Sie schauen ständig auf ihren Bildschirm — beim Essen, in Gesprächen, sogar nachts im Bett.\n\nBesonders besorgniserregend finde ich den Einfluss sozialer Medien auf junge Menschen. Studien zeigen, dass übermäßige Nutzung zu mehr Angst und Depressionen führen kann.\n\nIch versuche, bewusst mit Technologie umzugehen: eine Stunde ohne Smartphone am Morgen, kein Handy beim Essen. Es ist schwerer als gedacht, aber sehr wohltuend.`,
  passageEN: `We are living in a digital revolution. In the last twenty years, our world has fundamentally changed through technology.\n\nOn the one hand, digitalisation offers many advantages. We can communicate instantly with people around the world. Information is available within seconds. We can work, shop and learn from anywhere.\n\nOn the other hand, digitalisation also brings problems. Many people are dependent on their smartphones. They constantly look at their screen — while eating, in conversations, even at night in bed.\n\nI find the influence of social media on young people particularly concerning. Studies show that excessive use can lead to more anxiety and depression.\n\nI try to use technology consciously: one hour without my smartphone in the morning, no phone during meals. It is harder than you think, but very beneficial.`,
  passageTitle: "Digitales Leben — Digital Life",
  grammarTitle: "Relative Clauses",
  grammarHTML: `<p>A relative clause describes a noun; the verb goes to the <strong>end</strong>:</p>
<table><thead><tr><th>Example</th><th>Translation</th></tr></thead><tbody>
<tr><td>Das ist das Buch, <strong>das</strong> ich lese.</td><td>That is the book that I am reading.</td></tr>
<tr><td>Das ist die Frau, <strong>die</strong> ich kenne.</td><td>That is the woman whom I know.</td></tr>
<tr><td>Das ist der Mann, <strong>der</strong> arbeitet.</td><td>That is the man who works.</td></tr>
</tbody></table>
<p>The relative pronoun matches the <strong>gender</strong> of the noun it refers to.</p>`,
  memoryHTML: `<p>The relative pronouns look almost identical to the definite articles <em>der, die, das</em>. The only real exception is dative plural <strong>denen</strong>. So: just use the article you already know, adjusted for case — and you're 90% there!</p>`,
  practice: [
    ["Das Internet ist ein wichtiges Werkzeug im Alltag.","The internet is an important tool in everyday life."],
    ["Ich lade täglich Podcasts herunter.","I download podcasts every day."],
    ["Das ist die App, die ich jeden Tag benutze.","That is the app that I use every day."],
    ["Soziale Medien können Vor- und Nachteile haben.","Social media can have advantages and disadvantages."],
    ["Mein Akku ist leer — ich muss mein Handy laden.","My battery is empty — I have to charge my phone."]
  ]
},
{
  id: 16,
  title: "Nachrichten und Gesellschaft",
  subtitle: "News and Society",
  level: "B2",
  partIntro: "At B2 you understand complex texts, express yourself fluently, and discuss abstract topics. Grammar includes Konjunktiv II (subjunctive), passive voice, and extended participial phrases.",
  vocab: [
    ["die Gesellschaft","f","society","Die Gesellschaft verändert sich."],
    ["die Politik","f","politics","Ich interessiere mich für Politik."],
    ["die Wirtschaft","f","the economy","Die Wirtschaft wächst."],
    ["die Umwelt","f","the environment","Wir müssen die Umwelt schützen."],
    ["der Klimawandel","m","climate change","Der Klimawandel ist eine Herausforderung."],
    ["die Demokratie","f","democracy","Deutschland ist eine Demokratie."],
    ["die Regierung","f","the government","Die Regierung hat beschlossen..."],
    ["das Gesetz","n","the law","Das Gesetz gilt ab Januar."],
    ["wählen","—","to vote / elect","Ich gehe wählen."],
    ["die Meinungsfreiheit","f","freedom of speech","Meinungsfreiheit ist ein Grundrecht."],
    ["die Gleichberechtigung","f","equal rights","Gleichberechtigung ist wichtig."],
    ["die Einwanderung","f","immigration","Einwanderung ist ein viel diskutiertes Thema."],
    ["kritisieren","—","to criticise","Die Opposition kritisiert die Regierung."],
    ["die Herausforderung","f","the challenge","Das ist eine große Herausforderung."],
    ["nachhaltig","—","sustainable","Wir brauchen nachhaltige Lösungen."],
    ["global","—","global","Das ist ein globales Problem."]
  ],
  passageDE: `Der Klimawandel ist eine der größten Herausforderungen des 21. Jahrhunderts. Die wissenschaftliche Gemeinschaft ist sich weitgehend einig: Die Erde erwärmt sich, und menschliche Aktivitäten — insbesondere die Verbrennung fossiler Brennstoffe — sind der Hauptverursacher.\n\nDie Folgen sind bereits spürbar. Extreme Wetterereignisse wie Überschwemmungen, Dürren und Hitzewellen nehmen zu. Der Meeresspiegel steigt, was für Küstenregionen bedrohlich ist.\n\nDeutschland hat sich ehrgeizige Klimaziele gesetzt. Bis 2045 soll Deutschland klimaneutral sein. Die Bundesregierung setzt auf erneuerbare Energien und die Elektromobilität.\n\nUmweltschutzorganisationen argumentieren, dass die Maßnahmen nicht weit genug gehen. Die Bewegung „Fridays for Future" hat Millionen junger Menschen mobilisiert, die schnelleres Handeln fordern.\n\nWas klar ist: Untätigkeit ist keine Option. Die Frage ist nicht ob wir handeln müssen, sondern wie und wie schnell.`,
  passageEN: `Climate change is one of the greatest challenges of the 21st century. The scientific community is largely agreed: the Earth is warming, and human activities — particularly the burning of fossil fuels — are the main cause.\n\nThe consequences are already tangible. Extreme weather events such as floods, droughts and heatwaves are increasing. Sea levels are rising, threatening coastal regions.\n\nGermany has set itself ambitious climate targets. By 2045, Germany is supposed to be climate-neutral. The federal government is relying on renewable energies and electric mobility.\n\nEnvironmental organisations argue that the measures do not go far enough. The "Fridays for Future" movement has mobilised millions of young people demanding faster action.\n\nWhat is clear: inaction is not an option. The question is not whether we must act, but how and how quickly.`,
  passageTitle: "Klimawandel — Climate Change",
  grammarTitle: "The Passive Voice (Passiv)",
  grammarHTML: `<p>The passive focuses on the action rather than who does it. Structure: <strong>werden + Partizip II</strong></p>
<table><thead><tr><th>Tense</th><th>Structure</th><th>Example</th></tr></thead><tbody>
<tr><td>Present</td><td>wird + Part. II</td><td>Das Buch <strong>wird gelesen</strong>.</td></tr>
<tr><td>Imperfect</td><td>wurde + Part. II</td><td>Das Buch <strong>wurde gelesen</strong>.</td></tr>
<tr><td>Perfect</td><td>ist + Part. II + worden</td><td>Das Buch <strong>ist gelesen worden</strong>.</td></tr>
</tbody></table>
<p>The agent uses <strong>von + Dative</strong>: Das Gesetz wurde <strong>von der Regierung</strong> beschlossen.</p>`,
  memoryHTML: `<p>The German passive is built exactly like English "is/was + done", but with <em>werden</em> instead of "be": <strong>wird</strong> + gelesen = <strong>is</strong> + read · <strong>wurde</strong> + geschrieben = <strong>was</strong> + written. If you can form the English passive, you already understand the structure — just swap "be" for <em>werden</em>.</p>`,
  practice: [
    ["Der Klimawandel ist eine globale Herausforderung.","Climate change is a global challenge."],
    ["Das Gesetz wurde von der Regierung beschlossen.","The law was decided by the government."],
    ["Erneuerbare Energien werden immer wichtiger.","Renewable energies are becoming increasingly important."],
    ["Ich stimme dir zu — wir müssen handeln.","I agree with you — we must act."],
    ["Die Debatte über Einwanderung wird intensiv geführt.","The debate about immigration is being conducted intensively."]
  ]
},
{
  id: 17,
  title: "Meinungen und Diskussionen",
  subtitle: "Opinions and Debates",
  level: "B2",
  vocab: [
    ["die Meinung","f","the opinion","Was ist deine Meinung?"],
    ["meiner Meinung nach","—","in my opinion","Meiner Meinung nach ist das falsch."],
    ["ich finde","—","I find / think","Ich finde das sehr interessant."],
    ["einerseits","—","on the one hand","Einerseits ist es gut..."],
    ["andererseits","—","on the other hand","Andererseits hat es Nachteile."],
    ["zwar... aber","—","admittedly... but","Das ist zwar teuer, aber gut."],
    ["obwohl","—","although","Obwohl es schwer ist, lerne ich weiter."],
    ["trotzdem","—","nevertheless","Trotzdem bin ich optimistisch."],
    ["überzeugen","—","to convince","Er hat mich überzeugt."],
    ["beweisen","—","to prove","Kann man das beweisen?"],
    ["das Argument","n","the argument","Das ist ein gutes Argument."],
    ["der Standpunkt","m","the standpoint","Ich verstehe deinen Standpunkt."],
    ["recht haben","—","to be right","Du hast recht."],
    ["betonen","—","to emphasise","Ich möchte betonen, dass..."],
    ["berücksichtigen","—","to consider","Man muss alle Aspekte berücksichtigen."],
    ["nuanciert","—","nuanced","Eine nuancierte Betrachtung ist nötig."]
  ],
  passageDE: `In Deutschland ist das Studium an staatlichen Universitäten für EU-Staatsangehörige weitgehend kostenlos. Das wird von vielen als großes Plus des deutschen Bildungssystems gesehen.\n\nBefürworter des kostenlosen Studiums argumentieren, dass Bildung ein Menschenrecht sei und nicht vom Geldbeutel der Eltern abhängen dürfe. Ein freies Bildungssystem fördere soziale Mobilität und Chancengleichheit.\n\nAndererseits wird argumentiert, dass ein komplett kostenloses Studium Nachteile hat. Wer nichts bezahlt, investiere manchmal weniger. Zudem stellt sich die Frage der Finanzierung: Irgendwer muss die Universitäten finanzieren.\n\nMeiner Meinung nach überwiegen die Vorteile eines weitgehend kostenfreien Studiums. Eine gut ausgebildete Bevölkerung ist ein Gewinn für die gesamte Gesellschaft — wirtschaftlich, sozial und kulturell.\n\nDennoch müssen wir die Qualität der Universitäten sicherstellen und sichergehen, dass ausreichend Mittel zur Verfügung stehen.`,
  passageEN: `In Germany, studying at state universities is largely free for EU citizens. This is seen by many as a major plus of the German education system.\n\nSupporters of free university education argue that education is a human right and must not depend on the wealth of one's parents. A free education system promotes social mobility and equal opportunity.\n\nOn the other hand, it is argued that completely free university education also has disadvantages. Those who pay nothing sometimes invest less. There is also the question of funding: someone has to finance the universities.\n\nIn my opinion, the advantages of largely free university study outweigh the disadvantages. A well-educated population is a benefit for society as a whole — economically, socially and culturally.\n\nNevertheless, we need to ensure the quality of universities and make sure sufficient funds are available.`,
  passageTitle: "Sollte das Studium kostenlos sein? — Should University Be Free?",
  grammarTitle: "Konjunktiv II (Subjunctive)",
  grammarHTML: `<p>Konjunktiv II expresses hypothetical, wishful, or polite scenarios:</p>
<table><thead><tr><th>Form</th><th>English</th><th>Example</th></tr></thead><tbody>
<tr><td><strong>würde + infinitive</strong></td><td>would</td><td>Ich <strong>würde</strong> gerne reisen.</td></tr>
<tr><td><strong>wäre</strong></td><td>would be</td><td>Das <strong>wäre</strong> schön.</td></tr>
<tr><td><strong>hätte</strong></td><td>would have</td><td>Ich <strong>hätte</strong> gerne mehr Zeit.</td></tr>
<tr><td><strong>könnte</strong></td><td>could</td><td>Das <strong>könnte</strong> klappen.</td></tr>
</tbody></table>
<p>Hypothetical: Wenn ich reich <strong>wäre</strong>, <strong>würde</strong> ich um die Welt reisen.</p>`,
  memoryHTML: `<p>Whenever you want to say "would" in English, reach for <strong>würde + infinitive</strong>. It works almost universally. Memorise <em>wäre</em> (would be) and <em>hätte</em> (would have) as the two special standalone forms. Everything else: just use <em>würde</em>.</p>`,
  practice: [
    ["Meiner Meinung nach ist das Studium sehr wichtig.","In my opinion, studying is very important."],
    ["Einerseits ist es teuer, andererseits sehr wertvoll.","On the one hand it is expensive, on the other very valuable."],
    ["Wenn ich mehr Zeit hätte, würde ich mehr reisen.","If I had more time, I would travel more."],
    ["Könnten Sie mir bitte Ihren Standpunkt erklären?","Could you please explain your point of view to me?"],
    ["Man muss alle Argumente berücksichtigen.","One must take all arguments into consideration."]
  ]
},
{
  id: 18,
  title: "Berufliche Kommunikation",
  subtitle: "Professional Communication",
  level: "B2",
  vocab: [
    ["das Unternehmen","n","the company","Das Unternehmen wächst stark."],
    ["die Abteilung","f","the department","Ich arbeite in der Marketingabteilung."],
    ["der Auftrag","m","the order / commission","Wir haben einen neuen Auftrag."],
    ["die Frist","f","the deadline","Die Frist ist Freitag."],
    ["einhalten","—","to meet / keep","Die Frist muss eingehalten werden."],
    ["der Bericht","m","the report","Ich schreibe einen Bericht."],
    ["verhandeln","—","to negotiate","Wir verhandeln über den Preis."],
    ["der Vertrag","m","the contract","Wir haben den Vertrag unterzeichnet."],
    ["unterzeichnen","—","to sign","Bitte unterzeichnen Sie hier."],
    ["die Zusammenarbeit","f","the collaboration","Die Zusammenarbeit ist sehr gut."],
    ["umsetzen","—","to implement","Wir setzen die Strategie um."],
    ["absagen","—","to cancel","Das Meeting wurde abgesagt."],
    ["verschieben","—","to postpone","Können wir es verschieben?"],
    ["professionell","—","professional","Bitte verhalten Sie sich professionell."],
    ["die Anfrage","f","the enquiry","Ich habe eine dringende Anfrage."],
    ["die Strategie","f","the strategy","Die Strategie muss überarbeitet werden."]
  ],
  passageDE: `In der modernen Arbeitswelt ist die Fähigkeit, professionelle E-Mails zu schreiben, unverzichtbar. Im Deutschen gibt es klare Konventionen für professionelle Korrespondenz.\n\nDie E-Mail beginnt mit einer formellen Anrede: „<strong>Sehr geehrte Damen und Herren,</strong>" — oder bei bekanntem Namen: „<strong>Sehr geehrter Herr Müller,</strong>"\n\nDer Hauptteil sollte klar, präzise und höflich formuliert sein. Benutzen Sie den Konjunktiv II für höfliche Anfragen: „Ich würde mich freuen, wenn Sie mir die Unterlagen schicken könnten."\n\nTypische Abschlussformeln:\n• <em>„Für Rückfragen stehe ich gerne zur Verfügung."</em>\n• <em>„Ich freue mich auf Ihre Antwort."</em>\n• <em>„Mit freundlichen Grüßen"</em> — die Standardformel (= Yours sincerely)\n• <em>„Herzliche Grüße"</em> — etwas wärmer, für Bekannte\n\nKurz, klar und höflich — das sind die drei goldenen Regeln.`,
  passageEN: `In the modern working world, the ability to write professional emails is indispensable. In German there are clear conventions for professional correspondence.\n\nThe email begins with a formal salutation: "<strong>Dear Sir or Madam,</strong>" — or if you know the name: "<strong>Dear Mr Müller,</strong>"\n\nThe main body should be formulated clearly, precisely and politely. Use Konjunktiv II for polite requests: "I would be pleased if you could send me the documents."\n\nTypical closing formulas:\n• <em>"I am happy to be available for any questions."</em>\n• <em>"I look forward to your reply."</em>\n• <em>"Mit freundlichen Grüßen"</em> — the standard formula (= Yours sincerely)\n• <em>"Herzliche Grüße"</em> — slightly warmer, for people you know\n\nShort, clear and polite — those are the three golden rules.`,
  passageTitle: "Eine professionelle E-Mail schreiben — Writing a Professional Email",
  grammarTitle: "Extended Participial Phrases",
  grammarHTML: `<p>In formal German writing, participial phrases replace relative clauses by sitting between the article and noun:</p>
<table><thead><tr><th>Relative clause</th><th>Participial phrase</th></tr></thead><tbody>
<tr><td>Das Angebot, <em>das wir gemacht haben</em>, ist gut.</td><td>Das <strong>von uns gemachte</strong> Angebot ist gut.</td></tr>
<tr><td>Die Rechnung, <em>die bereits bezahlt wurde</em></td><td>Die <strong>bereits bezahlte</strong> Rechnung</td></tr>
</tbody></table>
<p>These are common in formal written German but rare in speech.</p>`,
  memoryHTML: `<p>Think of an extended participial phrase as a "pre-packed label" stuck before the noun. Instead of "the package, <em>which was sent by courier</em>," you stick the label on: the <em>by-courier-sent</em> package. German loves this efficiency in formal writing — it packs more information into fewer words.</p>`,
  practice: [
    ["Das Meeting wurde auf nächste Woche verschoben.","The meeting was postponed to next week."],
    ["Wir müssen die Frist einhalten.","We must meet the deadline."],
    ["Ich würde mich freuen, von Ihnen zu hören.","I would be pleased to hear from you."],
    ["Können wir einen Termin für diese Woche vereinbaren?","Can we arrange an appointment for this week?"],
    ["Mit freundlichen Grüßen, Thomas Richter.","Yours sincerely, Thomas Richter."]
  ]
},
{
  id: 19,
  title: "Fortgeschrittene Grammatik",
  subtitle: "Advanced Grammar Review",
  level: "B2",
  vocab: [
    ["der Kasus","m","the case","Deutsch hat vier Kasus."],
    ["der Nominativ","m","the nominative","Das Subjekt steht im Nominativ."],
    ["der Akkusativ","m","the accusative","Das direkte Objekt steht im Akkusativ."],
    ["der Dativ","m","the dative","Das indirekte Objekt steht im Dativ."],
    ["der Genitiv","m","the genitive","Der Genitiv zeigt Besitz an."],
    ["das Verb","n","the verb","Das Verb steht an zweiter Stelle."],
    ["der Hauptsatz","m","the main clause","Der Hauptsatz steht allein."],
    ["der Nebensatz","m","the subordinate clause","Im Nebensatz steht das Verb am Ende."],
    ["das Präteritum","n","the simple past","Das Präteritum ist formell."],
    ["das Perfekt","n","the perfect tense","Das Perfekt benutzt man im Gespräch."],
    ["der Infinitiv","m","the infinitive","Der Infinitiv endet auf -en."],
    ["das Partizip","n","the participle","Das Partizip II endet auf -t oder -en."],
    ["unregelmäßig","—","irregular","sein ist ein unregelmäßiges Verb."],
    ["regelmäßig","—","regular","spielen ist ein regelmäßiges Verb."],
    ["der Satzbau","m","sentence structure","Der deutsche Satzbau ist besonders."]
  ],
  passageDE: `Deutsch gilt als eine der schwierigeren Sprachen für Englischsprechende. Es gibt vier Fälle, drei Genera, komplexe Verb-Endstellung in Nebensätzen und trennbare Verben. Das klingt erschreckend.\n\nAber Deutsch ist aus einem wichtigen Grund gut lernbar: Die beiden Sprachen sind genetisch verwandt. Schauen Sie sich diese Paare an:\n\n• Wasser / water · Gras / grass · Hand / hand · Gold / gold\n• Mutter / mother · Bruder / brother · Vater / father\n• singen / sing · trinken / drink · schwimmen / swim\n\nDas Grundvokabular ist erkennbar, sobald man das Ohr dafür entwickelt hat.\n\nDas US Foreign Service Institute schätzt, dass ca. 750 Unterrichtsstunden für B2-Niveau in Deutsch nötig sind — im Vergleich zu über 2.000 Stunden für Arabisch oder Mandarin.\n\nMein Rat: Lernen Sie nicht Grammatik in Isolation. Lesen Sie, hören Sie, sprechen Sie. Machen Sie Fehler — das ist unvermeidlich und wichtig. Das Ziel ist Verständigung, nicht Perfektion.`,
  passageEN: `German is considered one of the more difficult languages for English speakers. There are four cases, three genders, complex verb-final position in subordinate clauses, and separable verbs. That sounds frightening.\n\nBut German is learnable for an important reason: the two languages are genetically related. Look at these pairs:\n\n• Wasser / water · Gras / grass · Hand / hand · Gold / gold\n• Mutter / mother · Bruder / brother · Vater / father\n• singen / sing · trinken / drink · schwimmen / swim\n\nThe core vocabulary is recognisable once you develop an ear for it.\n\nThe US Foreign Service Institute estimates approximately 750 classroom hours for B2 level in German — compared to over 2,000 for Arabic or Mandarin.\n\nMy advice: do not learn grammar in isolation. Read, listen, speak. Make mistakes — that is inevitable and important. The goal is communication, not perfection.`,
  passageTitle: "Warum ist Deutsch schwer — und warum schaffst du es trotzdem?",
  grammarTitle: "The Genitive Case",
  grammarHTML: `<p>The genitive shows possession — equivalent to English "'s" or "of":</p>
<table><thead><tr><th>Gender</th><th>Nominative</th><th>Genitive</th><th>Example</th></tr></thead><tbody>
<tr><td>Masculine</td><td>der Mann</td><td>des Mann<strong>es</strong></td><td>das Buch <strong>des Mannes</strong></td></tr>
<tr><td>Feminine</td><td>die Frau</td><td><strong>der</strong> Frau</td><td>die Tasche <strong>der Frau</strong></td></tr>
<tr><td>Neuter</td><td>das Kind</td><td>des Kind<strong>es</strong></td><td>das Spielzeug <strong>des Kindes</strong></td></tr>
</tbody></table>
<p>In spoken German, the genitive is often replaced with <em>von + Dative</em>: das Buch <strong>von dem Mann</strong>.</p>`,
  memoryHTML: `<p>Masculine and neuter nouns add <strong>-es</strong> in the genitive. Remember: the noun "dresses up" with -es to show it is the owner. The feminine and plural genitive uses <em>der</em> — which looks like the masculine nominative, which can be confusing, but context usually makes it clear.</p>`,
  practice: [
    ["Das Auto des Mannes ist rot.","The man's car is red."],
    ["Im Nebensatz steht das Verb am Ende.","In the subordinate clause the verb is at the end."],
    ["haben und sein sind unregelmäßige Verben.","haben and sein are irregular verbs."],
    ["Deutsch hat vier Kasus: Nominativ, Akkusativ, Dativ und Genitiv.","German has four cases: nominative, accusative, dative and genitive."],
    ["Das Ziel ist Kommunikation, nicht Perfektion.","The goal is communication, not perfection."]
  ]
},
{
  id: 20,
  title: "Kultur, Literatur und Identität",
  subtitle: "Culture, Literature and Identity",
  level: "B2",
  vocab: [
    ["die Kultur","f","the culture","Die deutsche Kultur ist vielfältig."],
    ["die Literatur","f","the literature","Ich lese gerne deutsche Literatur."],
    ["die Kunst","f","the art","Die Kunst im Museum ist wunderschön."],
    ["die Geschichte","f","history / story","Die Geschichte Deutschlands ist komplex."],
    ["die Identität","f","identity","Nationale Identität ist vielschichtig."],
    ["die Tradition","f","the tradition","Weihnachten ist eine wichtige Tradition."],
    ["das Erbe","n","the heritage","Das kulturelle Erbe wird bewahrt."],
    ["feiern","—","to celebrate","Wir feiern Weihnachten mit der Familie."],
    ["die Vielfalt","f","the diversity","Vielfalt bereichert die Gesellschaft."],
    ["bewahren","—","to preserve","Wir sollten Traditionen bewahren."],
    ["der Dichter","m","the poet (m)","Goethe war ein großer Dichter."],
    ["der Roman","m","the novel","Ich lese einen deutschen Roman."],
    ["die Aufklärung","f","the Enlightenment","Die Aufklärung prägte das Denken."],
    ["das Grundgesetz","n","German constitution","Das Grundgesetz schützt Grundrechte."],
    ["die Mauer","f","the wall","Die Berliner Mauer fiel 1989."],
    ["stolz","—","proud","Ich bin stolz auf meine Sprache."],
    ["prägend","—","formative / defining","Das war ein prägendes Erlebnis."]
  ],
  passageDE: `Wenn man eine Sprache lernt, lernt man nicht nur Wörter und Grammatik — man betritt eine neue Welt. Jede Sprache trägt eine ganze Kultur, eine Geschichte und eine Denkweise in sich.\n\nDeutsch ist eine Sprache mit einem außergewöhnlich reichen kulturellen Erbe. Goethe und Schiller prägten nicht nur die deutsche Literatur, sondern das europäische Denken insgesamt. Kant und Hegel revolutionierten die Philosophie. Beethoven, Bach und Brahms gehören zu den wichtigsten Komponisten der Weltmusik.\n\nAber Deutsch trägt auch die Schatten seiner Geschichte. Das 20. Jahrhundert brachte zwei Weltkriege und den Holocaust. Die Deutschen haben sich intensiv mit dieser Geschichte auseinandergesetzt — die „Vergangenheitsbewältigung" ist ein wichtiges Konzept in der deutschen Gesellschaft.\n\nDie Wiedervereinigung 1990 war ein historischer Moment. Die Berliner Mauer, die von 1961 bis 1989 die Stadt teilte, ist zum Symbol des Kalten Krieges geworden.\n\nWenn Sie Deutsch sprechen, haben Sie Zugang zu Wörtern wie: <em>Schadenfreude, Fernweh, Weltschmerz, Gemütlichkeit</em> — Wörter, die es im Englischen nicht gibt. Willkommen in der deutschen Sprache!`,
  passageEN: `When you learn a language, you learn not only words and grammar — you enter a new world. Every language carries an entire culture, a history and a way of thinking within it.\n\nGerman is a language with an extraordinarily rich cultural heritage. Goethe and Schiller shaped not only German literature but European thinking as a whole. Kant and Hegel revolutionised philosophy. Beethoven, Bach and Brahms are among the most important composers in world music.\n\nBut German also bears the shadows of its history. The 20th century brought two world wars and the Holocaust. Germans have engaged intensively with this history — "Vergangenheitsbewältigung" (coming to terms with the past) is an important concept in German society.\n\nThe reunification of 1990 was a historic moment. The Berlin Wall, which divided the city from 1961 to 1989, has become a symbol of the Cold War.\n\nWhen you speak German, you have access to words like: <em>Schadenfreude, Fernweh, Weltschmerz, Gemütlichkeit</em> — words that do not exist in English. Welcome to the German language!`,
  passageTitle: "Was bedeutet es, Deutsch zu sprechen? — What Does It Mean to Speak German?",
  grammarTitle: "Infinitive Clauses with <em>zu</em>",
  grammarHTML: `<p>Many verbs and expressions are followed by <em>zu + infinitive</em>:</p>
<table><thead><tr><th>German</th><th>English</th></tr></thead><tbody>
<tr><td>Ich <strong>versuche</strong>, Deutsch <strong>zu lernen</strong>.</td><td>I try to learn German.</td></tr>
<tr><td>Es ist wichtig, <strong>zu üben</strong>.</td><td>It is important to practise.</td></tr>
<tr><td>Ich habe keine Zeit, <strong>auszugehen</strong>.</td><td>I have no time to go out.</td></tr>
</tbody></table>
<p>⚠️ With separable verbs, <em>zu</em> goes <strong>between</strong> the prefix and stem: <em>aufzumachen, anzurufen, herunterzuladen</em>.</p>`,
  memoryHTML: `<p><em>zu</em> in infinitive clauses almost directly translates to "to" in English: versuchen + zu + lernen = to try <strong>to</strong> learn. When you want to say "to [verb]" in a clause in German, just add <em>zu</em> before the infinitive — one of the most direct grammar correspondences between the two languages!</p>`,
  practice: [
    ["Die deutsche Geschichte ist sehr komplex.","German history is very complex."],
    ["Es ist wichtig, die Sprache zu lernen und zu üben.","It is important to learn and practise the language."],
    ["Die Berliner Mauer fiel im Jahr 1989.","The Berlin Wall fell in the year 1989."],
    ["Ich versuche, jeden Tag Deutsch zu sprechen.","I try to speak German every day."],
    ["Willkommen in der deutschen Sprache!","Welcome to the German language!"]
  ]
},
{
  id: 21,
  title: "Top 1000 Wörter",
  subtitle: "Vocabulary Reference",
  level: "ref",
  isAppendix: true
}
];
