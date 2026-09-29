import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image
} from "react-native";

const API_URL = "https://6ab223d15b9b60f39d345b3f.mockapi.io/movies";

interface Movie {
  id: string;
  title: string;
  genre: string;
  year: number;
  rating: number;
  poster: string;
  isShowing: boolean;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Không thể tải dữ liệu");
      }

      const data: Movie[] = await response.json();

      setMovies(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Đang tải dữ liệu...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách phim</Text>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.movie}>
            <Text style={styles.movieTitle}>{item.title}</Text>
            <Image
              source={{ uri: item.poster }}
                style={styles.poster}
              />

            <Text>Thể loại: {item.genre}</Text>
            <Text>Năm: {item.year}</Text>
            <Text>Rating: {item.rating}</Text>
            <Text>
              Trạng thái: {item.isShowing ? "Đang chiếu" : "Đã ngừng chiếu"}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
poster: {
  width: 120,
  height: 180,
  borderRadius: 8,
  marginBottom: 10,
  alignSelf: "center",
},


  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  movie: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
  },

  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default App;
