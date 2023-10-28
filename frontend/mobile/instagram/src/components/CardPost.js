import * as React from 'react';
import {View,Text,Image} from "react-native";
import {  Button, Card} from 'react-native-paper';



const CardPost = (props) => (
  <Card  theme={{ colors: { primary: 'green' } }} mode='contained' style={{width: 350, height:350,marginBottom: 15}}>

    <Card.Cover source={{ uri: "${props.url}" }} />
    <Card.Content style={{backgroundColor: 'primary'}} >
      <Text><b>${props.username}</b></Text>
      
      <Text>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc</Text>
    </Card.Content>

  </Card>
);

export default CardPost;