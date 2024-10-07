import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faChartArea,
  faFaceLaughWink,
  faLink,
  faTable,
  faTachometerAlt,
  faUser,
  faUsers,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="container-sidebar">
      <section className="section-header">
        <div className="container-header">
          <FontAwesomeIcon
            style={{ fontSize: "37px", transform: "rotate(-25deg)" }}
            icon={faFaceLaughWink}
          ></FontAwesomeIcon>
          <h1 className="h1-dash">POS</h1>
        </div>
      </section>
      <section className="section-dashboard">
        <Link className="container-dashboard href-none" href="/home/dashboard">
          <FontAwesomeIcon
            style={{
              fontSize: "24px",
              marginRight: "10px",
              clipPath: "inset(2px 0px 3px 0px)",
            }}
            icon={faTachometerAlt}
          ></FontAwesomeIcon>
          <h3>Dashboard</h3>
        </Link>
      </section>
      <section className="section-master">
        <h4 className="h4-header">MASTER</h4>
        <div className="good-utilities content">
          <FontAwesomeIcon
            style={{ fontSize: "24px", maxWidth: "20px" }}
            icon={faWrench}
          />
          <h4 className="ml-4">Good Utilities</h4>
        </div>
        <Link className="suppliers content" href="/home/supliers">
          <FontAwesomeIcon
            style={{ fontSize: "24px", maxWidth: "20px" }}
            icon={faLink}
          />
          <h4 className="ml-4">Suppliers</h4>
        </Link>
        <Link className="customers content" href="/home/customers">
          <FontAwesomeIcon
            style={{ fontSize: "24px", maxWidth: "20px" }}
            icon={faUsers}
          />
          <h4 className="ml-4">Customers</h4>
        </Link>
        <Link className="users content" href="/home/users">
          <FontAwesomeIcon
            style={{ fontSize: "22px", maxWidth: "20px" }}
            icon={faUser}
          />
          <h4 className="ml-4">Users</h4>
        </Link>
      </section>
      <section className="section-transaction section-master">
        <h4 className="h4-header">TRANSACTIONS</h4>
        <Link className="purchases content" href="/home/purchases">
          <FontAwesomeIcon
            style={{ fontSize: "24px", maxWidth: "20px" }}
            icon={faTable}
          />
          <h4 className="ml-4">Purchases</h4>
        </Link>
        <Link className="sales content" href="/home/sales">
          <FontAwesomeIcon
            style={{ fontSize: "24px", maxWidth: "20px" }}
            icon={faChartArea}
          />
          <h4 className="ml-4">Sales</h4>
        </Link>
      </section>
      <section className="chevrons section-master">
        <div className="font-wrapper">
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={{
              fontSize: "15px",
              width: "100%",
              background: "#ccc",
              borderRadius: "50%",
              padding: "15px 0",
              fontWeight: "1000",
            }}
          />
        </div>
      </section>
    </div>
  );
}

// IKON
/*
wrench = good utilities
link = suppliers
users = customers
user = users
table = purchase
chart area = sales

*/
