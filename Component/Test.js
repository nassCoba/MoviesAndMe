// Components/Test.js

import React from 'react'
import { StyleSheet, Animated, View, Platform } from 'react-native'
import HelloWorld from './HelloWorld'

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topPosition : new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.spring(
            this.state.topPosition,
            {
                toValue: 100,
                speed : 4,
                bounciness : 30
            }
        ).start()
    }


    render() {
        return (
            <View style={styles.main_container}>
                <Animated.View style={[styles.subview_container, {top: this.state.topPosition}]}>
                </Animated.View>
                {/*<HelloWorld/>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subview_container: {
        //backgroundColor : Platform.OS ==='ios' ? 'red' : 'blue',
        //Autre alternative
        ...Platform.select({
            ios : {
                backgroundColor: 'red'
            },
            android: {
                backgroundColor: 'blue'
            }
        }),
        height : 50,
        width : 50
    }
})

export default Test