export default function Batata(props :{
    setVariavel: Function;
}) {
    return (
        <div>
            <input
                onChange={(e) => props.setVariavel(e.target.value)}
            />
        </div>
    )
}