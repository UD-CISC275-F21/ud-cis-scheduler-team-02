import React, { ChangeEvent, useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { CourseList, Course } from "../App";
interface SummaryProp {
    scheduler: { [x: string]: CourseList; };

}

const Summary = ({ scheduler }: SummaryProp): JSX.Element => {
    const [list, setList] = useState<CourseList[]>([]);
    const [filter, setFilter] = useState<string[]>([]);
    const [selected, setSelected] = useState<string[]>([]);

    useEffect(() => {
        setList(Object.entries(scheduler).map((item) => item[1]).filter((item) => item.name !== "Courses"));
        const f = Object.entries(scheduler).map((item) => item[0]).filter((item) => item !== "Courses");
        setFilter(f);
        setSelected(f);
    }, []);

    const filteredList = () => {
        return list.filter(item => selected.includes(item.name));

    };

    const onSelected = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let copy = [...selected];
        if (copy.includes(value)) {
            copy = copy.filter(i => i !== value);
        } else {
            copy.push(value);
        }
        setSelected(copy);
    };
    return <>
        <Container>
            <Row>
                {filter.map((item) => <Col md="3" key={item} ><div className="form-check">
                    <input className="form-check-input" id={item} value={item} checked={selected.includes(item)} onChange={onSelected} type="checkbox" />
                    <label className="form-check-label" htmlFor={item} >
                        {item}
                    </label>
                </div></Col>)}
            </Row>

            <Row>

                {filteredList().map((semester: CourseList) => <Col md="6" key={semester.name}>
                    {/* <h5>{semester.name}</h5> */}
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>
                                    {semester.name}
                                </th>
                                <th>

                                </th>
                                <th>

                                </th>

                            </tr>
                            <tr>
                                <th>
                                    CourseName
                                </th>
                                <th>
                                    Credit
                                </th>
                                <th>
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {semester.items.map((course: Course) => <tr key={course.CourseName}>
                                <td>
                                    {course.CourseName}
                                </td>
                                <td>
                                    {course.Credit}
                                </td>
                                <td>
                                    {course.Description}
                                </td>
                            </tr>)}

                        </tbody>
                        <tfoot>
                            <tr>
                                <th>
                                    Total
                                </th>
                                <th>
                                    {semester.items.map((course: Course) => course.Credit).reduce((a: number, b: number) => a + b, 0)}
                                </th>
                                <th>
                                </th>
                            </tr>
                        </tfoot>

                    </table></Col>)}
            </Row>
        </Container>
    </>;
};

export default Summary;