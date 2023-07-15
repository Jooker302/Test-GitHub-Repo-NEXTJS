import Link from "next/link";

async function fetchrepodir(name) {
    const response = await fetch(`https://api.github.com/repos/jooker302/${name}/contents`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return await response.json();
}


const RepoDir = async ({ name }) => {
    const repodir = await fetchrepodir(name);
    const dir = repodir.filter((repodirr) => repodirr.type === 'dir');
    return (
        <div>
            <ul className="text-white m-2 list-disc marker:text-white">
                {dir.map((dirr) => (
                    <Link href={`code/repos/${name}/${dirr.path}`}>
                        <li key={dirr.path}>{dirr.name} </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default RepoDir;


// export default RepoDir