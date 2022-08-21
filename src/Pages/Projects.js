import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCards from '../Components/ProjectCards/ProjectCards';
import Particle from '../Components/Particles/Particle';
import pligence from '../Assets/pligence.png';
import marham from '../Assets/marham.png';

function Projects() {
	return (
		<Container fluid className='project-section'>
			<Particle />
			<Container>
				<h1 className='project-heading'>
					My Recent <strong className='purple'>Works </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row
					style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={6} className='project-card'>
						<ProjectCards
							imgPath={marham}
							title='Marham App'
							description="MARHAM is Pakistan's largest digital healthcare platform to find, ask, book, or consult doctors online. We help patients in connecting with verified and authentic doctors so that they can get quality healthcare that is easily accessible, affordable and convenient to get. At the same time, we help doctors to digitize their practices. We envision to become a centralized appointment booking system for Pakistan, along with the largest telemedicine platform, that serves both patients and doctors. 10 MILLION people have used Marham so far to acquire information, book appointments, and take online consultations."
							link='https://www.marham.pk'
						/>
					</Col>
					<Col md={6} className='project-card'>
						<ProjectCards
							imgPath={pligence}
							title='Pligence'
							description='Pligence is an AI-Based Cyber Security and Privacy company that specializes in providing Threat Intelligence and Cyber Security protection solutions. Pligence provides Intelligent and automated cyber security solutions to protect End users/ IOTs, Enterprises, Financial institutions, Government organizations and Service providers. Mobile Privacy Protection security suite provides privacy assurance, threat detection and advanced intelligent real-time protection capabilities to the mobile users.'
							link='https://pligence.com/'
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Projects;
