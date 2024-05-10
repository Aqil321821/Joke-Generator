Random Joke Generator 
Using api end point   "https://api.chucknorris.io/jokes/random"

in response we got an object in JSON formate which have a 'value:JOKE'


NOTES:
1.
"readystate"  is the property of XHR Object ,it indicates the current status of HTTP request. It has 5 d/f values for indicating status of request 
  "readystate=4" indicates that request is finished and response is ready......

  2.
  "onreadystatechange" : 
      The onreadystatechange is both a property of the XMLHttpRequest (XHR) object and an event handler in JavaScript. It is used to specify a function that should be called whenever the readyState property of the XHR object changes during an HTTP request.



3.
xhr.onreadystate=function(){
    clg(this)
}

 event handler function can access various properties of the XHR object (xhr) to handle the response data (responseText, response, etc.) and perform additional tasks based on the state of the request.
=> here "this"
represnts the XHR object which has diff things that we can use inside function
it includes things like:
readystate:4
status:200
statusText: "OK"
response:
responseText:


4.
=>here:
const generateJoke = () => {
  // console.log("test");
   

  const xhr=new XMLHttpRequest();
  xhr.open('GET','https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function(){
    if (this.readyState===4) {
      if (this.status===200) {
        console.log(this);
        
      }
      
    }
  }

  xhr.send(); 
};



output: 
XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}

this object is what we get as response from xhr object by hit api end point in which we have "response" in which we are interested

5.
console.log(this.responseText)
output:
{"categories":[],"created_at":"2020-01-05 13:42:19.576875","icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"6UUb1yloR1SC9hn3nTtozA","updated_at":"2020-01-05 13:42:19.576875","url":"https://api.chucknorris.io/jokes/6UUb1yloR1SC9hn3nTtozA","value":"Chuck Norris is the only person who can gang up on you."}

this is JSON object we got in this.responseText..
we will parse it into normal JS object and grab the value which is actual joke and show it on the DOM....



6.
=>  console.log(JSON.parse( this.responseText));
output: 
{categories: Array(0), created_at: '2020-01-05 13:42:30.177068', icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png', id: 'aN_mZ8nZTaqxEIJLzJOvyg', updated_at: '2020-01-05 13:42:30.177068', …}

 now here we got the actual object from which we can get our needy things....and then ipdate the jokeDiv through innerHTML.....


7.
=>  console.log(JSON.parse( this.responseText).value);




output:
Chuck Norris chest hair is the main ingredient in Kevlar.