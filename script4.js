//APIの叩き方

async function callApi() {
  const res = await fetch(); //JSONのURL);
  const users = await res.json();
  console.log(users);
}
callApi();
