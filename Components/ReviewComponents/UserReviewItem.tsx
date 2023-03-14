/* eslint-disable */
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../../Styles/Colors';
import { UserData } from '../../Pages/ReviewPage';
import Avatar from '../CommonComponents/Avatar';
import Star from '../CommonComponents/Star';
import { globalStyles } from '../../Styles/globalStyles';
import { fonts } from '../../Styles/fonts';

const UserReviewItem: React.FC<UserData> = ({ avatar, name, status, date, raiting, textReview, application }) => {
    return (
        <View style={[globalStyles.row, userReviewStyles.container]}>
            <View style={userReviewStyles.avatarContainer}>
                <Avatar src={avatar || "https://avatars.mds.yandex.net/i?id=ec266044493bc91ad6a9ccd60aa79363be5d520d-5230282-images-thumbs&n=13"} width={59} height={51} />
                <Text style={[userReviewStyles.reviewName, { color: colors.cedar }]}>{name}</Text>
            </View>
            <View style={userReviewStyles.commentWrapper}>
                <Text style={[userReviewStyles.statusText, { color: colors.cedar }]}>
                    {status}{", "}
                    <Text style={[userReviewStyles.statusText, { color: colors.zcBrownOpacity5 }]}>{`заявка №${application} - ${date}`}</Text>
                </Text>
                <Star sumStars={raiting} />
                <Text style={[userReviewStyles.reviewText, { color: colors.cedar }]}>{textReview}</Text>
            </View>
        </View>
    )
};

const userReviewStyles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    reviewName: {
        fontSize: 14,
        lineHeight: 17,
        textAlign: "center",
        paddingTop: 2,
        fontFamily: fonts.Regular
    },
    avatarContainer: {
        flex: 1,
        alignItems: "center",
        marginRight: 16
    },
    statusText: {
        fontWeight: "500",
        fontSize: 10,
        lineHeight: 12,
        fontFamily: fonts.Medium
    },
    reviewText: {
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 15,
        fontFamily: fonts.Medium
    },
    commentWrapper: {
        flex: 4,
        alignItems: "flex-start",
        paddingRight: 10
    }
})

export default UserReviewItem;
