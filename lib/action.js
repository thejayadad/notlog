'use server'

import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const saveTopic = async(formData) => {
    const user = await currentUser();
    const userEmail = user.firstName; 
    console.log("userEmail " + userEmail)
    const { name } = Object.fromEntries(formData);
    try {
            
        const newTopic = await prisma.topic.create({
            data: {
                name,
                userId: userEmail,
            },
        });
    } catch (error) {
        throw new Error('Failed to create topic ' + error);

    }
    revalidatePath("/") 
    redirect("/")
}


export const saveNote = async (formData) => {
    try {
        const user = await currentUser();
        const userEmail = user.firstName; 
        const { content, topicId } = Object.fromEntries(formData);
        const parsedTopicId = parseInt(topicId); // Convert topicId to an integer
        console.log("topicId " + parsedTopicId);

        const newNote = await prisma.note.create({
            data: {
                content,
                userId: userEmail,
                Topic: {
                    connect: {
                        id: parsedTopicId // Use the parsedTopicId
                    }
                }
            }
        });

    } catch (error) {
        throw new Error('Failed to create note ' + error);
    }
    revalidatePath("/") 
    redirect("/")  
};
export const deleteTopic = async(id) => {
    try {
        await prisma.topic.delete({
            where: { id },
        })
    } catch (error) {
        return { message: "Failed to delete Topic" };

    }
    revalidatePath("/");

}



export const deleteNote = async(id) => {
    try {
        await prisma.note.delete({
            where: { id },
        })
    } catch (error) {
        return { message: "Failed to delete contact" };

    }
    revalidatePath("/");

}

export const updateTopic = async(id) => {

}
