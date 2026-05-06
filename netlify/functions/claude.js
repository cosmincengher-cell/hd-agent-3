exports.handler = async () => {
  const key = process.env.CLAUDE_API_KEY;
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      keyExists: !!key,
      keyPrefix: key ? key.substring(0, 20) + '...' : 'LIPSESTE',
    }),
  };
};
