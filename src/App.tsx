import { Button, Icon } from "@/components/ui";
import Translate from "./Translate";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button variant="outline" className="text-red-500">
        <Icon icon="uil:moneybag" className="mr-2" size={20} />
        Hello World
      </Button>
      <Translate />
      <div></div>
    </div>
  );
}

export default App;
