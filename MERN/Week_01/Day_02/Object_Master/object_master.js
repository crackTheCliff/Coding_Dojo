const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

console.log("");
console.log("1. An array of pokémon objects where the id is evenly divisible by 3:\n");
const DivisibleBy3 = pokémon.filter( p => p.id % 3 == 0 );
console.log(DivisibleBy3);
console.log("");

console.log("2. An array of pokémon objects that are 'fire' type:\n");
const FireType = pokémon.filter( p => p.types.includes("fire"));
console.log(FireType);
console.log("");

console.log("3. An array of pokémon objects that have more than one type:\n");
const MoreThanOneType = pokémon.filter( p => p.types.length > 1);
console.log(MoreThanOneType);
console.log("");

console.log("4. An array with just the names of the pokémon:\n");
const Names = pokémon.map( p => p.name);
console.log(Names);
console.log("");

console.log("5. An array with just the names of pokémon with an id greater than 99:\n");
const NamesWithIdGreater99 = pokémon.filter( p => p.id > 99).map(p => p.name);
console.log(NamesWithIdGreater99);
console.log("");

console.log("6. An array with just the names of the pokémon whose only type is poison:\n");
const OnlyPoison = pokémon.filter( p => p.types.includes("poison") && p.types.length == 1).map(p => p.name);
console.log(OnlyPoison);
console.log("");

console.log("7. An array containing just the first type of all the pokémon whose second type is 'flying':\n");
const FirstTypeWithSecondTypeFly = pokémon.filter( p => p.types[1]==("flying")).map(p => p.types[0]);
console.log(FirstTypeWithSecondTypeFly);
console.log("");

console.log("8. A count of the number of pokémon that are 'normal' type:\n");
const NumberOfNormal = pokémon.filter( p => p.types.includes("normal")).length;
console.log(NumberOfNormal);
console.log("");