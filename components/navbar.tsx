import Link from "next/link"
import Container from "./UI/container"

const Navbar = () => {
    return (
        <div className="border-b">
            <Container>
                <Link href={"/"} className="ml-4 flex lg:ml-8 gap-x-2">
                    <p className="font-bold text-xl">Toko</p>
                </Link>
            </Container>
        </div>
    )
}

export default Navbar
