import {FaStar} from 'react-icons/fa'
import Link from "next/link";
// import { resolve } from 'path';

async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/jooker302/repos')

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return await response.json();
}

const ReposPage = async () => {

    const repo = await fetchRepos();
    // console.log(repo)
    return (

        <div className="bg-black">
            <p className='text-white text-3xl font-bold text-center m-2 mb-4'> My Repos</p>
            {repo.map((repoo) => (
              
                

                    <div  key={repoo.id} className="bg-white mx-16 m-5 mt-0 flex flex-col justify-center transition-transform duration-300 hover:bg-green-400 transform hover:scale-110">
                        <div className="flex justify-center">
                        <li className='m-2 mx-0'>
                            
                        </li>
                        <Link className="flex flex-col justify-center items-center" href={`/code/repos/${repoo.name}`}>
                                <h3 className="m-2 font-bold text-3xl">{repoo.name}</h3>
                                <p>{repoo.description}</p>
                                <div >
                                    <span className="flex justify-center">
                                        <FaStar className='m-2'></FaStar> <p className='m-2'>{repoo.stargazers_count}</p> 
                                    </span>

                                </div>

                            </Link>
                        </div>

                    </div>
              
            ))}
            {/* <p> {repo[0].name} </p> */}
        </div>
    )
}

export default ReposPage