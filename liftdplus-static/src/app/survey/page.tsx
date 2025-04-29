"use client";
import MultiStepForm from '@/components/form/steps';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

//put this in own component so it can be wrapped in suspense
function Form() {
    const sc_res = useSearchParams().get('sc');
    const sc:string = sc_res? sc_res: '';
    return (
        <div className="
        bg-primaryBlue
        text-secondaryText
        pt-28
        px-5
        pb-5
        md:h-screen
        ">
            <MultiStepForm sc={sc}></MultiStepForm>
        </div>
    )
}

export default function Home() {
    return (
        <Suspense>
            <Form/>
        </Suspense>
    )
  }