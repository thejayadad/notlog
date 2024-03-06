'use client'
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React, { useTransition } from "react";
import {FiTrash} from "react-icons/fi"
import { DeleteButton } from "../Buttons/buttons";

const NoteCard = ({note}) => {
    const [isLoading, startTransition] = useTransition();

  return (
    <div
    className="w-48"
    >
        <Card
        >
        <CardHeader
          
          >
            <div className="flex justify-end w-full">
            <DeleteButton id={note.id} />
            </div>
          </CardHeader>
          <CardBody>
            {note.content}
          </CardBody>
        </Card>
    </div>
  )
}

export default NoteCard