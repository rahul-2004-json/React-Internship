import { useState } from "react";

export default function Tabs({ tabsContent }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="tabs-container">
      <div className="Tabs">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => setCurrentIndex(index)}
          >
            <span>{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="tabs-content">
        {tabsContent[currentIndex] && tabsContent[currentIndex].content}
      </div>
    </div>
  );
}
