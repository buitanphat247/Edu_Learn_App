import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useMemo } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import Animated, {
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/common/SearchBar";
import FeaturedNewsCard from "../../components/news/FeaturedNewsCard";
import NewsListItem from "../../components/news/NewsListItem";

const MOCK_NEWS = [
    {
        id: "1",
        title: "Thông báo lịch nghỉ lễ Quốc Khánh 2/9 cho toàn bộ học viên",
        image:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80",
        category: "Thông báo",
        date: "15/08/2023",
    },
    {
        id: "2",
        title: "Cập nhật khóa học: Chiến lược kinh doanh 4.0",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
        category: "Cập nhật",
        date: "14/08/2023",
    },
    {
        id: "3",
        title: "Tips học tiếng Anh hiệu quả cho người đi làm bận rộn",
        image:
            "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&q=80",
        category: "Chia sẻ",
        date: "10/08/2023",
    },
    {
        id: "4",
        title: "Cuộc thi Hackathon 2023: Cơ hội nhận học bổng toàn phần",
        image:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=80",
        category: "Sự kiện",
        date: "05/08/2023",
    },
    {
        id: "5",
        title: "Ra mắt tính năng Học Offline mới trên ứng dụng AIO",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
        category: "Cập nhật",
        date: "01/08/2023",
    },
];

export default function NewsScreen() {
    const router = useRouter();
    const scrollY = useSharedValue(0);

    const handleNewsPress = (id: string) => {
        router.push(`/(users)/news/${id}`);
    };

    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });

    const animatedHeaderStyle = useAnimatedStyle(() => {
        const isScrolled = scrollY.value > 0;
        return {
            shadowOpacity: Platform.OS === "ios" ? withTiming(isScrolled ? 0.08 : 0) : 0,
            elevation: Platform.OS === "android" ? withTiming(isScrolled ? 4 : 0) : 0,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            shadowColor: "#000",
            backgroundColor: "#F8FAFC",
            zIndex: 10,
        };
    });

    // Prepare mixed data for FlatList to enable sticky header for SearchBar
    const listData = useMemo(() => {
        return [
            { type: "search_bar", id: "sticky_search" },
            { type: "featured_news", id: "featured_section" },
            { type: "list_title", id: "list_title" },
            ...MOCK_NEWS.map(item => ({ ...item, type: "news_item" })),
        ];
    }, []);

    const renderItem = ({ item }: { item: any }) => {
        switch (item.type) {
            case "search_bar":
                return (
                    <Animated.View
                        style={animatedHeaderStyle}
                        className="px-4 pb-2 mb-2"
                    >
                        <SearchBar placeholder="Tìm kiếm tin tức, sự kiện..." />
                    </Animated.View>
                );
            case "featured_news":
                return (
                    <View className="mb-4 px-4">
                        <FeaturedNewsCard
                            title="Ra mắt tính năng Học Offline mới trên ứng dụng AIO"
                            image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80"
                            timestamp="2 giờ trước"
                            onPress={() => handleNewsPress("0")}
                        />
                    </View>
                );
            case "list_title":
                return (
                    <View className="flex-row items-center justify-between mb-2 px-4">
                        <Text className="text-xl font-bold text-slate-800">Mới nhất</Text>
                        <TouchableOpacity>
                            <Text className="text-blue-500 font-semibold text-sm">
                                Xem tất cả
                            </Text>
                        </TouchableOpacity>
                    </View>
                );
            case "news_item":
                return (
                    <View className="px-4">
                        <NewsListItem
                            title={item.title}
                            image={item.image}
                            category={item.category}
                            date={item.date}
                            onPress={() => handleNewsPress(item.id)}
                        />
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <SafeAreaView
            className="bg-[#F8FAFC] flex-1"
            edges={["top", "left", "right"]}
        >
            <StatusBar style="dark" />
            <Animated.FlatList
                data={listData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                stickyHeaderIndices={[0]} // Make the first item (Search Bar) sticky
                contentContainerStyle={{
                    paddingBottom: 16, // Space for TabBar
                }}
                ItemSeparatorComponent={({ leadingItem }) => {
                    if (leadingItem.type === "news_item") return <View className="h-3" />;
                    return null;
                }}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}
