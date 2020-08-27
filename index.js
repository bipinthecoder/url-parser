

let inputURL = "foo://example.com:8042/over/there?name=ferret&&place=blr#nose";
let obj = {}

//Using URL() constructor of JS Web API
var URLExec = new URL(inputURL);

let scheme = URLExec.protocol.split(":")[0];
let domain = URLExec.hostname;
let port = parseInt(URLExec.port);
let path = URLExec.pathname.slice(1);
let query = Array.from(URLExec.searchParams);
let password = URLExec.password;
let username = URLExec.username;
let fragment = URLExec.hash.split("#")[1];

let queryArray = [];

query && query.forEach(item => {
    let param = `${item[0]} = ${item[1]}`;
    queryArray.push(param);
});

scheme && (obj["scheme"] = scheme);
domain && (obj["domain"] = domain);
port && (obj["port"] = port);
path && (obj["path"] = path);
query && (obj["query"] = queryArray);
username && (obj["username"] = username);
password && (obj["password"] = password);
fragment && (obj["fragment"] = fragment);

console.log(obj);