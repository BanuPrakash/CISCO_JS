import filter, { add, map } from './lib'; // ESM 
import Person from './Person'

Promise.resolve('Hello, World');

let p = new Person('Vinod', 48);
console.log(p.getName());
console.log(p.getAge());

let products = [
    { "id": `1`, "name": `iPhone`, "price": `90000`, category: 'mobile' },
    { "id": `2`, "name": `Sony Bravia`, "price": `290000`, category: 'tv' },
    { "id": `3`, "name": `Logitech `, "price": `5000`, category: 'computer' },
    { "id": `4`, "name": `Samsung Fold`, "price": `210000`, category: 'mobile' },
    { "id": `5`, "name": `LG OLED`, "price": `210000`, category: 'tv' },
    { "id": `6`, "name": `Wacom`, "price": `4500`, category: 'computer' },

];

let mobiles = filter(products, product => product.category === 'mobile');

// HOF
mobiles.forEach(function (product) {
    console.log(product.name);
});

console.log('--------------');

let React = {
    createElement: (tag, props, ...children) => {
        var element = { tag, props: { ...props, children } };
        return element;
    }
};

let product = products[0];

// JSX
let ProductCard = <div className='card'>
    <h2>{product.name}</h2>
    <p>Price: Rs. {product.price}</p>
</div>


console.log(ProductCard); // JSX to JS

// simulating the render function for web
function render(element, container) {
    let domElement = document.createElement(element.tag); //div
    if (['string', 'number'].includes(typeof element)) {
        container.appendChild(document.createTextNode(String(element)));
        return
    }

    if (element.props.children) {
        element.props.children.forEach(child => {
            render(child, domElement);
        });
    }
    container.appendChild(domElement); //div
}

let root = document.getElementById('root');
render(ProductCard, root);