const LocationIcon = () => {
  return (
    <svg
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.88179 13.0944L1.88069 13.0931L1.8792 13.0911L1.8796 13.0908L1.87454 13.0858L1.87242 13.0837C0.739571 11.7572 0.05 10.0326 0.05 8.15216C0.05 3.96175 3.46175 0.55 7.65216 0.55C11.8426 0.55 15.2543 3.96175 15.2543 8.15216C15.2543 10.0326 14.5649 11.7572 13.431 13.0836L13.4298 13.0849L13.4291 13.0842L13.4235 13.0925L13.4235 13.0925L13.4234 13.0927L13.4167 13.1003L13.3906 13.1304L13.2901 13.2455C13.203 13.3454 13.0769 13.4894 12.9216 13.6662C12.6109 14.0197 12.1828 14.5042 11.7135 15.0281C10.7744 16.0764 9.67171 17.2805 9.01288 17.9089C8.25611 18.6304 7.04733 18.6304 6.29057 17.9089C5.71276 17.3575 4.61059 16.154 3.65153 15.0867C3.1723 14.5534 2.72926 14.0547 2.40603 13.6892C2.24441 13.5065 2.11276 13.3571 2.0215 13.2534L1.91624 13.1337L1.88879 13.1024L1.88179 13.0944ZM12.4786 12.2731L12.4789 12.2727C13.4293 11.1615 14.0039 9.72891 14.0039 8.15216C14.0039 4.6364 11.1679 1.80038 7.65216 1.80038C4.1364 1.80038 1.30038 4.6364 1.30038 8.15216C1.30038 9.72846 1.87455 11.1607 2.82363 12.2718L2.82351 12.2719L2.82607 12.2745C2.89349 12.3508 6.19671 16.0916 7.15345 17.0045L7.15346 17.0045C7.4401 17.2778 7.86334 17.2778 8.14998 17.0045L8.11547 16.9683L8.14998 17.0045C9.30387 15.9039 12.4686 12.2845 12.4785 12.2732L12.4786 12.2731ZM5.66572 6.34443C6.11712 5.8366 6.82176 5.5014 7.65216 5.5014C8.48256 5.5014 9.1872 5.8366 9.6386 6.34443C10.0908 6.85318 10.3029 7.50642 10.3029 8.15216C10.3029 8.79791 10.0908 9.45114 9.6386 9.95989C9.1872 10.4677 8.48256 10.8029 7.65216 10.8029C6.82176 10.8029 6.11712 10.4677 5.66572 9.95989C5.21349 9.45114 5.0014 8.79791 5.0014 8.15216C5.0014 7.50642 5.21349 6.85318 5.66572 6.34443ZM8.70407 7.17473C8.48024 6.92292 8.17208 6.75178 7.65216 6.75178C7.13224 6.75178 6.82408 6.92292 6.60024 7.17473C6.37722 7.42564 6.25178 7.78523 6.25178 8.15216C6.25178 8.51909 6.37722 8.87868 6.60024 9.12959C6.82408 9.3814 7.13224 9.55254 7.65216 9.55254C8.17208 9.55254 8.48024 9.3814 8.70407 9.12959C8.9271 8.87868 9.05254 8.51909 9.05254 8.15216C9.05254 7.78523 8.9271 7.42564 8.70407 7.17473Z"
        fill="#17A9ED"
        stroke="#F6F6F6"
        strokeWidth="0.1"
      />
    </svg>
  );
};

const WhatsappIcon = ({ color = "white" }: { color?: string }) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.6539 2.684C13.9251 0.95425 11.6261 0.000916667 9.17675 0C4.12958 0 0.0220001 4.10575 0.0201667 9.15292C0.0192501 10.7662 0.440917 12.3411 1.24208 13.7289L0 18.3333L4.79692 17.1994C6.13433 17.9291 7.6395 18.3132 9.17217 18.3141H9.17583C14.2221 18.3141 18.3297 14.2074 18.3324 9.16117C18.3343 6.71458 17.3828 4.41467 15.6539 2.684ZM13.6565 12.4245C13.4658 12.9589 12.5318 13.4741 12.1119 13.5117C11.6921 13.5502 11.2988 13.7014 9.3665 12.9397C7.04092 12.023 5.57242 9.63875 5.45875 9.48658C5.34417 9.3335 4.52467 8.24633 4.52467 7.12067C4.52467 5.995 5.11592 5.44133 5.32583 5.21308C5.53575 4.98392 5.78325 4.92708 5.93633 4.92708C6.0885 4.92708 6.24158 4.92708 6.3745 4.93258C6.53767 4.939 6.71825 4.94725 6.88967 5.32767C7.09317 5.7805 7.53775 6.91167 7.59458 7.02625C7.65142 7.14083 7.68992 7.27467 7.61383 7.42683C7.53775 7.579 7.49925 7.67433 7.38558 7.80817C7.271 7.942 7.14542 8.10608 7.04275 8.20875C6.92817 8.32242 6.809 8.44708 6.94192 8.67533C7.07575 8.9045 7.53408 9.65342 8.21425 10.2593C9.08875 11.0385 9.82483 11.2796 10.054 11.3951C10.2832 11.5097 10.4161 11.4904 10.5499 11.3373C10.6838 11.1852 11.1219 10.67 11.2741 10.4408C11.4263 10.2117 11.5793 10.2502 11.7893 10.3263C11.9992 10.4023 13.1239 10.956 13.3522 11.0706C13.5813 11.1852 13.7335 11.242 13.7903 11.3373C13.8472 11.4318 13.8472 11.8901 13.6565 12.4245Z" />
    </svg>
  );
};

const TelephoneIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 2a9 9 0 0 1 8 7.94" />
      <path d="M14.05 6A5 5 0 0 1 18 10" />
    </svg>
  );
};

const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
};

const CheckCircleIcon = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 0C3.3466 0 0 3.3466 0 7.5C0 11.6534 3.3466 15 7.5 15C11.6534 15 15 11.6534 15 7.5C15 6.69321 14.8918 5.88867 14.6034 5.13822L13.6659 6.05769C13.7808 6.51968 13.8462 6.98167 13.8462 7.5C13.8462 11.0201 11.0201 13.8462 7.5 13.8462C3.97987 13.8462 1.15385 11.0201 1.15385 7.5C1.15385 3.97987 3.97987 1.15385 7.5 1.15385C9.23077 1.15385 10.7858 1.84345 11.881 2.9387L12.6923 2.1274C11.3649 0.80003 9.51923 0 7.5 0ZM14.0084 2.46995L7.5 8.97836L5.03005 6.50841L4.20072 7.33774L7.08534 10.2224L7.5 10.619L7.91466 10.2224L14.8377 3.29928L14.0084 2.46995Z"
        fill="#FF916E"
      />
    </svg>
  );
};

const HeadphoneIcon = ({ color = "#FF916E" }: { color?: string }) => {
  return (
    <svg
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 16.5903V15.413H12.5637C12.6393 15.413 12.7014 15.3887 12.7499 15.3402C12.7984 15.2917 12.8227 15.2296 12.8227 15.154V14.3926H9.94701V8.64124H12.8227V7.40967C12.8227 5.80152 12.254 4.42899 11.1165 3.2921C9.97906 2.15534 8.60577 1.58696 6.99663 1.58696C5.38764 1.58696 4.01547 2.15534 2.88011 3.2921C1.7449 4.42899 1.17729 5.80152 1.17729 7.40967V8.64124H4.05299V14.3926H1.43711C1.03767 14.3926 0.698324 14.2529 0.419078 13.9735C0.139693 13.6943 0 13.3558 0 12.958V7.41388C0 6.44542 0.184153 5.53686 0.55246 4.68818C0.920907 3.83951 1.42281 3.09805 2.05816 2.46382C2.69351 1.82974 3.4358 1.32882 4.28504 0.961075C5.13427 0.59347 6.04024 0.409668 7.00295 0.409668C7.9634 0.409668 8.86846 0.59354 9.71812 0.961286C10.5678 1.32917 11.31 1.83037 11.9448 2.46488C12.5797 3.09925 13.081 3.84056 13.4486 4.68881C13.8162 5.53707 14 6.44304 14 7.40672V15.155C14 15.5532 13.8603 15.8919 13.5809 16.1712C13.3017 16.4506 12.9632 16.5903 12.5656 16.5903H7ZM1.43627 13.2153H2.87569V9.81853H1.17729V12.9564C1.17729 13.032 1.20155 13.094 1.25008 13.1425C1.29861 13.1911 1.36067 13.2153 1.43627 13.2153ZM11.1243 13.2153H12.8227V9.81853H11.1243V13.2153ZM1.43627 9.81853H1.17729H2.87569H1.43627Z" />
    </svg>
  );
};

const AreaExpandIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" x2="14" y1="3" y2="10" />
      <line x1="3" x2="10" y1="21" y2="14" />
    </svg>
  );
};

const BedroomIcon = () => {
  return (
    <svg
      width="25"
      height="23"
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.878992 0.000131483C0.642396 0.0045887 0.416941 0.122108 0.252147 0.326876C0.0873538 0.531644 -0.00330205 0.806916 9.19791e-05 1.09223V21.908C-0.00158127 22.0507 0.0202767 22.1923 0.0643958 22.3247C0.108515 22.4571 0.174015 22.5776 0.25709 22.6792C0.340165 22.7808 0.439158 22.8615 0.548315 22.9166C0.657472 22.9716 0.774617 23 0.892943 23C1.01127 23 1.12841 22.9716 1.23757 22.9166C1.34673 22.8615 1.44572 22.7808 1.5288 22.6792C1.61187 22.5776 1.67737 22.4571 1.72149 22.3247C1.76561 22.1923 1.78747 22.0507 1.78579 21.908V20.8313H23.2142V21.908C23.2125 22.0507 23.2344 22.1923 23.2785 22.3247C23.3226 22.4571 23.3881 22.5776 23.4712 22.6792C23.5543 22.7808 23.6533 22.8615 23.7624 22.9166C23.8716 22.9716 23.9887 23 24.1071 23C24.2254 23 24.3425 22.9716 24.4517 22.9166C24.5608 22.8615 24.6598 22.7808 24.7429 22.6792C24.826 22.5776 24.8915 22.4571 24.9356 22.3247C24.9797 22.1923 25.0016 22.0507 24.9999 21.908V19.7546V17.6013C24.9999 16.2138 24.0672 15.089 22.9166 15.089H1.78579V1.09223C1.78751 0.948123 1.76521 0.805068 1.72024 0.671543C1.67526 0.538017 1.60851 0.416739 1.52394 0.314895C1.43938 0.213051 1.33872 0.132715 1.22794 0.0786467C1.11715 0.0245788 0.998492 -0.0021206 0.878992 0.000131483ZM5.95243 7.1934C5.32097 7.1934 4.71537 7.4959 4.26885 8.03434C3.82234 8.57278 3.57149 9.30307 3.57149 10.0645C3.57149 10.826 3.82234 11.5563 4.26885 12.0947C4.71537 12.6332 5.32097 12.9357 5.95243 12.9357C6.58389 12.9357 7.18949 12.6332 7.63601 12.0947C8.08252 11.5563 8.33337 10.826 8.33337 10.0645C8.33337 9.30307 8.08252 8.57278 7.63601 8.03434C7.18949 7.4959 6.58389 7.1934 5.95243 7.1934ZM12.3 7.1934C11.0953 7.1934 10.1191 8.37061 10.1191 9.82341V12.9357H22.8538C23.0824 12.3966 23.2142 11.7879 23.2142 11.1412C23.2142 8.96059 21.7487 7.1934 19.9404 7.1934H12.3Z"
        fill="#45525D"
      />
    </svg>
  );
};

const WardrobeIcon = () => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 0C10.0448 0 8.84615 1.19868 8.84615 2.65385C8.84615 3.74266 9.50167 4.47776 9.94328 4.99324C10.3849 5.50872 10.6154 5.80418 10.6154 6.19231V6.47221L1.81242 9.87763L1.86771 9.85862C0.791132 10.1932 0 11.1995 0 12.3846C0 13.8398 1.19868 15.0385 2.65385 15.0385H3.53846V13.2692H2.65385C2.15401 13.2692 1.76923 12.8844 1.76923 12.3846C1.76923 11.981 2.02938 11.6614 2.39295 11.5484C2.41219 11.5421 2.43121 11.5352 2.44997 11.5276L11.5 8.02547L20.55 11.5276C20.5688 11.5352 20.5878 11.5421 20.607 11.5484C20.9706 11.6614 21.2308 11.981 21.2308 12.3846C21.2308 12.8844 20.846 13.2692 20.3462 13.2692H19.4615V15.0385H20.3462C21.8013 15.0385 23 13.8398 23 12.3846C23 11.1995 22.2089 10.1932 21.1323 9.85862L21.1876 9.87763L12.3846 6.47221V6.19231C12.3846 5.09959 11.7305 4.35964 11.2875 3.84255C10.8445 3.32546 10.6154 3.03084 10.6154 2.65385C10.6154 2.15401 11.0002 1.76923 11.5 1.76923C11.9998 1.76923 12.3846 2.15401 12.3846 2.65385C12.383 2.77107 12.4046 2.88745 12.4483 2.99623C12.492 3.10501 12.5569 3.20402 12.6392 3.2875C12.7216 3.37098 12.8196 3.43727 12.9278 3.48251C13.0359 3.52776 13.152 3.55106 13.2692 3.55106C13.3865 3.55106 13.5025 3.52776 13.6107 3.48251C13.7188 3.43727 13.8169 3.37098 13.8992 3.2875C13.9815 3.20402 14.0464 3.10501 14.0901 2.99623C14.1338 2.88745 14.1555 2.77107 14.1538 2.65385C14.1538 1.19868 12.9552 0 11.5 0ZM6.19231 12.3846C5.704 12.3846 5.30769 12.7809 5.30769 13.2692V21.2308C5.30769 22.2083 6.09942 23 7.07692 23H15.9231C16.9006 23 17.6923 22.2083 17.6923 21.2308V13.2692C17.6923 12.7809 17.296 12.3846 16.8077 12.3846H6.19231Z"
        fill="#45525D"
      />
    </svg>
  );
};

const CarIcon = () => {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.4908 1.96028C19.2378 1.21961 18.5399 0.722168 17.7577 0.722168H4.24233C3.46011 0.722168 2.76222 1.21961 2.50922 1.96028L0.133222 8.8915C0.0452222 9.14694 0 9.41583 0 9.68472V18.4444C0 19.4564 0.821333 20.2777 1.83333 20.2777C2.84533 20.2777 3.66667 19.4564 3.66667 18.4444V17.8333H18.3333V18.4444C18.3333 19.4564 19.1547 20.2777 20.1667 20.2777C21.1787 20.2777 22 19.4564 22 18.4444V9.68472C22 9.41461 21.9548 9.14694 21.868 8.8915L19.4908 1.96028ZM5.11622 3.16661H16.8838C17.1453 3.16661 17.3776 3.33283 17.4619 3.57972L18.7196 7.24639C18.8552 7.64239 18.5607 8.0555 18.1414 8.0555H3.85856C3.43933 8.0555 3.14478 7.64239 3.28044 7.24639L4.53811 3.57972C4.62244 3.33283 4.85467 3.16661 5.11622 3.16661ZM4.27778 14.1666C3.26578 14.1666 2.44444 13.3453 2.44444 12.3333C2.44444 11.3213 3.26578 10.4999 4.27778 10.4999C5.28978 10.4999 6.11111 11.3213 6.11111 12.3333C6.11111 13.3453 5.28978 14.1666 4.27778 14.1666ZM17.7222 14.1666C16.7102 14.1666 15.8889 13.3453 15.8889 12.3333C15.8889 11.3213 16.7102 10.4999 17.7222 10.4999C18.7342 10.4999 19.5556 11.3213 19.5556 12.3333C19.5556 13.3453 18.7342 14.1666 17.7222 14.1666Z"
        fill="#45525D"
      />
    </svg>
  );
};

const LeftArrowIcon = () => {
  return (
    <svg
      width="9"
      height="16"
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.236759 1.33983C0.240966 1.51568 0.315306 1.68276 0.443587 1.80467L6.71164 7.99999L0.443587 14.1953C0.378975 14.2574 0.327615 14.3317 0.292544 14.4138C0.257472 14.4959 0.2394 14.5841 0.239395 14.6732C0.23943 14.8058 0.279481 14.9354 0.354426 15.0454C0.429372 15.1554 0.535807 15.2408 0.660124 15.2907C0.784441 15.3406 0.920992 15.3527 1.05232 15.3255C1.18365 15.2983 1.30378 15.233 1.39736 15.138L8.14231 8.47134C8.26875 8.34631 8.33978 8.17677 8.33978 7.99999C8.33978 7.8232 8.26875 7.65366 8.14231 7.52863L1.39736 0.861965C1.30317 0.765146 1.18159 0.698706 1.04854 0.671346C0.91549 0.643986 0.777184 0.656981 0.651737 0.708633C0.52629 0.760284 0.419551 0.848183 0.345504 0.960812C0.271456 1.07344 0.233553 1.20555 0.236759 1.33983Z"
        fill="#5B5B5B"
      />
    </svg>
  );
};

const TimerIcon = () => {
  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 0.699951C3.81313 0.699951 0 4.51308 0 9.19995C0 13.8868 3.81313 17.7 8.5 17.7C13.1869 17.7 17 13.8868 17 9.19995C17 4.51308 13.1869 0.699951 8.5 0.699951ZM8.5 1.97495C12.4978 1.97495 15.725 5.20214 15.725 9.19995C15.725 13.1978 12.4978 16.425 8.5 16.425C4.50219 16.425 1.275 13.1978 1.275 9.19995C1.275 5.20214 4.50219 1.97495 8.5 1.97495ZM7.85254 4.09082C7.68361 4.09346 7.52263 4.16304 7.40497 4.28429C7.28731 4.40553 7.22258 4.56852 7.225 4.73745V9.41245C7.22503 9.58152 7.29221 9.74364 7.41177 9.86318L9.53677 11.9882C9.59551 12.0494 9.66587 12.0982 9.74373 12.1319C9.82158 12.1655 9.90537 12.1833 9.99018 12.1841C10.075 12.185 10.1591 12.1689 10.2377 12.1369C10.3162 12.1048 10.3875 12.0574 10.4475 11.9974C10.5075 11.9375 10.5549 11.8661 10.5869 11.7876C10.619 11.7091 10.6351 11.6249 10.6342 11.5401C10.6333 11.4553 10.6156 11.3715 10.5819 11.2937C10.5483 11.2158 10.4994 11.1455 10.4382 11.0867L8.5 9.14849V4.73745C8.50122 4.65213 8.48531 4.56742 8.45319 4.48836C8.42108 4.4093 8.37342 4.33749 8.31304 4.27719C8.25266 4.21689 8.18079 4.16932 8.10169 4.13731C8.02259 4.1053 7.93786 4.08949 7.85254 4.09082Z"
        fill="white"
      />
    </svg>
  );
};

const CheckCircleFillIcon = () => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33333 0.199951C3.73083 0.199951 0 3.93078 0 8.53328C0 13.1358 3.73083 16.8666 8.33333 16.8666C12.9358 16.8666 16.6667 13.1358 16.6667 8.53328C16.6667 3.93078 12.9358 0.199951 8.33333 0.199951ZM6.66667 13.045L2.74417 9.12245L3.9225 7.94412L6.66667 10.6883L12.7442 4.61078L13.9225 5.78912L6.66667 13.045Z"
        fill="white"
      />
    </svg>
  );
};

const CarouselIcon = () => {
  return (
    <svg
      width="59"
      height="8"
      viewBox="0 0 59 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill="#1CFFCA" />
      <circle cx="16.5714" cy="4" r="4" fill="#BEBEBE" />
      <circle cx="29.1428" cy="4" r="4" fill="#BEBEBE" />
      <circle cx="41.7142" cy="4" r="4" fill="#BEBEBE" />
      <circle cx="54.2858" cy="4" r="4" fill="#BEBEBE" />
    </svg>
  );
};

export {
  LocationIcon,
  WhatsappIcon,
  TelephoneIcon,
  EmailIcon,
  CheckCircleIcon,
  HeadphoneIcon,
  AreaExpandIcon,
  BedroomIcon,
  WardrobeIcon,
  CarIcon,
  LeftArrowIcon,
  TimerIcon,
  CheckCircleFillIcon,
  CarouselIcon
};
