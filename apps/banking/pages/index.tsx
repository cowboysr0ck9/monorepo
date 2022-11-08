import { useEffect, useState } from "react";
import { Button, http } from "ui";

export default function Web() {
  const [first, setfirst] = useState("");
  useEffect(() => {
    http("tyler")
      .then((res: any) => setfirst(res))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Web</h1>
      <p>{first}</p>
      <Button />
    </div>
  );
}
