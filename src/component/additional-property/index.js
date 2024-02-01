import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function AdditionalProperty ({ houseRules, cancellationPolicy, localTransportation, hostLanguages, specialOffers, checkInInstructions }) {
	return (
		<Box shadow>
			<div className="additional__property">
			<Heading border>Додаткові властивості:</Heading>

			<ListItem title='Правила дому'>
				<span>{houseRules}</span>
			</ListItem>

			<ListItem title='Політика скасування'>
				<span>{cancellationPolicy}</span>
			</ListItem>

			<ListItem title='Місцевий транспорт'>
				<span>{localTransportation}</span>
			</ListItem>

			<ListItem title='Мови хоста'>
				<span>{hostLanguages.map((item) => (item)+", ")}</span>
			</ListItem>

			<ListItem title='Cпеціальні пропозиції'>
				<span>{specialOffers}</span>
			</ListItem>

			<ListItem title='Інструкції щодо реєстрації'>
				<span>{checkInInstructions}</span>
			</ListItem>

			</div>
		</Box>
	);
}