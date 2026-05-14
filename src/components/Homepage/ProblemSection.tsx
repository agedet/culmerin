import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const problems = [
    {
        id: 1,
        problem: 'Leads',
        text: 'Leads come in, but they are not captured properly. They get lost in inboxes, spreadsheets, or sticky notes, and they never get followed up on.',
    },
    {
        id: 2,
        problem: 'Team',
        text: 'Even when leads are captured, the follow-up process is often manual and inconsistent, leading to missed opportunities and lost sales.',
    },
    {
        id: 3,
        problem: 'Data',
        text: 'Customer data lives in different places. Growth slows down because the business lacks a system.',
    }
]

function ProblemSection() {
  return (
    <section className='bg-secondary/50 flex justify-center items-center h-full'>
        <div className='container grid gap-[48px] py-[80px] max-w-[95%] lg:max-w-[90%] mx-auto'>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-40'>
                <div className='flex flex-col gap-[10px] items-start justify-center'>
                    <h2 className='font-outfit rounded-[50px] border border-primary px-[22px] py-[13px] font-medium text-[17px] leading-[29px] text-text text-center'>
                        Problems
                    </h2>

                    <h2 className='font-bold text-[32px] md:text-[48px]'>
                        Businesses lose opportunities...
                    </h2>

                    <p className='text-[#872608]/80 font-normal text-[15px] leading-[21px] md:text-[17px] md:leading-[29px] lg:text-[18px] lg:leading-[31px]'>
                        their brand is unclear, their tools are disconnected, and their sales process depends too much on manual follow-up. 
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8'>
                    {problems.map((problem) => (
                        <Card key={problem.id}>
                            <CardHeader>
                                <CardTitle className='font-bold text-[20px] leading-[28px] mb-[10px]'>
                                    {problem.problem}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className='text-[16px] leading-[24px]'>
                                    {problem.text}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProblemSection