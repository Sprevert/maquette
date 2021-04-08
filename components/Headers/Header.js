import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

function Header() {
  return (
      <>
          <div
              className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
              style={{
                  minHeight: "300px",
                  backgroundImage:
                      "url(" + require("assets/img/theme/Madrigall-image-generique.jpg") + ")",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
              }}
          >
              {/* Mask */}
              <span  />
              {/* Header container */}

          </div>
      </>
  );
}

export default Header;
