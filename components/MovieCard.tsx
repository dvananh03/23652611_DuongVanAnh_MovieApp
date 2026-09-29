import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Movie {
  id: string;
  title: string;
  genre: string;
  year: number;
  rating: number;
  poster: string;
  isShowing: boolean;
}

interface MovieCardProps {
  movie: Movie;
  layout?: "row" | "tile";
  onSelect: (id: string) => void;
}

const MovieCard = ({
  movie,
  layout = "row",
  onSelect,
}: MovieCardProps) => {
  const handlePress = () => {
    onSelect(movie.id);
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        layout === "tile" && styles.tileCard,
      ]}
      onPress={handlePress}
    >
      <Image
        source={{ uri: movie.poster }}
        style={[
          styles.poster,
          layout === "tile" && styles.tilePoster,
        ]}
      />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {movie.title}
        </Text>

        <Text style={styles.text}>
          Thể loại: {movie.genre}
        </Text>

        <Text style={styles.text}>
          Năm: {movie.year}
        </Text>

        <Text style={styles.rating}>
          ⭐ {movie.rating.toFixed(1)}
        </Text>

        <Text style={styles.status}>
          {movie.isShowing ? "Đang chiếu" : " Không chiếu"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(MovieCard);

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 12,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },

  tileCard: {
    flexDirection: "column",
  },

  poster: {
    width: 90,
    height: 130,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#ddd",
  },

  tilePoster: {
    width: "100%",
    height: 200,
    marginRight: 0,
    marginBottom: 10,
  },

  info: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  text: {
    fontSize: 14,
    marginBottom: 4,
    color: "#555",
  },

  rating: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 4,
  },

  status: {
    fontSize: 14,
    marginTop: 6,
  },
});
