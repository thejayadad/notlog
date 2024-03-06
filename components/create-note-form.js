'use client'
import { saveNote } from '@/lib/action'
import { Input } from '@nextui-org/react'
import React from 'react'
import { SubmitButton } from './ui/Buttons/buttons'

const CreateNoteForm = ({topic}) => {
  return (
    <div>
    <form
    action={saveNote}
    className='flex flex-col gap-4 w-full'
    >
    <input
        name='topicId'
        hidden
        value={topic.id}
        />
        <Input
            name='content'
            id='content'
            placeholder='Notes...'
        />
        <SubmitButton 
        label='PostNote' />
    </form>
    </div>
  )
}

export default CreateNoteForm