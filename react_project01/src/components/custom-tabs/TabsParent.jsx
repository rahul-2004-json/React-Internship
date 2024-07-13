import Tabs from "./Tabs";
import "./styles.css";
export default function TabsParent() {
  const tabscontent = [
    {
      label: "Tab 1",
      content: <div>Hello My Name is Rahul Yadav</div>,
    },
    {
      label: "Tab 2",
      content: <div>I am a very good boy</div>,
    },
    {
      label: "Tab 3",
      content: <div>I love to code</div>,
    },
  ];
  return (
    <div>
      <Tabs tabsContent={tabscontent} />
    </div>
  );
}
