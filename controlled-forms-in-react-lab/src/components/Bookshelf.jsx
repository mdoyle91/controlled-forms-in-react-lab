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
    console.log("Updated Books Array:", books);
    setNewBook({ title: "", author: "" });
  };

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
      <div className="bookCardsDiv">{/* Book cards will display here */}</div>
    </div>
  );
};

export default Bookshelf;
