import { useState } from "react";
import "./App.css";
import Fathiza from "./Components/Card";
import CustomButton from "./Components/Custom_button";
import CustomImage from "./Components/Custom_image";

function App() {
    const data = [
        {
            id: 1,
            firstName: "Fathiza",
            lastName: "Khan",
            src: "https://randomuser.me/api/portraits/",
        },
        {
            id: 2,
            firstName: "Fathiza",
            lastName: "Khan",
            src: "https://randomuser.me/api/portraits/",
        },
    ];
    const [products, setProducts] = useState(data);
    const [product, setProduct] = useState({});
    const handlChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };
    console.log(product);
    const handleSubmit = () => {
        setProducts([...products, { ...product, id: Math.random() }]);
    };
    const handleDelete = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div className="App">
            <div>
                <input
                    type="text"
                    placeholder="FirstName"
                    name="firstName"
                    onChange={handlChange}
                />
                <input
                    type="text"
                    placeholder="LastName"
                    name="lastName"
                    onChange={handlChange}
                />
                <input
                    type="text"
                    placeholder="Image"
                    name="src"
                    onChange={handlChange}
                />
                <CustomButton textButton="Add" onClick={handleSubmit} />
            </div>
            {products.map((item, key) => (
                <>
                    <CustomImage src={item.src} />
                    <Fathiza
                        firstName={item.firstName}
                        lastName={item.lastName}
                        key={key}
                    />
                    <CustomButton textButton="View More" />
                    <CustomButton
                        textButton="Delete"
                        onClick={() => handleDelete(item.id)}
                    />
                </>
            ))}
        </div>
    );
}

export default App;
