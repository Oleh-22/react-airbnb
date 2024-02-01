import "./index.css";

import guest from './guests.svg';
import bedroom from './bedroom.svg';
import bed from './bed.svg';
import bath from './bath.svg';

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function Details ({ guests, bedrooms, beds, baths }) {
	return (
		<Box shadow>
			<div className="details">
			<Heading border>Деталі властивості:</Heading>

			<ListItem imageSrc={guest}>
				<span>{guests} гості</span>
			</ListItem>

			<ListItem imageSrc={bedroom}>
				<span>{bedrooms} спальня</span>
			</ListItem>

			<ListItem imageSrc={bed}>
				<span>{beds} ліжко</span>
			</ListItem>

			<ListItem imageSrc={bath}>
				<span>{baths} ванна кімната</span>
			</ListItem>
			</div>
		</Box>
	);
}