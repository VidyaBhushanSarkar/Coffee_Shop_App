import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;
interface CoffeeCardProps {
  id: string;
  index: number;
  type: string;
  roasted: string;
  imagelink_square: any;
  name: string;
  special_ingredient: string;
  average_rating: number;
  price: any;
  buttonPressHandler: any;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({
  id,
  index,
  type,
  roasted,
  imagelink_square,
  name,
  special_ingredient,
  average_rating,
  price,
  buttonPressHandler,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.CardLinearGradientContainer}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground
        source={imagelink_square}
        style={styles.CardImageBG}
        resizeMode="cover">
        <View style={styles.CardRatingContainer}>
          <CustomIcon
            name={'star'}
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_10}
          />
          <Text style={styles.CardRatingText}>{average_rating}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.coffeeName}>{name}</Text>
      <Text style={styles.specialIngredient}>{special_ingredient}</Text>

      <View style={styles.CardFooter}>
        <Text style={styles.priceText}>$ {price.price}</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <CustomIcon
            color={COLORS.primaryWhiteHex}
            name={'add'}
            size={FONTSIZE.size_10}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  CardLinearGradientContainer: {
    padding: SPACING.space_12,
    marginLeft: SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_20,
  },
  CardImageBG: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
  },
  CardRatingContainer: {
    width: 60,
    borderTopRightRadius: BORDERRADIUS.radius_20,
    borderBottomLeftRadius: BORDERRADIUS.radius_25,
    top: 0,
    right: 0,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondaryBlackRGBA,
    justifyContent: 'center',
    padding: SPACING.space_2,
  },
  CardRatingText: {
    fontSize: FONTSIZE.size_10,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    padding: SPACING.space_4,
  },
  coffeeName: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_medium,
    marginBottom: SPACING.space_4,
  },
  specialIngredient: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.poppins_medium,
    marginBottom: SPACING.space_4,
  },
  average_rating: {
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_medium,
    marginBottom: SPACING.space_4,
  },
  CardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  priceText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_bold,
    marginBottom: SPACING.space_4,
  },
  buttonContainer: {
    width: 30,
    height: 30,
    borderRadius: BORDERRADIUS.radius_4,
    backgroundColor: COLORS.primaryOrangeHex,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CoffeeCard;
