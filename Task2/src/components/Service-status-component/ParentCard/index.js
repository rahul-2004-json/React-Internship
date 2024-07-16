import ServiceCard from "../ServiceCard";
import { data } from "../../../services/data";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Card() {
  return (
    <>
      <div className="card-container">
        <div className="card-heading">
          <p className="service-now">Service Now</p>
          <Link to="/viewdetails" className="view-details">
            View Details
          </Link>
        </div>
        <ServiceCard data={data} />
      </div>
    </>
  );
}
