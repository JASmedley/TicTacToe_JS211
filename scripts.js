
let currentMarker = 'X'

let board = [
  ["","",""],
  ["","",""],
  ["","",""]
]

const handleClick = (element) => {

  console.log(`The element you clicked on has an id:  ${element.id}`)
  addMarker(element.id)
}



const addMarker = (ID) => {
  const row = parseInt(ID.charAt(0))
  const column = parseInt(ID.charAt(2))
  board[row][column] = currentMarker
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  const element = document.getElementById(ID)
  element.innerHTML = currentMarker
  checkForWin()
}



const changeMarker = () => {
  if(currentMarker === "X"){
    console.log("It's player O's turn now")
    currentMarker = "O"} 
    
    else {
    console.log("It's player X's turn now")
    currentMarker = "X"}

 }

const resetBoard = () => {
  const squares = document.getElementsByTagName('td')

  for (i=0; i < squares.length; i++) {
    console.log(squares[i].id)
    squares[i].innerHTML = null
  }  
  board = [
    ["","",""],
    ["","",""],
    ["","",""]
  ]
  return console.clear() 
}


const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()
  }
}

const horizontalWin = () => {
  if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
  || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
  || (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X")
  || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
  || (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X")
  || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
    ) 
    {return true}
}

const verticalWin = () => {
  if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
  || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
  || (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X")
  || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
  || (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X")
  || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
)
{return true}
}

const diagonalWin = () => {
  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
  || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
  || (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")
  || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")
)
{return true}
}

