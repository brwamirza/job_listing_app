import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";//to use custome fonts
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        "DMBold": require('../assets/fonts/DMSans-Bold.ttf'),
        "DMMedium": require('../assets/fonts/DMSans-Medium.ttf'),
        "DMRegular": require('../assets/fonts/DMSans-Regular.ttf'),
    })

    //this function will only show home page when fonts are loaded
    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView}/>;
}

export default Layout