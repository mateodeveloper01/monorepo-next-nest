import ClientSide from "../ClientSide";
import { trpc } from "./trpc";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `Tom` });
  
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <p>Server side - { greeting }</p>
      <ClientSide/>
    </main>
  );
}
