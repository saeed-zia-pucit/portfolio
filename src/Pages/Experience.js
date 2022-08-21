import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCards from '../Components/ProjectCards/ProjectCards';
import Particle from '../Components/Particles/Particle';
import marham from '../Assets/marham.png';
import pligence from '../Assets/pligence.png';

function Projects() {
	return (
		<Container fluid className='project-section'>
			<Particle />
			<Container>
				<h1 className='project-heading'>
					Technical <strong className='purple'>Experience </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are Some Roles I have worked as
				</p>
				<Row
					style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={6} className='project-card'>
						<ProjectCards
							imgPath={marham}
							title={
								<span>
									<strong className='purple'>
										Android Developer
									</strong>
									&nbsp;at Marham.Pk
								</span>
							}
							description={
								<strong>
									Find, Book & Consult Doctor's Online
								</strong>
							}
							role_description={
								<div style={{ marginTop: '20px' }}>
									<ul>
										<li>
											Worked closely with team members to
											plan, design and develop robust
											solutions in a timely manner.
										</li>

										<li>
											Debugged complex production issues
											using debugger tools and other
											custom in house debugging tools and
											libraries.
										</li>

										<li>
											RESTful API Integration and
											development using RetroFit and
											Volley.
										</li>
										<li>
											Modiﬁed existing application to
											correct errors, upgrade interfaces
											and improve performance.
										</li>
										<li>
											Worked on writing and maintaining
											extensible code in a team
											environment.
										</li>
									</ul>
								</div>
							}
							link='https://www.marham.pk'
						/>
					</Col>
					<Col md={6} className='project-card'>
						<ProjectCards
							imgPath={pligence}
							title={
								<span>
									<strong className='purple'>
										Mobile Engineer
									</strong>{' '}
									at Pligence
								</span>
							}
							description={
								<strong>
									Provides Intelligent and automated cyber
									security solutions to protect End users/
									IOT's, Enterprises & Governments.
								</strong>
							}
							role_description={
								<div style={{ marginTop: '20px' }}>
									<ul>
										<li>
											Working with the Cyber Security team
											to plan, design and develop eficient
											solutions for the real time security
											threats.
										</li>
										<li>
											Gathered and validated requirements
											as a part of a collaboration for a
											mobile application that helped
											develop clear, unambiguous technical
											requirements and establish a
											consistent feedback loop.
										</li>

										<li>
											Contributing to the implementation
											of the APIs with performance and
											scalability in mind.
										</li>

										<li>
											Improved App security and removed
											Vulnerabilities
										</li>
									</ul>
								</div>
							}
							link='https://pligence.com/'
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Projects;
