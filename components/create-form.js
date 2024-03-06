'use client'
import React from 'react'
import { useFormState } from "react-dom";
import { SubmitButton } from './ui/Buttons/buttons';
import { Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import {FaSmile} from "react-icons/fa"
import { saveTopic } from '@/lib/action';

const CreateForm = () => {

  return (
    <Card className='p-8 w-full'>
        <CardHeader
        className='flex gap-2'
        >
        <h1 className='font-bold text-2xl'>Post A Topic Below</h1>
            <FaSmile
            className='text-3xl'
            />
        </CardHeader>
        <CardBody>
        <form
        action={saveTopic}
        className='flex gap-4 flex-col'
        >
        <Input
            name='name'
            type='text'
            id='name'
            placeholder='Name Your Topic.....'
            autoComplete='false'
        />
        <SubmitButton label='Save' />
        </form>
        </CardBody>
    </Card>
  )
}

export default CreateForm