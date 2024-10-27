import {
  Row,
  Col,
  Button,
  Container,
  Table,
  Dropdown,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { MenuConstants } from "../../../../CommonFiles/constant/MenuConstants";
 import TextField from "@mui/material/TextField";
 import Autocomplete from "@mui/material/Autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
let data = [];

import {
  faArrowLeft,
  faArrowRight,

} from "@fortawesome/free-solid-svg-icons";
// import Header from "./Header";
// import SideMenu from "../SideMenu/SideMenu";
// import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
  const datas = [
    {
      country: "Country A",
      region: "1",
      actions: ["./action2.png", "./action1.png"],
    },
    {
      
      country: "Country B",
      region: "2",
      actions: ["./action2.png", "./action1.png"],
    },
    // Add more data as needed
  ];
const Region = () => {
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => option.title,
  };
  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting"); // Navigate to the settings route
  };
  
 

  // Step 2: handleSideMenu function to toggle the side menu

  return (
    <Container fluid>
      <Row className="mb-4">
        <Row className="">
          <Col className="mt-1 paddingleft-mastersettings fontcolorblackbold borderbottom   ">
            <span className="cursorpointer" onClick={handleSetting}>
              {MenuConstants.master}
            </span>{" "}
            {">"} {MenuConstants.region}
          </Col>
          <Row className="ms2 mt-2">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              {MenuConstants.manage} {MenuConstants.region}
            </Col>
            <Row className="app-country-box ms-0">
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-3  mt-3">{MenuConstants.country}</Row>
                <Col className="ms3">
                  <Autocomplete
                    {...defaultProps}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        className="mt-1 app-input-width"
                      />
                    )}
                  />
                </Col>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms2 mt-3">{MenuConstants.region}</Row>
                <Col className="ms2 mb-3">
                  <TextField
                    id="standard-basic"
                    // label="Standard"
                    className="mt-1 app-input-width"
                    variant="standard"
                  />
                </Col>
              </Col>
              <Row className="ms-1 mb-4">
                <Col xxl={2} xl={2} lg={2} md={2}>
                  <Button className="cursorpointer bordercolororange mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format ">
                    {MenuConstants.create}
                  </Button>
                </Col>
                <Col>
                  <Button className="bordercolororange cursorpointer mediumfont mt-2 backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format ">
                    {MenuConstants.cancel}
                  </Button>
                </Col>
              </Row>
            </Row>
          </Row>
          <Row className="ms2 mt-4 mb-5">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              className="cursorpointer bordercolororange mediumfont backgroundcolorsecondary fontcolorwhite  me-4 app-btns-format "
            >
              {MenuConstants.list}
            </Col>
            <Row className="app-country-box ms-0 p-0 position-relative">
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms-4 mt-3">{MenuConstants.country}</Row>

                <Col className="ms-4 mt-2">
                  <Autocomplete
                    {...defaultProps}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        className=" app-input-width"
                      />
                    )}
                  />
                </Col>
              </Col>
              <Col xxl={3} xl={3} lg={3} md={3}>
                <Row className="ms2 mt-3">{MenuConstants.region}</Row>
                <Col className="ms2 mb-3">
                  <TextField
                    id="standard-basic"
                    className="mt-2 app-input-width"
                    variant="standard"
                  />
                </Col>
              </Col>
              <Col
                xxl={2}
                xl={2}
                lg={2}
                md={2}
                sm={3}
                xs={3}
                className="cursorpointer bordercolororange ms-3 mediumfont backgroundcolorsecondary fontcolorwhite ms-5 mt-5 app-btns-format "
              >
                {MenuConstants.search}
              </Col>

              <Table className="mt-5">
                <thead>
                  <tr className="first-row">
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.country}
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.region}
                    </th>
                    <th className="backgroundcolor fontcolorwhite">
                      {MenuConstants.action}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {datas.map((item, index) => (
                    <tr key={index}>
                      <td>{item.country}</td>
                      <td>{item.region}</td>
                      <td>
                        {item.actions.map((action, idx) => (
                          <img
                            key={idx}
                            src={action}
                            className={`cursorpointer ${
                              idx === 0 ? "me-1" : ""
                            }`}
                            alt="Action"
                            style={{
                              width: idx === 0 ? "15px" : "20px",
                              height: "15px",
                            }}
                          />
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Row className="  app-pageformat mt5 mb3">
                <Col xs="auto">
                  First {MenuConstants.page}
                  <span className="cursorpointer app-pageformat-style">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </span>{" "}
                  {MenuConstants.page}
                  <span className="app-pageformat-style">1</span> out of xx
                  <span className="cursorpointer app-pageformat-style">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>{" "}
                  Last {MenuConstants.page}
                </Col>
              </Row>
            </Row>
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default Region;