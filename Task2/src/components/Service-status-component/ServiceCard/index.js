import Description from "../Description";
import Title from "../Title";

export default function ServiceCard({ data }) {
  return (
    <>
      {data &&
        data.length > 0 &&
        data.slice(0, 3).map((dataItem, index) => (
          <div key={index}>
            <Title serviceNo={dataItem.service_no} />
            <Description
              description={dataItem.description}
              day={dataItem.day}
              status={dataItem.status}
            />
          </div>
        ))}
    </>
  );
}
