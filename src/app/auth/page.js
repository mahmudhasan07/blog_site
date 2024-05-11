import Login from "./Login";
import Registration from "./Registration";

export default function Page() {
    return (
        <section className="relative">
            <Login></Login>
            <Registration></Registration>
        </section>
    );
}