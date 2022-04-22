import { authContext } from "../../context/use_auth";
const library = (props) => {
  return (
    <authContext.Consumer>
      {(value) => {
        {
          console.log(value);
        }
        return <p>library</p>;
      }}
    </authContext.Consumer>
  );
};

export default library;
