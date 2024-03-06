'use client'
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { Button } from "@nextui-org/react";
import { deleteNote, deleteTopic } from "@/lib/action";
import { FiTrash } from "react-icons/fi";
import { useTransition } from "react";


export const SubmitButton = ({label}) => {
    const { pending } = useFormStatus();
    
  const className = clsx(
    "text-white bg-primary hover:bg-secondary-60 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
    {
      "opacity-50 cursor-progress": pending,
    }
  );

  return (
    <Button type="submit" className={className} disabled={pending}>
      {label === "save" ? (
        <span>{pending ? "Saving..." : "Save"}</span>
      ) : (
        <span>{pending ? "Updating..." : "Update"}</span>
      )}
    </Button>
  );

}

export const DeleteTopicButton = ({ id }) => {
  const [isPending, startTransition] = useTransition({
    timeoutMs: 500, 
  });

  const handleDelete = async (event) => {
    event.preventDefault();
    startTransition(() => {
      deleteTopic(id);
    });
  };

  return (
    <button onClick={handleDelete}>
      {isPending && "Deleting..."} 
      {!isPending && <FiTrash />} 
    </button>
  );
};


export const DeleteButton = ({ id }) => {
  const [isPending, startTransition] = useTransition({
    timeoutMs: 500, 
  });

  const handleDelete = async (event) => {
    event.preventDefault();
    startTransition(() => {
      deleteNote(id);
    });
  };

  return (
    <button onClick={handleDelete}>
      {isPending && "Deleting..."} 
      {!isPending && <FiTrash />} 
    </button>
  );
};
