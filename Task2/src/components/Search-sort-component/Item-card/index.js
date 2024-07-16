import "./styles.css";
export default function Card({ data }) {
  const getStatusClass = (status) => {
    switch (status) {
      case "Open":
        return "Open-status";
      case "Closed":
        return "close-status";
      case "In Progress":
        return "InProgress-status";

      default:
        break;
    }
  };

  return (
    <div>
      {data &&
        data.length > 0 &&
        data.map((dataItem, index) => (
          <div className="card-box" key={index}>
            <div className="title-container">
              <div className="title-and-icons">
                <p className="service-no">{dataItem.service_no}</p>
                <div className="title-icons">
                  <p className="email-sent-icon"></p>
                  <p className="info-icon"></p>
                </div>
              </div>
              <hr />
            </div>

            <div className="description-container">
              <p>{dataItem.description}</p>
              <div className="day-status">
                {dataItem.day === "Today" ? (
                  <p>{dataItem.day}</p>
                ) : dataItem.day === "1" ? (
                  <p>{dataItem.day} day ago</p>
                ) : (
                  <p>{dataItem.day} days ago</p>
                )}
                <p className={getStatusClass(dataItem.status)}>
                  {dataItem.status}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
