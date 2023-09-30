function DogObject(name, age) {
    let dog = Object.create(constructorObject);
    dog.name = name;
    dog.age = age;
    return dog;
}
let constructorObject = {
    speak: function(){
        return "I am a dog"
    }
}
let bingo = DogObject("Bingo", 54);
console.log(bingo);
