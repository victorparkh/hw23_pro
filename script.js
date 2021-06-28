// Создать функцию-конструктор Animal, которая принимает на вход аргументы name, icon, category, breed, voice и присваивать их полям объекта c соответствующим названием ключа.

// Каждому объекту созданному с помощью функции-конструктор Animal доступна функция getVoice, которая возвращает строку вида: Hello, me name is Simba 🐆. I'm Leopard cat. I can say myu-myu. 

// Если для животного не определено то, что он может сказать (например, myu-myu или gav-gav), то строка  «I can say <звук>.» не выводится.

function Animal (name, icon, category, breed, voice) {
    this.name = name;
    this.icon = icon;
    this.category = category;
    this.breed = breed;
    this.voice = voice;
}

Animal.prototype.getVoice = function() {
    switch (this.category){
        case 'dog': 
            voice = 'I can say gav-gav.';
            break;
        case 'cat': 
            voice = 'I can say myu-myu.';
            break;
        default: 
            voice = '';   
    }
    return `Hello, my name is ${this.name} ${this.icon}. I'm ${this.breed} ${this.category}. ${voice}`
}

let Ivan = new Animal('Ivan', '🐕', 'dog', 'Australian Shepherds'),
	Anna = new Animal('Anna', '🐩', 'dog', 'Siberian Huskies'),
	Olena = new Animal('Olena', '🐈', 'cat', 'British Shorthair'),
	Simba = new Animal('Simba', '🐆', 'cat', 'Leopard'),
	Kesha = new Animal('Kesha', '🦜', 'parrot', 'Cockatoos');
	Michael = new Animal('Michael', '🐈', 'cat', 'Dvornyaga');

console.log(Ivan.getVoice());
console.log(Anna.getVoice());
console.log(Olena.getVoice());
console.log(Simba.getVoice());
console.log(Kesha.getVoice());
console.log(Michael.getVoice());


