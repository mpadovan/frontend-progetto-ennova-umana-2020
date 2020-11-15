import '../css/App.css';
import React from 'react';

export default class Search extends React.PureComponent {
    render() {
        return (
            <div className="App">

                <form className="form">
                    <input type="text" name="search" placeholder="Search..." />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>


                <h3><center className="title">  Search: </center></h3>

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
                </table> */}

            </div>
        )
    };
}