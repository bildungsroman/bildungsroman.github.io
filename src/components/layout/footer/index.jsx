import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialMedia from '../../../data/socialMedia.json';
import data from './../../../data/data';
import { FooterStyle, FooterBody, SubRight, CopyRight, MediaLink, FooterSocialMedia } from './style';
import { ContainerLayout, ButtonDefault } from '../../common';

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<FooterBody>
						<div>
							<h3>Elsewhere</h3>
							<FooterSocialMedia>
								{socialMedia.map(({ id, name, url }) => (
									<li key={id}>
										<MediaLink className='lined-link' href={url} target='_blank' rel='noopener noreferrer' aria-label={`follow me on ${name}`}>
											<FontAwesomeIcon icon={["fab", name]} />
											{name}
										</MediaLink>
									</li>
								))}
							</FooterSocialMedia>
						</div>
						<div>
							<p className='text-primary quote'> Want to say hi?</p>
							<ButtonDefault href={`mailto:${data.SiteContact.email}`}> Contact me </ButtonDefault>
						</div>
					</FooterBody>
					<div className='box'>
						<SubRight></SubRight>
						<CopyRight>
							© 
							<span> {new Date().getFullYear()} {data.SiteAuthor}. Built with {` `} 
								<a href='https://www.gatsbyjs.org' target='_blank' rel='noreferrer'>Gatsby</a>{'.'}
          		</span> 
						</CopyRight>
					</div>
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;