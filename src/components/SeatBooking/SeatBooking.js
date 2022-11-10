import './SeatBooking.scss';
export default function SeatBooking() {

    // $('.cinema-seats .seat').on('click', function() {
    //     $(this).toggleClass('active');
    //   });

    document.getElementsByClassName("seat").onclick = function (e) {
        console.log(e);
        myFunction()
    };

    function myFunction(value) {
        console.log(value);
        //   document.getElementById("demo").innerHTML = document.getElementById("demo2").innerHTML.className;
    }

    let state = {
        active: false,
    }
    function toggleClass(e) {
        console.log(e.target.className);
        console.log(document.getElementsByClassName('b1'));
        // document.getElementsByClassName('b1').style.color = 'green';
        document.getElementById('b1').className = 'booked';
        console.log(state.active)
        state = ({
            active: !state.active,
        })
    }

    let seats = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    let c =1;
    let seat = 'seat';
    return (
        <>
            <div className='screen-1'> screen</div>
            <div className="theatre">


                <div className="cinema-seats left">
                    <div className="cinema-row row-1">
                        {seats.map((answer, i) => {
                            if (answer != '')
                                return (<div className='seat' id={`${answer}${c}`} onClick={toggleClass.bind(this)}>{answer}{c}</div>)
                        })}

                        {/* <div className="seat" onClick={toggleClass.bind(this)}>ddd</div>
                        <div className="seat">s2</div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div> */}
                    </div>

                    <div className="cinema-row row-2">
                        <div className="seat booked"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>

                    <div className="cinema-row row-3">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>

                    <div className="cinema-row row-4">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>

                    <div className="cinema-row row-5">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>

                    <div className="cinema-row row-6">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>

                    <div className="cinema-row row-7">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>
                </div>


                <div className="cinema-seats right">
                    <div className="cinema-row row-1">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>

                    <div className="cinema-row row-2">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>

                    <div className="cinema-row row-3">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>

                    <div className="cinema-row row-4">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>

                    <div className="cinema-row row-5">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>

                    <div className="cinema-row row-6">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>

                    <div className="cinema-row row-7">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>
                </div>

            </div>
        </>
    );
}