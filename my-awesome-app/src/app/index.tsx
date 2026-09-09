import { useRouter } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.smallTitle}>WELCOME BACK</Text>
              <Text style={styles.title}>My Awesome App</Text>
            </View>

            <TouchableOpacity style={styles.profileButton}>
              <Text style={styles.profileText}>MA</Text>
            </TouchableOpacity>
          </View>

          {/* Welcome card */}
          <View style={styles.welcomeCard}>
            <View style={styles.welcomeContent}>
              <Text style={styles.welcomeTitle}>
                Discover something new
              </Text>

              <Text style={styles.welcomeDescription}>
                Explore new content, discover interesting things
                and find something you will enjoy.
              </Text>

              <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={() => router.push("/explore")}
              >
                <Text style={styles.primaryButtonText}>
                  Explore now
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Statistics */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your activity</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Items</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Favorites</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statNumber}>8</Text>
              <Text style={styles.statLabel}>Collections</Text>
            </View>
          </View>

          {/* Categories */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>

            <TouchableOpacity
                onPress={() => router.push("/explore")}
            >
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoriesContainer}>
            <TouchableOpacity style={styles.categoryCard}>
              <View style={styles.categoryIcon}>
                <Text style={styles.iconText}>🎵</Text>
              </View>

              <Text style={styles.categoryTitle}>Music</Text>
              <Text style={styles.categorySubtitle}>128 items</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <View style={styles.categoryIcon}>
                <Text style={styles.iconText}>🎮</Text>
              </View>

              <Text style={styles.categoryTitle}>Games</Text>
              <Text style={styles.categorySubtitle}>64 items</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoriesContainer}>
            <TouchableOpacity style={styles.categoryCard}>
              <View style={styles.categoryIcon}>
                <Text style={styles.iconText}>📚</Text>
              </View>

              <Text style={styles.categoryTitle}>Books</Text>
              <Text style={styles.categorySubtitle}>42 items</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <View style={styles.categoryIcon}>
                <Text style={styles.iconText}>🎬</Text>
              </View>

              <Text style={styles.categoryTitle}>Movies</Text>
              <Text style={styles.categorySubtitle}>96 items</Text>
            </TouchableOpacity>
          </View>

          {/* Recent */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recently added</Text>
          </View>

          <View style={styles.recentCard}>
            <View style={styles.recentImage}>
              <Text style={styles.recentEmoji}>🎧</Text>
            </View>

            <View style={styles.recentInfo}>
              <Text style={styles.recentTitle}>
                Awesome Collection
              </Text>

              <Text style={styles.recentDescription}>
                Added recently
              </Text>
            </View>

            <TouchableOpacity style={styles.moreButton}>
              <Text style={styles.moreText}>•••</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.recentCard}>
            <View style={styles.recentImage}>
              <Text style={styles.recentEmoji}>🚀</Text>
            </View>

            <View style={styles.recentInfo}>
              <Text style={styles.recentTitle}>
                New Discovery
              </Text>

              <Text style={styles.recentDescription}>
                Added yesterday
              </Text>
            </View>

            <TouchableOpacity style={styles.moreButton}>
              <Text style={styles.moreText}>•••</Text>
            </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  smallTitle: {
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 5,
  },

  title: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "800",
  },

  profileButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#06b6d4",
    alignItems: "center",
    justifyContent: "center",
  },

  profileText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "800",
  },

  welcomeCard: {
    backgroundColor: "#164e63",
    borderRadius: 20,
    padding: 22,
    marginBottom: 28,
  },

  welcomeContent: {
    maxWidth: 330,
  },

  welcomeTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 10,
  },

  welcomeDescription: {
    color: "#cbd5e1",
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 20,
  },

  primaryButton: {
    alignSelf: "flex-start",
    backgroundColor: "#06b6d4",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },

  primaryButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
    marginTop: 4,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 19,
    fontWeight: "800",
  },

  seeAll: {
    color: "#22d3ee",
    fontSize: 14,
    fontWeight: "700",
  },

  statsContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 28,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#1e293b",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
  },

  statNumber: {
    color: "#22d3ee",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 4,
  },

  statLabel: {
    color: "#94a3b8",
    fontSize: 12,
  },

  categoriesContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },

  categoryCard: {
    flex: 1,
    backgroundColor: "#1e293b",
    borderRadius: 18,
    padding: 16,
  },

  categoryIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#334155",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  iconText: {
    fontSize: 22,
  },

  categoryTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },

  categorySubtitle: {
    color: "#64748b",
    fontSize: 12,
  },

  recentCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e293b",
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
  },

  recentImage: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#334155",
    justifyContent: "center",
    alignItems: "center",
  },

  recentEmoji: {
    fontSize: 26,
  },

  recentInfo: {
    flex: 1,
    marginLeft: 14,
  },

  recentTitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 5,
  },

  recentDescription: {
    color: "#64748b",
    fontSize: 12,
  },

  moreButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  moreText: {
    color: "#94a3b8",
    fontSize: 18,
    fontWeight: "800",
  },
});