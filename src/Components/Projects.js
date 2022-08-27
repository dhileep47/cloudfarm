import React from "react";
import fire from "./Firebase";

import Aos from "aos";
import "aos/dist/aos.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBCardBody,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon,
  MDBCardText,
  MDBInput,
} from "mdbreact";
class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    const db = fire.firestore();

    db.collection("Schemes")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          const d = {
            id: doc.id,
            ...doc.data(),
          };
          return d;
        });
        this.setState({ users: data });
      });
    Aos.init({
      duration: 1500,
      mirror: true,
    });
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <MDBContainer style={{ marginTop: 100 }} id="job">
          <MDBTypography
            tag="h1"
            variant="h1"
            className="text-center pt-4 pb-2"
            colorText="blue-grey"
          >
            திட்டங்கள்
          </MDBTypography>
          <input type="range" className="custom-range" id="customRange1" />
        </MDBContainer>
        <MDBContainer>
          <MDBRow
            justify="flex-start"
            alignItems="flex-start"
            style={{ marginTop: 50 }}
          >
            {users.map((user) => (
              <MDBCol md="4" style={{ maxWidth: "22rem", margin: 10 }}>
                <a href={user.link} target="_blank">
                  <MDBCard narrow style={{ height: 300 }}>
                    <MDBCardImage
                      hover
                      top
                      style={{ height: 200 }}
                      className="img-fluid"
                      src={user.img}
                      waves
                    />
                    <MDBCardTitle style={{ margin: 15, textAlign: "center" }}>
                      {user.name}
                    </MDBCardTitle>
                  </MDBCard>
                </a>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default Projects;
