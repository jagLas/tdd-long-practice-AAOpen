class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, ${this.name}!`
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}.`
  }

  switchVisit(otherPerson){
    return otherPerson.visit(this);
  }

  static greetAll(obj) {
    const greetings = [];
    obj.forEach(el => greetings.push(el.sayHello()));

    return greetings;
  }

  

}

module.exports = Person;