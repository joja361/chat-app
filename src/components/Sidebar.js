import { Button, Offcanvas } from "bootstrap";
import { useState } from "react";

export default function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <div>test</div>
    </>
  );
}
