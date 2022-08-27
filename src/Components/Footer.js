import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBTypography,
  MDBIcon,
} from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter
      color="grey darken-4"
      className="page-footer font-small pt-0 mt-5"
    >
      <MDBContainer className="mt-4 text-center text-md-left">
        <MDBRow className="mt-3" around="true">
          <MDBCol md="4" lg="3" xl="3" className="mb-4" middle="true">
            <MDBContainer fluid>
              <MDBTypography variant="h4" tag="h4">
                <i className="fa fa-copyright mr-3" />
                CLOUD FARM
              </MDBTypography>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr
              className="green accent-3 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px", height: "2px" }}
            />
            <p>
              <a href="http://fcamin.nic.in/">
                <MDBIcon far icon="address-card" className="mr-2" />
                Ministry of Consumer Affairs & Public Distribution
              </a>
            </p>
            <p>
              <a href="http://www.consumer.tn.gov.in/">
                <MDBIcon far icon="handshake" className="mr-2" />
                Civil Supplies and Consumer Protect Department
              </a>
            </p>
            <p>
              <a href="http://www.fci.gov.in/">
                <MDBIcon icon="laptop" className="mr-2" />
                Food Corporation of India
              </a>
            </p>
            <p>
              <a href="http://www.tncu.tn.gov.in/">
                <MDBIcon icon="user-plus" className="mr-2" />
                Registrar of Cooperative Societies
              </a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPagePro;
