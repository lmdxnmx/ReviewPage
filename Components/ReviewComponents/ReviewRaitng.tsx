/* eslint-disable */
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../../Styles/Colors';
import Star from '../CommonComponents/Star';

type Props = {
    sumStars: number,
    sumRaiting: number
};

const ReviewRaiting: React.FC<Props> = ({ sumStars, sumRaiting }) => {
    return (
        <View style={raitingStyles.raitingWrapper}>
             <Star sumStars={sumStars}/>
            <Text style={[raitingStyles.raitingNumber, { color: colors.zcBrownOpacity5 }]}>{sumRaiting}</Text>
        </View>
    )
};

const raitingStyles = StyleSheet.create({
    raitingWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    raitingNumber: {
        fontSize: 18,
        marginLeft:5
    }
})

export default ReviewRaiting;
