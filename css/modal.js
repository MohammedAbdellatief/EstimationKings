import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "modal-open": {
        "overflow": "hidden"
    },
    "modal": {
        "display": "none",
        "overflow": "hidden",
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "zIndex": 1050,
        "WebkitOverflowScrolling": "touch",
        "outline": 0
    },
    "modalfade modal-dialog": {
        "WebkitTransform": "translate(0, -25%)",
        "MsTransform": "translate(0, -25%)",
        "OTransform": "translate(0, -25%)",
        "transform": "translate(0, -25%)",
        "WebkitTransition": "-webkit-transform 0.3s ease-out",
        "OTransition": "-o-transform 0.3s ease-out",
        "transition": "transform 0.3s ease-out"
    },
    "modalin modal-dialog": {
        "WebkitTransform": "translate(0, 0)",
        "MsTransform": "translate(0, 0)",
        "OTransform": "translate(0, 0)",
        "transform": "translate(0, 0)"
    },
    "modal-open modal": {
        "overflowX": "hidden",
        "overflowY": "auto"
    },
    "modal-dialog": {
        "position": "relative",
        "width": "auto",
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10
    },
    "modal-content": {
        "position": "relative",
        "backgroundColor": "#ffffff",
        "border": "1px solid rgba(0, 0, 0, 0.2)",
        "borderRadius": 6,
        "WebkitBoxShadow": "0 3px 9px rgba(0, 0, 0, 0.5)",
        "boxShadow": "0 3px 9px rgba(0, 0, 0, 0.5)",
        "WebkitBackgroundClip": "padding-box",
        "backgroundClip": "padding-box",
        "outline": 0
    },
    "modal-backdrop": {
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "zIndex": 1040,
        "backgroundColor": "#000000"
    },
    "modal-backdropfade": {
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "modal-backdropin": {
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "modal-header": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "borderBottom": "1px solid #e5e5e5"
    },
    "modal-header close": {
        "marginTop": -2
    },
    "modal-title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 1.42857143
    },
    "modal-body": {
        "position": "relative",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "modal-footer": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "textAlign": "right",
        "borderTop": "1px solid #e5e5e5"
    },
    "modal-footer btn + btn": {
        "marginLeft": 5,
        "marginBottom": 0
    },
    "modal-footer btn-group btn + btn": {
        "marginLeft": -1
    },
    "modal-footer btn-block + btn-block": {
        "marginLeft": 0
    },
    "modal-scrollbar-measure": {
        "position": "absolute",
        "top": -9999,
        "width": 50,
        "height": 50,
        "overflow": "scroll"
    },
    "clearfix:before": {
        "content": " ",
        "display": "table"
    },
    "clearfix:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "modal-header:before": {
        "content": " ",
        "display": "table"
    },
    "modal-header:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "modal-footer:before": {
        "content": " ",
        "display": "table"
    },
    "modal-footer:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "center-block": {
        "display": "block",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "pull-right": {
        "float": "right !important"
    },
    "pull-left": {
        "float": "left !important"
    },
    "hide": {
        "display": "none !important"
    },
    "show": {
        "display": "block !important"
    },
    "invisible": {
        "visibility": "hidden"
    },
    "text-hide": {
        "font": "0/0 a",
        "color": "transparent",
        "textShadow": "none",
        "backgroundColor": "transparent",
        "border": 0
    },
    "hidden": {
        "display": "none !important"
    },
    "affix": {
        "position": "fixed"
    }
});