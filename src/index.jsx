import React from "react";
import { Container } from 'react-bootstrap';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterComponent from "./Routes/Cppr_Routes";

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Cpps_ElementStyles.scss";
const CPPUrlPath = "/companalyst/cloud/useraccess2024team";

const Root = ReactDOM.createRoot(document.getElementById("root"));
const RootContainer = () => {
    return (
        <Container>
            <RouterComponent />
        </Container>
    )
};

Root.render(
   <BrowserRouter basename={`${CPPUrlPath}`} >
      <RootContainer />
   </BrowserRouter>
);