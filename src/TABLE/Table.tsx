// npm i react-table-6 --save
import React, { Component } from "react";
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css";

class App extends Component {
    render() {
        const tableData = [
            {
                name: "CISC 108", 
                title: "Introduction to Computer Science I",
                term: "Fall and Spring",
                language: "Python",
            },
            {
                name: "CISC 181",
                title: "Introduction to Computer Science II",
                term: "Fall and Spring",
                language: "JAVA",
            },
            {
                name: "CISC 210",
                title: "Introduction to Systems Programming",
                term: "Fall and Spring",
                language: "C",
            },
            {
                name: "CISC 220",
                title: "Data Structures",
                department: "Program",
                term: "Fall and Spring",
                language: "C++",
            },
            {
                name: "CISC 260",
                title: "Machine Org. & Assembly Language",
                term: "Fall and Spring",
                language: "ARM",
            },
            {
                name: "CISC 275",
                title: "Introduction to Software Engineering",
                term: "Fall and Spring",
                language: "JavaScript",
            },]; 
        const columns = [{
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "Title",
            accessor: "title",
        },
        {
            Header: "Offer Term",
            accessor: "term",
        },
        {
            Header: "Language",
            accessor: "language",
        },];
        return (
            <div>
                <ReactTable
                    data={tableData}
                    columns={columns}
                    defaultPageSize={20}
                />
            </div>
        );
        
    }
} export default App;