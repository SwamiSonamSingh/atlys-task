import { showIcon, primaryIcon } from "./icon";

export const loginInfo = {
    icon: primaryIcon,
    heading: {
        title: "WELCOME BACK",
        subTitle: "Log into your account"
    },
    fields: [
        {
            name: 'email',
            title: "Email or Username",
            placeholder: "Enter your email or username"
        },
        {

            name: 'password',
            title: "Password",
            subTitle: "Forgot password ?",
            placeholder: "Enter your password",
            fiedIcon: showIcon

        }
    ],
    primaryAction: [
        {
            name: 'login',
            title: 'Login now'
        }
    ],
    footerInfo: {
        name: 'register',
        title: 'Not registered yet?',
        subTitle: 'Register →'
    }
}