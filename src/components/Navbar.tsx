import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <nav>
            <div>
                <Link href={'/'}>
                    MySaaS
                </Link>
            </div>
            <div>
                <Link href={'/dashboard'}>
                    Dashboard
                </Link>
                {session ? (
                    <>
                        <span>{session.user?.name}</span>
                        <button onClick={() => signOut()}>
                            Sign Out
                        </button>
                    </>
                ) : (
                    <button onClick={() => signIn()}>
                        Sign In
                    </button>
                ) }
            </div>
        </nav>
    )
};

export default Navbar;