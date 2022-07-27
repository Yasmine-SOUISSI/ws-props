import React from "react";

export default function CustomButton({
    className,
    type,
    onClick,
    textButton,
    disabled,
}) {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {textButton}
        </button>
    );
}

CustomButton.defaultProps = {
    className: "",
    type: "button",
    onClick: () => {},
    textButton: "",
    disabled: false,
};
