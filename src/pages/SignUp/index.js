import React from 'react';
import {Image} from 'react-native';

import logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';
import Background from '~/components/Background';

export default function SignUp({navigation}) {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
          />
        </Form>

        <SubmitButton onPress={() => {}}>Acessar</SubmitButton>

        <SignLink
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <SignLinkText>Realizar login</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
