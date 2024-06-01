import Login from "./Login";
import Registration from "./Registration";

const metadata = {
    title : "LogIn"
}

export default function Page() {
    return (
        <section className="relative">
            <div className="bg-black text-black">
                <img src="https://i.ibb.co/82n2tLY/LogIn.jpg" className="h-screen w-full opacity-85"></img>
                <Login></Login>
                <Registration></Registration>
            </div>
        </section>
    );
}