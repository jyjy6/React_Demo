
function App() {
  return (
    <>
      <div>
        <p>싹다지움 ㅅㄱ</p>
        <NewComponent></NewComponent>
      </div>

      <Modal></Modal>


    </>


  )
}

function NewComponent(){
  return(
    <>
    from the virtual dom, it leads the race,
    renders like rubes, leaving rivals in shame,
    State and Props. It handles with ease
    My grandma can code in a moment of breeeeze;
    </>
  )
}

function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App