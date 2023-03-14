/* eslint-disable */
import { Text, View, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import StarImage from "../../assets/Star.png"
import { colors } from '../../Styles/Colors';

type Props = {
    sumStars: number,
};

const Star: React.FC<Props> = ({ sumStars }) => {
    return (
        <AirbnbRating
            isDisabled
            defaultRating={sumStars}
            selectedColor={colors.greenPH}
            starImage={StarImage}
            size={15}
            showRating={false}
        />
    )
};

const infoStyles = StyleSheet.create({
    infoWrapper: {
        flexDirection: "row",
        alignItems: "flex-start"
    },
    sumRating: {
        fontSize: 20,
        fontWeight: "700",
        paddingRight: 4
    },
    starsContainer: {
        alignItems: "flex-start",
        justifyContent: "center"
    },
    sumReview: {
        fontSize: 9
    }
})

export default Star;
