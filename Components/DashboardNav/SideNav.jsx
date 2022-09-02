import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCookies } from "react-cookie";

export const MyProfileIcon = ({stroke}) => {
    return (
        <svg className="transition-[150ms]" width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="transition-[150ms]" d="M12 5.5C12 6.56087 11.5786 7.57828 10.8284 8.32843C10.0783 9.07857 9.06087 9.5 8 9.5C6.93913 9.5 5.92172 9.07857 5.17157 8.32843C4.42143 7.57828 4 6.56087 4 5.5C4 4.43913 4.42143 3.42172 5.17157 2.67157C5.92172 1.92143 6.93913 1.5 8 1.5C9.06087 1.5 10.0783 1.92143 10.8284 2.67157C11.5786 3.42172 12 4.43913 12 5.5V5.5ZM8 12.5C6.14348 12.5 4.36301 13.2375 3.05025 14.5503C1.7375 15.863 1 17.6435 1 19.5H15C15 17.6435 14.2625 15.863 12.9497 14.5503C11.637 13.2375 9.85652 12.5 8 12.5V12.5Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );

}
export const DashboardIcon = ({stroke}) => {
    return (
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 2.25C0.5 1.65326 0.737053 1.08097 1.15901 0.65901C1.58097 0.237053 2.15326 0 2.75 0H7.25C7.84674 0 8.41903 0.237053 8.84099 0.65901C9.26295 1.08097 9.5 1.65326 9.5 2.25V6.75C9.5 7.34674 9.26295 7.91903 8.84099 8.34099C8.41903 8.76295 7.84674 9 7.25 9H2.75C2.15326 9 1.58097 8.76295 1.15901 8.34099C0.737053 7.91903 0.5 7.34674 0.5 6.75V2.25ZM2.75 1.5C2.55109 1.5 2.36032 1.57902 2.21967 1.71967C2.07902 1.86032 2 2.05109 2 2.25V6.75C2 6.94891 2.07902 7.13968 2.21967 7.28033C2.36032 7.42098 2.55109 7.5 2.75 7.5H7.25C7.44891 7.5 7.63968 7.42098 7.78033 7.28033C7.92098 7.13968 8 6.94891 8 6.75V2.25C8 2.05109 7.92098 1.86032 7.78033 1.71967C7.63968 1.57902 7.44891 1.5 7.25 1.5H2.75ZM12.5 2.25C12.5 1.65326 12.7371 1.08097 13.159 0.65901C13.581 0.237053 14.1533 0 14.75 0H19.25C19.8467 0 20.419 0.237053 20.841 0.65901C21.2629 1.08097 21.5 1.65326 21.5 2.25V6.75C21.5 7.34674 21.2629 7.91903 20.841 8.34099C20.419 8.76295 19.8467 9 19.25 9H14.75C14.1533 9 13.581 8.76295 13.159 8.34099C12.7371 7.91903 12.5 7.34674 12.5 6.75V2.25ZM14.75 1.5C14.5511 1.5 14.3603 1.57902 14.2197 1.71967C14.079 1.86032 14 2.05109 14 2.25V6.75C14 6.94891 14.079 7.13968 14.2197 7.28033C14.3603 7.42098 14.5511 7.5 14.75 7.5H19.25C19.4489 7.5 19.6397 7.42098 19.7803 7.28033C19.921 7.13968 20 6.94891 20 6.75V2.25C20 2.05109 19.921 1.86032 19.7803 1.71967C19.6397 1.57902 19.4489 1.5 19.25 1.5H14.75ZM0.5 14.25C0.5 13.6533 0.737053 13.081 1.15901 12.659C1.58097 12.2371 2.15326 12 2.75 12H7.25C7.84674 12 8.41903 12.2371 8.84099 12.659C9.26295 13.081 9.5 13.6533 9.5 14.25V18.75C9.5 19.3467 9.26295 19.919 8.84099 20.341C8.41903 20.7629 7.84674 21 7.25 21H2.75C2.15326 21 1.58097 20.7629 1.15901 20.341C0.737053 19.919 0.5 19.3467 0.5 18.75V14.25ZM2.75 13.5C2.55109 13.5 2.36032 13.579 2.21967 13.7197C2.07902 13.8603 2 14.0511 2 14.25V18.75C2 18.9489 2.07902 19.1397 2.21967 19.2803C2.36032 19.421 2.55109 19.5 2.75 19.5H7.25C7.44891 19.5 7.63968 19.421 7.78033 19.2803C7.92098 19.1397 8 18.9489 8 18.75V14.25C8 14.0511 7.92098 13.8603 7.78033 13.7197C7.63968 13.579 7.44891 13.5 7.25 13.5H2.75ZM12.5 14.25C12.5 13.6533 12.7371 13.081 13.159 12.659C13.581 12.2371 14.1533 12 14.75 12H19.25C19.8467 12 20.419 12.2371 20.841 12.659C21.2629 13.081 21.5 13.6533 21.5 14.25V18.75C21.5 19.3467 21.2629 19.919 20.841 20.341C20.419 20.7629 19.8467 21 19.25 21H14.75C14.1533 21 13.581 20.7629 13.159 20.341C12.7371 19.919 12.5 19.3467 12.5 18.75V14.25ZM14.75 13.5C14.5511 13.5 14.3603 13.579 14.2197 13.7197C14.079 13.8603 14 14.0511 14 14.25V18.75C14 18.9489 14.079 19.1397 14.2197 19.2803C14.3603 19.421 14.5511 19.5 14.75 19.5H19.25C19.4489 19.5 19.6397 19.421 19.7803 19.2803C19.921 19.1397 20 18.9489 20 18.75V14.25C20 14.0511 19.921 13.8603 19.7803 13.7197C19.6397 13.579 19.4489 13.5 19.25 13.5H14.75Z" fill={stroke}/>
        </svg>

    );
}
export const HelpIcon = ({stroke}) => {
    return (
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.08997 8.49999C8.32507 7.83166 8.78912 7.2681 9.39992 6.90912C10.0107 6.55015 10.7289 6.41893 11.4271 6.5387C12.1254 6.65848 12.7588 7.02151 13.215 7.56352C13.6713 8.10552 13.921 8.79151 13.92 9.49999C13.92 11.5 10.92 12.5 10.92 12.5M11 16.5H11.01M1 8.02274V14.9773C1 15.2218 1 15.3441 1.02763 15.4592C1.05213 15.5613 1.09253 15.6588 1.14736 15.7483C1.2092 15.8492 1.29568 15.9357 1.46863 16.1086L6.39137 21.0314C6.56432 21.2043 6.6508 21.2908 6.75172 21.3526C6.84119 21.4075 6.93873 21.4479 7.04077 21.4724C7.15586 21.5 7.27815 21.5 7.52274 21.5H14.4773C14.7218 21.5 14.8441 21.5 14.9592 21.4724C15.0613 21.4479 15.1588 21.4075 15.2483 21.3526C15.3492 21.2908 15.4357 21.2043 15.6086 21.0314L20.5314 16.1086C20.7043 15.9357 20.7908 15.8492 20.8526 15.7483C20.9075 15.6588 20.9479 15.5613 20.9724 15.4592C21 15.3441 21 15.2218 21 14.9773V8.02274C21 7.77815 21 7.65586 20.9724 7.54077C20.9479 7.43873 20.9075 7.34119 20.8526 7.25172C20.7908 7.1508 20.7043 7.06432 20.5314 6.89137L15.6086 1.96863C15.4357 1.79568 15.3492 1.7092 15.2483 1.64736C15.1588 1.59253 15.0613 1.55213 14.9592 1.52763C14.8441 1.5 14.7218 1.5 14.4773 1.5H7.52274C7.27815 1.5 7.15586 1.5 7.04077 1.52763C6.93873 1.55213 6.84119 1.59253 6.75172 1.64736C6.6508 1.7092 6.56432 1.79568 6.39137 1.96863L1.46863 6.89137C1.29568 7.06432 1.2092 7.1508 1.14736 7.25172C1.09253 7.34119 1.05213 7.43873 1.02763 7.54077C1 7.65586 1 7.77815 1 8.02274Z" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    )
}
export const ComplaintsIcon = ({ stroke }) => {
    return (
        <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1.76953V5.90007C11 6.46012 11 6.74015 11.109 6.95406C11.2049 7.14222 11.3578 7.2952 11.546 7.39108C11.7599 7.50007 12.0399 7.50007 12.6 7.50007H16.7305M13 12.5H5M13 16.5H5M7 8.5H5M11 1.5H5.8C4.11984 1.5 3.27976 1.5 2.63803 1.82698C2.07354 2.1146 1.6146 2.57354 1.32698 3.13803C1 3.77976 1 4.61984 1 6.3V16.7C1 18.3802 1 19.2202 1.32698 19.862C1.6146 20.4265 2.07354 20.8854 2.63803 21.173C3.27976 21.5 4.11984 21.5 5.8 21.5H12.2C13.8802 21.5 14.7202 21.5 15.362 21.173C15.9265 20.8854 16.3854 20.4265 16.673 19.862C17 19.2202 17 18.3802 17 16.7V7.5L11 1.5Z" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    )
}
export const TalkToLawyerIcon = ({ stroke }) => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9996 9.5V1.5M12.9996 5.5H20.9996M10.2266 12.3631C9.02506 11.1615 8.07627 9.80285 7.38028 8.35323C7.32041 8.22854 7.29048 8.16619 7.26748 8.0873C7.18576 7.80695 7.24446 7.46269 7.41447 7.22526C7.46231 7.15845 7.51947 7.10129 7.63378 6.98698C7.98338 6.63737 8.15819 6.46257 8.27247 6.28679C8.70347 5.6239 8.70347 4.76932 8.27247 4.10643C8.15819 3.93065 7.98338 3.75585 7.63378 3.40624L7.43891 3.21137C6.90747 2.67993 6.64174 2.41421 6.35636 2.26987C5.7888 1.9828 5.11854 1.9828 4.55098 2.26987C4.2656 2.41421 3.99987 2.67993 3.46843 3.21137L3.3108 3.36901C2.78117 3.89863 2.51636 4.16344 2.31411 4.52348C2.08969 4.92298 1.92833 5.54347 1.9297 6.0017C1.93092 6.41464 2.01103 6.69687 2.17124 7.26131C3.03221 10.2947 4.65668 13.1571 7.04466 15.545C9.43264 17.933 12.295 19.5575 15.3284 20.4185C15.8928 20.5787 16.1751 20.6588 16.588 20.66C17.0462 20.6614 17.6667 20.5 18.0662 20.2756C18.4263 20.0733 18.6911 19.8085 19.2207 19.2789L19.3783 19.1213C19.9098 18.5898 20.1755 18.3241 20.3198 18.0387C20.6069 17.4712 20.6069 16.8009 20.3198 16.2333C20.1755 15.948 19.9098 15.6822 19.3783 15.1508L19.1835 14.9559C18.8339 14.6063 18.6591 14.4315 18.4833 14.3172C17.8204 13.8862 16.9658 13.8862 16.3029 14.3172C16.1271 14.4315 15.9523 14.6063 15.6027 14.9559C15.4884 15.0702 15.4313 15.1274 15.3644 15.1752C15.127 15.3453 14.7828 15.404 14.5024 15.3222C14.4235 15.2992 14.3612 15.2693 14.2365 15.2094C12.7869 14.5134 11.4282 13.5646 10.2266 12.3631Z" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    )
}
export const HireLawyerIcon = ({ stroke }) => {
    return (
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 19.5V5.5C7 4.57003 7 4.10504 7.10222 3.72354C7.37962 2.68827 8.18827 1.87962 9.22354 1.60222C9.60504 1.5 10.07 1.5 11 1.5C11.93 1.5 12.395 1.5 12.7765 1.60222C13.8117 1.87962 14.6204 2.68827 14.8978 3.72354C15 4.10504 15 4.57003 15 5.5V19.5M4.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V8.7C21 7.57989 21 7.01984 20.782 6.59202C20.5903 6.21569 20.2843 5.90973 19.908 5.71799C19.4802 5.5 18.9201 5.5 17.8 5.5H4.2C3.07989 5.5 2.51984 5.5 2.09202 5.71799C1.71569 5.90973 1.40973 6.21569 1.21799 6.59202C1 7.01984 1 7.57989 1 8.7V16.3C1 17.4201 1 17.9802 1.21799 18.408C1.40973 18.7843 1.71569 19.0903 2.09202 19.282C2.51984 19.5 3.0799 19.5 4.2 19.5Z" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    )
}
const getIcon = (iconName, stroke) => {
    switch (iconName) {
        case "Dashboard" :
            return <DashboardIcon stroke={stroke} />;
        case "My Profile" : 
            return <MyProfileIcon stroke={stroke} />
        case "My Complaints" :
            return <ComplaintsIcon stroke={stroke} />
        case "Talk to a Lawyer": 
            return <TalkToLawyerIcon stroke={stroke} />
        case "Hire a Lawyer":
            return <HireLawyerIcon stroke={stroke} />
        case "Help":
            return <HelpIcon stroke={stroke} />
    }
}

export const NavButton = ({isActive, text, onClick}) => {
    return (
        <button onClick={onClick} style={isActive ? {border: '1px solid rgba(11, 99, 197, 1)', color: "#0B63C5"} : {border: "1px solid rgba(11, 99, 197, 0)", color: "#7A797D"}} className="transition-[100ms] inline-flex min-w-[198px] py-[15px] bg-white font-medium poppinsFont text-[16px] rounded-[12px]  px-[16px] items-center gap-x-[16px]">
            {getIcon(text, isActive ? '#0B63C5' : "#7A797D")}
            {text}
        </button>
    );
}

const SideNav = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const [currentPage, setCurrentPage] = useState("dashboard");
    const router = useRouter();
    const onLogout = () => {
        removeCookie(["token"]);
        router.replace("/login");
    }
    return (
        <div style={{zIndex: 20}} className="fixed h-screen w-[295px] pl-[32px] pt-[40px] bg-white">
            <div className="mb-[100px]">
                <Image src="/Images/eccLogo.svg" width={82.98} height={28} />
            </div>
            <div>
                <button className="min-w-[200px] py-[14px] bg-[#0B63C5] font-semibold poppinsFont text-[16px] text-white rounded-[12px] focus:outline-none mb-[52px]">
                    File a Complaint
                </button>
                <NavButton isActive={router.pathname == "/dashboard"} text="Dashboard" onClick={() => router.push("/dashboard")}/>
                <NavButton isActive={router.pathname == "/dashboard/profile"} text="My Profile" onClick={() => router.push("/dashboard/profile")}/>
                <NavButton isActive={router.pathname == "/dashboard/mycomplaints" || router.pathname == "/complaintDetails"} text="My Complaints" onClick={() => router.push("/dashboard/mycomplaints")}/>
                <NavButton isActive={router.pathname == "/dashboard/talktoalawyer"} text="Talk to a Lawyer" onClick={() => setCurrentPage("talktoalawyer")}/>
                <NavButton isActive={router.pathname == "/dashboard/hirealawyer"} text="Hire a Lawyer" onClick={() => setCurrentPage("hirealawyer")}/>
                <NavButton isActive={router.pathname == "/dashboard/help"} text="Help" onClick={() => setCurrentPage("help")} />
                <button onClick={onLogout} className="transition-[100ms] text-[#FA4343] inline-flex min-w-[198px] py-[15px] bg-white font-medium poppinsFont text-[16px] rounded-[12px]  px-[16px] items-center gap-x-[16px]">
                    <img src="/Images/logoutIcon.svg" />
                    Logout
                </button>
            </div>

        </div>
    );
}
export default SideNav;