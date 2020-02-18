import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Node = props => (
    <tr>
        <td>{props.node.host_identifier}    </td>
        <td>{props.node.host_details.osquery_info.build_platform}     </td>
        <td>{props.node.host_details.os_version.codename}           </td>
        <td>{props.node.host_details.system_info.uuid}               </td>
        <td>{props.node.host_details.system_info.cpu_brand}          </td>
        <td>{props.node.host_details.system_info.cpu_logical_cores}  </td>
        <td>{props.node.host_details.system_info.cpu_physical_cores} </td>
        <td>{props.node.host_details.system_info.cpu_type}           </td>
        <td>{props.node.host_details.system_info.hardware_model}     </td>
        <td>{props.node.host_details.system_info.hardware_vendor}    </td>
        <td>{props.node.host_details.system_info.hardware_serial}    </td>
        <td>{props.node.host_details.system_info.physical_memory}    </td>
        <td>
            <Link to={"/edit/"+props.node._id}>Edit</Link>
        </td>
    </tr>
)

export default class NodesList extends Component {

    constructor(props) {
        super(props);
        this.state = {nodes: []};
    }

    componentDidMount() {
        axios.get('https://localhost:4000/nodes/')
            .then(response => {
                this.setState({ nodes: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    nodeList() {
        return this.state.nodes.map(function(currentTodo, i){
            return <Node node={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div width="auto">
                <h3>Node List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Host Identifier</th>
                            <th>Build Platform</th>
                            <th>Codename</th>
                            <th>UUID</th>
                            <th>Brand</th>
                            <th>Logical Cores</th>
                            <th>Physical Cores</th>
                            <th>CPU Type</th>
                            <th>Hardware Model</th>
                            <th>Hardware Vendor</th>
                            <th>Hardware Serial</th>
                            <th>Physical Memory</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.nodeList() }
                    </tbody>
                </table>
            </div>
        )
    }
}