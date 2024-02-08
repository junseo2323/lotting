import styles from "@/styles/Button.module.scss"

export const Button = (props) => {
    return(
        <button className={styles.buttonstyle}>
            {props.children}
        </button>
    )
}

export const CheckButton = (props) => {
    const {name, value} = props;
    return(
        <input type="checkbox" className={styles.checkstyle} name={name} value={value} />
    )
}