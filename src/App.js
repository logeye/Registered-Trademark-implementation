import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const preUser = (e) => {
    console.log(e);
  };
  const [text, setText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    color: "",
    bgColor: "",
    mesg: ""
  });
  const showAlert = (show = false, color = "", bgColor = "", mesg = "") => {
    setAlert({ show, color, bgColor, mesg });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("--");
    console.log(text);
    if (text.includes("Zella")) {
      var ind = text.indexOf("Zella");
      console.log(ind);
      var s = text.substring(0, ind);
      console.log(ind);
      var rmark = text.substring(ind);
      var zella = rmark.substring(0, 5) + "\u00AE";
      console.log(zella);
      var r = s + zella + text.substring(ind + 5);

      console.log(r);
    }
    if (!text) {
      // empty input
      showAlert(true, "#ff0000d0", "#ff000028", "Please Enter Value");
    } else if (text && isEdit) {
      // edit item
      console.log(text);
      setText("");
      setIsEdit(false);
    } else {
      // add new item in list
      setText("");
    }
  };
  return (
    <div className="App">
      <h2>Adding Registered TradeMark Symbol</h2>
      <form className=" form-contant" onSubmit={handleSubmit}>
        <div className="input-fields  ">
          <input
            type="text"
            className="form-control"
            placeholder="eg:- Zella"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <button className="col btn btn-light " type="submit">
          {isEdit ? "Edit" : "Check"}
        </button>
      </form>
    </div>
  );
}
