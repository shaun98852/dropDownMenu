import './App.css'

const App = () => (
  <>
    <h1 className="heading">Shubham Hembram</h1>
    <div className="background">
      <div className="navbar">
        <button type="button" className="button">
          File
        </button>

        <div className="dropDowns">
          <button type="button" className="buttons">
            Edit
          </button>

          <ul className="showDropdown">
            <li className="listItem">
              <p className="para">Undo</p>
              <p className="para">Cmd Z</p>
            </li>
            <li className="listItem">
              <p className="para">Redo</p>
              <p className="para">Cmd Y</p>
            </li>
            <hr className="horizontalLine" />
            <li className="listItem">
              <p className="para">Cut</p>
              <p className="para">Cmd X</p>
            </li>
            <li className="listItem">
              <p className="para">Copy</p>
              <p className="para">Cmd C</p>
            </li>
            <li className="listItem">
              <p className="para">Paste</p>
              <p className="para">Cmd V</p>
            </li>
            <hr className="horizontalLine" />
            <li className="listItem">
              <p className="para">Find And Replace</p>
              <p className="para">Cmd H</p>
            </li>
          </ul>
        </div>

        <button type="button" className="button">
          Format
        </button>
        <button type="button" className="button">
          view
        </button>
        <button type="button" className="button">
          History
        </button>
        <button type="button" className="button">
          Bookmarks
        </button>
        <button type="button" className="button">
          Tools
        </button>
        <button type="button" className="button">
          Help
        </button>
      </div>
    </div>
  </>
)

export default App
