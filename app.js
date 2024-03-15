
        let name = document.querySelectorAll('.name')
        let spans = document.querySelectorAll('span')
        let nameBoxes = Array.from(name)
        let spanBoxes = Array.from(spans)
        let btn = document.querySelector("button");
        for (let i = 0; i < nameBoxes.length; i++) {
            nameBoxes[i].addEventListener('input', () => {
                let len = nameBoxes[i].value.length;
                if (len <= 3) {
                    spanBoxes[i].innerHTML = "Name should be not null & greator than 3 letters"
                    btn.disabled = true;
                } else {
                    spanBoxes[i].innerHTML = ""
                    btn.disabled = false;
                }
            })

        }

        // let phn = document.querySelector('.phn');
        // phn.addEventListener('input', () => {
        //     let len = phn.value.length;
        //     if (len <= 9) {
        //         document.querySelector('.sp').innerHTML = "Digits should be exact 10"
        //         btn.disabled = true;
        //     } else if (len > 10) {
        //         document.querySelector('.sp').innerHTML = "Digits should be exact 10"
        //         btn.disabled = true;
        //     } else {
        //         document.querySelector('.sp').innerHTML = ""
        //         btn.disabled = false;
        //     }
        // })

        let pass = document.querySelectorAll(".pass")
        let passBoxes = Array.from(pass)

        passBoxes[1].addEventListener('input', () => {
            let pass1 = passBoxes[0].value;
            let pass2 = passBoxes[1].value;

            if(pass2 != pass1){
                document.querySelector('.ps').innerHTML = "Password should contain same elements"
                btn.disabled = true;
            }else {
                document.querySelector('.ps').innerHTML = ""
                btn.disabled = fals
                
                e;
            }
        })
    
