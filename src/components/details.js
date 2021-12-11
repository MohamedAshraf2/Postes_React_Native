import React, { useContext, useEffect } from "react";
import { View, Text, Button, VStack, Center, Image } from "native-base";
import { context } from "../context/context";
import { addUser, getpostDetails } from "../actions";

const Details = (props) => {
  const { state, dispatch } = useContext(context);
    useEffect(() => {
  const handleActionPromise = async () => {
        dispatch(await getpostDetails(props.route.params.id));
      };
      handleActionPromise();
    }, []);
if (state.posts.details && state.posts.details.id)
    return (
      <VStack>
        <Center>
          <Text
            fontSize={20}
            color="red"
            borderBottomColor="black"
            borderBottomWidth={2}
          >
            Details of {state.posts.details.title}
          </Text>
        </Center>
        <Text>Body: {state.posts.details.body}</Text>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={{ borderRadius: 50, width: 200, height: 200 }}
        />
      </VStack>
    );
  return <Text>No Details</Text>;
};
export default Details;
