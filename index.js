// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const appendCats = [...cats, name];
    return appendCats;
}
function prependCat(name) {
    const prependCats = [name, ...cats];
    return prependCats;
}
function removeLastCat() {
    const removeLastCats = cats.slice(0, -1);
    return removeLastCats;
}
function removeFirstCat() {
    const removeFirstCats = cats.slice(1);
    return removeFirstCats;
}