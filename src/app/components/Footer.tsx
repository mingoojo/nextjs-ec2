"use client"
import Link from "next/link"
import Image from "next/image"

import styles from "./footer.module.css"
import useMediaQuary from "../hooks/useMediaQuary"

export default function Footer() {
  const { width } = useMediaQuary()

  return (
    <div className={styles.footerContainer}>
      <div className="container">
        {
          width > 1080 && (
            <Link href="https://www.ngii.go.kr/" target="_blank">
              <Image src="/ngii_logo.png" alt="ngii logo" width="250" height="125"/>
            </Link>
          )
        }
        <div className={styles.footerContents}>
          <div className={width > 1080 ? `${styles.web}` : `${styles.mobile}`}>
            {
              width > 1080 ? (
                <div className={styles.rowBox}>
                  <p className={`${styles.row} textSub`}>(우)16517 경기도 수원시 영통구 월드컵로 92(원천동)</p>
                  <p className={`${styles.row} textSub`}>전화 : 031{")"} 210-2700</p>
                  <p className={`${styles.row} textSub`}>팩스 : 031{")"} 210-2644</p>
                </div>
              ) : (
                <>
                  <div className={styles.rowBox}>
                    <p className={`${styles.row} textSub`}>(우)16517 경기도 수원시 영통구 월드컵로 92(원천동)</p>
                  </div>
                  <div className={styles.rowBox}>
                    <p className={`${styles.row} textSub`}>전화 : 031{")"} 210-2700</p>
                    <p className={`${styles.row} textSub`}>팩스 : 031{")"} 210-2644</p>
                  </div>
                </>
              )
            }
            <div className={styles.rowBox}>
              <p className={`${styles.row} textSub`}>본 홈페이지는 게시된 이메일 주소가 자동 수집되는 것을 거부하며 이를 위반시 정보통신망법에 의해 처벌됨을 유념하여 주시기 바랍니다.</p>
            </div>
            <div className={styles.rowBox}>
              <p className={`${styles.row} textSub`}>Copyright 2019 NGII All Rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}