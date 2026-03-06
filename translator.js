document.getElementById('translationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const englishText = document.getElementById('englishText').value;
  const translatedText = translateToTokPisin(englishText);
  document.getElementById('result').innerText = "In Tok Pisin: " + translatedText;
});

function translateToTokPisin(text) {
  const dictionary = {
    "hello": "halo",
    "good morning": "gutpela moning",
    "good night": "gutpela nait",
    "thank you": "tenkyu",
    "how are you": "yu orait?",
    "yes": "yes",
    "no": "nogat",
    "friend": "pren",
    "school": "skul",
    "teacher": "tisa",
    "house": "haus",
    "hospital": "hausik",
    "market": "maket",
    "money": "mani",
    "food": "kaikai",
    "water": "wara",
    "walk": "wokabaut",
    "run": "ron",
    "sit": "sindaun",
    "stand": "sanap",
    "love": "laikim",
    "small": "liklik",
    "big": "bigpela",
    "father": "papa",
    "mother": "mama",
    "brother": "brata",
    "sister": "susa",
    "child": "pikinini",
    "language": "tok ples",
    "country": "kantri",
    "name": "nem",
    "where": "we",
    "what": "wanem",
    "who": "husat",
    "day": "de",
    "night": "nait",
    "work": "wok",
    "play": "pilai",
    "read": "rit",
    "write": "rait",
    "learn": "lainim",
    "hear": "harim",
    "see": "lukim",
    "come": "kam",
    "go": "go"
  };

  let cleanText = text.toLowerCase().replace(/[.,!?]/g, '');
  const words = cleanText.split(' ');
  const translatedWords = words.map(word => dictionary[word] || word);
  return translatedWords.join(' ');
}

