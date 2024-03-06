import TopicCard from '@/components/ui/Card/TopicCard'
import {prisma} from '@/lib/prisma'
import { wait } from '@/lib/wait'
import { currentUser } from '@clerk/nextjs'
import { Card, Skeleton } from '@nextui-org/react'
import React, { Suspense } from 'react'
import {FaSadCry} from "react-icons/fa"


const HomePage = async () => {

  return (
    < div className='mx-auto max-w-screen-lg px-4'>
      <Suspense fallback={<UserMsgFallback />}>
      <UserMsg />
      </Suspense>
      <Suspense fallback={<div>Loading Topics...</div>}>
        <TopicList />
      </Suspense>
    </div>
  )
}

async function UserMsg(){
  const user = await currentUser()
  await wait(3000)
  if(!user){
    return (
      <div>
        <h1>Error</h1>
      </div>
    )
  }
  return (
    <div className="flex w-full mt-8 mb-12">
    <h1 className="text-3xl font-bold">
      Welcome, {user.firstName}
    </h1>
  </div>

  )
}

function UserMsgFallback(){
  return (
    <div className="flex w-full mb-12">
    <h1 className="text-3xl font-bold">
    <Skeleton className="rounded-lg w-[250px] h-16 mt-8">
    <div className="h-16 rounded-lg bg-default-300"></div>
      </Skeleton> 
    </h1>      
    </div>
  )
}

async function TopicList(){
  const user = await currentUser();
  
  if (!user) {
    return <div>Loading...</div>;
  }

  const topics = await prisma.topic.findMany({
    include: {
      notes: true,
    },
    where: {
      userId: user.email,
    },
  });

  if (topics.length === 0) {
    return (
      <div className='flex items-center gap-4'>
        <FaSadCry className='h-12 w-12' /><h1>No Topics Posted....</h1>       
      </div>
    );
  }
  return(
    <>
    <div className='flex flex-col gap-4 mt-8 p-8'>
      {
        topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
       ))
      }
    </div>
    </>
  )
}

export default HomePage