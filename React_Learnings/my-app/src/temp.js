// class Car {
//     constructor(name) {
//       this.brand = name;
//     }
    
//     present() {
//       return 'I have a ' + this.brand;
//     }
//   }
  
//   const mycar = new Car("Ford");
//   mycar.present();

// class Car {
//     constructor(name) {
//       this.brand = name;
//     }
  
//     present() {
//       return 'I have a ' + this.brand;
//     }
//   }
  
//   class Model extends Car {
//     constructor(name, mod) {
//       super(name);
//       this.model = mod;
//     }  
//     show() {
//         return this.present() + ', it is a ' + this.model
//     }
//   }
//   const mycar = new Model("Ford", "Mustang");
//   mycar.show();

/*
JSX
The class attribute is a much used attribute in HTML, 
but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.
*/

/*
props
Components can be passed as props, which stands for properties.

Props are like function arguments, and you send them into the component as attributes.

Props are arguments passed into React components.

Props are passed to components via HTML attributes.

// function Car(props) {
//   return <h2>I am a {props.color} Car!</h2>;
// }

// function Car() {
//   return <h2>I am a Car!</h2>;
// }

// function Garage() {
//   return (
//     <>
//       <h1>Check Garage</h1>
//       <Car />
//     </>
//   );
// }
*/

/*
React is all about re-using code, and it is recommended to split your components into separate files.

Components are independent and reusable bits of code. 
They serve the same purpose as JavaScript functions, but work in isolation and 
return HTML via a render() function
*/