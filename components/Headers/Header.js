import React from "react";

function Header(props) {
    return (
        <>
            <div
                className={"header pb-8 pt-1 pt-lg-2 d-flex align-items-center " + props.className}
                style={{
                    minHeight: "300px",
                    backgroundImage:
                        "url(" + require("assets/img/theme/Madrigall-image-generique.jpg") + ")",
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                    backgroundPositionY: "-250px",
                }}
            >
                {props.children}
            </div>
        </>
    );
}

export default Header;
