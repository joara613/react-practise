import { GoBell } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
	function handleClick() {
		console.log("clicked");
	}
	return (
		<div>
			<div>
				<Button onClick={handleClick} success rounded outline>
					<GoBell className="mr-1" />
					Click Me!
				</Button>
			</div>
			<div>
				<Button danger outline>
					Buy Now!
				</Button>
			</div>
			<div>
				<Button warning>See Deal!</Button>
			</div>
			<div>
				<Button secondary>Hide Ads!</Button>
			</div>
			<div>
				<Button primary rounded>
					Something!
				</Button>
			</div>
		</div>
	);
}

export default ButtonPage;
