const showAnsBtn = document.querySelectorAll(".btn");

showAnsBtn.forEach(btn =>{
    btn.addEventListener("click", function() {

        const ans = this.querySelector("p")
        const icons = this.querySelectorAll(`img`)
        

        if  (!(ans.style.maxHeight)){
            ans.style.maxHeight = ans.scrollHeight + 16 + `px`;
            ans.style.padding = `0.5rem 0`;
            icons[0].style.display = 'none';
            icons[1].style.display = 'block';
            return;
        }
        ans.style.maxHeight = null;
        ans.style.padding =`0 0`;
        icons[0].style.display = 'block';
        icons[1].style.display = 'none';
    })
})