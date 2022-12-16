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

  update(obj) {
    if (typeof obj !== 'object'){
      throw TypeError('requires an object');
    } else if(!obj.name || !obj.age) {
      throw TypeError('object needs a name and age');
    }

    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj){
    try{
      this.update(obj);
    } catch {
      return false;
    }
    return true;
  }

}

// let name = 'Billy';
// let age = 23;
// let person = new Person (name, age);
// // person.update('string')

module.exports = Person;