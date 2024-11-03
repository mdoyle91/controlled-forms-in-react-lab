import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((prevBooks) => [...prevBooks, newBook]); //I added this prevBooks portion at the suggestion of ChatGPT as the array was previously not updating. My previous code looked like this  setBooks([...books, newBook]) and I'm not sure why that doesn't work.
    setNewBook({ title: "", author: "" });
  };

  const bookList = books.map(
    (
      book,
      index //I used this resource https://www.shecodes.io/athena/7184-how-to-use-the-map-method-in-react#:~:text=list%20of%20elements.-,The%20.,returned%20value%20of%20the%20callback.&text=const%20arrayData%20%3D%20%5B1%2C%202,item%20%3D%3E%20item%20*%202)%3B origiginall to help me writ ethe map function, but it didnt' work--I had included it in the div and wrote it diffferently than here. When I got errors, I put the code into ChatGPT and asked it to tell me what was wrong--I moved the code outside the divs and up above the return statement, which makes sense to me, but I'm not quite sure what the strong tags below do.
    ) => (
      <li key={index} className="bookCard">
        <strong>{book.title}</strong> by {book.author}
      </li>
    )
  );

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <form onSubmit={handleSubmit}>
          <h3>Add a Book</h3>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author:</label>
          <input
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        <ul>{bookList}</ul>
      </div>
    </div>
  );
};

export default Bookshelf;
