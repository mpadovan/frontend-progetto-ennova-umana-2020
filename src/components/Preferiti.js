import React from 'react';
import f1 from '../img/1.jpg'

export default class Preferiti extends React.PureComponent {
    render() {
        return (
            <div className="App">

                <h3><center className="title">  Favourites: </center></h3>

                {/* <table width="100%" border="0" align="center" >
                    <tr>
                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>

                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>



                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>
                    </tr>

                    <tr>
                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>

                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>



                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>
                    </tr>

                    <tr>
                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>

                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>



                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>
                    </tr>


                    <tr>
                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>

                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>



                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>
                    </tr>


                    <tr>
                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>

                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>



                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>
                    </tr>


                    <tr>
                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>

                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>



                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>
                    </tr>


                    <tr>
                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>

                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>



                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>
                    </tr>


                    <tr>
                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>

                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>



                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>
                    </tr>

                    <tr>
                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>

                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>



                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>


                        <td width="15%">
                            <img src={f1} alt="1" className="imgS" />
                        </td>
                    </tr>

                </table> */}
            </div>
        )
    };
}