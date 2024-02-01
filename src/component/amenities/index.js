import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from './breakfast.svg';
import wifi from './wifi.svg';
import parking from './parking.svg';
import pet from './pets.svg';
import airportSuttle from './airport-shuttle.svg';
import concierge from './conciergeService.svg';
import roomService from './roomService.svg';
import child from './children.svg';

export default function Amenities({ isPool, isGym, isFreeBreakfast, isFreeWiFi, isParking, isPetAllowed, isAirportShuttle, isConciergeService, isRoomService, isChildrenFriendly }) {
	return (
		<Box shadow>
			<div className="amenities">
			<Heading border>Зручності</Heading>

				{isPool ? <ListItem imageSrc={pool} children={'Басейн'}  /> : ""}
				{isGym ? <ListItem imageSrc={gym} children={'Спортивний зал'} /> : ''}
				{isFreeBreakfast ? <ListItem imageSrc={breakfast} children={'Безкоштовний сніданок'}  /> : ""}
				{isFreeWiFi ? <ListItem imageSrc={wifi} children={'Безкоштовний Wi-Fi'}  /> : ""}
				{isParking? <ListItem imageSrc={parking} children={'Безкоштовний вуличний паркінг'}  /> : ""}
				{isPetAllowed ? <ListItem imageSrc={pet} children={'Дозволено розміщення з домашніми тваринами'}  /> : ""}
				{isAirportShuttle ? <ListItem imageSrc={airportSuttle} children={'Трансфер до/з аеропорту'}  /> : ""}
				{isConciergeService ? <ListItem imageSrc={concierge} children={'Консьєрж-сервіс'}  /> : ""}
				{isRoomService ? <ListItem imageSrc={roomService} children={'Обслуговування номерів'}  /> : ""}
				{isChildrenFriendly ? <ListItem imageSrc={child} children={'Підходить для дітей'}  /> : ""}
			</div>
		</Box>
	);
}