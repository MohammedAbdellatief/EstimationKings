import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "m_secfooter_v2": {
        "minHeight": "auto",
        "textAlign": "center",
        "backgroundColor": "#0d1c2c",
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 40,
        "paddingLeft": 0
    },
    "section1section-v2": {
        "height": 420
    },
    "section2section-v2 section5": {
        "backgroundColor": "rgb(255, 255, 255)",
        "boxShadow": "0px 5px 50px 0px rgba(0, 0, 0, 0.15)",
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "marginTop": -60,
        "marginRight": 20,
        "marginBottom": 60,
        "marginLeft": 20
    },
    "section2section-v2 section5 ul": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 20,
        "marginRight": 40,
        "marginBottom": 20,
        "marginLeft": 40
    },
    "section2section-v2 section5 ul li": {
        "marginBottom": 15
    },
    "section2section-v2 section5 ul li span": {
        "backgroundColor": "#0d1c2c",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "color": "#fff",
        "borderRadius": "50%",
        "width": 30,
        "height": 30,
        "display": "inline-block",
        "lineHeight": 15,
        "marginLeft": 10
    },
    "section-v2faqs ul li": {
        "border": "1px solid #f1f1f1",
        "paddingTop": 15,
        "paddingRight": 20,
        "paddingBottom": 15,
        "paddingLeft": 20
    },
    "section-v2faqs ul li h4": {
        "borderBottom": "1px solid #f1f1f1",
        "marginTop": 0,
        "paddingBottom": 10
    },
    "section-v2faqs ul li p": {
        "fontSize": 0.7,
        "color": "#909090",
        "lineHeight": 1.8
    },
    "registerModal close": {
        "cursor": "pointer"
    },
    "registerModal modal-header": {
        "border": 0
    },
    "registerModal modal-dialog": {
        "marginTop": "15%",
        "marginRight": "auto",
        "marginBottom": "15%",
        "marginLeft": "auto",
        "width": 400
    },
    "registerModal modal-content": {
        "borderRadius": 0,
        "boxShadow": "none"
    },
    "registerModal": {
        "backgroundColor": "rgba(13,28,44,.8)"
    },
    "registerModal ul": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textAlign": "center"
    },
    "registerModal ul li": {
        "marginBottom": 10
    },
    "registerModal ul li a": {
        "display": "block",
        "width": "100%"
    },
    "registerModal btn_small": {
        "paddingTop": 15,
        "paddingRight": 25,
        "paddingBottom": 15,
        "paddingLeft": 25
    },
    "registerModal btn_smallfacebook": {
        "backgroundColor": "#3b5998"
    },
    "registerModal btn_smallgoogle": {
        "backgroundColor": "#dd4b39"
    },
    "registerModal btn_smallel3b img": {
        "width": 15,
        "marginLeft": 5
    },
    "registerModal btn_smallel3b": {
        "backgroundColor": "#f7b230"
    },
    "registerModal btn_small svg": {
        "fill": "#fff",
        "width": 15,
        "height": 15
    },
    "a:focus": {
        "outline": 0
    },
    "registerModal btn:hover": {
        "borderColor": "#fff",
        "color": "#fff"
    }
});