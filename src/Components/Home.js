import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBTypography,
} from "mdbreact";
import homeimage from "./Images/hme.jpg";
import finance from "./Images/finance.png";
import Vision from "./Images/tncsc.jpg";
import Mission from "./Images/tncsc2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
class Home extends React.Component {
  componentDidMount() {
    Aos.init({
      duration: 1500,
      mirror: true,
    });
  }
  render() {
    return (
      <MDBContainer fluid style={{ marginTop: 85 }} id="home">
        <div className="img-gradient">
          <img src={homeimage} alt="home" width="100%" height="500px" />
        </div>
        <MDBContainer>
          <MDBTypography
            tag="h1"
            variant="h1"
            className="text-center mt-5"
            colorText="blue-grey"
          >
            <strong>தமிழ்நாடு நுகர்பொருள் வாணிபக் கழகம்</strong>
          </MDBTypography>
          <input type="range" className="custom-range" id="customRange1" />
        </MDBContainer>
        <MDBContainer className="mt-5">
          <MDBRow className="mx-auto">
            <MDBCol lg="8" md="12" sm="12" className="mx-auto">
              <MDBCard
                border="default"
                className="aqua-gradient white-text"
                data-aos="fade-right"
              >
                <MDBCardBody>
                  <MDBCardText
                    className="white-text"
                    style={{ fontWeight: "bold", textAlign: "Justify" }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;தமிழ்நாடு சிவில் சப்ளைஸ்
                    கார்ப்பரேஷன் 1972 ஆம் ஆண்டு அப்போதைய மாண்புமிகு முதலமைச்சர்
                    முத்தமிழ் அறிஞர் கலைஞரால் பொது விநியோகத் திட்டத்தின் கீழ்
                    அத்தியாவசியப் பொருட்களை கொள்முதல் செய்தல், சேமித்தல் மற்றும்
                    விநியோகம் செய்யும் உன்னதப் பணியுடன் நிறுவப்பட்டது. மாநில
                    மக்களுக்கு உணவுப் பாதுகாப்பை உறுதி செய்வதில் கணிசமான
                    பங்களிப்பை வழங்கிய நாட்டிலேயே இதுபோன்ற அமைப்பை உருவாக்கிய
                    முதல் மாநிலம் தமிழ்நாடு ஆகும். பின்னர், கார்ப்பரேஷன் 1
                    ஏப்ரல் 2010 அன்று நிறுவனங்கள் சட்டம், 1956 (நிறுவனங்கள்
                    சட்டம் 2013 இன் பிரிவு 8) பிரிவு 25 இன் கீழ் “தமிழ்நாடு
                    சிவில் சப்ளைஸ் கார்ப்பரேஷன்” என்ற பெயரில் பதிவு
                    செய்யப்பட்டது. தமிழ்நாடு சிவில் சப்ளைஸ் கார்ப்பரேஷன்,
                    மாண்புமிகு உணவு மற்றும் குடிமைப் பொருள் வழங்கல் துறை
                    அமைச்சர் தலைமையில் இயக்குநர்கள் குழுவின் தலைவராக உள்ளது.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="4" md="12" sm="12" data-aos="zoom-in-left">
              <img src={Vision} alt="Vision" style={{ height: "212px" }} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="mt-5">
          <MDBRow className="mx-auto">
            <MDBCol lg="4" md="12" sm="12" data-aos="zoom-in-right">
              <img src={Mission} alt="Mission" style={{ height: "200px" }} />
            </MDBCol>
            <MDBCol lg="8" md="12" sm="12" className="mx-auto">
              <MDBCard
                border="default"
                className="aqua-gradient white-text"
                data-aos="fade-left"
              >
                <MDBCardBody>
                  <MDBCardTitle
                    className="text-center"
                    style={{ fontWeight: "bold", fontSize: 30 }}
                  ></MDBCardTitle>
                  <MDBCardText
                    className="white-text"
                    style={{ fontWeight: "bold", textAlign: "Justify" }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;கார்ப்பரேஷன் 33
                    மண்டலங்களாகப் பிரிக்கப்பட்டுள்ளது, ஒவ்வொரு வருவாய்
                    மாவட்டத்திலும் ஒன்று மற்றும் சென்னை நகரில் இரண்டு மூத்த
                    மண்டல மேலாளர்கள்/மண்டல மேலாளர்கள் தலைமையில். மாநிலம்
                    முழுவதும் உள்ள தலைமை அலுவலகம், மண்டல அலுவலகங்கள், குடோன்கள்,
                    நவீன அரிசி ஆலைகள், நியாய விலைக் கடைகள், அமுதம் பல்பொருள்
                    அங்காடிகள் ஆகியவற்றில் 7,293 நிரந்தர ஊழியர்களும், 5,111
                    பருவகால ஊழியர்களும் பணிபுரிகின்றனர். மேற்கண்ட பணியாளர்கள்
                    தவிர, குடோன்கள், நேரடி நெல் கொள்முதல் நிலையங்கள் மற்றும்
                    மாநகராட்சி நவீன அரிசி ஆலைகளில் 5,199 சுமை ஏற்றுபவர்களும்,
                    27,845 பருவகால சுமைதார்களும் பணிபுரிகின்றனர்.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol lg="4" md="12" sm="12">
              <MDBCard
                className="p-1 pb-2 m-2 heavy-rain-gradient"
                data-aos="fade-right"
              >
                <MDBCardBody>
                  <MDBCardTitle className="text-center">மேலாண்மை</MDBCardTitle>
                  <MDBCardText style={{ fontSize: 18, textAlign: "Justify" }}>
                    தமிழ்நாடு சிவில் சப்ளைஸ் கார்ப்பரேஷன் மூத்த ஐ.ஏ.எஸ். தலைவர்
                    மற்றும் நிர்வாக இயக்குனர் தலைமையில் அதிகாரிகள். நிர்வாக
                    ரீதியாக முழு மாநிலமும் 33 மண்டலங்களாகப் பிரிக்கப்பட்டு,
                    ஒவ்வொரு பிராந்தியமும் மூத்த மண்டல மேலாளர்கள்/மண்டல
                    மேலாளர்களால் வழிநடத்தப்படுகிறது.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="4" md="12" sm="12">
              <MDBCard
                className="p-1 pb-2 m-2 heavy-rain-gradient"
                data-aos="zoom-out"
              >
                <MDBCardBody>
                  <MDBCardTitle className="text-center">
                    செயல்பாடுகள்
                  </MDBCardTitle>
                  <MDBCardText style={{ fontSize: 18, textAlign: "Justify" }}>
                    கழகத்தின் முக்கியப் பணிகள் அரிசி, சர்க்கரை, கோதுமை போன்ற
                    அத்தியாவசியப் பொருட்களைக் கொள்முதல் செய்தல், கூட்டுறவுச்
                    சங்கங்கள் மற்றும் பிற முகமைகள் மூலம் தாலுகா செயல்பாட்டுக்
                    கிடங்குகளில் இருந்து பல்வேறு பொது விநியோக அமைப்பு விற்பனை
                    நிலையங்களுக்கு விநியோகிப்பதற்கான சேமிப்பு மற்றும்
                    நகர்த்துதல் ஆகும். கார்ப்பரேஷன் நெல் கொள்முதல், உரமிடுதல்
                    மற்றும் அரிசியை பரவலாக்கப்பட்ட கொள்முதல் முறையின் கீழ்
                    பயன்படுத்துகிறது.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="4" md="12" sm="12">
              <MDBCard
                className="p-1 pb-2 m-2 heavy-rain-gradient"
                data-aos="fade-left"
              >
                <MDBCardBody>
                  <MDBCardTitle className="text-center">
                    பொருளாதார நிலை
                  </MDBCardTitle>
                  <MDBCardText style={{ fontSize: 18 }}>
                    கழகத்தின் அங்கீகரிக்கப்பட்ட பங்கு மூலதனம் ரூ.100.00 கோடி
                    மற்றும் செலுத்தப்பட்ட பங்கு மூலதனம் ரூ.67.73 கோடி. 2011 -
                    2012 முதல் 2014 - 2015 வரையிலான மாநகராட்சியின் திருப்பம்
                    பின்வருமாறு.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer>
          <MDBRow>
            <MDBCol sm="12">
              <MDBCard
                className="p-3 m-2 mt-4 winter-neva-gradient"
                data-aos="zoom-out"
              >
                <MDBCardImage src={finance} position="center" />
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}
export default Home;
