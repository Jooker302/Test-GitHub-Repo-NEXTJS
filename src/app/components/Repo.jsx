import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa'

async function fetchRepo({name}){
    // console.log(name)
    const response = await fetch(`https://api.github.com/repos/jooker302/${name}`)
    // console.log(response)
    return await response.json()
}

const Repo = async ({name}) => {
    // console.log(name);
    const repo = await fetchRepo({name});

    // console.log(repo)

    return(
        <div>
            <p className="text-white">{repo.description} </p>
            <div className="flex justify-center items-center">
                <span className='text-white flex justify-center items-center m-2'>
                    <FaStar className='fill-white'></FaStar> <p className='mx-2'>{repo.stargazers_count}</p> 
                </span>
                <span className='text-white flex justify-center items-center m-2'>
                    <FaCodeBranch className='fill-white'></FaCodeBranch> <p className='mx-2'>{repo.forks_count}</p> 
                </span>
                <span className='text-white flex justify-center items-center m-2'>
                    <FaEye className='fill-white'></FaEye> <p className='mx-2'>{repo.watchers_count}</p> 
                </span>
            </div>
        </div>
    )
}

export default Repo