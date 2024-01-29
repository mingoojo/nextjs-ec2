"use client"
import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import styles from "./header.module.css"

import useScroll from "../hooks/useScroll"
import useMediaQuary from "../hooks/useMediaQuary"
import { usePathname } from "next/navigation"
import { isLoginStore } from "../store"


type DummyData = {
    user : {
      name: string,
      email: string,
      image: string,
    },
    expires: string,
}
type Device = "mobile" | "tablet" | "desktop" | "default"

type SetOpenModal= React.Dispatch<React.SetStateAction<boolean>>

type ModalContentsProps = {dummyData : DummyData}

const subNavTitle = [
  {
    href: "/overview",
    query: "",
    name: "OVERVIEW",
  },
  {
    href: "/observation",
    query: "/pseudo",
    name: "OBSERVATION DETAILS",
  },
  {
    href: "/skyPlot",
    query: "",
    name: "SKY PLOT",
  },
  {
    href: "/log",
    query: "",
    name: "LOG",
  },
  {
    href: "/receiver",
    query: "",
    name: "RECIEVER MANAGE",
  },
  {
    href: "/ssrDetails",
    query: "",
    name: "SSR DETAILS",
  },
  {
    href: "/ssrServer",
    query: "",
    name: "SSR SERVER",
  },
  {
    href: "/userInformation",
    query: "",
    name: "USER INFORMATION",
  },
]

function SubNav ({ device, pathname }:{device:Device, pathname:string}) {
  const result = pathname.match(/\/([^\/]+)\/([^\/]+)/) || pathname.match(/\/([^\/]+)/) || ""

  if (device !== null) {
    if (device === "desktop" || device === "tablet") {
      return (
        <nav className={styles.subNav}>
          <div className="container">
            {
              subNavTitle.map((data) => {
                const focus = `/${result[1]}` === data.href
                return (
                  <Link className={`${focus ? "focus" : ""} ${styles.subNavItem}` } key={data.name} href={`${data.href}${data?.query}`}>{data.name}</Link>
                )
              })
            }
          </div>
        </nav>
      )
    } else {
      return (
        <nav className={styles.subNavMobile}>
          <div className="container">
            {
              subNavTitle.map((data, index) => {
                const focus = `/${result[1]}` === data.href
                return (
                  <Link className={`${focus ? "focus" : ""} ${styles.subNavItemMobile} ${styles[`subNavItemMobile${index}`]}`} key={data.name} href={`${data.href}${data?.query}`}>{data.name}</Link>
                )
              })
            }
          </div>
        </nav>
      )
    }
  }
}

function ModalContents({ dummyData }:ModalContentsProps) {
  return (
    <>
      <div className={styles.userModalHeader}>
        <p className="textMain">
          {dummyData.user.name}
        </p>
        <p className="textSub">
          {dummyData.user.email}
        </p>
      </div>
      <div>
        <div>
          <button className={styles.ModalButton} onClick={() => {
            console.log("navigate to DashBoard")
          }}>
            <Image className={styles.image} src="/dashboard.png" alt="dashboard logo" width="25" height="25"/>
            <p className="textSub">Dash Board</p>
          </button>
        </div>
        <div>
          <button className={styles.ModalButton} onClick={() => {
            console.log("Sign Out")
          }}>
            <Image className={styles.image} src="/logout.png" alt="logout logo" width="25" height="25"/>
            <p className="textSub">Sign Out</p>
          </button>
        </div>
      </div>
    </>
  )
}

function UserModal({ dummyData, device, setOpenModal }: {dummyData:DummyData, device:Device, setOpenModal:SetOpenModal}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setOpenModal(false);
    }
  };


  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [])


  if (device === "mobile") {
    return (
      <div className={styles.modalContainerMobile}>
        <div className={styles.userModalMobile} ref={modalRef}>
          <ModalContents dummyData={dummyData}/>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.userModal} ref={modalRef}>
        <ModalContents dummyData={dummyData}/>
      </div>
    )
  }
}

function UserIcon ({ device }:{ device:Device }) {
  const [openModal, setOpenModal] = useState<boolean>(false)

  useEffect(() => {
    const preventScroll = () => {
      if (openModal && device === "mobile") {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
    preventScroll()

  }, [openModal, device])

  const dummyData = {
    user: {
      name: "jo",
      email: "jo@gmail.com",
      image: "/logo.png",
    },
    expires: "unlimit",
  }


  return (
    <div className={styles.userContainer}>
      <button
        onClick={() => setOpenModal(!openModal)}
        className={styles.userButton}
      >
        <Image
          src={dummyData.user.image}
          alt={dummyData.user.email}
          width='40'
          height='40'
        />
      </button>
      {
        openModal && (
          <UserModal dummyData={dummyData} device={device} setOpenModal={setOpenModal}/>
        )
      }
    </div>
  )
}

export default function Header() {
  const { isLogin } = isLoginStore()
  const { device } = useMediaQuary()
  const scrolled = useScroll(50)

  const pathname = usePathname()

  return (
    <>
      <nav className={`navBar ${scrolled ? "scrolld-nav" : "unscrolld-nav"}`}>
        <div className="container">
          <Link className={styles.mainIcon} href="/">
            <Image className={styles.image} src="/logo.png" priority={true} alt="SSR2OSR logo" width="30" height="30"/>
            <p className="textMain">SSR2OSR</p>
          </Link>
          {
            isLogin ? <UserIcon device={device}/> : (
              <div>
                <Link href={"/sign-up"} className="link-box-right">
                  <button className="contained-button">회원가입</button>
                </Link>
                <Link href={"/login"} className="link-box-right">
                  <button className="contained-button">로그인</button>
                </Link>
              </div>
            )
          }
        </div>
      </nav>
      <div style={{ marginTop: "70px", marginBottom: "50px", border: "0.5px solid #ffffff" }}>
        {
          isLogin && (<SubNav device={device} pathname={pathname}/>)
        }
      </div>
    </>
  )
}
