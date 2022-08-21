import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {
	return (
		<Card className='quote-card-view'>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<p style={{ textAlign: 'justify' }}>
						Hi Everyone, This is{' '}
						<span className='purple'>Saeed Zia </span> a Software
						Engineer from{' '}
						<span className='purple'>
							{' '}
							Lahore, Punjab, Pakistan.
						</span>
						<br />
						<br />I have completed Bachelor's degree in Software
						Engineering from
						<span className='purple'>
							{' '}
							Punjab University Collage of Information Technology,
							Lahore (2016-2020).
						</span>
						<br /> <br />
						<br />⚡ I am Mobile Application developer with 2 years
						of Experience in building web applications. I have
						experience working with
						<span className='purple'>
							{' '}
							Java, Kotlin, Swift, Flutter, Python, Firebase,
							Deployment
						</span>
						<br />
						<br />
						<br />⚡ I am a person who coexists with this universe
						creating and solving Problems. In my pesrspective, truth
						can only be find out in one place; the code. Being a
						Software Engineer, responsibility and technical
						leadership is the oxygen of my soul. I'm too much
						inspired by taking risk. Starting something totally
						dissimilar to me about which I don't have any idea how
						to find out the solution- any problem that has
						possibility for failure (but not totally disaster) gets
						my mind, intellect, logical thinking, problem solving
						above all logical building pumping. According to my
						inner oriented desires, It sometimes feel so innate, so
						natural to me being a coder or Software Engineer.
					</p>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
