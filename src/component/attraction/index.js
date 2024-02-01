import { Fragment } from "react";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import './index.css';

export default function NearbyAttractions ({ list }) {
	return (
		<Box shadow>
		<div className="attraction__block">
		<Heading>Пам'ятки поблизу</Heading>

		<div className="attraction__list">
			{list.map(({ id, name, link}) => (
				<Fragment key={id}>
					<a className='attraction__item' href={link}>
						<ListItem>{name}</ListItem>
					</a>
				</Fragment>
			))}
		</div>
		</div>
		</Box>);
}