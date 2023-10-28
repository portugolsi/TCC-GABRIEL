import {View,Text} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeedScroll from "../components/FeedScroll";
export default function Feed(){
    return(

        <View>
            <Header></Header>
            <FeedScroll></FeedScroll>
            <Footer></Footer>
        </View>
    )
}