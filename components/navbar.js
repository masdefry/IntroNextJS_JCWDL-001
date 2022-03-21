import Link from "next/link";

export default function Navbar(){
    return(
        <div style={{ backgroundColor: 'yellow' }}>
            <ul>
                <li>
                    <Link href="/users">
                        Menu Users
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        Menu Products
                    </Link>
                </li>
            </ul>
        </div>
    )
}