import React from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Area,
  Container,
  Logo,
  ButtonCart,
  TotalItems,
  ButtonImage,
} from './styles';

function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Area>
      <Container>
        <ButtonImage onPress={() => navigation.navigate('RocketShoes')}>
          <Logo />
        </ButtonImage>
        <ButtonCart onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <TotalItems>{cartSize || 0}</TotalItems>
        </ButtonCart>
      </Container>
    </Area>
  );
}

export default Header;
