import {StyleSheet} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import {CARD_WIDTH} from './CoffeeCard';

export const styles = StyleSheet.create({
  CardLinearGradientContainer: {
    padding: SPACING.space_12,
  },
  CardImageBG: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
  CardRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CardRatingText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
  },
  coffeeName: {
    color: COLORS.primaryLightGreyHex,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_medium,
    marginBottom: SPACING.space_4,
  },
  specialIngredient: {
    color: COLORS.primaryLightGreyHex,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_medium,
    marginBottom: SPACING.space_4,
  },
  average_rating: {
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_medium,
    marginBottom: SPACING.space_4,
  },
  priceContainer: {},
  priceText: {},
  buttonContainer: {},
});
