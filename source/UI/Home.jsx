import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="px-4 my-10 text-center sm:my-16">
      <h1 className="mb-8 text-2xl font-bold text-center md:text-4xl">
        The best Burger.
        <br />
        <span className="text-yellow-500">
        Fresh off the grill, straight to your plate!.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering , {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
