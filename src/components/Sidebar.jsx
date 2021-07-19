import React from "react";
import { Nav } from "react-bootstrap";
import { ClipboardPlus, ClipboardCheck } from "react-bootstrap-icons";
import "../App.css";

// import { withRouter } from "react-router";
// import '../pages/style/Dashboard.css'

const Sidebar = () => {
  return (
    <div className="sideBar bg-dark">
      <Nav className="col-md-1 d-inline-block bg-dark">
        <div className="sidebarBtn">
          <Nav.Item>
            <Nav.Link href="/home">
              <ClipboardPlus style={{ fontSize: "2em" }} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">
              <ClipboardCheck style={{ fontSize: "2em" }} />
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </div>
  );
};
// const Sidebar = withRouter(Side);

export default Sidebar;
