exports.handler = async () => {
  console.log("Run");

  const data = { name: "Mario" };

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
