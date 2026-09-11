import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Item = {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
};

const items: Item[] = [
  {
    id: 1,
    title: "Chill Collection",
    description: "Relaxing content for your evening",
    icon: "🎧",
    category: "Music",
  },
  {
    id: 2,
    title: "Gaming Zone",
    description: "Discover new games and adventures",
    icon: "🎮",
    category: "Games",
  },
  {
    id: 3,
    title: "Knowledge Base",
    description: "Interesting books and articles",
    icon: "📚",
    category: "Books",
  },
  {
    id: 4,
    title: "Movie Night",
    description: "Movies worth watching",
    icon: "🎬",
    category: "Movies",
  },
  {
    id: 5,
    title: "Tech World",
    description: "Technology and programming",
    icon: "💻",
    category: "Technology",
  },
];

const categories = [
  "All",
  "Music",
  "Games",
  "Books",
  "Movies",
  "Technology",
];

export default function ExploreScreen() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = items.filter((item) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
        item.title.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText);

    const matchesCategory =
        selectedCategory === "All" ||
        item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
      <SafeAreaView className="flex-1 bg-slate-950">
        <ScrollView
            className="flex-1 px-5"
            contentContainerStyle={{
              paddingBottom: 40,
            }}
            showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View className="pt-5">
            <Text className="text-3xl font-extrabold text-white">
              Explore
            </Text>

            <Text className="mt-1 text-sm text-slate-500">
              Find something interesting
            </Text>
          </View>

          {/* Search */}
          <View className="mt-6 flex-row items-center rounded-2xl border border-slate-700 bg-slate-800 px-4">
            <Text className="mr-2 text-2xl text-slate-400">
              ⌕
            </Text>

            <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="Search..."
                placeholderTextColor="#64748b"
                className="h-13 flex-1 text-base text-white"
            />
          </View>

          {/* Categories */}
          <Text className="mt-7 text-xl font-extrabold text-white">
            Categories
          </Text>

          <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 8,
                paddingTop: 14,
                paddingBottom: 28,
              }}
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                  <TouchableOpacity
                      key={category}
                      onPress={() =>
                          setSelectedCategory(category)
                      }
                      activeOpacity={0.8}
                      className={`rounded-full border px-4 py-2.5 ${
                          isActive
                              ? "border-cyan-500 bg-cyan-600"
                              : "border-slate-700 bg-slate-800"
                      }`}
                  >
                    <Text
                        className={`text-sm font-semibold ${
                            isActive
                                ? "text-white"
                                : "text-slate-400"
                        }`}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* Discover header */}
          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-extrabold text-white">
              Discover
            </Text>

            <Text className="text-xs text-slate-500">
              {filteredItems.length} results
            </Text>
          </View>

          {/* Items */}
          <View className="mt-4">
            {filteredItems.length === 0 ? (
                <View className="items-center rounded-2xl bg-slate-800 px-6 py-10">
                  <Text className="text-4xl">🔍</Text>

                  <Text className="mt-3 text-lg font-bold text-white">
                    Nothing found
                  </Text>

                  <Text className="mt-2 text-center text-sm leading-5 text-slate-500">
                    Try changing your search or selecting
                    another category.
                  </Text>
                </View>
            ) : (
                filteredItems.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        activeOpacity={0.8}
                        className="mb-3 flex-row items-center rounded-2xl bg-slate-800 p-3"
                    >
                      {/* Icon */}
                      <View className="h-14 w-14 items-center justify-center rounded-xl bg-slate-700">
                        <Text className="text-2xl">
                          {item.icon}
                        </Text>
                      </View>

                      {/* Content */}
                      <View className="ml-3 flex-1">
                        <View className="flex-row items-center">
                          <Text
                              numberOfLines={1}
                              className="flex-1 text-sm font-bold text-white"
                          >
                            {item.title}
                          </Text>

                          <View className="ml-2 rounded-md bg-cyan-950 px-2 py-1">
                            <Text className="text-[9px] font-bold text-cyan-300">
                              {item.category}
                            </Text>
                          </View>
                        </View>

                        <Text
                            numberOfLines={2}
                            className="mt-1 text-xs leading-4 text-slate-500"
                        >
                          {item.description}
                        </Text>
                      </View>

                      {/* Arrow */}
                      <Text className="ml-2 text-2xl font-light text-slate-500">
                        ›
                      </Text>
                    </TouchableOpacity>
                ))
            )}
          </View>

          {/* Information */}
          <View className="mt-4 flex-row items-center rounded-2xl bg-cyan-950 p-4">
            <Text className="mr-3 text-2xl">✨</Text>

            <View className="flex-1">
              <Text className="text-sm font-bold text-white">
                Keep exploring
              </Text>

              <Text className="mt-1 text-xs leading-4 text-cyan-200">
                New content will appear here as your collection
                grows.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}