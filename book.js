// console.log('bismillahiroahmanirrahim');
const allBook=()=>{
    const searchBook=document.getElementById('search-area');
    const searchText=searchBook.value;
    searchBook.value='';
    if(searchText===''){
        const errorMassage=document.getElementById('error');
        error.innerHTML=`
        <p class='text-center p-5 bg-danger rounded'>Please , Type Book Name First.</p>
        `;
    }
    else{
        fetch(`https://openlibrary.org/search.json?q=${searchText}`)
        .then(res=>res.json())
        .then(data=>displayBook(data.docs));
    }
    const unknownText=document.getElementById('nuull');
    unknownText.textContent='';
}
// allBook();
const displayBook=(books)=>{
    // console.log(bookId);
    error.innerHTML='';
    const findBook=document.getElementById('search-books');
    findBook.textContent='';
    if(books.length===0){
        // console.log('type write a right book namwe');
        const nullMassage=document.getElementById('nuull');
        nullMassage.innerHTML=`
        <p class='text-center p-5 bg-info rounded'>Can Not Relate With Book Name <br>Please Type Book Name..</p>
    `;
    }
    else{
        let count=0;
        books.forEach(book => {
            count=count+1;
            // console.log(count);
            // console.log(book);
            const div=document.createElement('div');
            div.classList.add('col');
            div.innerHTML=`
              <div onclick="details(${book.cover_i})" class="card">
              <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h4 class="card-title text-center fw-bold">${book.title}</h4>
                  <p class="card-text">
                  <ul style=" list-style-type: none;">
                  <li><span class="fw-bold">Author Name: </span>${book.author_name}</li>
                  <li><span class="fw-bold">Publisher Name: </span>${book.publisher}</li>
                  <li><span class="fw-bold">First Published: </span>${book.first_publish_year}</li>
                  </ul>
                  </p>
                </div>
                <button class=" border-2 border-primary bg-info text-light fw-bold">See More About This</button>
              </div>
            `;
            findBook.appendChild(div);
        });
       const div=document.getElementById('total-book');
       div.innerHTML=`
       <p class="fw-bold mx-5 text-light p-2">Total Book Found Result : ${count}</p>
       ` ;
    }
}
