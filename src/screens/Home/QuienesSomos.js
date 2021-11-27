import React from "react";
import { Text, StyleSheet, ScrollView, Linking } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

export default function QuienesSomos() {
  return (
    <ScrollView>
      <Text style={estilos.text}>
        Esta aplicación fue creada como proyecto final para el curso de
        Especialización en desarrollo mobile de IBM Skills y Codo a Codo.
      </Text>
      <Text style={estilos.sub}> Somos un grupo de 5 programadores:</Text>
      {list.map((el, index) => (
        <ListItem key={index} style={estilos.cnt}>
          <Avatar rounded source={{ uri: el.foto }} style={estilos.foto} />
          <ListItem.Content>
            <ListItem.Title style={estilos.tit}>{el.nombre}</ListItem.Title>
            <ListItem.Subtitle style={estilos.subtit}>
              {el.email}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
      <Text style={estilos.text}>
        Para crear la aplicación en un principio dibujamos en papel un bosquejo
        del diseño que queríamos, y definimos las funciones que la apliación
        debía tener, luego realizamos ese diseño en Figma y creamos el Persona
        Canvas:
      </Text>
      <Text
        style={estilos.canvas}
        onPress={() => {
          Linking.openURL(
            "https://www.canva.com/design/DAEu2y2O1Ug/dwLB2zxo-iJ-c1osFPrP4Q/edit"
          );
        }}
      >
        PAPER PROTOTYPE
      </Text>
      <Text
        style={estilos.canvas}
        onPress={() => {
          Linking.openURL(
            "https://www.canva.com/design/DAEu2y2O1Ug/dwLB2zxo-iJ-c1osFPrP4Q/edit"
          );
        }}
      >
        PERSONA CANVAS: PAULA
      </Text>
      <Text style={estilos.text}>
        Una vez terminado, creamos un repositorio y agregamos a los integrantes.
        De la rama principal, master, generamos dos branches, una para la
        sección de "Home" y otra para la sección de "Ciudades" y trabajamos por
        separado en ellas, luego mergeamos ambas branches al master. Utilizamos
        Git y Github como herramientas de control de versiones y Discord para
        realizar las reuniones entre nosotros. Además diseñamos un logo con la
        herramienta Canva.
      </Text>
    </ScrollView>
  );
}

const list = [
  {
    foto: "https://media-exp1.licdn.com/dms/image/C4E03AQHUrx33J4xZKQ/profile-displayphoto-shrink_800_800/0/1637604589034?e=1643241600&v=beta&t=NB9_uiZrNWVlU-Lm4l1iDLNZy1S8mLKZkovqJlApiSc",
    nombre: "Rocío Martín",
    email: "martinrocio.1992@gmail.com",
  },
  {
    foto: "https://media-exp1.licdn.com/dms/image/C4D03AQGHxBBOfy1Gdw/profile-displayphoto-shrink_800_800/0/1627515042179?e=1642636800&v=beta&t=Dni_ZiXTb6LEL8qORyhy6Q_oynwwoK1ETyn_lwFrr_Y",
    nombre: "Joel Sotelo Trobat",
    email: "joel_sotelo_trobat@outlook.com",
  },
  {
    foto: "https://media-exp1.licdn.com/dms/image/D4E35AQEpIG0c7O7BLA/profile-framedphoto-shrink_800_800/0/1635276480677?e=1637539200&v=beta&t=GEYaYOmiUn31uSqhVG3AI9mEcr9-kzzShSyvgFiNzsY",
    nombre: "Santiago Toledo",
    email: "it.santiagotoledo@gmail.com",
  },
  {
    foto: "https://media-exp1.licdn.com/dms/image/C4D03AQG1w2m0jxgzHA/profile-displayphoto-shrink_800_800/0/1618790993272?e=1643241600&v=beta&t=9XMkEA8PnoOfaZ3m0FB71RxQ_QijrchsKwUr2UtZUtM",
    nombre: "Christian Gastón Colaneri",
    email: "colaneri_gaston@hotmail.com",
  },
  {
    foto: "https://media-exp1.licdn.com/dms/image/D4E35AQH2Rah7jUYPcQ/profile-framedphoto-shrink_800_800/0/1631733889371?e=1637686800&v=beta&t=NEMj6bFM7g66UGjGshshAJAtTA00ZRDqqHukX95viT8",
    nombre: "Hugo Mauricio Morales Acevedo",
    email: "hugoacevedo46.46@gmail.com",
  },
];
const estilos = StyleSheet.create({
  text: {
    fontSize: 22,
    textAlign: "center",
    marginTop: 38,
    marginLeft: 30,
    marginRight: 40,
    fontFamily: "sans-serif-condensed",
  },
  sub: {
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
    marginBottom: 15,
    marginTop: 20,
    marginLeft: 25,
    marginRight: 35,
    fontFamily: "sans-serif-condensed",
  },
  cnt: { marginLeft: 10 },
  foto: { width: 55, height: 55 },
  tit: { fontSize: 20 },
  subtit: { fontSize: 17 },
  canvas: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
    marginLeft: 30,
    marginRight: 40,
    fontFamily: "sans-serif-condensed",
  },
});
