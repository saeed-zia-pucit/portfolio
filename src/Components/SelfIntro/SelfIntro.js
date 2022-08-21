import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import {
	AiFillGithub,
	AiFillTwitterSquare,
	AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function SelfIntro() {
	return (
		<Container
			fluid
			className='home-about-section  container-fluid'
			id='about'>
			<Container>
				<Row>
					<Col md={8} className='home-about-description'>
						<h1 style={{ fontSize: '2.6em' }}>
							LET ME <span className='purple'> INTRODUCE </span>{' '}
							MYSELF
						</h1>
						<p className='home-about-body'>
							I fell in love with programming and I have at least
							learnt something, I think… 🤷‍♂️
							<br />
							<br />I am Mobile Engineer with 2 years of
							Experience building Super Secure, Fast & Scalable{' '}
							<b className='purple'>&nbsp;Mobile Applications</b>.
							I am specilized working with
							<i>
								<b className='purple'>
									&nbsp;Modern Mobile development tool and
									technologies.
								</b>
								&nbsp;
							</i>
							<br />
							<br />
							I enjoy coding for both the front end and the back
							end. In particular, I enjoy the sense of pride and
							accomplishment when combining everything into a
							complete project.
							<br />
							<br />I am excited to finally pursue my passion for
							<b className='purple'>&nbsp;Software Development</b>
							. Outside of coding, I am a pretty plain and normal
							individual. I love books, playing video games,
							sleeping, and just living a simple life.
						</p>
					</Col>
					<Col md={4} className='myAvtar'>
						<Tilt>
							<img
								src={myImg}
								className='img-fluid'
								alt='avatar'
							/>
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className='home-about-social'>
						<h1>FIND ME ON</h1>

						<ul className='home-about-social-links'>
							<li className='social-icons'>
								<a
									href='https://github.com/saeed-zia-pucit'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'>
									<AiFillGithub />
								</a>
							</li>

							<li className='social-icons'>
								<a
									href='https://www.linkedin.com/in/saeed-zia-97a043173/'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'>
									<FaLinkedinIn />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://www.instagram.com'
									target='_blank'
									rel='noreferrer'
									className='icon-colour home-social-icons'>
									<AiFillInstagram />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://twitter.com'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'>
									<AiFillTwitterSquare />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default SelfIntro;
