// console.log('bismillahiroahmanirrahim');
const allBook=()=>{
    const searchBook=document.getElementById('search-area');
    const searchText=searchBook.value;
    searchBook.value='';
    if(searchText===''){
        const errorMassage=document.getElementById('error');
        error.innerHTML=`
        <p>Please , Write Book Name</p>
        `;
    }
    else{
        fetch(`http://openlibrary.org/search.json?q=${searchText}`)
        .then(res=>res.json())
        .then(data=>displayBook(data.docs));
    }
}
// allBook();
const displayBook=(books)=>{
    // console.log(bookId);
    error.innerHTML='';
    const findBook=document.getElementById('search-books');
    findBook.textContent='';
    if(books.length==0){
        // console.log('type write a right book namwe');
        const nullMassage=document.getElementById('nuull');
        nullMassage.innerHTML=`
        <p>can't related with book name ,please type a book name..</p>
    `;
    }
    else{
        books.forEach(book => {
            console.log(book);
            const div=document.createElement('div');
            div.classList.add('col');
            div.innerHTML=`
              <div class="card">
                
                <div class="card-body">
                  <h5 class="card-title">${book.title}</h5>
                  <p class="card-text">${book.author_name}<br>
                  ${book.publisher} <br>${book.first_publish_year}</p>
                </div>
                <button>see more</button>
              </div>
            `;
            findBook.appendChild(div);
        });
    }
    
}
{/* <img src="" class="card-img-top" alt="..."></img> */}