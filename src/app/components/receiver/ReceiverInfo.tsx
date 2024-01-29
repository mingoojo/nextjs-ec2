import styles from "../../css/receiverInfo.module.css"

type ReceiverInfoProps = {
  information:{
    address: string,
    ECEF: {
      BaseAPR_X : number,
      BaseAPR_Y:number,
      BaseAPR_Z:number
    },
    SiteID:string,
    ReceiverID:string,
    ReceiverIGSName:string,
    ReceiverSerialNumber: string,
    ReceiverFirmwareVersion: string,
    AntennaName: string,
    AntennaNumber: string,
  }
}


export default function ReceiverInfo({ information }:ReceiverInfoProps) {
  return (
    <div className={styles.infoBox}>
      <div className={styles.infoBoxS}>
        <h3 className={styles.title}>
          일반
        </h3>
        <div>
          <p className={styles.item}>ID : {information.SiteID}</p>
          <p className={styles.item}>주소 : {information.address}</p>
        </div>
      </div>
      <div className={styles.infoBoxS}>
        <h3 className={styles.title}>
          수신기 정보
        </h3>
        <div>
          <p className={styles.item}>수신기ID : {information.ReceiverID}</p>
          <p className={styles.item}>IGSName : {information.ReceiverIGSName}</p>
          <p className={styles.item}>시리얼넘버 : {information.ReceiverSerialNumber}</p>
          <p className={styles.item}>펌웨어 버전 : {information.ReceiverFirmwareVersion}</p>
        </div>
      </div>
      <div className={styles.infoBoxS}>
        <h3 className={styles.title}>
          안테나 정보
        </h3>
        <div>
          <p className={styles.item}>이름 : {information.AntennaName}</p>
          <p className={styles.item}>안테나번호 : {information.AntennaNumber}</p>
        </div>
      </div>
    </div>
  )
}