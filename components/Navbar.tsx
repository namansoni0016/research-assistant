import { 
    SignInButton, 
    SignUpButton, 
    SignedIn, 
    SignedOut, 
    UserButton 
} from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-10 py-4">
            <Link href="/">
                <h1 className="logo text-xl font-bold">Research Assistant</h1>
            </Link>
            <div className="font-semibold flex gap-4">
                <SignedOut>
                    <SignInButton mode="modal">
                        <button>Login</button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                        <button>Register</button>
                    </SignUpButton>
                </SignedOut>
                <SignedIn>
                    <UserButton showName userProfileMode="modal" />
                </SignedIn>
            </div>
        </div>
    )
}

export default Navbar;