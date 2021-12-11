import React, { useContext, useEffect } from "react";
import {
  Button,
  FlatList,
  Text,
  HStack,
  ArrowForwardIcon,
  View,
  Center,
} from "native-base";
import { context } from "../context/context";
import { getposts } from "../actions";
const Home = ({ navigation }) => {
  const { state, dispatch } = useContext(context);
  useEffect(() => {
    const handleActionPromise = async () => {
      dispatch(await getposts());
    };
    handleActionPromise();
  }, []);
  return (
    <FlatList
      data={state.posts ? state.posts.list : []}
      renderItem={({ item }) => {
        return (
          <HStack justifyContent="space-between" space={3} margin={2}>
            <Text fontSize="15" color={"red.700"}>{item.title}</Text>
            
            <Button onClick={() => {
                // navigation.navigate("details", { id: item.id});
                navigation.navigate('details',{id: item.id});
              }}>
            <ArrowForwardIcon
              size="6"
              color={'green.800'}
            />
            </Button>
          </HStack>
        );
      }}
      ItemSeparatorComponent={() => (
        <View
          style={{
            margin: 4,
            borderBottomColor: "green",
            borderBottomWidth: 4,
          }}
        ></View>
      )}
      ListEmptyComponent={() => (
        <Center>
          <Text fontSize="24">No items</Text>
        </Center>
      )}
      ListHeaderComponent={() => (
        <Center>
          <Text fontSize="24" borderBottomColor="grey" borderBottomWidth={3}>
            postsList
          </Text>
        </Center>
      )}
    />
  );
};
export default Home;
