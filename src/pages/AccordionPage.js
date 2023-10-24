import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "uajncesa",
      label: "Can I use React on a project?",
      content: "You can use React on any project you want",
    },
    {
      id: "uibchsakoe",
      label: "Can I use Javascript on a project?",
      content: "You can use Javascript on any project you want",
    },
    {
      id: "iucxawc",
      label: "Can I use CSS on a project?",
      content: "You can use CSS on any project you want",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
