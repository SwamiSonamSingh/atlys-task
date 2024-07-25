import { showIcon, primaryIcon } from "./icon";

export const signUp = {
    icon: primaryIcon,
    heading: {
        title: "SIGN UP",
        subTitle: "Create an account to continue"
    },
    fields: [
        {
            name: 'email',
            title: "Email",
            placeholder: "Enter your email"
        },
        {
            name: 'userName',
            title: "Username",
            placeholder: "Choose a preferred username",
        },
        {
            name: 'password',
            title: "Password",
            placeholder: "Choose a strong password",
            fiedIcon: showIcon
        }
    ],
    primaryAction: [
        {
            name: 'continue',
            title: 'Continue'
        }
    ],
    footerInfo: {
        name: 'login',
        title: 'Already have an account?',
        subTitle: 'Login →'
    }
}