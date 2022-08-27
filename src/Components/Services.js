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
class Services extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.apply = this.apply.bind(this);
    this.state = {
      users: [],
      modal: false,
      name: "",
      address: "",
      phone: "",
      from: "",
      to: "",
      equipment: "",
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  apply(e) {
    e.preventDefault();
    const db = fire.firestore();
    const userRef = db.collection("Slots").add({
      Name: this.state.name,
      Father: this.state.father,
      Phone_Number: this.state.phone,
      Aadhaar: this.state.aadhaar,
      Crop: this.state.crop,
      Weight: this.state.weight,
      Address: this.state.taluk + "," + this.state.district,
    });
    alert(
      "responce subited ,token number" +
        db
          .collection("Tokens")
          .get()
          .then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => {
              const d = {
                id: doc.id,
                ...doc.data(),
              };
              return d[0];
            });
          })
    );
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  componentDidMount() {
    const db = fire.firestore();

    db.collection("Services")
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
            சேவைகள்
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
                <MDBCard ecommerce narrow style={{ height: 450 }}>
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
                  <MDBCardBody style={{ textAlign: "center" }}>
                    <MDBRow between="true">
                      <MDBCardTitle>{user.service}</MDBCardTitle>
                      <MDBCardText
                        style={{
                          paddingBottom: 25,
                          textAlign: "justify",
                        }}
                      >
                        {" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.description}
                      </MDBCardText>
                    </MDBRow>

                    <MDBBtn onClick={this.toggle}>பதிவு </MDBBtn>

                    <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                      <MDBModalBody>
                        <MDBRow>
                          <MDBCol>
                            <form>
                              <p className="h4 text-center py-4">
                                விவரங்களை பதிவிடுக
                              </p>
                              <MDBInput
                                label="பெயர்"
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
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                name="address"
                                id="address"
                                onChange={this.handleChange}
                                value={this.state.address}
                              />
                              <MDBInput
                                label="தொடர்பு எண்"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                name="phone"
                                id="phone"
                                onChange={this.handleChange}
                                value={this.state.phone}
                              />
                              <label style={{ color: "gray" }}>
                                முதல் நாள்{" "}
                              </label>
                              <MDBInput
                                group
                                type="date"
                                validate
                                error="wrong"
                                success="right"
                                name="from"
                                id="specilization"
                                onChange={this.handleChange}
                                value={this.state.from}
                              />
                              <label style={{ color: "gray" }}>
                                இறுதி நாள்{" "}
                              </label>
                              <MDBInput
                                group
                                type="date"
                                validate
                                error="wrong"
                                success="right"
                                name="to"
                                id="experience"
                                onChange={this.handleChange}
                                value={this.state.to}
                              />
                              <label style={{ color: "gray" }}>
                                இயந்திர வகைகள்
                              </label>
                              <select
                                id="job"
                                name="equipment"
                                onChange={this.handleChange}
                                value={this.state.equipment}
                                style={{ width: 450, padding: 10 }}
                              >
                                <option value="Embedded Developer In C">
                                  பெரிய கலப்பை
                                </option>
                                <option value="Calibration engineer">
                                  சின்ன கலப்பை
                                </option>
                                <option value="Malware Proctection Analyst">
                                  ரொட்டொர்
                                </option>
                                <option value="Safety Calibration Expert">
                                  நஞ்சை
                                </option>
                                <option value="Full Stack Developer">
                                  பூச்சி தெளிப்பான்
                                </option>
                                <option value="Design Power Electronics">
                                  Design Power Electronics
                                </option>
                                <option value="Microprocessor Developer For Automotive">
                                  Microprocessor Developer For Automotive
                                </option>
                              </select>
                              <div className="text-center py-4 mt-3">
                                <MDBBtn
                                  outline
                                  type="reset"
                                  onClick={this.apply}
                                >
                                  சமர்ப்பி
                                  <MDBIcon
                                    far
                                    icon="paper-plane"
                                    className="ml-2"
                                  />
                                </MDBBtn>
                              </div>
                            </form>
                          </MDBCol>
                        </MDBRow>
                      </MDBModalBody>
                      <MDBModalFooter>
                        <MDBBtn onClick={this.toggle}>
                          <h1>X</h1>
                        </MDBBtn>
                      </MDBModalFooter>
                    </MDBModal>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default Services;
