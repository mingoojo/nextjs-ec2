import styles from "./css/main.module.css"

export default function Home() {
  return (
    <div className='mainContents'>
      <div className={styles.header}>
        <h1 className={styles.title}>
          SSR2OSR
        </h1>
        <p className={`${styles.description} textSub`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ex amet ab in, nulla totam rem magnam doloribus porro nostrum officiis odio, alias nisi modi adipisci laudantium aspernatur recusandae neque? Pariatur temporibus officiis ab deleniti culpa hic soluta tempora excepturi consequuntur numquam? Sapiente impedit recusandae laborum fuga facilis molestias tenetur?
        </p>
      </div>
      <div className='card'>
        <div style={{ minHeight: "80vh" }}>
          <h4>description</h4>
        </div>
      </div>
    </div>
  )
}
