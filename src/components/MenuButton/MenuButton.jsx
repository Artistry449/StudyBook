import React from "react";

export default function MenuButton({ buttonValue, direction }) {
    return (
        <a className="menuButton" href={direction}>{buttonValue}</a>
    )
}