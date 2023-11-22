import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, Image, Alert ,ActivityIndicator} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/AntDesign"
import Slider from "react-native-slider";
import TrackPlayer, {
    getTrack,
    getCurrentTrack,
    addEventListener,
    TrackPlayerEvents,
    useTrackPlayerEvents,
    STATE_PLAYING,
    STATE_PAUSED,
    useTrackPlayerProgress,
} from "react-native-track-player";

const events = [
    TrackPlayerEvents.PLAYBACK_STATE,
    TrackPlayerEvents.PLAYBACK_ERROR,
    TrackPlayerEvents.PLAYBACK_QUEUE_ENDED,
    TrackPlayerEvents.PLAYBACK_TRACK_CHANGED
]

const MusicPlayerScreen = (props) => {
    const { navigation } = props;
    const { title, musicName } = navigation?.state?.params;

    const [isReady, setReady] = useState(false);
    const [value, setValue] = useState(0.1);
    const [isplaying, setPlaying] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [showIntro, setShowIntro] = useState(true);

    const [track, setTrack] = useState([
        {
            id: 1,
            title: "Introductino",
            artist: "Introduction",
            url: "",
            duration: 60,
            artwork: require("../../../assets/somadome.png")
        },
        {
            id: 2,
            title: "undefined",
            artist: "undefined",
            url: "",
            duration: 60,
            artwork: require("../../../assets/somadome.png")
        }
    ])

    const { position,duration } = useTrackPlayerProgress();

    // useEffect(() => {
    //     if(position){
    //         setValue(position)
    //     }
    // },[position])

    useTrackPlayerEvents(events, (event) => {
        if (event.type === TrackPlayerEvents.PLAYBACK_STATE) {
            if (event.state === STATE_PLAYING) {
                setPlaying(true)
            } else if (event.state === STATE_PAUSED) {
                setPlaying(false)
            }
        }
    })

    useEffect(() => {
        TrackPlayer.setupPlayer().then(() => {
            TrackPlayer.updateOptions({
                stopWithApp: true,

                // An array of media controls capabilities
                // Can contain CAPABILITY_PLAY, CAPABILITY_PAUSE, CAPABILITY_STOP, CAPABILITY_SEEK_TO,
                // CAPABILITY_SKIP_TO_NEXT, CAPABILITY_SKIP_TO_PREVIOUS, CAPABILITY_SET_RATING
                capabilities: [
                    TrackPlayer.CAPABILITY_PLAY,
                    TrackPlayer.CAPABILITY_PAUSE,
                    TrackPlayer.CAPABILITY_STOP,
                    TrackPlayer.CAPABILITY_SEEK_TO,
                    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
                    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
                ],

                // An array of capabilities that will show up when the notification is in the compact form on Android
                compactCapabilities: [
                    TrackPlayer.CAPABILITY_PLAY,
                    TrackPlayer.CAPABILITY_PAUSE,
                    TrackPlayer.CAPABILITY_SEEK_TO,
                    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
                    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
                ],
            }).then(() => {
                setReady(true)
            })
        })
    }, [])

    useEffect(() => {
        const fetchTracks = async () => {
            setLoading(true)
            var tempTracks = track;
            try {
                const resData = await axios.get(`https://somadome.herokuapp.com/music/?musictype=_Intro`);
                console.log("In music screen", resData)
                if (resData) {
                    tempTracks[0] = {
                        id : 1,
                        title: "Introduction",
                        artist: "Introduction",
                        url: resData.data.url,
                        duration: resData.data.play_time_in_milliseconds ? parseInt(resData.data.play_time_in_milliseconds / 1000) : 60
                    }
                }
            } catch (err) {
                Alert.alert("The track is not available");
                setError(true)
                console.log("error", err)
            }
            try {
                const resData = await axios.get(`https://somadome.herokuapp.com/music/?musictype=${musicName}`);
                console.log("In music screen", resData)
                if (resData) {
                    tempTracks[1] = {
                        id : 2,
                        title: musicName,
                        artist: musicName,
                        url: resData.data.url,
                        duration: resData.data.play_time_in_milliseconds ? parseInt(resData.data.play_time_in_milliseconds / 1000) : 60
                    }
                }
            } catch (err) {
                Alert.alert("The track is not available");
                setError(true);
                console.log("error", err)
            }
            setTrack(tempTracks);
            setLoading(false);
        }
       fetchTracks();
    }, [musicName, isReady])

    const handlePlayClick = async () => {
        if(error){
            Alert.alert("The song cannot be played. Please select another track.")
        }else{
            await TrackPlayer.add(track);
            const state = await TrackPlayer.getState();
            if (isReady) {
                if (!isplaying) {
                    TrackPlayer.play();
                    setPlaying(true)
                } else if (isplaying) {
                    TrackPlayer.pause();
                    setPlaying(false)
                }
            } else {
                Alert.alert("Sorry, the selected track is not available")
            }   
        }
        // if(state === State.Playing){
        //     console.log("The Player is playing")
        // }

    }

    const msToTime = (duration) => {
        var milliseconds = parseInt((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return minutes + ":" + seconds;
    }

    const handleSkipClick = async () => {
        try {
            await TrackPlayer.skipToNext();
        }catch(err){
            Alert.alert("Error while skipping to next track")
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../../assets/wave.jpg")}
                resizeMode="cover"
                style={{ height: hp("100%"), width: wp("100%") }}>
                {loading && <View style={styles.spinner} pointerEvents={'none'}>
                    <ActivityIndicator />
                </View>
                }
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backIcon}
                        source={require("../../../assets/images/back.png")} />
                </TouchableOpacity>
                <Text style={styles.musicText}>{title ? title : "CLARITY"}</Text>
                <View style={styles.slider}>
                    <View style={styles.sliderTimeContainer}>
                        <Text style={styles.timeStyles}>{msToTime(position * 1000)}</Text>
                        <Text style={styles.timeStyles}>{msToTime(duration * 1000)}</Text>
                    </View>
                    <Slider minimumValue={0}
                        maximumValue={duration}
                        minimumTrackTintColor="#4da6ff"
                        maximumTrackTintColor="#e1e1ea"
                        value={position}
                        onValueChange={(value) => setValue(value)}
                        disabled={true} />
                </View>
                <View style={styles.buttonContainer}>
                    <Icon name="banckward" size={20} color="white" />
                    <TouchableOpacity style={styles.musicIconContainer}
                        onPress={handlePlayClick}>
                        {!isplaying && <Icon name="caretright" size={28} color="white" />}
                        {isplaying && <Icon name="pause" size={28} color="white" />}
                    </TouchableOpacity>
                    <Icon name="forward" size={20} color="white" />
                    {duration===58 && <TouchableOpacity style={styles.skipContainer}
                     onPress={handleSkipClick}>
                        <Text style={styles.skip}>Skip Intro</Text>
                    </TouchableOpacity>}
                </View>
            </ImageBackground>
        </View>
    )
}

export default MusicPlayerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backIcon: {
        height: 30,
        width: 17,
        marginLeft: wp("8%"),
        marginTop: hp("2%")
    },
    musicText: {
        fontFamily: "Khula-Regular",
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center',
        marginTop: hp("60%")
    },
    slider: {
        marginTop: hp("5%")
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp("2%"),
        position : "relative"
    },
    musicIconContainer: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#3890e8',
        marginLeft: wp("10%"),
        marginRight: wp("10%")
    },
    timeStyles: {
        color: "white",
        fontSize: 12
    },
    sliderTimeContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10
    },
    spinner: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        // backgroundColor: '#f3f3f3'
    },
    skipContainer : {
        height : 30,
        width : 80,
        borderWidth : 1,
        borderColor : "gray",
        borderRadius : 10,
        position : "absolute",
        right : wp("2%"),
        justifyContent  : 'center'
    },
    skip : {
        fontFamily : "Khula-Regular",
        fontSize : 14,
        color : "white",
        textAlign  : 'center'
    }
})

