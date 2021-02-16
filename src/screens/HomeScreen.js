import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import SwitchToggle from "react-native-switch-toggle";
import FontAwesome, { Icons } from 'react-native-fontawesome';

const HomeScreen = () => {
    const [BeaconStatus, setBeaconStatus] = useState(false);

    return (
        <ScrollView>
            <FontAwesome Icon={circle}></FontAwesome>
            <SwitchToggle
            containerStyle={{
                marginTop: 16,
                width: 108,
                height: 48,
                borderRadius: 25,
                backgroundColor: "#ccc",
                padding: 5
            }}
            circleStyle={{
                width: 38,
                height: 38,
                borderRadius: 19,
                backgroundColor: "white" // rgb(102,134,205)
            }}
            //   switchOn={this.state.switchOn2}
            //   onPress={this.onPress2}
            circleColorOff="white"
            circleColorOn="red"
            duration={500}
            />
        </ScrollView>
    );
};

export default HomeScreen;