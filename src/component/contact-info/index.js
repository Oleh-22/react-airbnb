import "./index.css";

import Heading from '../heading';

export default function ContactInfo ({ name, image, phone, response_time, response_rate, info }) {
	return (
		<div className="contact__info">
			<div className="contact__info--block">
				<img className="contact__info--image" src={image} alt={name}/>
				<div className="contact__info--info">
					<Heading> Господар - {name} </Heading>
					<div className="contact__info--sublock">
					<span className="contact__info--text">{phone}</span>
					<span className="contact__info--text">{response_time}</span>
					<span className="contact__info--text">{response_rate}% відсотків швидкості відгуку</span>
				</div>
				</div>
				</div>
				<div className='contact__info--about'>{info}</div>
		</div>
	);
}