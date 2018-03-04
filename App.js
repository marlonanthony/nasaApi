import React from 'react'
import { 
  AppRegistry,
  StyleSheet, 
  Text, 
  View, 
  Image 
} from 'react-native'
import apiPhotos from './utilities/apiPhotos.js'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // rovers: [],
      roverName: '',
      roverPic: ''
    }
  }

  componentWillMount(){
    apiPhotos.getPhotos().then((res) => {
      this.setState({
        roverName: res.photos[1].rover.name,
        roverPic: res.photos[1].img_src
      })
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Image 
          source={{url: this.state.roverPic}} 
          style={{width: 370, height: 200}} 
        />
         <Text style={styles.text}>
           Rover: {this.state.roverName}
         </Text>
      </View>
      )  
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  }, 
  text: {
    color: 'white',
    fontSize: 15
  }
})