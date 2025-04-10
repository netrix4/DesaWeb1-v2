import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import "@/app/globals.css";
import SearchBar from "../components/SearchBar";
import useFetch from "../services/useFetch";

const headerImage = require("@/assets/images/partial-react-logo.png");
const logo = require("@/assets/images/logo.png");

export default function Index() {
  // const router = useRouter();
  const {
    data: movies,
    loading: moviesLoading,
    error: movieError,
  } = useFetch(() => fetchPopularMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <Image source={headerImage} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image source={logo} className="w-24 h-28 mt-20 mx-auto" />

        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt10 self-center"
          />
        ) : movieError ? (
          <Text>Error: {movieError?.message}</Text>
        ) : (
          <View className="flex flex-1 mt-5">
            <SearchBar></SearchBar>
            {/* <SearchBar
              onPress={() => router.push("/search")}
              // placeHolder = 'Search for a movie'
            ></SearchBar> */}
            <>
              <Text className="text-xl text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>
              <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ movie }) => (
                  <Text className="text-white">{movie.title}</Text>
                )}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-3"
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
