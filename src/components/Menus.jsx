
export const Menus =[
    {
        lable: "Home",
        to: "/",
    },
    {
        lable: "Profile",
        to: "/profile",
        children: [
            {
            lable: "Details",
            to: "details",
            children:[
                {
                    lable:"Location",
                    to:"loacation",
                }
            ]

            }
        ]
    }
    ,
    {
        lable: "Settings",
        to: "/settings",
        children:[
            {
                lable: "Account",
                to: "account",
            },
            {
                lable: "Security",
                to: "security",
                children:[
                    {
                        lable: "Login",
                        to: "login",

                    },
                    {
                        lable:"Register",
                        to: "register"
                    },
                ],
            }

        ]
    }
]
export default Menus;