import TestStyles from './TestFunction.module.css'


export default function TestFunctionComp() {
    return(<div style={
        {
            '--backgroundColor':'red',
            '--borderColor':'green'
        }
        }>
        <div className={`${TestStyles.child}`}></div>
        <div className={`${TestStyles.child}`}></div>
        <div className={`${TestStyles.child}`}></div>
        <div className={`${TestStyles.child}`}></div>
    </div>)
}