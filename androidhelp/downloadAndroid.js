import React from 'react';
import {
    View, SafeAreaView, Text, Image, ScrollView,
} from 'react-native';
import styles from '../styles/dowloadStyle.js';
import header from '../Image/header.jpg';
import bg from '../Image/bg.png';
import backimg from '../Image/back-removebg-preview.png';
import playstore from '../Image/playstore.png';
import search from '../Image/search.png';
import finish from '../Image/finishdl.png';
import open from '../Image/open.png';

const AndroidHelp = () => (
    <ScrollView>
        <SafeAreaView style={styles.content}>
            <View style={styles.title}>
                <Text style={styles.AndroidTitle}> Android Download Help</Text>
            </View>
            <View style={styles.tutorials}>
                <Text style={styles.textstyle}>
                    1. On Your Android Device, tap the Play
                    {' '}
                    {'\n'}
                    Store icon open the App
                </Text>
                <Image source={playstore} style={styles.openplay}/>

                <View style={styles.step2}>
                    <Text style={styles.textstyle}>
                        2. Search for GoPlay360 in the search
                        {'\n'}
                        {' '}
                        bar at the top of the
                        screen
                        {' '}
                    </Text>
                    <Image source={search} style={styles.search}/>
                </View>

                <View style={styles.step3}>
                    <Text style={styles.textstyle}>
                        3. Click the install and once it finish
                        {' '}
                        {'\n'}
                        {' '}
                        it show this
                    </Text>
                    <Image source={finish} style={styles.open}/>
                </View>

                <View style={styles.step4}>
                    <Text style={styles.textstyle}>
                        4. Tap on the open button to lunch
                        {' '}
                        {'\n'}
                        the GoPlay360
                        {' '}
                    </Text>
                    <Image source={open} style={styles.open}/>
                </View>
            </View>
            <View/>
        </SafeAreaView>
        <Image source={bg} style={styles.background}/>
        <Image source={bg} style={styles.background}/>
        <Image source={backimg} style={styles.back}/>
        <Image source={header} style={styles.header}/>
    </ScrollView>
);

export default AndroidHelp;
