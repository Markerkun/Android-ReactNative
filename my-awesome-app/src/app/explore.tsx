import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
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

export default function ExploreScreen() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Music",
    "Games",
    "Books",
    "Movies",
    "Technology",
  ];

  const filteredItems = items.filter((item) => {
    const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
        selectedCategory === "All" ||
        item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Explore</Text>

            <Text style={styles.subtitle}>
              Find something interesting
            </Text>
          </View>

          {/* Search */}
          <View style={styles.searchContainer}>
            <Text style={styles.searchIcon}>⌕</Text>

            <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="Search..."
                placeholderTextColor="#64748b"
                style={styles.searchInput}
            />
          </View>

          {/* Categories */}
          <Text style={styles.sectionTitle}>Categories</Text>

          <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categories}
          >
            {categories.map((category) => {
              const active = selectedCategory === category;

              return (
                  <TouchableOpacity
                      key={category}
                      onPress={() => setSelectedCategory(category)}
                      style={[
                        styles.categoryButton,
                        active && styles.categoryButtonActive,
                      ]}
                  >
                    <Text
                        style={[
                          styles.categoryButtonText,
                          active &&
                          styles.categoryButtonTextActive,
                        ]}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* Results */}
          <View style={styles.resultsHeader}>
            <Text style={styles.sectionTitle}>Discover</Text>

            <Text style={styles.resultsCount}>
              {filteredItems.length} results
            </Text>
          </View>

          {filteredItems.length === 0 ? (
              <View style={styles.emptyState}>
                <Text style={styles.emptyIcon}>🔍</Text>

                <Text style={styles.emptyTitle}>
                  Nothing found
                </Text>

                <Text style={styles.emptyDescription}>
                  Try changing your search or selecting another
                  category.
                </Text>
              </View>
          ) : (
              filteredItems.map((item) => (
                  <TouchableOpacity
                      key={item.id}
                      style={styles.itemCard}
                      activeOpacity={0.8}
                  >
                    <View style={styles.itemIcon}>
                      <Text style={styles.itemEmoji}>
                        {item.icon}
                      </Text>
                    </View>

                    <View style={styles.itemContent}>
                      <View style={styles.itemTitleRow}>
                        <Text style={styles.itemTitle}>
                          {item.title}
                        </Text>

                        <View style={styles.categoryBadge}>
                          <Text style={styles.badgeText}>
                            {item.category}
                          </Text>
                        </View>
                      </View>

                      <Text style={styles.itemDescription}>
                        {item.description}
                      </Text>
                    </View>

                    <Text style={styles.arrow}>›</Text>
                  </TouchableOpacity>
              ))
          )}

          {/* Bottom info */}
          <View style={styles.infoCard}>
            <Text style={styles.infoIcon}>✨</Text>

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>
                Keep exploring
              </Text>

              <Text style={styles.infoDescription}>
                New content will appear here as your collection
                grows.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    marginBottom: 22,
  },

  title: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 6,
  },

  subtitle: {
    color: "#64748b",
    fontSize: 14,
  },

  searchContainer: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e293b",
    borderRadius: 14,
    paddingHorizontal: 15,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: "#334155",
  },

  searchIcon: {
    color: "#94a3b8",
    fontSize: 28,
    marginRight: 8,
    marginTop: -4,
  },

  searchInput: {
    flex: 1,
    color: "#ffffff",
    fontSize: 15,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 19,
    fontWeight: "800",
    marginBottom: 14,
  },

  categories: {
    gap: 8,
    paddingBottom: 28,
  },

  categoryButton: {
    paddingHorizontal: 17,
    paddingVertical: 10,
    backgroundColor: "#1e293b",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#334155",
  },

  categoryButtonActive: {
    backgroundColor: "#0891b2",
    borderColor: "#06b6d4",
  },

  categoryButtonText: {
    color: "#94a3b8",
    fontSize: 13,
    fontWeight: "600",
  },

  categoryButtonTextActive: {
    color: "#ffffff",
  },

  resultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  resultsCount: {
    color: "#64748b",
    fontSize: 12,
    marginBottom: 14,
  },

  itemCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e293b",
    borderRadius: 18,
    padding: 12,
    marginBottom: 10,
  },

  itemIcon: {
    width: 58,
    height: 58,
    borderRadius: 14,
    backgroundColor: "#334155",
    justifyContent: "center",
    alignItems: "center",
  },

  itemEmoji: {
    fontSize: 27,
  },

  itemContent: {
    flex: 1,
    marginLeft: 13,
    marginRight: 6,
  },

  itemTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  itemTitle: {
    flex: 1,
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },

  categoryBadge: {
    backgroundColor: "#0e7490",
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 4,
    marginLeft: 5,
  },

  badgeText: {
    color: "#cffafe",
    fontSize: 9,
    fontWeight: "700",
  },

  itemDescription: {
    color: "#64748b",
    fontSize: 12,
    lineHeight: 17,
  },

  arrow: {
    color: "#64748b",
    fontSize: 28,
    fontWeight: "300",
  },

  emptyState: {
    backgroundColor: "#1e293b",
    borderRadius: 18,
    padding: 35,
    alignItems: "center",
    marginBottom: 20,
  },

  emptyIcon: {
    fontSize: 35,
    marginBottom: 12,
  },

  emptyTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },

  emptyDescription: {
    color: "#64748b",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 19,
  },

  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#164e63",
    borderRadius: 18,
    padding: 16,
    marginTop: 14,
  },

  infoIcon: {
    fontSize: 27,
    marginRight: 14,
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 4,
  },

  infoDescription: {
    color: "#a5f3fc",
    fontSize: 12,
    lineHeight: 17,
  },
});