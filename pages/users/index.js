import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Axios from 'axios'

export default function Users(props){
    console.log(props)
    return(
        <div>
            {/* SEO -> Search Enginee Optimazion */}
            <Head> 
                <title> Data Users </title>
                <meta property="og:title" content="Our Data Users" />
                <meta property="og:description" content="Ini Ada 1000 Data Users" />
                <meta property="og:image" itemProp="image" content="https://akcdn.detik.net.id/visual/2022/01/04/ilustrasi-kucing-oranye_169.jpeg?w=650" />
            </Head>
            <Navbar />
            <h1>
                Page Users
            </h1>
            <Image src={require('./../../public/Note Icon (1).png')} 
                alt="Gambar Note"
                width="300px"
                height="300px"
            />

            {/* Loader */}
            <Image loader={() => "https://akcdn.detik.net.id/visual/2022/01/04/ilustrasi-kucing-oranye_169.jpeg?w=650"} 
                src="Gambar Note" // Hanya sebagai keterangan saja & wajib ada
                alt="Gambar Note"
                width="300px"
                height="300px"
            />

            {/* Withoud Loader */}
            <Image
                src="https://akcdn.detik.net.id/visual/2022/01/04/ilustrasi-kucing-oranye_169.jpeg?w=650"
                alt="Gambar Note"
                width="300px"
                height="300px"
            />

            {/* Mapping */}
            <div>
                {
                    props.dataUsers.map(value => {
                        return(
                            <p key={value.id}> {value.username} </p>
                        )
                    })
                }
            </div>
        </div>
    )
}
// SSG
export const getStaticProps = async() => {
    try {
        let res = await Axios.get('http://localhost:5001/users')
        console.log(res.data)

        return{
            props: {
                dataUsers: res.data
            },
            revalidate: 10
        }
    } catch (error) {
        console.log(error)
    }
}