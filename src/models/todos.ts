// We have to define the types of values/data that will be stored in the function before hand
// For that, we are creating a data model
class Todo {
  id: string;
  text: string;

  // Here, we are using a constructor to create an object
  //* Constructors initialize the properties of the current instance of a class
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
