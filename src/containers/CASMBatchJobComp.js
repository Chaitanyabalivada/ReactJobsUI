import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';
import styles from './CASMBatchJobComp.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

import ReactTable from "react-table";

class CASMBatchJobComp extends React.Component {
    constructor() {
        super();
        this.state = {
            jobs: [],
            headers:['File Name','Status','Action','Feed Name','Seq No','Arrival Time','Start Time','Completion Time','Processed Record'],
            aimIDList: ['500003003','500003002','500003001'],
            aimID:'500003002',
            fromTime:'2018-08-08 12:00:00',
            toTime:'2018-08-08 12:00:00',
        };

    }
    componentDidMount() {
        var formDat ={aimID: this.state.aimID, fromTime: this.state.fromTime, toTime: this.state.toTime };
        fetch(`http://localhost:8080/jobs`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: "POST",
            body: JSON.stringify(formDat)})
           .then(result=>result.json())
      .then(jobs=>this.setState({jobs}))
    }
    fetchJobs() {
        
        var formDat ={aimID: this.state.aimID, fromTime: this.state.fromTime, toTime: this.state.toTime };
        fetch(`http://localhost:8080/jobs`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: "POST",
            body: JSON.stringify(formDat)})
           .then(result=>result.json())
      .then(jobs=>this.setState({jobs}))
      }
      refresh(job){
          
         fetch(`http://localhost:8080/job`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: "POST",
            body: JSON.stringify(job)})
           .then(result=>result.json())
           .then(function(newjob){
            
               job.fileName=newjob.fileName;
               job.status=newjob.status;
               job.feedName=newjob.feedName;
               job.seqNo=newjob.seqNo;
               job.arrivalTime=newjob.arrivalTime;
               job.startTime=newjob.startTime;
               job.completionTime=newjob.completionTime;
               job.processedRecord=newjob.processedRecord;
               
              
           });
          
    }
    updatejob = (text) =>{
alert(text);
    }

    renderJobs = (jobs) => {
        return jobs.map(job => {
          return <tr bgcolor="#cce6ff" >
          <td onChange={(e) =>this.updateJob(e.target.value)} >{job.fileName}</td>
          <td>{job.status}</td>
          <td >
              <a onClick={() => this.refresh(job)} href="#">
                <span class="glyphicon glyphicon-off"></span>
            </a>
            <p class="restart"> </p>
            </td>
          <td>{job.feedName}</td>
          <td>{job.seqNo}</td>
          <td>{job.arrivalTime}</td>
          <td>{job.startTime}</td>
          <td>{job.completionTime}</td>
          <td>{job.processedRecord}</td></tr>;
        });
      }
      renderTableHeaders = () => {
        
        return this.state.headers.map(header => {
          return <th >{header}</th>;
        });
      };
      renderAIMId = () => {
        
        return this.state.aimIDList.map(aimID => {
          return <option>{aimID}</option>;
        });
      };
      onAIMChange=(text)=>{
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        
        this.setState({ aimID: text });
      };
      onFromTimeChange=(text)=>{
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
      //  alert(text);
        this.setState({ fromTime: text });
      };
      onToTimeChange=(text)=>{
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        //alert(text);
        this.setState({ toTime: text });
      };
      renderForm=() =>{
        return <div class="panel-body">
        <div class='col-md-10' >
        
           <form class="form-inline">
           <div class="panel-body">
           <label for="inputAIMID" class="control-label">AIM ID &nbsp;</label> 
           <select  class="form-control" id="aimID" name="aimID" value={this.aimID} onChange={(e) =>this.onAIMChange(e.target.value)}> 
           {this.renderAIMId()}
           </select>
          
            <label class="control-label"> &nbsp;  &nbsp;File Arrival Date Range:  From &nbsp;</label>
            <input type="date" id="fromTime"  name="fromTime" value={this.fromTime} class="form-control" onChange={(e) =>this.onFromTimeChange(e.target.value)}/> 
             <label class="control-label">  &nbsp; &nbsp;To &nbsp; </label>
            <input type="date" class="form-control" value={this.toTime} id="toTime" onChange={(e) =>this.onToTimeChange(e.target.value)}/> 
            &nbsp; &nbsp;	  
           <input type="button" onClick={() => this.fetchJobs()} class="btn btn-primary" value="Go"/>
         </div>
           </form>
           
        </div>
        </div>;
              }
    renderBody=()=>{
        return  <div class="container">

            <div class="panel panel-primary">

                {this.renderForm()}
            </div>
            <div class="panel panel-primary">
                <div class="panel-body tablediv">

                    <table class="table" id="table">
                        <thead>
                            <tr >
                                {this.renderTableHeaders()}
                            </tr>
                        </thead>

                        <tbody id="tbody">

                            {this.renderJobs(this.state.jobs)}

                        </tbody>

                    </table>

                </div>
            </div>
        </div>;
    
    };
    render() {

        return (
            <div >
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
                <title>Batch Scheduler</title>
                <body>
               {this.renderBody()}
               </body>
            </div>
        );
    }
}

export default CASMBatchJobComp;