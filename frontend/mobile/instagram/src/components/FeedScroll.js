import {View,ScrollView,Text} from "react-native";
import CardPost from "./CardPost";


export default function FeedScroll(){
    return(

        <ScrollView style={{paddingTop: 90,paddingBottom: 90, display: 'flex'}}>
            
            <CardPost></CardPost>
            <CardPost></CardPost>
            <CardPost></CardPost>
            <CardPost></CardPost>
            <CardPost></CardPost>
            <CardPost></CardPost>
            <CardPost></CardPost>
            <CardPost></CardPost>
            <CardPost></CardPost>
            <CardPost></CardPost>
            <CardPost></CardPost>
            <CardPost></CardPost>
            <CardPost></CardPost>
            <CardPost></CardPost>
            <CardPost></CardPost>
            <CardPost></CardPost>
            <CardPost></CardPost>
            <CardPost></CardPost>
            <CardPost></CardPost>
        </ScrollView>
    )
}