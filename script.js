const jokeDiv = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');




const generateJoke = () => {
  // console.log("test");
   

  const xhr=new XMLHttpRequest();
  xhr.open('GET','https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function(){
    if (this.readyState===4) {
      if (this.status===200) {
      
        jokeDiv.innerText =JSON.parse(this.responseText).value;

        
      }else{
        jokeDiv.innerText = 'Something Went Wrong'
      }
      
    }
  }

  xhr.send(); 
};









// event listner on jokeBtn

jokeBtn.addEventListener('click', generateJoke);


// now call the generateJoke when DOM loads

document.addEventListener('DOMContentLoaded',generateJoke);

