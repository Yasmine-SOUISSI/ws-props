import React from "react";
import Card from "../Components/Card";
import CustomButton from "../Components/Custom_button";
import { products } from "../Data";
export default function Products() {
    return (
        <>
            {products.map((product, key) => {
                return (
                    <div key={key}>
                        <Card nom={product.title} prenom={product.text} />
                        <CustomButton
                            className="btn btn-primary"
                            type="button"
                            onClick={() => {
                                console.log("product id", product.id);
                            }}
                            textButton="View more"
                        />
                    </div>
                );
            })}
        </>
    );
}
