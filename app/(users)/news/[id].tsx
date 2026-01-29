import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailHeader from "../../components/common/DetailHeader";
import ShareModal from "../../components/common/ShareModal";

export default function NewsDetail() {
    const { id } = useLocalSearchParams();
    const [isShareVisible, setIsShareVisible] = useState(false);

    const handleShare = () => {
        setIsShareVisible(true);
    };

    const handleShareOption = (option: { id: string; label: string }) => {
        console.log("Share via:", option.label, "News ID:", id);
        // TODO: Implement actual share logic based on option.id
    };

    return (
        <SafeAreaView className="flex-1 bg-[#3B82F6]" edges={["left", "right", "top"]}>
            <View className="flex-1 bg-white">
                <DetailHeader
                    title="Chi tiết tin tức"
                    rightIcon="share-outline"
                    onRightIconPress={handleShare}
                />

                <ScrollView className="flex-1" contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16, paddingTop: 8 }}>
                    <Text className="text-sm text-blue-500 font-bold mb-2">THÔNG BÁO</Text>
                    <Text className="text-2xl font-bold text-slate-900 mb-4 leading-8">
                        Ra mắt tính năng Học Offline mới trên ứng dụng AIO
                    </Text>
                    <View className="flex-row items-center mb-6">
                        <Ionicons name="time-outline" size={16} color="#94A3B8" />
                        <Text className="text-slate-500 text-sm ml-1">
                            2 giờ trước • 5 phút đọc
                        </Text>
                    </View>

                    <Image
                        source={{
                            uri: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
                        }}
                        className="w-full h-56 rounded-2xl mb-6"
                        resizeMode="cover"
                    />

                    <Text className="text-slate-600 text-base leading-7 mb-4 text-justify">
                        Hôm nay, chúng tôi rất vui mừng thông báo về việc ra mắt tính năng Học Offline hoàn toàn mới trên ứng dụng AIO. Tính năng này được phát triển dựa trên những phản hồi quý giá từ cộng đồng học viên, cho phép bạn tải xuống các khóa học yêu thích và học mọi lúc mọi nơi, ngay cả khi không có kết nối mạng internet.
                    </Text>

                    <Text className="text-xl font-bold text-slate-900 mb-3 mt-2">
                        Tại sao bạn nên thử tính năng này?
                    </Text>

                    <Text className="text-slate-600 text-base leading-7 mb-4 text-justify">
                        Trong cuộc sống bận rộn hiện đại, việc duy trì thói quen học tập liên tục có thể gặp nhiều trở ngại, đặc biệt là sự phụ thuộc vào kết nối mạng. Với chế độ Offline, bạn có thể:
                    </Text>

                    <View className="mb-4 pl-2">
                        <Text className="text-slate-600 text-base leading-7 mb-2">• 🚌 <Text className="font-bold">Học mọi lúc mọi nơi:</Text> Tận dụng thời gian di chuyển trên xe buýt, máy bay hoặc ở những nơi sóng yếu.</Text>
                        <Text className="text-slate-600 text-base leading-7 mb-2">• 💾 <Text className="font-bold">Tiết kiệm dữ liệu:</Text> Tải bài học qua Wi-Fi và xem lại bao nhiêu lần tùy thích mà không tốn 4G.</Text>
                        <Text className="text-slate-600 text-base leading-7 mb-2">• 🚀 <Text className="font-bold">Trải nghiệm mượt mà:</Text> Không còn lo lắng về việc video bị giật lag hay loading lâu.</Text>
                    </View>

                    <Text className="text-xl font-bold text-slate-900 mb-3 mt-2">
                        Cách sử dụng
                    </Text>

                    <Text className="text-slate-600 text-base leading-7 mb-4 text-justify">
                        Để bắt đầu, hãy cập nhật ứng dụng AIO lên phiên bản mới nhất. Tại trang chi tiết khóa học, bạn sẽ thấy biểu tượng "Tải xuống" bên cạnh danh sách bài học. Chỉ cần chạm vào đó, nội dung sẽ được lưu trữ an toàn trong thiết bị của bạn.
                    </Text>

                    <Text className="text-slate-600 text-base leading-7 text-justify">
                        Chúng tôi hy vọng tính năng này sẽ giúp hành trình chinh phục tri thức của bạn trở nên dễ dàng và thú vị hơn bao giờ hết. Chúc bạn có những giờ học hiệu quả!
                    </Text>
                </ScrollView>

                {/* Share Modal */}
                <ShareModal
                    isVisible={isShareVisible}
                    onClose={() => setIsShareVisible(false)}
                    onShare={handleShareOption}
                />
            </View>
        </SafeAreaView>
    );
}

