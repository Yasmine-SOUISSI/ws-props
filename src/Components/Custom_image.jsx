import React from "react";

export default function CustomImage({ className, src, alt }) {
    return <img src={src} alt={alt} className={className} />;
}

CustomImage.defaultProps = {
    className: "",
    src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: "image",
};
