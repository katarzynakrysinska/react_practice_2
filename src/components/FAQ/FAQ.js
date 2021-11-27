import React from 'react';
import Container from '../Container/Container';
import { FAQContents } from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={FAQContents.title} image={FAQContents.image} />
    <h2>{FAQContents.subtitle}</h2>
    <p>{FAQContents.text}</p>
  </Container>
);

export default Info;