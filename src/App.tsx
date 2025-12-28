import { Button, Icon } from "@/components/ui";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button variant="outline" className="text-red-500">
        <Icon icon="uil:moneybag" className="mr-2" size={20} />
        Hello World
      </Button>
    </div>
  );
}

export default App;
