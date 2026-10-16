// popup
const popup=document.querySelector("#popup");
setTimeout(()=>{popup.classList.add("popup");},3000);
function closepopup(){
    popup.classList.remove("popup");
}
popup.addEventListener("click",closepopup);

const burger = document.querySelector("#burger");
function menu (){
    console.log("درست شد");
    const navItems = document.querySelectorAll(".nav-item");
     for(const navItem of navItems) {
     navItem.classList.toggle("nav-item-show");
    }
}
burger.addEventListener("click", menu);


// comments

const commentList = [
{
    name:"حمید",
    content:"رستوران شما تمامی خاطرات دوران کودکی ام را زنده کرد و به معنای واقعی نوستالژی است. سپاس از زحماتتان برای چنین محیط زیبایی",
    image:"hamid.png",
},
{
    name:"رویا",
    content:"رستوران شما تمامی خاطرات دوران کودکی ام را زنده کرد و به معنای واقعی نوستالژی است. سپاس از زحماتتان برای چنین محیط زیبایی",
    image:"roya.png",
},
{
    name:"امید",
    content:"رستوران شما تمامی خاطرات دوران کودکی ام را زنده کرد و به معنای واقعی نوستالژی است. سپاس از زحماتتان برای چنین محیط زیبایی",
    image:"omid.png",
},
{
    name:"ملیکا",
    content:"رستوران شما تمامی خاطرات دوران کودکی ام را زنده کرد و به معنای واقعی نوستالژی است. سپاس از زحماتتان برای چنین محیط زیبایی",
    image:"melika.png",
},
{
    name:"محسن",
    content:"رستوران شما تمامی خاطرات دوران کودکی ام را زنده کرد و به معنای واقعی نوستالژی است. سپاس از زحماتتان برای چنین محیط زیبایی",
    image:"mohsen.png",
},
{
    name:"پیمان",
    content:"رستوران شما تمامی خاطرات دوران کودکی ام را زنده کرد و به معنای واقعی نوستالژی است. سپاس از زحماتتان برای چنین محیط زیبایی",
    image:"peyman.png",
},
];

const result = commentList.map(function(comment) {
    return `<figure class="comment-item">
    <img src="./images/${comment.image}" class="comment-item-image" alt=${comment.name}>
    <figcaption class="comment-item-text">
        <h3>${comment.name}</h3>
        <p>${comment.content}</p>
    </figcaption>
</figure>`;
}).join("");

const commentItemsDiv = document.querySelector("#comment-items");

commentItemsDiv.innerHTML = result;

const comments = document.querySelectorAll(".comment-item");

const observer = new IntersectionObserver (function (items) {
    for (const item of items) {
        if (item.isIntersecting) {
            item.target.classList.add("comment-item-animation");
        } else {
            item.target.classList.remove("comment-item-animation");
        }
    }
},
{
    threshold:0.1,
}
);

for (const comment of comments){
    observer.observe(comment);
}

// form

const form = document.querySelector("#form");

function validation (event) {
    if (event.target.name==="name") {
        const farsi = /^[\u0600-\u06FF\s\u0008]*$/;
        if (!farsi.test(event.target.value)){
            event.target.value = "";
            //بهتره بجای استفاده از آلرت از مدال استفاده بشه مثل همون پاپ آپ که ساختیم 
            alert("لطفأ فارسی تایپ کنید.");
        }
    } else if (event.target.name === "phone") {
       const englishNumbers = /^[0-9]*$/;
       if (!englishNumbers.test(event.target.value)){
        event.target.value = "";
        alert("لطفأ اعداد انگلیسی تایپ کنید."); 
    }
  }
}

form.addEventListener("keyup",validation);

function submit (event) {
    event.preventDefault();
    
    const inputs = document.querySelectorAll(".input");

    let error = "";

    for (const input of inputs)
{
    if (!input.value) {
        error = error + `\n${input.title}  این گزینه نباید خالی باشد.`
    
    } else if (input.name === "phone") {
        const phoneNumber = /^(?:0|98|\+98|\+980|0098|098|009980)?(9\d{9})$/; 

        if (!phoneNumber.test(input.value)){
            error = error + `لطفأ شماره همراه را صحیح وارد نمائید.`
        }
    }
}
// راه دیگر :در اچ تی ام ال به هر تگ فرم اینپوت اضافه کنیم ری کوآییرد به معنی ضروری و اگر خالی بود موارد ارور پیشفرض نمایش داده میشود. میشه متن این ارورها را تغییر داد
if (error) {
    alert (error)
} else {
    // ارتباط با سرور در این قسمت باید انجام گیرد.
    alert("ارسال درخواست");
}
}

form.addEventListener("submit", submit)