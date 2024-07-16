import "./styles.css";

export default function Description({ description, day, status }) {
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
    <>
      <div className="description-container">
        <p>{description}</p>
        <div className="day-status">
          {day === "Today" ? (
            <p>{day}</p>
          ) : day === "1" ? (
            <p>{day} day ago</p>
          ) : (
            <p>{day} days ago</p>
          )}
          <p className={getStatusClass(status)}>{status}</p>
        </div>
      </div>
    </>
  );
}
