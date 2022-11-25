import { View, Text } from 'react-native';
import React from 'react';
import About from '../components/restaurantDetail/About';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel.",
    price: "$13.50",
    image:
      "https://media.istockphoto.com/photos/spinach-and-ricotta-lasagna-picture-id508652097?b=1&k=20&m=508652097&s=170667a&w=0&h=DVoe9xrbRD_JBmigKUC2_D6FLHKlIoLIl3YAkZJ7A6Y=",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with tenderloin chicken off the sizzles.",
    price: "$19.20",
    image:
      "https://media.istockphoto.com/photos/tandoori-chicken-picture-id1055132422?b=1&k=20&m=1055132422&s=170667a&w=0&h=ArYe5OHv0LFPbCMkDq2xvKUJ_J2paTEIixqOTdW37Ig=",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with tenderloin chicken off the sizzles.",
    price: "$19.20",
    image:
      "https://media.istockphoto.com/photos/tandoori-chicken-picture-id1055132422?b=1&k=20&m=1055132422&s=170667a&w=0&h=ArYe5OHv0LFPbCMkDq2xvKUJ_J2paTEIixqOTdW37Ig=",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles with cheese and sauce. A delicious mexican dish.",
    price: "$14.50",
    image:
      "https://media.istockphoto.com/photos/mexican-nachos-with-tomato-salsa-chicken-and-egg-closeup-horizontal-picture-id985133772?b=1&k=20&m=985133772&s=170667a&w=0&h=ehCxxCDEG5a0zwSZp--G5B4QyiG2FsrBvW29KVZigNw=",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caeser salad. Healthy option with greens and protiens.",
    price: "$21.50",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMGNhZXNhciUyMHNhbGFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caeser salad. Healthy option with greens and protiens.",
    price: "$21.50",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMGNhZXNhciUyMHNhbGFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles with cheese and sauce. A delicious mexican dish.",
    price: "$14.50",
    image:
      "https://media.istockphoto.com/photos/mexican-nachos-with-tomato-salsa-chicken-and-egg-closeup-horizontal-picture-id985133772?b=1&k=20&m=985133772&s=170667a&w=0&h=ehCxxCDEG5a0zwSZp--G5B4QyiG2FsrBvW29KVZigNw=",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caeser salad. Healthy option with greens and protiens.",
    price: "$21.50",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMGNhZXNhciUyMHNhbGFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://media.istockphoto.com/photos/spinach-and-ricotta-lasagna-picture-id508652097?b=1&k=20&m=508652097&s=170667a&w=0&h=DVoe9xrbRD_JBmigKUC2_D6FLHKlIoLIl3YAkZJ7A6Y=",
  },
];


export default function RestaurantDetail({route, navigation}) {
  return (
    <View style={{flex: 1}}>
      <About route={route} />
      <Divider width={1.8} style={{marginVertical: 20}} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
