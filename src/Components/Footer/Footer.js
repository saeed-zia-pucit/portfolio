import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
	AiFillGithub,
	AiFillInstagram,
	AiFillTwitterSquare,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import './footer.css';

function Footer() {
	return (
		<Container fluid className='footer'>
			<Row>
				<Col md='4' className='footer-copywright'>
					<h3>Copyright © 2022</h3>
				</Col>
				<Col md='4' className='footer-copywright'>
					<h3>Saeed Zia</h3>
				</Col>
				<Col md='4' className='footer-body'>
					<ul className='footer-icons'>
						<li className='social-icons'>
							<a
								href='https://github.com/saeed-zia-pucit'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'>
								<AiFillGithub />
							</a>
						</li>

						<li className='social-icons'>
							<a
								href='https://www.linkedin.com/in/saeed-zia-97a043173/'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'>
								<FaLinkedinIn />
							</a>
						</li>
						<li className='social-icons'>
							<a
								href='https://www.instagram.com'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'>
								<AiFillInstagram />
							</a>
						</li>
						<li className='social-icons'>
							<a
								href='https://twitter.com'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'>
								<AiFillTwitterSquare />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
