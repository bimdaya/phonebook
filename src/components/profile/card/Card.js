import React from 'react';
import {Button, Card as ProfileCard, Grid, Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {getDisplayName} from '../../../utils/validate';
import Phone from '../phone/Phone';
import Image from '../../image/Image';
import Content from '../content/Content';
import CloseButton from '../closeButton/CloseButton';
import './Card.css';

const Card = ({contact, closeProfile}) => {

	const fullName = getDisplayName(contact.first_name, contact.last_name);

	return (
        <Grid.Column width={6}>
    		<ProfileCard
                centered={true}
                className='profile_card'>
    			<CloseButton closeProfile={closeProfile}/>
    			<Image
                    iconSize='massive'
                    imageSize='medium'
                    imageSrc={contact.avatar}/>
    			<ProfileCard.Content textAlign='center'>
    				<ProfileCard.Header className='card_header'>
    					{fullName}
    				</ProfileCard.Header>
    				{
    					(contact.email) &&
                            <ProfileCard.Meta className='card_element'>
    							<Content
                                    content={contact.email}
                                    icon='mail'/>
    						</ProfileCard.Meta>
    				}
    				<ProfileCard.Description className='card_element'>
    					{
                            (contact.address) &&
                            <Content
                                content={contact.address}
                                icon='home'/>
                        }
    					{
    						(contact.phone)
    							? <Phone phone={contact.phone}/>
    							: <p>No phone numbers added!</p>
    					}
    				</ProfileCard.Description>
    			</ProfileCard.Content>
    		</ProfileCard>
        </Grid.Column>
    );
};

Card.propTypes = {
	contact: PropTypes.object.isRequired,
	closeProfile: PropTypes.func
}

export default Card;
