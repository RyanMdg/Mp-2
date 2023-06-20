"use client";

import { useState } from "react";

import { Button, Modal, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

export default function DefaultModal() {
  const [openModal, setOpenModal] = useState(false);
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button onClick={() => props.setOpenModal("default")}>
        Toggle modal
      </Button>
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Your email" />
              </div>
              <TextInput
                id="email2"
                placeholder="name@flowbite.com"
                required
                shadow
                type="email"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Your password" />
              </div>
              <TextInput id="password2" required shadow type="password" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="repeat-password" value="Repeat password" />
              </div>
              <TextInput id="repeat-password" required shadow type="password" />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="agree" />
              <Label className="flex" htmlFor="agree">
                <p>I agree with the</p>
                <Link
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/forms"
                >
                  <p>terms and conditions</p>
                </Link>
              </Label>
            </div>
            <Button type="submit">Register new account</Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>
            I accept
          </Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
