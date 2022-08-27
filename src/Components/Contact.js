import React from "react";
import fire from "./Firebase";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBContainer,
  MDBTypography,
  MDBBox,
} from "mdbreact";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.feedback = this.feedback.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: "",
      address: "",
      phone: "",
      message: "",
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  feedback(e) {
    e.preventDefault();
    const db = fire.firestore();
    const userRef = db.collection("Feedback").add({
      name: this.state.name,
      address: this.state.address,
      phone: this.state.phone,
      message: this.state.message,
    });
  }
  componentDidMount() {
    Aos.init({
      duration: 1500,
      mirror: true,
    });
  }
  render() {
    return (
      <MDBContainer style={{ marginTop: 100 }} id="contact">
        <MDBContainer>
          <MDBTypography
            tag="h1"
            variant="h1"
            className="text-center pt-4 pb-2"
            colorText="blue-grey"
          >
            தொடர்புக்கு
          </MDBTypography>
          <input type="range" className="custom-range" id="customRange1" />
          <MDBRow className="mx-auto">
            <MDBCol lg="5" md="12" className="mx-auto">
              <MDBBox className="justify-content-center align-items-center mx-auto mt-lg-5 pt-5">
                <div style={{ display: "flex" }}>
                  <MDBIcon
                    icon="map-marker-alt"
                    size="2x"
                    className="grey-text pt-3"
                    style={{ marginRight: 23 }}
                  />
                  <MDBTypography tag="h4" variant="h4" colorText="grey">
                    தலைமை அலுவலகம்
                  </MDBTypography>
                </div>
                <MDBTypography
                  tag="h4"
                  variant="h4"
                  className="ml-5"
                  colorText="grey"
                >
                  எண் 12, தம்புசாமி சாலை,
                </MDBTypography>
                <MDBTypography
                  tag="h4"
                  variant="h4"
                  className="ml-5"
                  colorText="grey"
                >
                  கீழ்ப்பாக்கம், சென்னை.
                </MDBTypography>
                <MDBTypography
                  tag="h4"
                  variant="h4"
                  className="ml-5 pb-2"
                  colorText="grey"
                >
                  தமிழ்நாடு - 600 010
                </MDBTypography>
                <hr className="hr-dark pt-2 pb-2" />
                <div style={{ display: "flex" }}>
                  <MDBIcon
                    icon="envelope"
                    size="2x"
                    className="grey-text"
                    style={{ marginRight: 20 }}
                  />
                  <MDBTypography tag="h4" variant="h4" colorText="grey">
                    tncsc.tn.nic.in
                  </MDBTypography>
                </div>
                <hr className="hr-dark pt-2 pb-2" />
                <div style={{ display: "flex" }}>
                  <MDBIcon
                    icon="mobile-alt"
                    size="2x"
                    className="grey-text"
                    style={{ marginRight: 20 }}
                  />
                  <MDBTypography
                    tag="h4"
                    variant="h4"
                    className="pb-5"
                    colorText="grey"
                  >
                    044 - 26 426 773-6
                  </MDBTypography>
                </div>
              </MDBBox>
            </MDBCol>
            <MDBCol lg="1"></MDBCol>
            <MDBCol lg="6" md="11">
              <MDBCard className="mt-3 pt-3 rare-wind-gradient">
                <MDBCardBody className="mx-3">
                  <div className="text-center">
                    <h3 className="black-text mb-5">
                      <strong>புகார்</strong>
                    </h3>
                  </div>
                  <MDBInput
                    label="பெயர்"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="name"
                    id="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                  />
                  <MDBInput
                    label="முகவரி"
                    icon="envelope"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="address"
                    id="email"
                    onChange={this.handleChange}
                    value={this.state.address}
                  />
                  <MDBInput
                    label="தொடர்பு எண்"
                    icon="tag"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="phone"
                    id="subject"
                    onChange={this.handleChange}
                    value={this.state.phone}
                  />
                  <MDBInput
                    type="textarea"
                    rows="2"
                    label="கருத்து"
                    icon="pencil-alt"
                    name="message"
                    id="message"
                    onChange={this.handleChange}
                    value={this.state.message}
                  />
                  <div className="text-center mb-1">
                    <MDBBtn
                      type="button"
                      style={{
                        borderRadius: 25,
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                      className="ripe-malinka-gradient"
                      onClick={this.feedback}
                    >
                      சமர்ப்பி
                      <MDBIcon
                        far
                        icon="paper-plane"
                        size="1x"
                        className="ml-1"
                      />
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}
export default Contact;
