import { useRouter } from "next/router"
import { useEffect } from "react"

export default function NotFoundPage(){

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000)
    }, [])

    return(
        <div>
            Maaf, halaman tidak ditemukan!
        </div>
    )
}