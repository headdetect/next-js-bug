import React from "react";
import Stats from "../[sport]/stats";

export default function FootballStats({ ...props }) {
    return (
        <Stats heading={'THIS IS FOOOTBALLLLL'} body={props.someGeneratedBody} {...props} />
    );
}

export function getServerSideProps() {
    return {
        props: { someGeneratedBody: 'Now this is a sport. A really sporty sport.' }
    }
}
