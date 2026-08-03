export default function Conditional_rendering() {
    const isLoggedIn = true;
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    }
    else {
        return <h1>Please sign up.</h1>;
    }
}