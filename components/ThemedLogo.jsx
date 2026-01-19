import {Image, useColorScheme} from 'react-native'
import DarkLogo from '../assets/dark-mode.png'
import LightLogo from '../assets/light-mode.png'

const ThemedLogo = ({...props}) => {
    const colorscheme = useColorScheme();
    const logo = colorscheme === 'dark' ? DarkLogo : LightLogo;
  return (
    <Image source={logo} {...props}/>
  )
}

export default ThemedLogo