import React from "react";
import { Dropdown } from "semantic-ui-react";

const cityOptions = [
    {
        id: 1,
        text: "Pune",
        value: 1
    }, {
        id: 2,
        text: "Mumbai",
        value: 2
    }, {
        id: 3,
        text: "Aurangabad",
        value: 3
    }
];

const CityDropdown = (props) => <Dropdown placeholder='City' options={cityOptions} {...props} />;

export default CityDropdown;