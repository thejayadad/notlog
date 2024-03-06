'use client'
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { Button } from "@nextui-org/react";
import { deleteNote, deleteTopic } from "@/lib/action";
import { FiPlus, FiTrash } from "react-icons/fi";
import { useTransition } from "react";
import { redirect } from "next/navigation";


export const SubmitButton = ({ label, formData }) => {
  const { pending } = useFormStatus();

  const [startTransition, isPending] = useTransition({
    timeoutMs: 500, // Adjust the timeout as needed
  });

  const handleCreate = async (event) => {
    event.preventDefault();
    startTransition(() => {
      createTopic(); // Perform the topic creation action
    });
  };

  const createTopic = async () => {
    try {
      await saveTopic(formData); 
      redirect("/")
    } catch (error) {
      console.error("Failed to create topic:", error);
    }
  };

  const className = clsx("text-white bg-primary hover:bg-secondary-60 font-medium rounded-sm text-sm w-full px-5 py-3 text-center", {
    "opacity-50 cursor-progress": pending || isPending,
  });

  return (
    <Button type="submit" className={className} disabled={pending || isPending} onClick={handleCreate}>
      {!isPending ? "Saving..." : label}
      {isPending && <FiPlus />} {/* Show the plus icon when not pending */}
    </Button>
  );
};
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
