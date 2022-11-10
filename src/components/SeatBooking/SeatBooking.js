import './SeatBooking.scss';

import { useState } from 'react';
import { Summary } from '../Summary/Summary';

function BookSeats(seatNumbers, setSeastss, setSelectedSeats) {

    console.log('f', seatNumbers);
    setSeastss(seatNumbers);
    setSelectedSeats(true);

}

export default function SeatBooking() {

    const [seatss, setSeastss] = useState([]);
    const [isSeatsSelected, setSelectedSeats] = useState(false);
    let seatNumbers = [];

    let state = {
        active: false,
    }

    function toggleClass(e) {
        // setSeatss.append(e.target.id);
        console.log(e.target.id);
        if (seatNumbers.includes(e.target.id)) {
            seatNumbers.pop(e.target.id);
        } else {
            seatNumbers.push(e.target.id);
        }

        console.log(seatNumbers)

        document.getElementById(e.target.id).className = document.getElementById(e.target.id).className + ' booked';
        console.log(state.active)
        state = ({
            active: !state.active,
        })
    }

    let seats = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    let c = 0;
    return (
        <>
            {!isSeatsSelected ?
                <div className='hall'>
                    <div className='screen-1'> screen</div>
                    <div className="theatre">


                        <div className="cinema-seats left">
                            <div className="cinema-row row-1">
                                {c++}
                                {seats.map((answer, i) => {
                                    if (answer != '')
                                        return (<div className='seat' id={`${answer}${c}`} onClick={toggleClass.bind(this)}>{answer}{c}</div>)
                                })}

                            </div>

                            <div className="cinema-row row-2">
                                {c++}
                                {seats.map((answer, i) => {
                                    if (answer != '')
                                        return (<div className='seat' id={`${answer}${c}`} onClick={toggleClass.bind(this)}>{answer}{c}</div>)
                                })}
                            </div>

                            <div className="cinema-row row-3">
                                {c++}
                                {seats.map((answer, i) => {
                                    if (answer != '')
                                        return (<div className='seat' id={`${answer}${c}`} onClick={toggleClass.bind(this)}>{answer}{c}</div>)
                                })}
                            </div>

                            <div className="cinema-row row-4">
                                {c++}
                                {seats.map((answer, i) => {
                                    if (answer != '')
                                        return (<div className='seat' id={`${answer}${c}`} onClick={toggleClass.bind(this)}>{answer}{c}</div>)
                                })}
                            </div>

                            <div className="cinema-row row-5">
                                {c++}
                                {seats.map((answer, i) => {
                                    if (answer != '')
                                        return (<div className='seat' id={`${answer}${c}`} onClick={toggleClass.bind(this)}>{answer}{c}</div>)
                                })}
                            </div>

                            <div className="cinema-row row-6">
                                {c++}
                                {seats.map((answer, i) => {
                                    if (answer != '')
                                        return (<div className='seat' id={`${answer}${c}`} onClick={toggleClass.bind(this)}>{answer}{c}</div>)
                                })}
                            </div>

                            <div className="cinema-row row-7">
                                {c++}
                                {seats.map((answer, i) => {
                                    if (answer != '')
                                        return (<div className='seat' id={`${answer}${c}`} onClick={toggleClass.bind(this)}>{answer}{c}</div>)
                                })}
                            </div>
                        </div>


                        <div className="cinema-seats right">
                            <div className="cinema-row row-1">
                                {c++}
                                {seats.map((answer, i) => {
                                    if (answer != '')
                                        return (<div className='seat' id={`${answer}${c}`} onClick={toggleClass.bind(this)}>{answer}{c}</div>)
                                })}
                            </div>

                            <div className="cinema-row row-2">
                                {c++}
                                {seats.map((answer, i) => {
                                    if (answer != '')
                                        return (<div className='seat' id={`${answer}${c}`} onClick={toggleClass.bind(this)}>{answer}{c}</div>)
                                })}
                            </div>

                            <div className="cinema-row row-3">
                                {c++}
                                {seats.map((answer, i) => {
                                    if (answer != '')
                                        return (<div className='seat' id={`${answer}${c}`} onClick={toggleClass.bind(this)}>{answer}{c}</div>)
                                })}
                            </div>

                            <div className="cinema-row row-4">
                                {c++}
                                {seats.map((answer, i) => {
                                    if (answer != '')
                                        return (<div className='seat' id={`${answer}${c}`} onClick={toggleClass.bind(this)}>{answer}{c}</div>)
                                })}
                            </div>

                            <div className="cinema-row row-5">
                                {c++}
                                {seats.map((answer, i) => {
                                    if (answer != '')
                                        return (<div className='seat' id={`${answer}${c}`} onClick={toggleClass.bind(this)}>{answer}{c}</div>)
                                })}
                            </div>

                            <div className="cinema-row row-6">
                                {c++}
                                {seats.map((answer, i) => {
                                    if (answer != '')
                                        return (<div className='seat' id={`${answer}${c}`} onClick={toggleClass.bind(this)}>{answer}{c}</div>)
                                })}
                            </div>

                            <div className="cinema-row row-7">
                                {c++}
                                {seats.map((answer, i) => {
                                    if (answer != '')
                                        return (<div className='seat' id={`${answer}${c}`} onClick={toggleClass.bind(this)}>{answer}{c}</div>)
                                })}
                            </div>
                        </div>


                    </div>
                    <div>
                        <button onClick={() => BookSeats(seatNumbers, setSeastss, setSelectedSeats)}>Book</button>;
                    </div>
                </div>
                :
                <>
                <Summary seats={seatss}/>
                </>
            }
        </>
    );
}