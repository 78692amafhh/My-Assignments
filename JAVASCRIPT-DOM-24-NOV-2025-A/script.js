const allLinks = document.querySelectorAll('button');

allLinks.forEach(
    (eachelem)=>{
        eachelem.addEventListener('click',
            () => {
                if (eachelem.innerHTML === "+ Friend")
                    {eachelem.innerHTML = "- Friend"}
                else if (eachelem.innerHTML === "- Friend")
                    {eachelem.innerHTML = "+ Friend"}
            }
        );
    }
);
