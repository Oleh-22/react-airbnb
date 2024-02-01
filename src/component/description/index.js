import Heading from "../heading";

import "./index.css";

export default function Description({ title, children }) {
	return (<div className="description">
		<Heading>Опис</Heading>
		<p className='description__text'> {children} </p>
		</div>
	);
}