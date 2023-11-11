import styles from './CSSVarTest.module.css'


export default function TestFunctionComp() {
    return(<div style={// This brace allows writing of js syntax within jsx
        {// This is a JS object that is being passed to the style attribute
            '--backgroundColor':'red',
            '--borderColor':'green'
        }
        }>
        <div className={`${styles.child}`}></div>
        <div className={`${styles.child}`}></div>
        <div className={`${styles.child}`}></div>
        <div className={`${styles.child}`}></div>
    </div>)
}