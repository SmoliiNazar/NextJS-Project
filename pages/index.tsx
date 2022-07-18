import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";

export default function Home(): JSX.Element {
  return (
      <div>
        <Htag tag='h1'>Photoshop courses h1</Htag>
        <Htag tag='h2'>Photoshop courses h2</Htag>
        <Htag tag='h3'>Photoshop courses h3</Htag>

        <Button appearance={'primary'}>Primary</Button>
        <Button appearance={'ghost'}>Ghost</Button>
      </div>
  );
}