import Accordion from "../components/Accordion";

function AccordionPage() {
	const items = [
		{
			id: "adfew",
			label: "Can I use React on a project?",
			content:
				"You can use React on any project you want. You can use React on any project you want.",
		},
		{
			id: "eiwfwn",
			label: "Can I use React on a project?",
			content:
				"You can use React on any project you want. You can use React on any project you want.",
		},
		{
			id: "ewbb",
			label: "Can I use React on a project?",
			content:
				"You can use React on any project you want. You can use React on any project you want.",
		},
	];

	return <Accordion items={items} />;
}

export default AccordionPage;
