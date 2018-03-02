import React from 'react'
import {Stylesheet, Text, View, Button} from 'react-native'

export default class UserList extends React.Component{

	render(){
		return(
			<View>
				<Text>This is the user list page</Text>
				<Button title="Go to User Profile" onPress={() => this.props.navigation.navigate("UserProfile")}/>
			</View>
		)
	}
}