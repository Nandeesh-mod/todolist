const userinput = document.querySelector('.task');
const add = document.querySelector('.add');
const result = document.querySelector('.resultbox');



function fun()
{
   if(userinput.value)
   {
    console.log(userinput.value);
    const mainbox = document.createElement('div');
    const card = document.createElement('input');
    const done = document.createElement('button');
    const edit = document.createElement('button');

    mainbox.className = "flex-container";
    done.className = "done";
    edit.className = "edit";
    card.className = "card";
    card.type = "text";
    card.setAttribute("readonly","readonly"); // to create the input element with readonly attribute and value is readonly
    card.value = userinput.value;
    edit.textContent = "Edit";
    done.textContent = "Done";
    result.appendChild(mainbox);
    mainbox.appendChild(card);
    mainbox.appendChild(edit);
    mainbox.appendChild(done);   

    function x()
    {
        card.remove();
        edit.remove();
        done.remove();
    }
    function editing()
    {
        card.removeAttribute("readonly","readonly");
        card.focus();
        edit.textContent = "Save";
    }

    function saving()
    {
        card.setAttribute("readonly","readonly");
        edit.textContent = "Edit";
    }
    function checking()
    {
        if(edit.textContent === "Edit")
        {
            editing();
        }else{
            saving();
        }
    }
    edit.addEventListener('click',checking);
    done.addEventListener('click',x);
    userinput.value = '';
   }else{
    alert("nothing enterd!")
   }

}



add.addEventListener('click',fun);
