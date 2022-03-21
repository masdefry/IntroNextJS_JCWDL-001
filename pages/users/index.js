import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar";

export default function Users(){
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
        </div>
    )
}