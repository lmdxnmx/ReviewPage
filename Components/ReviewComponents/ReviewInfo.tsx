/* eslint-disable */
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../../Styles/Colors';
import Star from '../CommonComponents/Star';
import { fonts } from '../../Styles/fonts';

type Props = {
    reviewRate: number | null,
    reviewSum: number
};

const ReviewInfo: React.FC<Props> = ({ reviewRate, reviewSum }) => {
    return (
        <View style={infoStyles.infoWrapper}>
            <Text style={[infoStyles.sumRating, { color: colors.cedar }]}>{reviewRate}</Text>
            <View style={infoStyles.starsContainer}>
                <Star sumStars={5} />
                <Text style={[infoStyles.sumReview, { color: colors.black }]}>{`На основании ${reviewSum} оценок`}</Text>
            </View>
        </View>
    )
};

const infoStyles = StyleSheet.create({
    infoWrapper: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    sumRating: {
        fontSize: 20,
        fontWeight: "700",
        paddingRight: 4,
        fontFamily: fonts.Bold
    },
    starsContainer: {
        alignItems: "flex-start",
        justifyContent: "center"
    },
    sumReview: {
        fontSize: 9,
        lineHeight: 11,
        fontWeight: "500",
        fontFamily: fonts.Medium
    }
})

export default ReviewInfo;
