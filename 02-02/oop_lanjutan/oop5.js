class Animal { 
    speak() {
      return this;
    }
    static eat() {
      return this;
    }
  }
  
  let obj = new Animal();
  obj.speak(); // the Animal object
  let speak = obj.speak;
  speak(); // undefined
  
  Animal.eat() // class Animal
  let eat = Animal.eat;
  eat(); // undefined