import React, {Component} from 'react';
import {List} from 'immutable';
import * as firebase from "firebase";

import Table from '../Table';
import Title from '../Title';
import Save from '../button/Save';


class Write extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            data: List([
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                ]
            )
        }
    }

    titleChange=(data)=>{
        this.setState({
            title: data
        });
    }
    tableChange = (data) => {
        this.setState({
            data: data
        });
    }

    render() {
        return (
            <section className="mandal-section">
                <div className="container">
                    <div className="border-bottom px-1 mb-30">
                        <Title title={this.state.title} titleChange={this.titleChange}> </Title>
                    </div>
                    <div className="mb-30">
                        <Table data={this.state.data} tableChange={this.tableChange}></Table>
                    </div>

                    <div className="text-center">
                        <Save title={this.state.title} data={this.state.data}></Save>
                    </div>

                </div>
            </section>
        );
    }
}

export default Write;