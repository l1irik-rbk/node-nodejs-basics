export const parseEnv = () => {
  const env = process.env;
  const finalArray = [];
  for (const key in env) {
    if (key.includes('RSS_')) {
      finalArray.push(`${key}=${env[key]}`);
    }
  }
  const string = finalArray.join('; ');
  console.log(string);
};
parseEnv();

// RSS_name1=value1  RSS_name2=value2 node env
