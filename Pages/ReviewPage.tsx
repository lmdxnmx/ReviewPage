/* eslint-disable */
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { userData } from '../ApiData/ApiData';
import ReviewInfo from '../Components/ReviewComponents/ReviewInfo';
import ReviewRaiting from '../Components/ReviewComponents/ReviewRaitng';
import UserReviewItem from '../Components/ReviewComponents/UserReviewItem';
import { globalStyles } from '../Styles/globalStyles';
import { fonts } from '../Styles/fonts';

export interface UserData {
  id: number,
  avatar: string | null,
  name: string,
  status: string,
  application: number,
  date: string,
  raiting: number,
  textReview: string
}

const ReviewPage = () => {

  const sumRaiting: number = userData?.reviews.reduce((acc, curVal) => acc + curVal.raiting, 0) / userData?.reviews.length
  const filterRaiting = (num: number) => {
    const filteredArr = userData.reviews.filter((i) => i.raiting === num)
    return filteredArr.length
  }

  const renderItemUser = ({ item }: { item: UserData }) => {
    return <UserReviewItem
      key={item.id}
      id={item.id}
      avatar={item.avatar}
      name={item.name}
      status={item.status}
      date={item.date}
      raiting={item.raiting}
      textReview={item.textReview}
      application={item.application}
    />
  };
  return (
    <View style={ReviewStyles.pageContainer}>
      <Text style={[globalStyles.bodySectionTitle, ReviewStyles.name]}>{userData?.first_name} {userData?.last_name}</Text>
      <ReviewInfo reviewRate={userData?.review_rate || sumRaiting} reviewSum={userData?.reviews.length} />
      <View style={ReviewStyles.starsWrapper}>
        <ReviewRaiting sumStars={5} sumRaiting={filterRaiting(5)} />
        <ReviewRaiting sumStars={4} sumRaiting={filterRaiting(4)} />
        <ReviewRaiting sumStars={3} sumRaiting={filterRaiting(3)} />
        <ReviewRaiting sumStars={2} sumRaiting={filterRaiting(2)} />
        <ReviewRaiting sumStars={1} sumRaiting={filterRaiting(1)} />
      </View>
      <FlatList
        data={userData?.reviews}
        renderItem={renderItemUser} />
    </View>
  )
};

const ReviewStyles = StyleSheet.create({
  pageContainer: {
    marginTop: 50,
    paddingLeft: 30,
    flex: 1
  },
  starsWrapper: {
    marginTop: 30,
    marginBottom: 30
  },
  name: {
    fontFamily: fonts.Medium
  }
})

export default ReviewPage;
