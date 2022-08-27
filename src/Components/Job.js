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
class Job extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.apply = this.apply.bind(this);
    this.state = {
      users: [],
      modal: false,
      name: "",
      father: "",
      phone: "",
      address: "",
      aadhaar: "",
      crop: "",
      weight: "",
      district: "",
      taluk: "",
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
      Address: this.state.address,
    });
    alert("your slot has been booked");
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  componentDidMount() {
    Aos.init({
      duration: 1500,
      mirror: true,
    });
  }

  render() {
    const { users } = this.state;

    const fetchdata = () => {
      const db = fire.firestore();
      const dis = this.state.district;
      const tal = this.state.taluk;
      db.collection("Warehouse")
        .doc(dis)
        .collection(tal)
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
    };
    return (
      <div>
        <MDBContainer style={{ marginTop: 100 }} id="job">
          <MDBTypography
            tag="h1"
            variant="h1"
            className="text-center pt-4 pb-2"
            colorText="blue-grey"
          >
            கொள்முதல் நிலையங்கள்
          </MDBTypography>
          <input type="range" className="custom-range" id="customRange1" />
        </MDBContainer>
        <MDBContainer>
          <MDBCol lg="6" md="11" middle="true">
            <MDBCard className="mt-3 pt-3 rare-wind-gradient">
              <MDBCardBody className="mx-3">
                <div className="text-center">
                  <h3 className="black-text mb-5">
                    <strong>இடம் </strong>
                  </h3>
                </div>
                <MDBInput
                  label="மாவட்டம்"
                  icon="location"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="district"
                  id="district"
                  onChange={this.handleChange}
                  value={this.state.district}
                />
                <MDBInput
                  label="தாலுகா"
                  icon="location"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  name="taluk"
                  id="taluk"
                  onChange={this.handleChange}
                  value={this.state.taluk}
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
                    onClick={fetchdata}
                  >
                    தேடு
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

          <MDBRow
            justify="flex-start"
            alignItems="flex-start"
            style={{ marginTop: 50 }}
          >
            {users.map((user) => (
              <MDBCol md="4" style={{ maxWidth: "22rem", margin: 10 }}>
                <MDBCard narrow style={{ height: 505 }}>
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
                    <MDBCol>
                      <MDBTypography
                        tag="p"
                        variant="p"
                        className="ml-5"
                        colorText="grey"
                      >
                        தொடர்பு: {user.contact}
                      </MDBTypography>
                      <MDBRow>
                        <MDBTypography
                          tag="p"
                          variant="p"
                          className="ml-5"
                          colorText="grey"
                        >
                          கொள்ளளவு :{user.capacity}
                        </MDBTypography>
                        <MDBTypography
                          tag="p"
                          variant="p"
                          className="ml-5"
                          colorText="grey"
                        >
                          மீதம் :{user.occupied}
                        </MDBTypography>
                      </MDBRow>
                      <MDBBtn onClick={this.toggle}>பதிவு </MDBBtn>
                    </MDBCol>

                    <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                      <MDBModalHeader toggle={this.toggle}>
                        <MDBCol></MDBCol>
                      </MDBModalHeader>
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
                                label="தந்தை"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                name="father"
                                id="email"
                                onChange={this.handleChange}
                                value={this.state.father}
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
                              <MDBInput
                                label="நாள்"
                                group
                                type="date"
                                validate
                                error="wrong"
                                success="right"
                                name="date"
                                id="specilization"
                                onChange={this.handleChange}
                                value={this.state.date}
                              />
                              <MDBInput
                                label="ஆதார்"
                                group
                                type="number"
                                validate
                                error="wrong"
                                success="right"
                                name="aadhaar"
                                id="experience"
                                onChange={this.handleChange}
                                value={this.state.aadhaar}
                              />
                              <MDBInput
                                label="பயிர்"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                name="crop"
                                id="expcompany"
                                onChange={this.handleChange}
                                value={this.state.crop}
                              />
                              <MDBInput
                                label="அளவு"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                name="weight"
                                id="weight"
                                onChange={this.handleChange}
                                value={this.state.weight}
                              />

                              <div className="text-center py-4 mt-3">
                                <MDBBtn
                                  outline
                                  type="reset"
                                  onClick={this.apply}
                                >
                                  Send
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
                        <MDBBtn onClick={this.toggle}>Close</MDBBtn>
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
export default Job;
