import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";



function TitreHeader(props) {
    return (
        <>
            <div
                className={"header pb-8 pt-5 pt-lg-8 d-flex align-items-center " + props.className}
                style={{
                    minHeight: "300px",
                    backgroundImage:
                        "url(" + require("assets/img/theme/Madrigall-image-generique.jpg") + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                }}
            >

            </div>
        </>
    );
}


export default TitreHeader;
