import { useEffect, useState } from 'react'
import Link from "next/link"
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi'

const latest = () => {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)

    const fetchData = async () => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=programming&page=${page}&apiKey=86aed45f34ff49938b46fe799ed9bd5a`)
        const data = await res.json()

        console.log(data)

        setPosts(data.articles)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <div className="text-center py-5">
            <h1 className="font-bold text-4xl pb-5">Latest news on programming</h1>
            <div className="flex flex-wrap justify-around">
                {!posts ? "No news were found! We're sorry..." : posts.map((post) => {
                    return (
                        <div className="bg-gray-200 text-center max-w-sm w-auto rounded-lg my-5 pb-10">
                            <div className="h-48 w-96 pb-5">
                                <img className="max-w-sm min-w-full rounded-t-lg max-h-48 min-h-full" src={post.urlToImage ? post.urlToImage : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"}></img>
                            </div>
                            <div className="font-bold text-lg p-5">{post.title}</div>
                            <div className="px-5 pb-5">{post.description}</div>
                            <Link href={post.url}>
                                <a className="transition bg-gray-800 cursor-pointer hover:bg-gray-900 text-white py-2 px-6 rounded mx-2">Learn More</a>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className="flex pb-10 justify-center">
                <div className="pt-1 cursor-pointer" onClick={() => {
                    setPage(page - 1)
                }}>{page === 1 ? "" : <HiArrowCircleLeft />} </div>
                <div className="px-5 mb-10 pt-px">{page}</div>
                <div className="pt-1 cursor-pointer" onClick={() => {
                    setPage(page + 1)
                }}><HiArrowCircleRight /></div>
            </div>

        </div>
    )
}

export default latest
