import { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

/**
 * Hook to handle sticky header animation based on scroll position
 */
export const useStickyHeader = (backgroundColor: string = "#3B82F6") => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor,
      // Xóa bỏ hoàn toàn shadow và elevation
      shadowOpacity: 0,
      elevation: 0,

      // Đường kẻ dưới mờ khi cuộn
      borderBottomWidth: scrollY.value > 0 ? 1 : 0,
      borderBottomColor: "rgba(255,255,255,0.1)",

      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,

      zIndex: 9999,
    };
  });

  return { scrollY, scrollHandler, animatedHeaderStyle };
};
