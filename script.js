let post = document.getElementById("firstPost"); 
let postsBox = document.getElementById("postsBox") 
 
let imgurls = [ 
    "image.jpg",
    "jimin.jpg", 
    "hybe.jpg" 
] 
for(let i = 0; i < 100; i++){ 
    newpost = post.cloneNode(true); 
    imgpost = newpost.getElementsByClassName("img")[0] 
    console.log(imgpost) 
    imgpost.setAttribute("src", imgurls[i%3]) 
 
    postsBox.appendChild(newpost); 
}
 function likes(){
    let countElement = document.getElementById("likeCount");
    let count = parseInt(countElement.innerText);
    count++;
    countElement.innerText = count;
}
function addComment() {
    let commentInput = document.getElementById("comInput");
    let commentText = commentInput.value;
}


