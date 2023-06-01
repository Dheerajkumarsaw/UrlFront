import "./form.css";
import { useState } from "react";
import Header from "./header";

export default function Form() {
    const [inputUrl, setInputUrl] = useState("")
    const [newtemp, setTemp] = useState("")

    function temporary(data) {
        setInputUrl(data)
        setTemp(data)
    }
    function submit(e) {
        e.preventDefault()

        if (inputUrl.length === 0) {
            alert("Please Enter Url")
            return
        }
        if (inputUrl === newtemp) {
            alert("Url Already Shorted Try new")
            return
        }

        let temp = { longUrl: inputUrl }
        console.log(temp)
        fetch("http://localhost:4000/url/shorten", {
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(temp),
            method: "POST",
            'Access-Control-Allow-Origin': "*"
        }).then((res) => res.json())
            .then((data) => { temporary(data.data.shortUrl) })
    }

    return (
        <div >
            <h3 className="head" style={{ color: "coral" }}>Short Url</h3>
            <form onSubmit={submit} className="form" style={{ border: "solid" }}>
                <br />
                <br />
                <br />
                <br />
                <input type="text" value={inputUrl} className="input" placeholder="Enter Url"
                    onChange={(e) => setInputUrl(e.target.value)}
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <button className="btn">Get Url</button>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Header />
            </form>

        </div>
    )
}