
import { StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#708090',
     
    },
    text: {
        margin: 20,
       fontFamily: 'ChelseaMarket-Regular',
       fontSize: 30,
       justifyContent: "center",
        alignItems: "center",
       
      },
      about: {
        margin: 20,
        flexDirection: "column",
      
      },
      image: {
        height: 100,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderRadius: 60,
       },
      card1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:50,
      },
      stats: {
        margin: 5,
        fontFamily: 'ChelseaMarket-Regular',
        fontSize: 30,

      },
      work: {
        margin: 5,
        fontFamily: 'ChelseaMarket-Regular',
        fontSize: 20,

      },
      bio: {
        margin: 5,
        fontFamily: 'ChelseaMarket-Regular',
        fontSize: 30,

      }
  });