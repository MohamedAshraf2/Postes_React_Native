const baseUrl = "https://jsonplaceholder.typicode.com/posts";
export const getposts = async () => {
  let posts = null;
  try {
    let response = await fetch(baseUrl);
    posts = await response.json();
  } catch (err) {
    console.log(err);
  }
  return {
    type: "LIST",
    payload: posts || [],
  };
};

export const getpostDetails = async (id = 0) => {
  let post = null;
  try {
    let response = await fetch(`${baseUrl}/${id}`);
    post = await response.json();
  } catch (err) {
    console.log(err);
  }
  return {
    type: "POST_DETAILS",
    payload: post || {},
  };
};
