import Field from "./Form";
import { FormEvent } from "react";

export default function LoginPage({logUserIn}: {logUserIn: VoidFunction}){

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        if (formData.get("username") === "test" && formData.get("password") === "holamundo" ){
            logUserIn()
        }
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <Field name="username" label="Username"/>
                <Field name="password" label="Password" inputType="password"/>
                <div>
                    <button>Log In</button>
                </div>
            </form>
        </main>
    )
}