'use client'
import { Accordion, AccordionItem, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import React from 'react'
import NoteCard from './NoteCard'
import CreateNoteForm from '@/components/create-note-form'
import { DeleteTopicButton } from '../Buttons/buttons'

const TopicCard = ({topic}) => {
   const notes = topic.notes;
   console.log("notes " + notes) 
  return (
    <div>
    <Accordion variant="splitted">
    
      <AccordionItem 
      key={topic.id} 
        title={topic.name}
      
      >
        <div className='flex items-center justify-center mb-8 gap-2'>
            <span>Delete This Topic</span> 
            <DeleteTopicButton id={topic.id} />
        </div>
          <div className='flex flex-col w-full p-4'>
            {topic.notes.length > 0 ? (
          <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
            {topic.notes.map((note) => (
              <div key={note.id
              }
              >
            <NoteCard note={note} />
              </div>
              
            ))}
          </div>
        ) : (
          <div className='flex flex-col gap-6 justify-between items-center'>
            <p>No notes found. Create a note.</p>
          </div>
        )}
            </div>
            <CreateNoteForm topic={topic} />
      </AccordionItem>
    </Accordion>
  </div>
  )
}

export default TopicCard