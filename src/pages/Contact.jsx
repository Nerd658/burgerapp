import React from 'react';
import Container from '../components/elements/container';
import Heading from '../components/elements/Heading';

const ContactPage = () => {
  return (
    <Container>
      <div className="py-20 text-center">
        <Heading variant="h2">Contactez-nous</Heading>
        <p className="mt-4 text-lg">
          Pour toute question, veuillez nous envoyer un email à : contact@burgerhouse.com
        </p>
      </div>
    </Container>
  );
};

export default ContactPage;
