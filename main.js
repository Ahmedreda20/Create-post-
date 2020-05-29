/**
 * this button when click on it create new div as parent & set length of text in textarea
 * This div  called or created as parent and but everything in it when click on post button
 * Called containerPopup of  popup until tell user "you" you should
 * there are alot of elements will create when user "you" click on but it will do when length of this textarea more than 100 word
 * Elemnts create :>
 * a and this will add in it  name of username with @
 * a and added in it comments with numbered of it when user "you" click on set comment
 * p and added on it the time when user "you" click on button post this set the time when post uploaded
 * input with type text to be able to create or add comment on this post
 * button to be able to set comment and add new number next to commentNumber
 * there are two div's one header and one footer
 * header add in it username and time
 * footer add in it input & button & number of comments


 */

const buttonPost = document.querySelector('.btn-post');

const container = document.querySelector('.box');

const popupcontainer = document.querySelector('.ContainerPopup');

let user =  "@" + "Username";
let number = 0;
buttonPost.addEventListener('click' , function(){
    
    const text = document.querySelector('#txt').value;
    const image = document.querySelector('.upload-thumb');

        const post = document.createElement('DIV'); 
        const header = document.createElement('DIV'); /* This div called header and added in it username and time*/
        const footer = document.createElement('DIV'); /*This div called footer and added if it input & button & number of comments */
        const content = document.createElement('DIV'); /*This div called content and added it value of textarea when length of it more than 100word*/
        const comment = document.createElement('INPUT'); /*This element called  comment to set anything you want*/
        const BtnSetComment = document.createElement('BUTTON'); /*This element called button set comment when click on it add number next to comment and set new comment*/
        const timer = document.createElement('P'); /*This element called timer to set thie time when post uploaded*/
        const username = document.createElement('A'); /*This element called username added in it name of username*/
        const commnetNumber = document.createElement('A'); /* This elemnent called comment number when you click on it add comment only text no more*/
        const img = document.createElement('IMG');

        username.href = "#";
        username.innerHTML = user;


        content.innerHTML = text;

/*Add class' name to each elements created to call it in style.css file and add to it some style as colors fonts ..etc */
       timer.setAttribute('id' , 'timer');
       post.classList.toggle('post');
       header.classList.toggle('header');
       footer.classList.toggle('footer');
       content.classList.toggle('content');
       BtnSetComment.classList.toggle('btn-setComment');
       commnetNumber.classList.toggle('Comment');


        if(text === "" || text.length < 100){
            post.style.display = "none";
            popupcontainer.style.display = "flex";
        } else{
            container.appendChild(post);
            post.appendChild(header);

            post.appendChild(content);

            post.appendChild(footer);

            header.appendChild(timer);
            header.appendChild(username);

            content.appendChild(img);
            
            comment.type = "text";
            comment.placeholder  = "Type comment..";

            BtnSetComment.innerHTML = "Set Comment";
            commnetNumber.innerHTML = "comment";

            footer.appendChild(comment);
            footer.appendChild(BtnSetComment);

            footer.appendChild(commnetNumber);

            console.log(post.className);
            // content.innerHTML = text;
            localStorage.setItem("post" , "tomato");



            var date = new Date();
            var h = date.getHours(); // 0 - 23
            var m = date.getMinutes(); // 0 - 59
            var session = "AM";


            if(h == 0){
            h = 12;
            }

            if(h > 12){
            h = h - 12;
            session = "PM";
            }

            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;

            var time = h + ":" + m + "    " +  session;

            timer.innerHTML  = time;
                    img.src = image.src;
        } 

      

        BtnSetComment.addEventListener('click' ,  function(){
            if(comment.value === ""){
                commnetNumber.innerHTML = " comment";
            }else{
                number++;
                commnetNumber.innerHTML = number + " comment";
                if(number === 10){
                    number;
                commnetNumber.innerHTML =   number + "comment";
                }
            }
        });

        
});

window.onclick = function(event) {
    if (event.target == popupcontainer) {
        popupcontainer.style.display = "none";
    }
  }


// window.addEventListener('load' , function(){
//         body.style.background =localStorage.getItem('post');
// });