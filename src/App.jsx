import { useState, useEffect } from "react"
import Squares from "./Components/Squares.jsx"
import Succes from "./Components/Succes.jsx"
import DarkTheme from "./Components/Darktheme.jsx";
import './App.css'


function App() {
  const nums = [
    {id: 1,  number: "🕯️	", status: false, isFound:false},
    {id: 2,  number: "🦦", status: false, isFound:false},
    {id: 3,  number: "🧷", status: false, isFound:false},
    {id: 4,  number: "⛄", status: false, isFound:false},
    {id: 5,  number: "🌊", status: false, isFound:false},
    {id: 6,  number: "🌞", status: false, isFound:false},
    {id: 7,  number: "🌈", status: false, isFound:false},
    {id: 8,  number: "🪐", status: false, isFound:false},
    {id: 9,  number: "🐶", status: false, isFound:false},
    {id: 10, number: "🐒", status: false, isFound:false},
    {id: 11, number: "🐌", status: false, isFound:false},
    {id: 12, number: "🐱", status: false, isFound:false},
    {id: 13, number: "🦊", status: false, isFound:false},
    {id: 14, number: "🦂", status: false, isFound:false},
    {id: 15, number: "🦁", status: false, isFound:false},
    {id: 16, number: "🐝", status: false, isFound:false},
    {id: 17, number: "🐨", status: false, isFound:false},
    {id: 18, number: "☠️", status: false, isFound:false},
    {id: 19, number: "😻", status: false, isFound:false},
    {id: 20, number: "💸", status: false, isFound:false},
    {id: 21, number: "⏰", status: false, isFound:false},
    {id: 22, number: "💎", status: false, isFound:false},
    {id: 23, number: "💰", status: false, isFound:false},
    {id: 24, number: "💷", status: false, isFound:false},
    {id: 25, number:"🧿", status:false, isFound:false},
    {id: 26, number:"❤️", status:false, isFound:false},
    {id: 27, number:"💛", status:false, isFound:false},
    {id: 28, number:"🤍", status:false, isFound:false},
    {id: 29, number:"💚", status:false, isFound:false},
    {id: 30, number:"💜", status:false, isFound:false},
    {id: 31, number:"🐘", status:false, isFound:false},
    {id: 32, number:"🐇", status:false, isFound:false},
    {id: 33, number:"💐", status:false, isFound:false},
    {id: 34, number:"🌟", status:false, isFound:false},
    {id: 35, number:"🌹", status:false, isFound:false},
    {id: 36, number:"🌪", status:false, isFound:false},
    {id: 38, number:"🐲", status:false, isFound:false},
    {id: 39, number:"🌌", status:false, isFound:false},
    {id: 40, number:"❄️", status:false, isFound:false},
    {id: 41, number:"🔥", status:false, isFound:false},
    {id: 42, number:"🧙‍♀️", status:false, isFound:false},
    {id: 43, number:"🦋", status:false, isFound:false},
    {id: 44, number:"✨", status:false, isFound:false},
    {id: 45, number:"🦘", status:false, isFound:false},
    {id: 46, number:"🦍", status:false, isFound:false},
    {id: 47, number:"🍂", status:false, isFound:false},
    {id: 49, number:"🍉", status:false, isFound:false},
    {id: 50, number:"🍓", status:false, isFound:false},
    {id: 51, number:"🍑", status:false, isFound:false},
    {id: 52, number:"🍍", status:false, isFound:false}
  ];
  
  const [trueCount, setTrueCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);
  const [clickedSquares, setClickedSquares] = useState([]);
  const [founded, setFounded] = useState(0);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  useEffect(() => {
    restartGame();
  }, []); 

  function restartGame() {
    const shuffledNumbers = shuffle([...nums]).slice(0, 8);
    const duplicatedNumbers = [...shuffledNumbers, ...shuffledNumbers];
    const finalNumbers = shuffle(duplicatedNumbers);

    setNumbers(finalNumbers.map((item, index) => ({ ...item, id: index + 1 })));
    setTrueCount(0);
    setClickedSquares([]);
    setFounded(0);
  }

  function handleClickedSquares(item) {
    let arr = clickedSquares;
    arr.push(item);
    if (arr.length === 2) {
      for (let i = 0; i < 2; i++) {
        if (arr[0].number === arr[1].number) {
          isFoundToTrue(arr[i].id);
        }
      }
      arr = [];
    }

    setClickedSquares(arr);
  }

  function isFoundToTrue(id) {
    let newNums = numbers.map((item) => {
      if (item.id === id) {
        item.isFound = true;
      }
      return item;
    });
    setFounded(founded + 1);
    setNumbers(newNums);
  }

  function changeStatus(id) {
    let newNums = numbers.map((item) => {
      if (item.id === id) {
        handleClickedSquares(item);
        item.status = !item.status;
        if (item.status) {
          setTrueCount(() => {
            if (trueCount + 1 > 2) {
              setStatusToFalse(id);
              return 1;
            } else {
              return trueCount + 1;
            }
          });
        } else {
          setTrueCount(trueCount - 1);
        }
      }
      return item;
    });
    setNumbers(newNums);
  }

  function setStatusToFalse(id) {
    let newNums = numbers.map((item) => {
      if (item.isFound) {
        return item;
      }
      if (item.id !== id) {
        item.status = false;
      }

      return item;
    });
    setNumbers(newNums);
  }

  return (
    <div className="game-container">
      <div className="header">
        <h5>Memory Game with Emojis</h5>
      <DarkTheme />
      </div>
      <div className="board">
        {numbers.map((item, index) => (
          <Squares
            key={index}
            status={item.status}
            num={item.number}
            id={item.id}
            changeStatus={changeStatus}
            isFound={item.isFound}
          />
        ))}
      </div>
      <Succes founded={founded} />
      <div className="click4restart">
        <button onClick={restartGame}>Yeniden Başla</button>
      </div>
    </div>
  );
}

export default App;