import Repo from '@/app/components/Repo'
import Link from 'next/link';
import RepoDir from '@/app/components/RepoDir'
import { Suspense } from 'react';

const RepoPage = ({ params: { name } }) => {
    return (
        <div>
            <div className='m-6'>
                <Link className='border-2 border-cyan-500 mx-12 p-2 rounded-full hover:bg-cyan-500 hover:text-white' href='/code/repos'>Go Back</Link>
            </div>
            <div className="bg-black mx-16">
                <div className="flex justify-center flex-col items-center mt-0 bg-black m-5">
                    <p className="text-white text-2xl font-bold m-5">{name}</p>
                    <Suspense fallback={<div className='text-white m-2'>Loading Repos ...</div>}>
                        <Repo name={name} />
                    </Suspense>
                    <Suspense fallback={<div  className='text-white m-2'>Loading Directories ...</div>}>
                        <RepoDir name={name} />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default RepoPage;