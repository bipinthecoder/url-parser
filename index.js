let inputURL = "foo://example.com:8042/over/there?name=ferret#nose"; //An example test URL
let obj = {} //declaring result object

//Using URL() constructor of JS Web API
const URLExec = new URL(inputURL);

let scheme = URLExec.protocol.split(":")[0];
let domain = URLExec.hostname;
let port = parseInt(URLExec.port);
let path = URLExec.pathname;
let query = Array.from(URLExec.searchParams);
let password = URLExec.password;
let username = URLExec.username;
let fragment = URLExec.hash.split("#")[1];

let queryArray = [];

query && query.forEach(item => {
    let param = `${item[0]} = ${item[1]}`;
    queryArray.push(param);
});

//Filling the result object
scheme && (obj["scheme"] = scheme);
domain && (obj["domain"] = domain);
port && (obj["port"] = port);
path && (obj["path"] = path);
queryArray.length && (obj["query"] = queryArray);
username && (obj["username"] = username);
password && (obj["password"] = password);
fragment && (obj["fragment"] = fragment);

console.log(obj);

//testcases
/*
  input  :: jdbc:mysql://test_user:ouupppssss@localhost:3306/sakila?profileSQL=true
  output ::
  { scheme: 'jdbc',
  path: 'mysql://test_user:ouupppssss@localhost:3306/sakila',
  query: [ 'profileSQL = true' ] }
*/

/*
  input  :: urn:example:animal:ferret:nose
  output ::
  { scheme: 'urn', path: 'example:animal:ferret:nose' }
*/

/*
  input  :: urn:example:animal:ferret:nose
  output ::
  { scheme: 'urn', path: 'example:animal:ferret:nose' }
*/
/*
  input  :: urn:example:animal:ferret:nose
  output ::
  { scheme: 'urn', path: 'example:animal:ferret:nose' }
*/
