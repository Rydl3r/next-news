import { useEffect, useState } from 'react'
import Link from "next/link"
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi'
import axios from 'axios';

const popular = () => {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)

    const fetchData = () => {
        axios.get(`https://api.newscatcherapi.com/v2/latest_headlines?lang=en&page=${page}&page_size=20`, {
            headers: {
                "x-api-key": process.env.APIKEY//the token is a variable which holds the token
            }
        }).then((data) => {
            console.log(data.data.articles)
            setPosts(data.data.articles)
        })
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <div className="text-center py-5">
            <h1 className="font-bold text-4xl pb-5">Trending posts right now</h1>
            <div className="flex flex-wrap justify-around">
                {!posts ? "No news were found! We're sorry..." : posts.map((post, idx) => {
                    return (
                        <div className="bg-gray-200 text-center max-w-sm w-auto rounded-lg my-5 pb-10">
                            <div className="h-48 w-96 pb-5">
                                <img className="max-w-sm min-w-full rounded-t-lg max-h-48 min-h-full" src={post.media ? post.media : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"}></img>
                            </div>
                            <div className="font-bold text-lg p-5">{post.title}</div>
                            <div className="px-5 pb-5">{post && post.summary && post.summary.length > 200 ? `${post.summary.substring(0, 200)}...` : ""}</div>
                            <Link href={post.link}>
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

export default popular
