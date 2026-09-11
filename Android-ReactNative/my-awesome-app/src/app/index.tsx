import { useRouter } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
      <SafeAreaView className="flex-1 bg-slate-950">
        <ScrollView
            className="flex-1"
            contentContainerClassName="px-5 pb-10"
            showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View className="flex-row items-center justify-between pt-5">
            <View>
              <Text className="text-xs font-bold tracking-widest text-slate-400">
                WELCOME BACK
              </Text>

              <Text className="mt-1 text-2xl font-extrabold text-white">
                My Awesome App
              </Text>
            </View>

            <TouchableOpacity
                className="h-12 w-12 items-center justify-center rounded-full bg-cyan-500"
            >
              <Text className="text-sm font-extrabold text-white">
                MA
              </Text>
            </TouchableOpacity>
          </View>

          {/* Welcome Card */}
          <View className="mt-6 overflow-hidden rounded-3xl bg-cyan-950 p-6">
            <View className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-800/40" />

            <Text className="text-2xl font-extrabold text-white">
              Discover something new
            </Text>

            <Text className="mt-3 leading-5 text-slate-300">
              Explore new content, discover interesting things and
              find something you will enjoy.
            </Text>

            <TouchableOpacity
                className="mt-5 self-start rounded-xl bg-cyan-500 px-5 py-3"
                onPress={() => router.push("/explore")}
                activeOpacity={0.8}
            >
              <Text className="font-bold text-white">
                Explore now
              </Text>
            </TouchableOpacity>
          </View>

          {/* Activity */}
          <View className="mt-7 flex-row items-center justify-between">
            <Text className="text-xl font-extrabold text-white">
              Your activity
            </Text>
          </View>

          <View className="mt-4 flex-row gap-3">
            <View className="flex-1 items-center rounded-2xl bg-slate-800 p-4">
              <Text className="text-2xl font-extrabold text-cyan-400">
                24
              </Text>

              <Text className="mt-1 text-xs text-slate-400">
                Items
              </Text>
            </View>

            <View className="flex-1 items-center rounded-2xl bg-slate-800 p-4">
              <Text className="text-2xl font-extrabold text-cyan-400">
                12
              </Text>

              <Text className="mt-1 text-xs text-slate-400">
                Favorites
              </Text>
            </View>

            <View className="flex-1 items-center rounded-2xl bg-slate-800 p-4">
              <Text className="text-2xl font-extrabold text-cyan-400">
                8
              </Text>

              <Text className="mt-1 text-xs text-slate-400">
                Collections
              </Text>
            </View>
          </View>

          {/* Categories Header */}
          <View className="mt-8 flex-row items-center justify-between">
            <Text className="text-xl font-extrabold text-white">
              Categories
            </Text>

            <TouchableOpacity
                onPress={() => router.push("/explore")}
            >
              <Text className="font-bold text-cyan-400">
                See all
              </Text>
            </TouchableOpacity>
          </View>

          {/* Categories Row 1 */}
          <View className="mt-4 flex-row gap-3">
            <TouchableOpacity className="flex-1 rounded-2xl bg-slate-800 p-4">
              <View className="h-12 w-12 items-center justify-center rounded-xl bg-slate-700">
                <Text className="text-2xl">🎵</Text>
              </View>

              <Text className="mt-3 text-base font-bold text-white">
                Music
              </Text>

              <Text className="mt-1 text-xs text-slate-500">
                128 items
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 rounded-2xl bg-slate-800 p-4">
              <View className="h-12 w-12 items-center justify-center rounded-xl bg-slate-700">
                <Text className="text-2xl">🎮</Text>
              </View>

              <Text className="mt-3 text-base font-bold text-white">
                Games
              </Text>

              <Text className="mt-1 text-xs text-slate-500">
                64 items
              </Text>
            </TouchableOpacity>
          </View>

          {/* Categories Row 2 */}
          <View className="mt-3 flex-row gap-3">
            <TouchableOpacity className="flex-1 rounded-2xl bg-slate-800 p-4">
              <View className="h-12 w-12 items-center justify-center rounded-xl bg-slate-700">
                <Text className="text-2xl">📚</Text>
              </View>

              <Text className="mt-3 text-base font-bold text-white">
                Books
              </Text>

              <Text className="mt-1 text-xs text-slate-500">
                42 items
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 rounded-2xl bg-slate-800 p-4">
              <View className="h-12 w-12 items-center justify-center rounded-xl bg-slate-700">
                <Text className="text-2xl">🎬</Text>
              </View>

              <Text className="mt-3 text-base font-bold text-white">
                Movies
              </Text>

              <Text className="mt-1 text-xs text-slate-500">
                96 items
              </Text>
            </TouchableOpacity>
          </View>

          {/* Recently Added */}
          <View className="mt-8">
            <Text className="text-xl font-extrabold text-white">
              Recently added
            </Text>
          </View>

          {/* Recent Item */}
          <TouchableOpacity
              className="mt-4 flex-row items-center rounded-2xl bg-slate-800 p-3"
              activeOpacity={0.8}
          >
            <View className="h-14 w-14 items-center justify-center rounded-xl bg-slate-700">
              <Text className="text-2xl">🎧</Text>
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-sm font-bold text-white">
                Awesome Collection
              </Text>

              <Text className="mt-1 text-xs text-slate-500">
                Added recently
              </Text>
            </View>

            <TouchableOpacity className="h-10 w-10 items-center justify-center">
              <Text className="text-lg font-extrabold text-slate-400">
                •••
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Second Recent Item */}
          <TouchableOpacity
              className="mt-2 flex-row items-center rounded-2xl bg-slate-800 p-3"
              activeOpacity={0.8}
          >
            <View className="h-14 w-14 items-center justify-center rounded-xl bg-slate-700">
              <Text className="text-2xl">🚀</Text>
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-sm font-bold text-white">
                New Discovery
              </Text>

              <Text className="mt-1 text-xs text-slate-500">
                Added yesterday
              </Text>
            </View>

            <TouchableOpacity className="h-10 w-10 items-center justify-center">
              <Text className="text-lg font-extrabold text-slate-400">
                •••
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Bottom */}
          <View className="mt-8 items-center">
            <Text className="text-xs text-slate-600">
              My Awesome App • 2026
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}