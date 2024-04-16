import World from "./world";
import Counter from "../counter/page";

// http://localhost:3001/hello
export default function Hello() {
  return (
    <>
      <h1>
        Hello,
        <World name="World" />!
      </h1>

      <p>
        <Counter/>
      </p>
      <img src="./cat.jpeg" alt="cat" />
    </>
  );
}