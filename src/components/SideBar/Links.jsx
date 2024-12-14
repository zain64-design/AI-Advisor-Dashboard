import React from 'react';
import { NavLink } from 'react-router';

const Links = () => {

    const links = [
        {
            title: 'Dashboard',
            path: '/',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.5 8H1.5C0.5 8 0 7.5 0 6.5V1.5C0 0.5 0.5 0 1.5 0H4.5C5.5 0 6 0.5 6 1.5V6.5C6 7.5 5.5 8 4.5 8ZM6 14.5V13.5C6 12.5 5.5 12 4.5 12H1.5C0.5 12 0 12.5 0 13.5V14.5C0 15.5 0.5 16 1.5 16H4.5C5.5 16 6 15.5 6 14.5ZM10 9.5V14.5C10 15.5 10.5 16 11.5 16H14.5C15.5 16 16 15.5 16 14.5V9.5C16 8.5 15.5 8 14.5 8H11.5C10.5 8 10 8.5 10 9.5ZM10 1.5V2.5C10 3.5 10.5 4 11.5 4H14.5C15.5 4 16 3.5 16 2.5V1.5C16 0.5 15.5 0 14.5 0H11.5C10.5 0 10 0.5 10 1.5Z" fill="#3B90AA" /></svg>
        },
        {
            title: 'Investment Articles/News',
            path: '/news',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none"><path d="M11.1429 20.5715L10.2858 24.0001L13.7143 23.143L17.8201 19.0372L15.2486 16.4658L11.1429 20.5715Z" fill="#3B90AA" /><path d="M18.7543 13.7144C18.5156 13.7141 18.2792 13.761 18.0586 13.8522C17.838 13.9433 17.6375 14.0771 17.4686 14.2458L16.4658 15.2486L19.0372 17.8201L20.04 16.8172C20.2945 16.5631 20.4678 16.2391 20.5381 15.8864C20.6083 15.5337 20.5723 15.1681 20.4347 14.8359C20.297 14.5037 20.0638 14.2197 19.7647 14.0201C19.4656 13.8204 19.114 13.714 18.7543 13.7144Z" fill="#3B90AA" /><path d="M12.8572 5.14286H17.1429L12.0001 0V4.28571C12.0001 4.51304 12.0904 4.73106 12.2511 4.89181C12.4119 5.05255 12.6299 5.14286 12.8572 5.14286Z" fill="#3B90AA" /><path d="M16.2857 13.0371C16.5399 12.7861 16.8285 12.5725 17.1429 12.4029V6.85714H12.8571C12.1752 6.85714 11.5211 6.58623 11.0389 6.10399C10.5566 5.62175 10.2857 4.9677 10.2857 4.28571V0H1.71429C1.25963 0 0.823593 0.180612 0.502103 0.502103C0.180612 0.823594 0 1.25963 0 1.71429V22.2857C0 22.7404 0.180612 23.1764 0.502103 23.4979C0.823593 23.8194 1.25963 24 1.71429 24H8.52L9.59143 19.7143L16.2857 13.0371ZM4.28571 6H7.71429C7.94161 6 8.15963 6.09031 8.32038 6.25105C8.48112 6.4118 8.57143 6.62981 8.57143 6.85714C8.57143 7.08447 8.48112 7.30249 8.32038 7.46323C8.15963 7.62398 7.94161 7.71429 7.71429 7.71429H4.28571C4.05839 7.71429 3.84037 7.62398 3.67962 7.46323C3.51888 7.30249 3.42857 7.08447 3.42857 6.85714C3.42857 6.62981 3.51888 6.4118 3.67962 6.25105C3.84037 6.09031 4.05839 6 4.28571 6ZM8.57143 18H4.28571C4.05839 18 3.84037 17.9097 3.67962 17.7489C3.51888 17.5882 3.42857 17.3702 3.42857 17.1429C3.42857 16.9155 3.51888 16.6975 3.67962 16.5368C3.84037 16.376 4.05839 16.2857 4.28571 16.2857H8.57143C8.79876 16.2857 9.01677 16.376 9.17752 16.5368C9.33827 16.6975 9.42857 16.9155 9.42857 17.1429C9.42857 17.3702 9.33827 17.5882 9.17752 17.7489C9.01677 17.9097 8.79876 18 8.57143 18ZM12 14.5714H4.28571C4.05839 14.5714 3.84037 14.4811 3.67962 14.3204C3.51888 14.1596 3.42857 13.9416 3.42857 13.7143C3.42857 13.487 3.51888 13.2689 3.67962 13.1082C3.84037 12.9474 4.05839 12.8571 4.28571 12.8571H12C12.2273 12.8571 12.4453 12.9474 12.6061 13.1082C12.7668 13.2689 12.8571 13.487 12.8571 13.7143C12.8571 13.9416 12.7668 14.1596 12.6061 14.3204C12.4453 14.4811 12.2273 14.5714 12 14.5714ZM12.8571 11.1429H4.28571C4.05839 11.1429 3.84037 11.0526 3.67962 10.8918C3.51888 10.7311 3.42857 10.513 3.42857 10.2857C3.42857 10.0584 3.51888 9.84037 3.67962 9.67962C3.84037 9.51888 4.05839 9.42857 4.28571 9.42857H12.8571C13.0845 9.42857 13.3025 9.51888 13.4632 9.67962C13.624 9.84037 13.7143 10.0584 13.7143 10.2857C13.7143 10.513 13.624 10.7311 13.4632 10.8918C13.3025 11.0526 13.0845 11.1429 12.8571 11.1429Z" fill="#3B90AA" /></svg>
        },
        {
            title: 'AI Investment Partner',
            path: '/investment-partner',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.3946 4.80615H16.7949V3.49588C17.6211 3.20395 18.1168 2.35892 17.9686 1.49522C17.8203 0.631301 17.0715 0 16.195 0C15.3186 0 14.5698 0.631301 14.4215 1.49522C14.2732 2.35892 14.769 3.20395 15.5951 3.49588V4.80615H8.39734V3.49588C9.22369 3.20395 9.71925 2.35892 9.5712 1.49522C9.42292 0.631301 8.67411 0 7.79767 0C6.92122 0 6.17219 0.631301 6.02414 1.49522C5.87587 2.35892 6.37142 3.20395 7.19778 3.49588V4.80615H6.59789C4.94231 4.8079 3.60063 6.14958 3.59888 7.80516V18.002C3.60063 19.6578 4.94231 20.9994 6.59789 21.0012H8.39734V23.4003C8.39756 23.6184 8.51595 23.8192 8.70662 23.9249C8.89728 24.0305 9.13034 24.0244 9.31507 23.9088L13.9679 21.0012H17.3946C19.0504 20.9997 20.3923 19.6578 20.3938 18.002V7.80516C20.3923 6.14958 19.0504 4.80768 17.3946 4.80615ZM8.99723 8.40505C9.99052 8.40614 10.7956 9.2112 10.7967 10.2045C10.7967 10.5357 10.5283 10.8042 10.1968 10.8042C9.86554 10.8042 9.59712 10.5357 9.59712 10.2045C9.59712 9.87325 9.32847 9.60461 8.99723 9.60461C8.66598 9.60461 8.39734 9.87325 8.39734 10.2045C8.39734 10.5357 8.12891 10.8042 7.79767 10.8042C7.46642 10.8042 7.19778 10.5357 7.19778 10.2045C7.19887 9.2112 8.00393 8.40614 8.99723 8.40505ZM16.4632 15.8394C15.0673 16.4977 13.5396 16.8296 11.9962 16.8094C10.4529 16.8296 8.9254 16.498 7.52924 15.8394C7.23292 15.6914 7.11299 15.3309 7.26104 15.0346C7.40931 14.7383 7.76955 14.6181 8.06587 14.7664C10.3064 15.8862 13.6867 15.8862 15.9268 14.7664C16.2231 14.6181 16.5834 14.7383 16.7317 15.0346C16.8797 15.3309 16.7595 15.6914 16.4632 15.8394ZM16.195 10.8042C16.036 10.8044 15.8833 10.7411 15.7709 10.6287C15.6584 10.5162 15.5951 10.3635 15.5951 10.2045C15.5951 9.87325 15.3267 9.60461 14.9955 9.60461C14.6642 9.60461 14.3956 9.87325 14.3956 10.2045C14.3956 10.5357 14.1271 10.8042 13.7957 10.8042C13.4644 10.8042 13.196 10.5357 13.196 10.2045C13.196 9.21054 14.0015 8.40505 14.9955 8.40505C15.9892 8.40505 16.7949 9.21054 16.7949 10.2045C16.7949 10.3635 16.7319 10.5162 16.6192 10.6287C16.5067 10.7411 16.3541 10.8044 16.195 10.8042Z" fill="#3B90AA" /><path d="M22.1933 9.60449H21.5934V15.6027H22.1933C23.1866 15.6016 23.9916 14.7966 23.9927 13.8033V11.4039C23.9916 10.4106 23.1866 9.60559 22.1933 9.60449Z" fill="#3B90AA" /><path d="M0 11.4039V13.8033C0.00109828 14.7966 0.80615 15.6016 1.79945 15.6027H2.39934V9.60449H1.79945C0.80615 9.60559 0.00109828 10.4106 0 11.4039Z" fill="#3B90AA" /></svg>
        },
        {
            title: 'Recommendation',
            path: '/recommendation',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clipPath="url(#clip0_715_2414)"><path d="M13.3818 22.7275V23.4912C13.3818 23.673 13.2364 23.8548 13.0182 23.8548H0.727284C0.509102 23.8548 0.363647 23.673 0.363647 23.4912V22.7275C0.363647 19.4184 3.05456 16.7275 6.36365 16.7275H7.38183C10.6909 16.7275 13.3818 19.4184 13.3818 22.7275Z" fill="#3B90AA" /><path d="M23.6364 22.7275V23.4912C23.6364 23.673 23.4545 23.8548 23.2727 23.8548H14.0364C14.0727 23.7457 14.1091 23.6366 14.1091 23.4912C14.0364 23.0912 14.4727 20.6912 12.5091 18.3639C13.6 17.3094 15.0909 16.7275 16.6182 16.7275H17.6364C20.9455 16.7275 23.6364 19.4184 23.6364 22.7275Z" fill="#3B90AA" /><path d="M20 12.9093C20 14.473 18.7272 15.7821 17.1272 15.7821C15.5272 15.7821 14.2545 14.5093 14.2545 12.9093C14.2545 11.3457 15.5272 10.0366 17.1272 10.0366C18.7272 10.0366 20 11.3093 20 12.9093Z" fill="#3B90AA" /><path d="M9.74545 12.9093C9.74545 14.473 8.47273 15.7821 6.87273 15.7821C5.30909 15.7821 4 14.5093 4 12.9093C4 11.3457 5.27273 10.0366 6.87273 10.0366C8.43636 10.0366 9.74545 11.3093 9.74545 12.9093Z" fill="#3B90AA" /><path d="M14.9091 3.60005C14.9091 5.52733 12.7637 7.0546 10.1455 7.0546C9.92729 7.0546 9.70911 7.0546 9.49093 7.01824L6.65456 8.76369C6.40002 8.94551 6.03638 8.69096 6.10911 8.36369L6.76365 6.03642C5.89093 5.38187 5.38184 4.50914 5.38184 3.60005C5.38184 1.67278 7.52729 0.145508 10.1091 0.145508C12.7637 0.145508 14.9091 1.70914 14.9091 3.60005Z" fill="#3B90AA" /><path d="M18.8363 9.3821C19.0182 9.70938 18.6182 10.0366 18.3273 9.85483L15.8182 8.29119C14.4363 8.43665 13.1636 8.07301 12.2909 7.45483C14.2545 6.80028 15.6363 5.34574 15.6363 3.60028C15.6363 3.05483 15.4909 2.5821 15.2727 2.10938C17.6 2.10938 19.4909 3.52756 19.4909 5.23665C19.4909 6.07301 19.0545 6.83665 18.2909 7.41847L18.8363 9.3821Z" fill="#3B90AA" /></g><defs><clipPath id="clip0_715_2414"><rect width="24" height="24" fill="white" /></clipPath></defs></svg>
        },
        {
            title: 'Settings',
            path: '/settings',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M1.38636 7.77262C1.83829 7.70697 2.26959 7.54022 2.64813 7.28479C3.02668 7.02935 3.34273 6.6918 3.57274 6.29729C3.80275 5.90277 3.9408 5.46145 3.9766 5.00618C4.01241 4.55092 3.94505 4.09344 3.77954 3.66782C3.67432 3.38957 3.65882 3.08536 3.73521 2.79786C3.81161 2.51035 3.97605 2.25396 4.20551 2.06463C5.21851 1.21398 6.37157 0.545731 7.61326 0.0896775C7.89601 -0.0153565 8.2047 -0.0284798 8.49534 0.0521774C8.78598 0.132835 9.04376 0.303158 9.23195 0.538882C9.51519 0.901075 9.8772 1.19401 10.2905 1.39548C10.7038 1.59694 11.1576 1.70165 11.6174 1.70165C12.0772 1.70165 12.5309 1.59694 12.9442 1.39548C13.3575 1.19401 13.7196 0.901075 14.0028 0.538882C14.191 0.303158 14.4488 0.132835 14.7394 0.0521774C15.0301 -0.0284798 15.3387 -0.0153565 15.6215 0.0896775C16.768 0.510723 17.8399 1.11206 18.7969 1.871C19.0381 2.06197 19.2119 2.32514 19.2927 2.62199C19.3735 2.91884 19.3572 3.23377 19.2461 3.52067C19.0674 3.95755 18.9935 4.43024 19.0305 4.90081C19.0675 5.37138 19.2142 5.82674 19.4589 6.23037C19.7037 6.63399 20.0396 6.97463 20.4398 7.22498C20.8399 7.47533 21.2932 7.62841 21.7632 7.67194C22.0683 7.70456 22.3549 7.8343 22.5808 8.04204C22.8067 8.24979 22.9599 8.52457 23.0179 8.82593C23.1621 9.53977 23.2347 10.2662 23.2347 10.9945C23.2358 11.6042 23.1866 12.2129 23.0876 12.8145C23.0383 13.1256 22.8879 13.4117 22.6598 13.6287C22.4316 13.8457 22.1382 13.9814 21.8252 14.015C21.3448 14.0601 20.8823 14.2196 20.4762 14.4801C20.0702 14.7406 19.7324 15.0946 19.4913 15.5125C19.2501 15.9303 19.1126 16.3999 19.0901 16.8818C19.0677 17.3637 19.161 17.844 19.3623 18.2824C19.494 18.5676 19.5267 18.8887 19.4551 19.1946C19.3835 19.5005 19.2119 19.7737 18.9673 19.9708C17.9604 20.806 16.8184 21.4634 15.5905 21.9148C15.4335 21.9692 15.2687 21.998 15.1026 22C14.8747 21.9995 14.6504 21.9444 14.4482 21.8393C14.2461 21.7342 14.0721 21.5821 13.9408 21.3959C13.6648 20.9937 13.2948 20.665 12.8629 20.4382C12.431 20.2115 11.9503 20.0936 11.4625 20.0948C10.9898 20.0954 10.5239 20.2063 10.1017 20.4187C9.67948 20.6312 9.31271 20.9393 9.03058 21.3185C8.84291 21.5707 8.57709 21.7538 8.27451 21.8393C7.97193 21.9247 7.64958 21.9077 7.35768 21.7909C6.23491 21.339 5.18965 20.7145 4.25972 19.9399C4.02612 19.7467 3.85979 19.4845 3.78464 19.1908C3.70949 18.8972 3.72939 18.5873 3.8415 18.3057C4.02366 17.8744 4.10308 17.4067 4.07351 16.9395C4.04393 16.4723 3.90616 16.0184 3.67107 15.6135C3.43598 15.2087 3.11 14.8641 2.71888 14.6068C2.32775 14.3495 1.88218 14.1867 1.41734 14.1312C1.11592 14.0895 0.835596 13.9529 0.616978 13.7413C0.398359 13.5296 0.252804 13.2539 0.201393 12.954C0.0770073 12.308 0.00962448 11.6523 2.47955e-05 10.9945C-0.000123978 10.3007 0.0647011 9.60835 0.193647 8.92661C0.245939 8.63331 0.389328 8.36395 0.603439 8.15679C0.817551 7.94963 1.0915 7.81521 1.38636 7.77262ZM7.74492 10.9945C7.74492 11.7604 7.97204 12.5091 8.39755 13.1459C8.82306 13.7827 9.42785 14.2791 10.1355 14.5722C10.8431 14.8653 11.6217 14.942 12.3729 14.7925C13.124 14.6431 13.814 14.2743 14.3556 13.7327C14.8972 13.1912 15.266 12.5012 15.4154 11.75C15.5648 10.9988 15.4881 10.2202 15.1951 9.51258C14.902 8.80498 14.4056 8.20018 13.7688 7.77467C13.132 7.34916 12.3833 7.12205 11.6174 7.12205C10.5903 7.12205 9.60536 7.53004 8.87914 8.25626C8.15291 8.98249 7.74492 9.96746 7.74492 10.9945Z" fill="#3B90AA" /></svg>
        }
    ]

    return (
        <>
            <ul className="main-ul">
                {links?.map(({title, path, icon}) => (
                    <li className="mn-item" key={path}>
                        <NavLink to={path} className="mn-link">
                            <span className="icons">{icon}</span>
                            <span className="link-txt">{title}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Links