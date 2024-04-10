const Turno = ({date, time, userId}) => {
    return(
        <div>
            <p>{date}</p>
            <p>{time}</p>
            <p>{userId}</p>
        </div>
    );
}

export default Turno;