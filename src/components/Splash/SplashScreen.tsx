import React, { useEffect, useRef } from 'react'
import { Animated, Image, StatusBar, StyleSheet, View } from 'react-native'

const SplashScreen: React.FC = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        const fadeInOut = Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ])
        
        Animated.loop(fadeInOut).start()
    }, [fadeAnim])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Animated.Image
                source={require('../../assets/images/ling_app_logo.jpg')}
                style={[
                    styles.logo,
                    {
                        opacity: fadeAnim,
                    },
                ]}
            />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logo: {
        width: 100,
        height: 100,
    },
})
