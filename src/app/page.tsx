import TableElement from "./TableElement";
import WriteButton from "./WriteButton";

export default function Home() {
  return (
    <div className="App">
      <h3 className="homeTitle">Notice</h3>
      <div className="container" style={{ width: "1200px", margin: "0 auto" }}>
        <div className="row">
          <TableElement/>
        </div>
        <div className="row">
          <WriteButton />
        </div>
      </div>
    </div>
  );
}
