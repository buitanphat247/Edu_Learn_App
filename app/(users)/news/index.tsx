import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useMemo, useState } from "react";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "../../components/common/MainHeader";
import Pagination from "../../components/common/Pagination";
import FeaturedNewsCard from "../../components/news/FeaturedNewsCard";
import NewsListItem from "../../components/news/NewsListItem";
import { useStickyHeader } from "../../hooks/useStickyHeader";

// Mock data
const ALL_NEWS = [
    {
        id: "1",
        title: "Thông báo lịch nghỉ lễ Quốc Khánh 2/9 cho toàn bộ học viên",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80",
        category: "Thông báo",
        date: "15/08/2023",
    },
    {
        id: "2",
        title: "Cập nhật khóa học: Chiến lược kinh doanh 4.0",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
        category: "Cập nhật",
        date: "14/08/2023",
    },
    {
        id: "3",
        title: "Tips học tiếng Anh hiệu quả cho người đi làm bận rộn",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&q=80",
        category: "Chia sẻ",
        date: "10/08/2023",
    },
    {
        id: "4",
        title: "Cuộc thi Hackathon 2023: Cơ hội nhận học bổng toàn phần",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=80",
        category: "Sự kiện",
        date: "05/08/2023",
    },
    {
        id: "5",
        title: "Ra mắt tính năng Học Offline mới trên ứng dụng AIO",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
        category: "Cập nhật",
        date: "01/08/2023",
    },
    {
        id: "6",
        title: "Hướng dẫn sử dụng tính năng ghi chú mới trên ứng dụng",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80",
        category: "Hướng dẫn",
        date: "28/07/2023",
    },
    {
        id: "7",
        title: "Chương trình khuyến mãi mùa hè 2023 - Giảm 50% học phí",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80",
        category: "Khuyến mãi",
        date: "25/07/2023",
    },
    {
        id: "8",
        title: "Webinar: Xu hướng công nghệ 2024 và cơ hội nghề nghiệp",
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&q=80",
        category: "Sự kiện",
        date: "20/07/2023",
    },
    {
        id: "9",
        title: "Thông báo bảo trì hệ thống vào ngày 18/07/2023",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
        category: "Thông báo",
        date: "16/07/2023",
    },
    {
        id: "10",
        title: "5 kỹ năng mềm quan trọng nhất cho sinh viên mới ra trường",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
        category: "Chia sẻ",
        date: "12/07/2023",
    },
    {
        id: "11",
        title: "Khóa học mới: Machine Learning cho người mới bắt đầu",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80",
        category: "Cập nhật",
        date: "08/07/2023",
    },
    {
        id: "12",
        title: "Tổng kết chương trình học bổng quý 2/2023",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80",
        category: "Thông báo",
        date: "05/07/2023",
    },
    {
        id: "13",
        title: "Hội thảo trực tuyến: Phát triển kỹ năng lãnh đạo",
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&q=80",
        category: "Sự kiện",
        date: "01/07/2023",
    },
    {
        id: "14",
        title: "Cập nhật chính sách bảo mật mới của AIO",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
        category: "Thông báo",
        date: "28/06/2023",
    },
    {
        id: "15",
        title: "Top 10 khóa học được yêu thích nhất tháng 6",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
        category: "Chia sẻ",
        date: "25/06/2023",
    },
];

const ITEMS_PER_PAGE = 5;

// Featured news (first item)
const FEATURED_NEWS = {
    id: "0",
    title: "Ra mắt tính năng Học Offline mới trên ứng dụng AIO",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    timestamp: "2 giờ trước",
};

export default function NewsScreen() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const { scrollHandler, animatedHeaderStyle } = useStickyHeader("#3B82F6");

    const totalPages = Math.ceil(ALL_NEWS.length / ITEMS_PER_PAGE);

    // Get current page items
    const currentItems = ALL_NEWS.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleNewsPress = (id: string) => {
        router.push(`/(users)/news/${id}`);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Prepare list data for FlatList
    const listData = useMemo(() => {
        return [
            { type: "featured_news", id: "featured_news" },
            { type: "section_title", id: "section_title" },
            ...currentItems.map((item) => ({ ...item, type: "news_item" })),
            { type: "pagination", id: "pagination" },
        ];
    }, [currentItems]);

    const renderItem = ({ item }: { item: any }) => {
        switch (item.type) {

            case "featured_news":
                return (
                    <View className="px-4 mb-3 mt-3">
                        <FeaturedNewsCard
                            title={FEATURED_NEWS.title}
                            image={FEATURED_NEWS.image}
                            timestamp={FEATURED_NEWS.timestamp}
                            onPress={() => handleNewsPress(FEATURED_NEWS.id)}
                        />
                    </View>
                );
            case "section_title":
                return (
                    <View className="flex-row items-center justify-between px-4 mb-2">
                        <Text className="text-xl font-bold text-slate-800">Mới nhất</Text>
                        <Text className="text-slate-500 text-sm">
                            Trang {currentPage}/{totalPages}
                        </Text>
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
            case "pagination":
                return (
                    <View className="px-4">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <SafeAreaView
            className="bg-[#3B82F6] flex-1"
            edges={["top", "left", "right"]}
        >
            <SafeAreaView
                className="bg-white flex-1"
                edges={["bottom"]}
            >
                <StatusBar style="dark" />

                <MainHeader
                    title="Tin tức"
                    searchPlaceholder="Tìm kiếm tin tức, sự kiện..."
                    animatedStyle={animatedHeaderStyle}
                />

                <Animated.FlatList
                    data={listData}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    onScroll={scrollHandler}
                    scrollEventThrottle={16}
                    ItemSeparatorComponent={({ leadingItem }) => {
                        if (leadingItem.type === "news_item") return <View className="h-3" />;
                        return null;
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </SafeAreaView>
        </SafeAreaView>
    );
}
