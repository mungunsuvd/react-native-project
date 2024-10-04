import { View, Text, Button } from "react-native";

export default function Greet({navigation}) {
    return (
        <View>
            <Text>Home ds</Text>
        <Button title="go to About" onPress={() => navigation.navigate('About')}/>
        </View>
    )
}