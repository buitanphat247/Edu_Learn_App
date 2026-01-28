import React from "react";
import { ScrollView, View } from "react-native";
import ProfileAbout from "../../components/profile/ProfileAbout";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileInfoCard from "../../components/profile/ProfileInfoCard";
import ProfileLearningJourney from "../../components/profile/ProfileLearningJourney";

const AVATAR_URL =
  "https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-thien-nhien-4.jpg";

export default function Profile() {
  return (
    <View className="flex-1 bg-[#F8FAFC]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <ProfileHeader />
        <ProfileInfoCard avatarUrl={AVATAR_URL} name="Nguyễn Văn A" />
        <ProfileLearningJourney />
        <ProfileAbout />
      </ScrollView>
    </View>
  );
}

