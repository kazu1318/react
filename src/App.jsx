import { useState } from "react";

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

export default function App() {
    const [customName, setCustomName] = useState("");  
    const [ukus, setUkus] = useState("us");    
    const [xItem, setXItem] = useState("");     
    const [yItem, setYItem] = useState("");
    const [zItem, setZItem] = useState(""); 
    const [showStory, setShowStory] = useState(false);     

    const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const insertY = ["the soup kitchen", "Disneyland", "the White House"];
    const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

    const generateStory = () => {
        
        setXItem(randomValueFromArray(insertX));
        setYItem(randomValueFromArray(insertY));
        setZItem(randomValueFromArray(insertZ));

        setShowStory(true);
    };

    let displayName;
    
    if (customName !== "") {
        displayName = customName;
      } else {
        displayName = "Bob";
      }

    let weight;
    let temperature;

    if (ukus === "uk") {
        weight = Math.round(300 * 0.0714286) + " stone";  // ポンドをストーンに変換
        temperature = Math.round((94 - 32) * 5 / 9) + " centigrade"; // 華氏を摂氏に変換
    } else {
        weight = "300 pounds";
        temperature = "94 fahrenheit";
    }

    return (
        <>
          <div>
            <label htmlFor="customname">Enter custom name:</label>
            <input
              type="text"
              id="customname"
              placeholder="Bob"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="us">US</label>
            <input
              type="radio"
              id="us"
              name="unit"
              value="us"
              checked={ukus === "us"}
              onChange={() => setUkus("us")}
            />
            <label htmlFor="uk">UK</label>
            <input
              type="radio"
              id="uk"
              name="unit"
              value="uk"
              checked={ukus === "uk"}
              onChange={() => setUkus("uk")}
            />
          </div>
          <div>
            <button onClick={generateStory}>Generate random story</button>
          </div>
          
          {showStory && (
            <p>
              It was {temperature} outside, so {xItem} went for a walk. When they
              got to {yItem}, they stared in horror for a few moments, then {zItem}.
              {displayName} saw the whole thing, but was not surprised — {xItem} weighs {weight}, and it was a hot day.
            </p>
          )}
        </>
      );
}