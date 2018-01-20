class PageComponent extends React.Component {
    render() {
        return (
            <EmployeesTable/>
        );
    }
}

class EmployeesTableRow extends React.Component {
    render() {
        return (

//if(String(this.props.employee.active) == true){
            <tr>
                <td>{this.props.employee.id}</td>
                <td>{this.props.employee.first_name}</td>
                <td>{this.props.employee.last_name}</td>
                <td>{this.props.employee.title}</td>
                <td>{this.props.employee.email}</td>
                <td>{this.props.employee.gender}</td>
                <td bgcolor="green">{String(this.props.employee.active)}</td>
            </tr>
    //    }
/*else{
            <tr>
                <td>{this.props.employee.id}</td>
                <td>{this.props.employee.first_name}</td>
                <td>{this.props.employee.last_name}</td>
                <td>{this.props.employee.title}</td>
                <td>{this.props.employee.email}</td>
                <td>{this.props.employee.gender}</td>
                <td bgcolor="red">{String(this.props.employee.active)}</td>
            </tr>
}
       */ );
    }
}

class EmployeesTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
        this.loadData = this.loadData.bind(this);
    }

    render() {
        const rows = this.state.employees.map((employee, i) => {
                return <EmployeesTableRow employee={employee}/>
        });


        return (
            <div>
                <h1 align="center">ITMD - 565 - Project 2</h1>
                <h2 align="center">Vinod Thorat - vthorat1@hawk.iit.edu</h2>
                <LoadBtn clickHandler={this.loadData}/>
                <table id="resultTable" align="center">
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Title</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Active</th>
                    </tr>
                    <tbody id="tableBody">
                    {rows}
                    </tbody>
                </table>

            </div>

        );


    }


    componentDidMount() {
        this.loadData();
    }

    loadData() {
        var dataArray;
        var request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                dataArray = JSON.parse(request.responseText);
                this.setState({employees: dataArray});
                console.log(dataArray);
            }
        };
        request.open('GET', 'http://libertyville.rice.iit.edu/scripts/4565_lab3.php', true);
        request.send();
    }
}


class LoadBtn extends React.Component {
    render() {
        return (
            <button id="refreshBtn" onClick={this.props.clickHandler}>Load Data</button>
        );
    }
}

ReactDOM.render(<PageComponent/>, document.getElementById('root'));
