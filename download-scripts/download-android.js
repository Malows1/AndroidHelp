import React from 'react';
import {
    View, SafeAreaView, Text, Image, ScrollView,
} from 'react-native';
import styles from '../styles/dowload-style';
import downloadTutorialHeader from '../image-tutorial/header-background.jpg';
import imageBackground from '../image-tutorial/background.png';
import backIcon from '../image-tutorial/back-icon.png';
import openPlaystore from '../image-tutorial/open-playstore.png';
import appSearch from '../image-tutorial/search-app.png';
import downloadFinish from '../image-tutorial/download-finish.png';
import open from '../image-tutorial/open-app.png';

const DownloadAndroid = () => (
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
                <Image source={openPlaystore} style={styles.openplay}/>

                <View style={styles.step2}>
                    <Text style={styles.textstyle}>
                        2. Search for GoPlay360 in the search
                        {'\n'}
                        {' '}
                        bar at the top of the
                        screen
                        {' '}
                    </Text>
                    <Image source={appSearch} style={styles.search}/>
                </View>

                <View style={styles.step3}>
                    <Text style={styles.textstyle}>
                        3. Click the install and once it finish
                        {' '}
                        {'\n'}
                        {' '}
                        it show this
                    </Text>
                    <Image source={downloadFinish} style={styles.open}/>
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
        <Image source={imageBackground} style={styles.background}/>
        <Image source={imageBackground} style={styles.background}/>
        <Image source={backIcon} style={styles.back}/>
        <Image source={downloadTutorialHeader} style={styles.header}/>
    </ScrollView>
);

export default DownloadAndroid;
