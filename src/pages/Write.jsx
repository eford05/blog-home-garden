import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/write.css";

function Write() {
  const [value, setValue] = useState("");
  return (
    <main className="write">
      <section className="write-content">
        <input type="text" className="write-input" placeholder="Title" />
        <div className="editor-container">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </section>
      <section className="menu">
        <div className="item">
          <h2>Publish</h2>
          <span>
            <strong>Status: </strong> Draft
          </span>
          <span>
            <strong>Visibility: </strong> Public
          </span>
          <input type="file" id="file" />
          <label htmlFor="file" className="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h2>Category</h2>
          <div className="cat">
            <input type="radio" name="cat" value="decor" id="decor" />
            <label htmlFor="decor">Decorating</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" value="repair" id="repair" />
            <label htmlFor="repair">Home Improvement</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" value="garden" id="garden" />
            <label htmlFor="garden">Garden</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="housekeeping"
              id="housekeeping"
            />
            <label htmlFor="housekeeping">Housekeeping</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" value="recipes" id="recipes" />
            <label htmlFor="recipes">Recipes</label>
          </div>
        </div>

        <div className="item">
          <h2>Featured Content</h2>
          <div className="cat">
            <input type="checkbox" name="main" value="main" id="main" />
            <label htmlFor="main">Homepage</label>
          </div>
          <div className="cat">
            <input
              type="checkbox"
              name="trending"
              value="trending"
              id="trending"
            />
            <label htmlFor="trending">Trending</label>
          </div>
          <div className="cat">
            <input
              type="checkbox"
              name="recommended"
              value="recommended"
              id="recommended"
            />
            <label htmlFor="recommended">Recommended</label>
          </div>
          <div className="cat">
            <input
              type="checkbox"
              name="featured"
              value="featured"
              id="featured"
            />
            <label htmlFor="featured">Featured</label>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Write;
