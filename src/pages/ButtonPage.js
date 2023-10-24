import Button from "../components/Button";
import { GoBell, GoArchive, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          onClick={handleClick}
          className="mb-5"
        >
          <GoBell />
          Click here
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoArchive />
          Buy now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide ads
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
