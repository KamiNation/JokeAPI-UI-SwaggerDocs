# 1. GET a random joke

## 2. GET a specific joke

## 3. GET a jokes by filtering on the joke type

## 4. POST a new joke

## 5. PUT a joke

## 6. PATCH a joke

## 7. DELETE Specific joke

## 8. DELETE All jokes

## const replaceFilter = data.filter((replace) => {

## const idr = req.body.id

## return Object.values(replace).join('').includes(idr)

## })

## console.log(replaceFilter)

## const replaceArray = []

## const replaceObject = {id: idr, jokeText: textrx, jokeType: typer }

## console.log(replaceObject)

## for (let index = 0; index < data.length; index++) {

### const idr = req.body.id

## if (idr == data[index].id) {

## replaceArray.push(data[index])

## console.log(replaceArray)

## }

## }

```Json
var jokes = [

d: 1,
okeText:
Why don't scientists trust atoms? Because they make up everything.",
okeType: "Science",
,

d: 2,
okeText:
Why did the scarecrow win an award? Because he was outstanding in his field.",
okeType: "Puns",
,

d: 3,
okeText:
I told my wife she was drawing her eyebrows too high. She looked surprised.",
okeType: "Puns",
,

d: 4,
okeText:
What did one ocean say to the other ocean? Nothing, they just waved.",
okeType: "Wordplay",
,

d: 5,
okeText:
Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
okeType: "Wordplay",
,

d: 6,
okeText: "How do you organize a space party? You planet!",
okeType: "Science",
,

d: 7,
okeText:
Why don't some couples go to the gym? Because some relationships don't work out.",
okeType: "Puns",
,

d: 8,
okeText:
Parallel lines have so much in common. It's a shame they'll never meet.",
okeType: "Math",
,

d: 9,
okeText: "What do you call fake spaghetti? An impasta!",
okeType: "Food",
,

d: 10,
okeText: "Why did the tomato turn red? Because it saw the salad dressing!",
okeType: "Food",
,

d: 11,
okeText:
What do you get when you cross a snowman and a vampire? Frostbite!",
okeType: "Wordplay",
,

d: 12,
okeText:
Why did the golfer bring two pairs of pants? In case he got a hole in one!",
okeType: "Sports",
,

d: 13,
okeText:
Why are ghosts bad at lying? Because you can see right through them!",
okeType: "Wordplay",
,

d: 14,
okeText: "Why can't you give Elsa a balloon? Because she will let it go.",
okeType: "Movies",
,

d: 15,
okeText:
I'm reading a book about anti-gravity. It's impossible to put down!",
okeType: "Science",
,

d: 16,
okeText:
I told my wife she was drawing her eyebrows too high. She looked surprised.",
okeType: "Puns",
,

d: 17,
okeText:
What did one ocean say to the other ocean? Nothing, they just waved.",
okeType: "Wordplay",
,

d: 18,
okeText:
Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
okeType: "Wordplay",
,

d: 19,
okeText: "How do you organize a space party? You planet!",
okeType: "Science",
,

d: 20,
okeText:
Why don't some couples go to the gym? Because some relationships don't work out.",
okeType: "Puns",
,

d: 21,
okeText:
Parallel lines have so much in common. It's a shame they'll never meet.",
okeType: "Math",
,

d: 22,
okeText: "What do you call fake spaghetti? An impasta!",
okeType: "Food",
,

d: 23,
okeText: "Why did the tomato turn red? Because it saw the salad dressing!",
okeType: "Food",
,

d: 24,
okeText:
What do you get when you cross a snowman and a vampire? Frostbite!",
okeType: "Wordplay",
,

d: 25,
okeText:
Why did the golfer bring two pairs of pants? In case he got a hole in one!",
okeType: "Sports",
,

d: 26,
okeText:
Why are ghosts bad at lying? Because you can see right through them!",
okeType: "Wordplay",
,

d: 27,
okeText: "Why can't you give Elsa a balloon? Because she will let it go.",
okeType: "Movies",
,

d: 28,
okeText:
I'm reading a book about anti-gravity. It's impossible to put down!",
okeType: "Science",
,

d: 29,
okeText:
I told my wife she was drawing her eyebrows too high. She looked surprised.",
okeType: "Puns",
,

d: 30,
okeText:
What did one ocean say to the other ocean? Nothing, they just waved.",
okeType: "Wordplay",
,

d: 31,
okeText:
Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
okeType: "Wordplay",
,

d: 32,
okeText: "How do you organize a space party? You planet!",
okeType: "Science",
,

d: 33,
okeText:
Why don't some couples go to the gym? Because some relationships don't work out.",
okeType: "Puns",
,

d: 34,
okeText:
Parallel lines have so much in common. It's a shame they'll never meet.",
okeType: "Math",
,

d: 35,
okeText: "What do you call fake spaghetti? An impasta!",
okeType: "Food",
,

d: 36,
okeText: "Why did the tomato turn red? Because it saw the salad dressing!",
okeType: "Food",
,

d: 37,
okeText:
What do you get when you cross a snowman and a vampire? Frostbite!",
okeType: "Wordplay",
,

d: 38,
okeText:
Why did the golfer bring two pairs of pants? In case he got a hole in one!",
okeType: "Sports",
,

d: 39,
okeText:
Why are ghosts bad at lying? Because you can see right through them!",
okeType: "Wordplay",
,

d: 40,
okeText: "Why can't you give Elsa a balloon? Because she will let it go.",
okeType: "Movies",
,

d: 41,
okeText:
I'm reading a book about anti-gravity. It's impossible to put down!",
okeType: "Science",
,

d: 42,
okeText:
I told my wife she was drawing her eyebrows too high. She looked surprised.",
okeType: "Puns",
,

d: 43,
okeText:
What did one ocean say to the other ocean? Nothing, they just waved.",
okeType: "Wordplay",
,

d: 44,
okeText:
Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
okeType: "Wordplay",
,

d: 45,
okeText: "How do you organize a space party? You planet!",
okeType: "Science",
,

d: 46,
okeText:
Why don't some couples go to the gym? Because some relationships don't work out.",
okeType: "Puns",
,

d: 47,
okeText:
Parallel lines have so much in common. It's a shame they'll never meet.",
okeType: "Math",
,

d: 48,
okeText: "What do you call fake spaghetti? An impasta!",
okeType: "Food",
,

d: 49,
okeText: "Why did the tomato turn red? Because it saw the salad dressing!",
okeType: "Food",
,

d: 50,
okeText:
What do you get when you cross a snowman and a vampire? Frostbite!",
okeType: "Wordplay",
,

d: 51,
okeText:
Why did the golfer bring two pairs of pants? In case he got a hole in one!",
okeType: "Sports",
,

d: 52,
okeText:
Why are ghosts bad at lying? Because you can see right through them!",
okeType: "Wordplay",
,

d: 53,
okeText: "Why can't you give Elsa a balloon? Because she will let it go.",
okeType: "Movies",
,

d: 54,
okeText:
I'm reading a book about anti-gravity. It's impossible to put down!",
okeType: "Science",
,

d: 55,
okeText:
I told my wife she was drawing her eyebrows too high. She looked surprised.",
okeType: "Puns",
,

d: 56,
okeText:
What did one ocean say to the other ocean? Nothing, they just waved.",
okeType: "Wordplay",
,

d: 57,
okeText:
Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
okeType: "Wordplay",
,

d: 58,
okeText: "How do you organize a space party? You planet!",
okeType: "Science",
,

d: 59,
okeText:
Why don't some couples go to the gym? Because some relationships don't work out.",
okeType: "Puns",
,

d: 60,
okeText:
Parallel lines have so much in common. It's a shame they'll never meet.",
okeType: "Math",
,

d: 61,
okeText: "What do you call fake spaghetti? An impasta!",
okeType: "Food",
,

d: 62,
okeText: "Why did the tomato turn red? Because it saw the salad dressing!",
okeType: "Food",
,

d: 63,
okeText:
What do you get when you cross a snowman and a vampire? Frostbite!",
okeType: "Wordplay",
,

d: 64,
okeText:
Why did the golfer bring two pairs of pants? In case he got a hole in one!",
okeType: "Sports",
,

d: 65,
okeText:
Why are ghosts bad at lying? Because you can see right through them!",
okeType: "Wordplay",
,

d: 66,
okeText: "Why can't you give Elsa a balloon? Because she will let it go.",
okeType: "Movies",
,

d: 67,
okeText:
I'm reading a book about anti-gravity. It's impossible to put down!",
okeType: "Science",
,

d: 68,
okeText:
I told my wife she was drawing her eyebrows too high. She looked surprised.",
okeType: "Puns",
,

d: 69,
okeText:
What did one ocean say to the other ocean? Nothing, they just waved.",
okeType: "Wordplay",
,

d: 70,
okeText:
Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
okeType: "Wordplay",
,

d: 71,
okeText: "How do you organize a space party? You planet!",
okeType: "Science",
,

d: 72,
okeText:
Why don't some couples go to the gym? Because some relationships don't work out.",
okeType: "Puns",
,

d: 73,
okeText:
Parallel lines have so much in common. It's a shame they'll never meet.",
okeType: "Math",
,

d: 74,
okeText: "What do you call fake spaghetti? An impasta!",
okeType: "Food",
,

d: 75,
okeText: "Why did the tomato turn red? Because it saw the salad dressing!",
okeType: "Food",
,

d: 76,
okeText:
What do you get when you cross a snowman and a vampire? Frostbite!",
okeType: "Wordplay",
,

d: 77,
okeText:
Why did the golfer bring two pairs of pants? In case he got a hole in one!",
okeType: "Sports",
,

d: 78,
okeText:
Why are ghosts bad at lying? Because you can see right through them!",
okeType: "Wordplay",
,

d: 79,
okeText: "Why can't you give Elsa a balloon? Because she will let it go.",
okeType: "Movies",
,

d: 80,
okeText:
I'm reading a book about anti-gravity. It's impossible to put down!",
okeType: "Science",
,

d: 81,
okeText:
I told my wife she was drawing her eyebrows too high. She looked surprised.",
okeType: "Puns",
,

d: 82,
okeText:
What did one ocean say to the other ocean? Nothing, they just waved.",
okeType: "Wordplay",
,

d: 83,
okeText:
Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
okeType: "Wordplay",
,

d: 84,
okeText: "How do you organize a space party? You planet!",
okeType: "Science",
,

d: 85,
okeText:
Why don't some couples go to the gym? Because some relationships don't work out.",
okeType: "Puns",
,

d: 86,
okeText:
Parallel lines have so much in common. It's a shame they'll never meet.",
okeType: "Math",
,

d: 87,
okeText: "What do you call fake spaghetti? An impasta!",
okeType: "Food",
,

d: 88,
okeText: "Why did the tomato turn red? Because it saw the salad dressing!",
okeType: "Food",
,

d: 89,
okeText:
What do you get when you cross a snowman and a vampire? Frostbite!",
okeType: "Wordplay",
,

d: 90,
okeText:
Why did the golfer bring two pairs of pants? In case he got a hole in one!",
okeType: "Sports",
,

d: 91,
okeText:
Why are ghosts bad at lying? Because you can see right through them!",
okeType: "Wordplay",
,

d: 92,
okeText: "Why can't you give Elsa a balloon? Because she will let it go.",
okeType: "Movies",
,

d: 93,
okeText:
I'm reading a book about anti-gravity. It's impossible to put down!",
okeType: "Science",
,

d: 94,
okeText:
I told my wife she was drawing her eyebrows too high. She looked surprised.",
okeType: "Puns",
,

d: 95,
okeText:
What did one ocean say to the other ocean? Nothing, they just waved.",
okeType: "Wordplay",
,

d: 96,
okeText:
Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
okeType: "Wordplay",
,

d: 97,
okeText: "How do you organize a space party? You planet!",
okeType: "Science",
,

d: 98,
okeText:
Why don't some couples go to the gym? Because some relationships don't work out.",
okeType: "Puns",
,

d: 99,
okeText:
Parallel lines have so much in common. It's a shame they'll never meet.",
okeType: "Math",
,

d: 100,
okeText: "What do you call fake spaghetti? An impasta!",
okeType: "Food",
,
];

```Javascript 

 url: '/random?_method=RANDOM',
  method: 'GET',
   baseUrl: '',
  originalUrl: '/random?_method=RANDOM',
  _parsedUrl: Url {
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: null,
    search: '?_method=RANDOM',
    query: '_method=RANDOM',
    pathname: '/random',
    path: '/random?_method=RANDOM',
    href: '/random?_method=RANDOM',
    _raw: '/random?_method=RANDOM'
  },

  params: {},
  query: { _method: 'RANDOM' },

  search: '?_method=RANDOM',
    query: '_method=RANDOM',
    pathname: '/random',
    path: '/random?_method=RANDOM',
    href: '/random?_method=RANDOM',
    _raw: '/random?_method=RANDOM'

```

```Javascript

    // console.log("NOT FOUND ROUTE req =>",req);
    // console.log("NOT FOUND ROUTE req.body.search =>",req._parsedOriginalUrl.search);
    // console.log("NOT FOUND ROUTE req.body.query =>",req._parsedOriginalUrl.query);
    // console.log("NOT FOUND ROUTE req.body.pathname =>",req._parsedOriginalUrl.pathname);
    // console.log("NOT FOUND ROUTE req.body._raw =>",req._parsedOriginalUrl._raw);
    // console.log("NOT FOUND ROUTE req.socket.server._handle =>",res.socket.server._handle);
    // console.log("NOT FOUND ROUTE req.socket._connectionKey =>",res.socket._connectionKey);
    // console.log("NOT FOUND ROUTE req.socket.incoming.orginalMethod =>",res.socket.orginalMethod);
    // console.log("NOT FOUND ROUTE req.socket.incoming._parsedOriginalUrl =>",res.socket._parsedOriginalUrl);
    // console.log("NOT FOUND ROUTE req.socket.incoming.route =>",res.socket.route);
    // console.log("NOT FOUND ROUTE req.socket._httpMessage =>",res.socket._httpMessage);

```

 // console.log("NOT FOUND ROUTE req.body =>", req.body);
    // console.log("NOT FOUND ROUTE req.route =>", req.route);
    // console.log("NOT FOUND ROUTE req.socket =>", res);

    let search = req._parsedOriginalUrl.search
    // console.log("NOT FOUND ROUTE req.body search =>", search);
    let query = req._parsedOriginalUrl.query
    // console.log("NOT FOUND ROUTE req.body query =>", query);
    let pathName = req._parsedOriginalUrl.pathname
    // console.log("NOT FOUND ROUTE req.body pathname =>", pathName);
    let raw = req._parsedOriginalUrl._raw
    // console.log("NOT FOUND ROUTE req.body raw =>", raw);
    let server = res.server
    // console.log("NOT FOUND ROUTE req.body server =>", server);
    let parser = res.parser
    // console.log("NOT FOUND ROUTE req.body parser =>", parser);
    // let reqRes = res.req
    // console.log("NOT FOUND ROUTE req.body reqRes =>", reqRes);
    let rawHeader = res.rawHeaders
    // console.log("NOT FOUND ROUTE req.body rawHeader =>", rawHeader);
    let methods = res.method
    // console.log("NOT FOUND ROUTE req.body methods =>", methods);

    // const { rawHeaders, method } = res.req
    // console.log("rawHeaders logged ==>", rawHeaders);
    // console.log("methods logged ==>", method);

    // const requestObject = [
    //     {
    //         reqSearch: search
    //     },
    //     {
    //         reqQuery: query
    //     },
    //     {
    //         pathname: pathName
    //     },
    //     {
    //         reqRaw: raw
    //     },
    //     {
    //         reqRoute: route
    //     },
    //     {
    //         resServer: server
    //     },
    //     {
    //         resParser: parser
    //     },
    //     {
    //         resReq: reqRes
    //     },
    //     {
    //         resRaw: rawHeader
    //     },
    //     {
    //         resMethod: methods
    //     }
    // ]

    // const requestBody = JSON.stringify(requestObject)
    // console.log(requestBody);

    // if (requestBody === "") {
    //     console.log("requestBody is empty");
    // } else {
    //     try {
    //         fs.appendFile("requestBody.txt", requestBody, (err) => {
    //             if (err) throw New(err)
    //             console.log("File has been saved");
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

### body-parser inteprets the incoming HTTP request body and makes it available as key-value pairs in the body property of the request, req, parameter

### method-override allows one to specify a custom function to be called during the middleware execution. In this custom function we will inspect the request body, req.body, for the presence of the desired token, _method in this case, and return its value to the middleware that will in turn override the request method

```Javascript
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
```

  ```Java
   // console.log(req);
    // console.log(req.body);
    // console.log(req.body.search);
    // console.log(req.body.query);
    // console.log(req.body.pathname);
    // console.log(req.body._raw);
    // console.log(req.route);
```
