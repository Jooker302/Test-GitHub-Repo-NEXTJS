const RepoPage = ({params: {name}} ) => {
    return(
        <div className="bg-black">
            <div className="flex justify-center items-center mt-0 bg-black m-5">
                <p className="text-white text-2xl font-bold m-5">{name}</p>
            </div>
        </div>
    )
}

export default RepoPage;