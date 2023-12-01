/*
-> GENERIC TYPES
* To define a generic type, we do
? function SomeFunction <T>(array: T[], value: T){}
   where T is a generic type defined by us within <>
   * array: T[] means,an array of elements of type T

*/

//-> FC (Functional Component), is a generic type
//# Todos is now considered a function that acts as a functional component (setting the type as FC)
// props now has an object type with props.children property

// We can add our own type alongside the generic type using <>
const Todos: React.FC<{ items: string[] }> = (props) => {
  //! Here, we are using a generic type offered by React (React.FC), not defining one

  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
