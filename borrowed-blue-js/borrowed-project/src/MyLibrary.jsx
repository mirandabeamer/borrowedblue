
function MyLibrary() {
    let books = [
        {
            title: "The Reformatory",
            author: "Tananarive Due",
            status: "Available",
            timesborrowed: 5,
            rating: "5"
        },
        {
            title: "Where the Crawdads Sing",
            author: "Delia Owens",
            status: "Available",
            timesborrowed: 2,
            rating: "4.5"
        },
        {
            title: "The Silent Patient",
            author: "Alex Michaelides",
            status: "Available",
            timesborrowed: 0,
            rating: "4.2"
        },
        {
            title: "The Night Circus",
            author: "Erin Morgenstern",
            status: "Available",
            timesborrowed: 1,
            rating: "4.6"
        },
        {
            title: "Educated: A Memoir",
            author: "Tara Westover",
            status: "Available",
            timesborrowed: 7,
            rating: "4.7"
        }
    ];

    books.sort((a, b) => a.timesborrowed - b.timesborrowed);
    

    return (
        <div>
        <div class="list-group">
            <h4 class='subtitle brandname'>My Library</h4>
            <hr/>
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1 ">{books[0].title} <span>({books[0].rating}/5)</span></h5>
              <small>{books[0].status}</small>
            </div>
            <p class="mb-1">{books[0].author}</p>
          </a>
          <a href="#" class="list-group-item list-group-item-action" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1 ">{books[1].title} <span>({books[1].rating}/5)</span></h5>
              <small>{books[1].status}</small>
            </div>
            <p class="mb-1">{books[2].author}</p>
          </a>
          <a href="#" class="list-group-item list-group-item-action" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1 ">{books[2].title} <span>({books[2].rating}/5)</span></h5>
              <small>{books[2].status}</small>
            </div>
            <p class="mb-1">{books[2].author}</p>
          </a>
          <a href="#" class="list-group-item list-group-item-action" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1 ">{books[3].title} <span>({books[3].rating}/5)</span></h5>
              <small>{books[3].status}</small>
            </div>
            <p class="mb-1">{books[3].author}</p>
          </a>
          <a href="#" class="list-group-item list-group-item-action" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1 ">{books[4].title} <span>({books[4].rating}/5)</span></h5>
              <small>{books[4].status}</small>
            </div>
            <p class="mb-1">{books[4].author}</p>
          </a>
         
        </div>
        <br/>
        <div class="addnewbooks">
            <a data-mdb-ripple-init class="btn btn-outline-dark btn-lg" href="#!" role="button">Add New Books</a>
        </div>
        </div>
    )
}

export default MyLibrary