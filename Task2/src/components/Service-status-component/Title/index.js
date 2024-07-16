import "./styles.css";
export default function Title({ serviceNo }) {
  return (
    <div className="heading-container">
      <div className="title-with-icons">
        <p className="service-no">{serviceNo}</p>
        <div className="heading-icons">
          <p className="email-sent-icon"></p>
          <p className="info-icon"></p>
        </div>
      </div>
      <hr />
    </div>
  );
}
