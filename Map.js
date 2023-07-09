//To fetch API, Write async function()

async function getData(place){
    const url=`https://timezone.abstractapi.com/v1/current_time/?api_key=0519eafbab4747a792146fa5368d35f9&location=${place}`;

    const res= await fetch(url);
    data = await res.json();

    time = data.datetime;
    document.getElementById("time").innerText = `${place}'s time : ${time} ${data.timezone_abbreviation}`;
}

document.querySelectorAll(".allPaths").forEach(e=>{
    e.addEventListener("mouseover",function(){
        window.onmousemove = function(j){
            let x=j.clientX;
            let y=j.clientY;

            document.getElementById("name").style.top = y-20+"px";
            document.getElementById("name").style.left = x+10+"px";
        }

        e.style.fill ="pink";
        document.getElementById("namep").innerText = e.id;
        document.getElementById("name").style.opacity = 1;
    })

    e.addEventListener("mouseleave",function(){
        e.style.fill="#ececec";
        document.getElementById("name").style.opacity = 0;
    })
    e.addEventListener("click",function(){
        getData(e.id);
    })
})