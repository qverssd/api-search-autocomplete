export default function Suggetions({
    data, handleClick }) {
        return (
            <ul>
                {data && data.length ? data.map((item, index) => (
                    <li onClick = {handleClick} key = {index}>
                        {item}
                    </li>
                ))
            : null }        
            </ul>
        );
    }