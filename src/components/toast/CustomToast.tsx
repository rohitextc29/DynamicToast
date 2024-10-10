import React, { useEffect, useRef } from "react";
import { iToast } from "./ToastContext";
import { Animated, StyleSheet, Text } from "react-native";
import {styles} from './styles'

export const CustomToast = ({content} : iToast) => {
    const fadeIn = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(fadeIn,{
            toValue: 1,
            useNativeDriver: true,
            duration: 300
        }).start()

        setTimeout(()=> {
            Animated.timing(fadeIn,{
                toValue:0,
                useNativeDriver:true,
                duration:300
            }).start()
        },2500)
    },[fadeIn])

    return <Animated.View style={[styles.container,{opacity:fadeIn}]}>
        <Text style={styles.toast}>{content}</Text>
    </Animated.View>
}