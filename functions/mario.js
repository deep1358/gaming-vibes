exports.handler = async (event, context) => {
  console.log("Run");

  const data = { name: "Mario" };

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
