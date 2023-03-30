search_bar=document.getElementById('search_box');
items=Array.from(document.querySelectorAll('.list .list_item'));
search_bar.addEventListener('input', ()=>{
    searched_text=document.getElementById('search_box').value;

    items.forEach(element => {
        if(element.innerText.toUpperCase().includes(searched_text.toUpperCase())){
            element.style.display='';
        }
        else{
            element.style.display='none';
        }
    });
})